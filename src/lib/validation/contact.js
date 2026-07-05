/**
 * Single source of truth for contact-form validation rules, imported by both
 * the client component (src/routes/contact/+page.svelte) and the server
 * endpoint (src/routes/api/contact/+server.js) so the two can't silently
 * drift apart.
 */

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const CONTACT_LIMITS = {
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 200,
  MAX_EMAIL_LENGTH: 254,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 5000,
  MAX_PHONE_LENGTH: 40,
  MAX_COMPANY_LENGTH: 200
};

export const INQUIRY_TYPES = [
  'Residential Electrical',
  'Commercial Installations',
  'Energy Efficiency Upgrades',
  'Code Compliance & Permitting',
  'Other'
];

/**
 * @param {{ name?: string, email?: string, message?: string, phone?: string, company?: string, inquiryType?: string }} data
 * @returns {{ name?: string, email?: string, message?: string, phone?: string, company?: string, inquiryType?: string }}
 */
export function validateContact(data) {
  const errors = {};
  const name = (data?.name ?? '').trim();
  const email = (data?.email ?? '').trim();
  const message = (data?.message ?? '').trim();
  const phone = (data?.phone ?? '').trim();
  const company = (data?.company ?? '').trim();
  const inquiryType = (data?.inquiryType ?? '').trim();

  if (name.length < CONTACT_LIMITS.MIN_NAME_LENGTH) {
    errors.name = 'Please enter your full name.';
  } else if (name.length > CONTACT_LIMITS.MAX_NAME_LENGTH) {
    errors.name = 'Name is too long.';
  }

  if (!EMAIL_RE.test(email)) {
    errors.email = 'Please enter a valid email address.';
  } else if (email.length > CONTACT_LIMITS.MAX_EMAIL_LENGTH) {
    errors.email = 'Email is too long.';
  }

  if (message.length < CONTACT_LIMITS.MIN_MESSAGE_LENGTH) {
    errors.message = 'Please describe your project (at least 10 characters).';
  } else if (message.length > CONTACT_LIMITS.MAX_MESSAGE_LENGTH) {
    errors.message = 'Message is too long.';
  }

  if (phone.length > CONTACT_LIMITS.MAX_PHONE_LENGTH) {
    errors.phone = 'Phone number is too long.';
  }

  if (company.length > CONTACT_LIMITS.MAX_COMPANY_LENGTH) {
    errors.company = 'Company name is too long.';
  }

  if (inquiryType && !INQUIRY_TYPES.includes(inquiryType)) {
    errors.inquiryType = 'Invalid inquiry type.';
  }

  return errors;
}
