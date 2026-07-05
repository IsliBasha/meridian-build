import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** @param {{ name?: string, email?: string, message?: string }} body */
function validate(body) {
	const errors = {};
	if (!body?.name || body.name.trim().length < 2) {
		errors.name = 'Name is required.';
	}
	if (!body?.email || !EMAIL_RE.test(body.email.trim())) {
		errors.email = 'A valid email is required.';
	}
	if (!body?.message || body.message.trim().length < 10) {
		errors.message = 'Message must be at least 10 characters.';
	}
	return errors;
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	let body;
	try {
		body = await request.json();
	} catch {
		return json({ ok: false, error: 'Invalid request.' }, { status: 400 });
	}

	const errors = validate(body);
	if (Object.keys(errors).length) {
		return json({ ok: false, error: 'Please fix the form errors and try again.' }, { status: 422 });
	}

	const accessKey = env.WEB3FORMS_KEY;

	if (!accessKey) {
		// Dev mode: no key configured — log and return success so the UI can be tested
		console.warn('[contact] WEB3FORMS_KEY not set — skipping external submission.');
		return json({ ok: true });
	}

	try {
		const res = await fetch(WEB3FORMS_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
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
