import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { dev } from '$app/environment';
import { validateContact } from '$lib/validation/contact.js';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const WEB3FORMS_TIMEOUT_MS = 8000;

// Basic per-IP rate limiting. In-memory only — resets on redeploy/cold start
// and isn't shared across multiple server instances. Good enough to blunt
// casual scripted abuse against a single small-business deployment; swap for
// a shared store (e.g. Redis, platform-level rate limiting) if this ever
// runs behind multiple instances.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
/** @type {Map<string, number[]>} */
const requestLog = new Map();

/** @param {string} ip */
function isRateLimited(ip) {
	const now = Date.now();
	const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
	timestamps.push(now);
	requestLog.set(ip, timestamps);
	return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, getClientAddress }) {
	if (isRateLimited(getClientAddress())) {
		return json({ ok: false, error: 'Too many submissions. Please try again in a minute.' }, { status: 429 });
	}

	let body;
	try {
		body = await request.json();
	} catch {
		return json({ ok: false, error: 'Invalid request.' }, { status: 400 });
	}

	// Honeypot: a hidden field real users never fill in. Bots that fill every
	// field trip this — silently report success without forwarding anywhere,
	// so scripted submissions get no signal that they were caught.
	if (body?.website) {
		return json({ ok: true });
	}

	const errors = validateContact(body);
	if (Object.keys(errors).length) {
		return json({ ok: false, error: 'Please fix the form errors and try again.' }, { status: 422 });
	}

	const accessKey = env.WEB3FORMS_KEY;

	if (!accessKey) {
		if (dev) {
			console.warn('[contact] WEB3FORMS_KEY not set — skipping external submission.');
			return json({ ok: true });
		}
		console.error('[contact] WEB3FORMS_KEY missing in production.');
		return json({ ok: false, error: 'Submission is temporarily unavailable. Please call us directly.' }, { status: 503 });
	}

	try {
		const res = await fetch(WEB3FORMS_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			signal: AbortSignal.timeout(WEB3FORMS_TIMEOUT_MS),
			body: JSON.stringify({
				access_key: accessKey,
				subject: `New enquiry — ${body.name} (${body.inquiryType || 'General'})`,
				name: body.name,
				email: body.email,
				phone: body.phone || '',
				company: body.company || '',
				inquiry_type: body.inquiryType || '',
				message: body.message,
				botcheck: ''
			})
		});

		if (!res.ok) {
			return json({ ok: false, error: 'Submission failed. Please try again.' }, { status: 502 });
		}

		const data = await res.json();
		if (!data.success) {
			return json({ ok: false, error: 'Submission failed. Please try again.' }, { status: 502 });
		}

		return json({ ok: true });
	} catch {
		return json({ ok: false, error: 'Network error. Please try again later.' }, { status: 503 });
	}
}
