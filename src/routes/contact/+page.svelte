<script>
  import { company } from '$lib/data/placeholder.js';

  let name = '';
  let companyName = '';
  let email = '';
  let phone = '';
  let inquiryType = '';
  let message = '';
  let submitted = false;
  let submitting = false;
  let formError = '';

  let nameTouched = false;
  let emailTouched = false;
  let messageTouched = false;

  const inquiryTypes = [
    'Residential Electrical',
    'Commercial Installations',
    'Energy Efficiency Upgrades',
    'Code Compliance & Permitting',
    'Other'
  ];

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Errors recompute reactively — only truthy after field is touched
  $: nameError    = nameTouched    && name.trim().length < 2      ? 'Please enter your full name.'                             : '';
  $: emailError   = emailTouched   && !EMAIL_RE.test(email.trim()) ? 'Please enter a valid email address.'                   : '';
  $: messageError = messageTouched && message.trim().length < 10   ? 'Please describe your project (at least 10 characters).' : '';

  function isFormValid() {
    return name.trim().length >= 2
      && EMAIL_RE.test(email.trim())
      && message.trim().length >= 10;
  }

  /** @param {SubmitEvent} e */
  async function handleSubmit(e) {
    e.preventDefault();
    // Touch all required fields to surface any hidden errors
    nameTouched = true;
    emailTouched = true;
    messageTouched = true;
    if (!isFormValid()) return;

    submitting = true;
    formError = '';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, company: companyName, email, phone, inquiryType, message })
      });
      const data = await res.json();
      if (data.ok) {
        submitted = true;
      } else {
        formError = data.error || 'Something went wrong. Please try again.';
      }
    } catch {
      formError = 'Connection error. Please check your network and try again.';
    } finally {
      submitting = false;
    }
  }
</script>

<svelte:head>
  <title>Contact — Eco Volt Electrical</title>
  <meta name="description" content="Contact Eco Volt Electrical for residential and commercial electrical work in New York City." />
</svelte:head>

<div class="contact-page">
  <div class="container contact-layout">

    <!-- Left: Info -->
    <aside class="contact-info">
      <span class="section-counter">START A PROJECT</span>
      <h1 class="contact-title">Let's discuss<br />your project.</h1>
      <p class="contact-sub">
        We respond within one business day. For urgent site inquiries, call directly.
      </p>

      <dl class="contact-details">
        <div class="contact-detail">
          <dt>Phone</dt>
          <span class="contact-detail__dots" aria-hidden="true"></span>
          <dd><a href="tel:{company.phone}">{company.phone}</a></dd>
        </div>
        <div class="contact-detail">
          <dt>Email</dt>
          <span class="contact-detail__dots" aria-hidden="true"></span>
          <dd><a href="mailto:{company.email}">{company.email}</a></dd>
        </div>
        <div class="contact-detail">
          <dt>Service Area</dt>
          <span class="contact-detail__dots" aria-hidden="true"></span>
          <dd>{company.city}</dd>
        </div>
      </dl>

      <p class="licensing-note">{company.partnership}</p>
    </aside>

    <!-- Right: Form -->
    <div class="contact-form-wrap">
      {#if submitted}
        <div class="form-success" role="alert">
          <span class="section-counter form-success__counter">MESSAGE RECEIVED</span>
          <h2 class="success-heading">We've got it.</h2>
          <p class="success-body">
            We'll review your inquiry and respond within one business day.
          </p>
        </div>
      {:else}
        <form
          class="contact-form"
          on:submit={handleSubmit}
          aria-label="Contact form"
          novalidate
        >
          <div class="form-row form-row--two">
            <div class="form-field" class:form-field--error={nameTouched && nameError}>
              <label for="name">
                Full Name <span class="req" aria-hidden="true">*</span>
              </label>
              <input
                id="name" type="text" bind:value={name}
                placeholder="Jane Doe"
                autocomplete="name"
                aria-required="true"
                aria-invalid={nameTouched && !!nameError}
                aria-describedby={nameTouched && nameError ? 'name-error' : undefined}
                on:blur={() => (nameTouched = true)}
              />
              {#if nameTouched && nameError}
                <p class="field-error" id="name-error" role="alert">{nameError}</p>
              {/if}
            </div>

            <div class="form-field">
              <label for="company">Company (optional)</label>
              <input
                id="company" type="text" bind:value={companyName}
                placeholder="Property management, GC, etc."
                autocomplete="organization"
              />
            </div>
          </div>

          <div class="form-row form-row--two">
            <div class="form-field" class:form-field--error={emailTouched && emailError}>
              <label for="email">
                Email <span class="req" aria-hidden="true">*</span>
              </label>
              <input
                id="email" type="email" bind:value={email}
                placeholder="you@email.com"
                autocomplete="email"
                aria-required="true"
                aria-invalid={emailTouched && !!emailError}
                aria-describedby={emailTouched && emailError ? 'email-error' : undefined}
                on:blur={() => (emailTouched = true)}
              />
              {#if emailTouched && emailError}
                <p class="field-error" id="email-error" role="alert">{emailError}</p>
              {/if}
            </div>

            <div class="form-field">
              <label for="phone">Phone</label>
              <input
                id="phone" type="tel" bind:value={phone}
                placeholder="(929) 000-0000"
                autocomplete="tel"
              />
            </div>
          </div>

          <div class="form-field">
            <label for="inquiry">Type of Inquiry</label>
            <select id="inquiry" bind:value={inquiryType}>
              <option value="" disabled selected>Select a service</option>
              {#each inquiryTypes as type}
                <option value={type}>{type}</option>
              {/each}
            </select>
          </div>

          <div class="form-field" class:form-field--error={messageTouched && messageError}>
            <label for="message">
              Project Details <span class="req" aria-hidden="true">*</span>
            </label>
            <textarea
              id="message" bind:value={message}
              rows="5"
              placeholder="Describe the project: location, scope, timeline, and any relevant constraints."
              aria-required="true"
              aria-invalid={messageTouched && !!messageError}
              aria-describedby={messageTouched && messageError ? 'message-error' : undefined}
              on:blur={() => (messageTouched = true)}
            ></textarea>
            {#if messageTouched && messageError}
              <p class="field-error" id="message-error" role="alert">{messageError}</p>
            {/if}
          </div>

          {#if formError}
            <p class="form-error" role="alert">{formError}</p>
          {/if}

          <button type="submit" class="btn btn--primary form-submit" disabled={submitting}>
            {#if submitting}
              <span class="spinner" aria-hidden="true"></span>
            {/if}
            {submitting ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      {/if}
    </div>

  </div>
</div>

<style>
  .contact-page {
    padding-top: calc(var(--nav-h) + var(--sp-12));
    padding-bottom: var(--sp-32);
    min-height: calc(100vh - var(--nav-h));
  }

  .contact-layout {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: var(--sp-20);
    align-items: start;
  }

  .contact-title {
    font-size: var(--text-2xl);
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1.05;
    margin-top: var(--sp-4);
    margin-bottom: var(--sp-5);
  }

  .contact-sub {
    font-size: var(--text-base);
    color: var(--color-secondary);
    max-width: 38ch;
    line-height: 1.65;
    margin-bottom: var(--sp-10);
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: var(--sp-5);
  }

  .contact-detail {
    display: flex;
    align-items: baseline;
    gap: var(--sp-3);
  }

  .contact-detail dt {
    font-size: var(--text-xs);
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-secondary);
    white-space: nowrap;
  }

  .contact-detail__dots {
    flex: 1;
    border-bottom: 1.5px dotted var(--color-secondary);
  }

  .contact-detail dd {
    font-size: var(--text-sm);
    color: var(--color-text);
    line-height: 1.5;
    white-space: nowrap;
  }

  .contact-detail a {
    color: var(--color-accent);
    transition: opacity var(--dur-fast) ease;
  }

  .contact-detail a:hover { opacity: 0.7; }

  .licensing-note {
    font-size: var(--text-xs);
    line-height: 1.6;
    color: var(--color-secondary);
    border-left: 2px solid var(--color-ink);
    padding-left: var(--sp-4);
    margin-top: var(--sp-6);
    max-width: 34ch;
  }

  /* ── Form ── */
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--sp-5);
  }

  .form-row--two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--sp-5);
  }

  .form-field {
    display: flex;
    flex-direction: column;
    gap: var(--sp-2);
  }

  .form-field label {
    font-size: var(--text-xs);
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-secondary);
  }

  .req {
    color: oklch(52% 0.18 25);
    font-style: normal;
  }

  .form-field input,
  .form-field select,
  .form-field textarea {
    font-family: var(--font-sans);
    font-size: var(--text-sm);
    color: var(--color-text);
    background: var(--color-surface);
    border: 1.5px solid var(--color-ink);
    border-radius: 0;
    padding: var(--sp-3) var(--sp-4);
    width: 100%;
    appearance: none;
    transition: box-shadow var(--dur-fast) var(--ease-out-quint);
    outline: none;
    line-height: 1.5;
  }

  .form-field input::placeholder,
  .form-field textarea::placeholder {
    color: var(--color-secondary);
    opacity: 0.6;
  }

  .form-field input:focus,
  .form-field select:focus,
  .form-field textarea:focus {
    box-shadow: 3px 3px 0 var(--color-accent);
  }

  /* Validation error state */
  .form-field--error input,
  .form-field--error textarea {
    border-color: oklch(55% 0.2 25);
  }

  .field-error {
    font-size: var(--text-xs);
    color: oklch(50% 0.18 25);
    line-height: 1.4;
  }

  .form-error {
    font-size: var(--text-sm);
    color: oklch(50% 0.18 25);
    padding: var(--sp-3) var(--sp-4);
    border: 1.5px solid oklch(55% 0.2 25);
  }

  .form-field textarea { resize: vertical; min-height: 120px; }

  /* ── Submit button ── */
  .form-submit {
    align-self: flex-start;
    margin-top: var(--sp-2);
    cursor: pointer;
  }

  .form-submit:disabled { opacity: 0.55; cursor: not-allowed; }

  /* CSS-only spinner — app.css reduces motion globally */
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .spinner {
    display: inline-block;
    width: 13px;
    height: 13px;
    border: 2px solid rgba(255, 255, 255, 0.25);
    border-top-color: var(--color-surface);
    border-radius: 50%;
    animation: spin 0.65s linear infinite;
    flex-shrink: 0;
    margin-right: var(--sp-2);
  }

  /* ── Success state ── */
  .form-success {
    padding: var(--sp-10);
    background: var(--color-ink);
    color: var(--color-surface);
  }

  .form-success__counter {
    color: oklch(60% 0.006 80);
    display: block;
    margin-bottom: var(--sp-4);
  }

  .success-heading {
    font-size: var(--text-xl);
    font-weight: 700;
    margin-bottom: var(--sp-3);
  }

  .success-body {
    font-size: var(--text-base);
    color: oklch(70% 0.006 80);
  }

  @media (max-width: 900px) {
    .contact-layout { grid-template-columns: 1fr; }
    .form-row--two { grid-template-columns: 1fr; }
  }
</style>
