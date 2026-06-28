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

  const inquiryTypes = [
    'Commercial Construction',
    'Electrical Installation',
    'Fit-Out & Renovation',
    'Project Management',
    'Other'
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    submitting = true;
    // Placeholder: replace with real form submission
    await new Promise(r => setTimeout(r, 800));
    submitted = true;
    submitting = false;
  }
</script>

<svelte:head>
  <title>Contact — Meridian Build</title>
  <meta name="description" content="Contact Meridian Build for commercial construction and electrical projects in New York City." />
</svelte:head>

<div class="contact-page">
  <div class="container contact-layout">

    <!-- Left: Info -->
    <aside class="contact-info">
      <p class="label label--accent" style="margin-bottom: var(--sp-5);">Contact</p>
      <h1 class="contact-title">Let's discuss<br />your project.</h1>
      <p class="contact-sub">
        We respond within one business day. For urgent site inquiries, call directly.
      </p>

      <dl class="contact-details">
        <div class="contact-detail">
          <dt class="label">Phone</dt>
          <dd><a href="tel:{company.phone}">{company.phone}</a></dd>
        </div>
        <div class="contact-detail">
          <dt class="label">Email</dt>
          <dd><a href="mailto:{company.email}">{company.email}</a></dd>
        </div>
        <div class="contact-detail">
          <dt class="label">Address</dt>
          <dd>{company.address}</dd>
        </div>
        <div class="contact-detail">
          <dt class="label">License</dt>
          <dd>{company.license}</dd>
        </div>
      </dl>
    </aside>

    <!-- Right: Form -->
    <div class="contact-form-wrap">
      {#if submitted}
        <div class="form-success" role="alert">
          <h2 class="success-heading">Message received.</h2>
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
            <div class="form-field">
              <label for="name">Full Name</label>
              <input
                id="name" type="text" bind:value={name}
                placeholder="Marco Castellano" required
                autocomplete="name"
              />
            </div>
            <div class="form-field">
              <label for="company">Company</label>
              <input
                id="company" type="text" bind:value={companyName}
                placeholder="Related Companies"
                autocomplete="organization"
              />
            </div>
          </div>

          <div class="form-row form-row--two">
            <div class="form-field">
              <label for="email">Email</label>
              <input
                id="email" type="email" bind:value={email}
                placeholder="m.castellano@company.com" required
                autocomplete="email"
              />
            </div>
            <div class="form-field">
              <label for="phone">Phone</label>
              <input
                id="phone" type="tel" bind:value={phone}
                placeholder="+1 (212) 555-0100"
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

          <div class="form-field">
            <label for="message">Project Details</label>
            <textarea
              id="message" bind:value={message}
              rows="5"
              placeholder="Describe the project: location, scope, timeline, and any relevant constraints."
              required
            ></textarea>
          </div>

          <button type="submit" class="form-submit" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      {/if}
    </div>

  </div>
</div>

<style>
  .contact-page {
    padding-top: var(--sp-24);
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
    margin-top: var(--sp-3);
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
    gap: var(--sp-6);
  }

  .contact-detail {
    display: flex;
    flex-direction: column;
    gap: var(--sp-1);
  }

  .contact-detail dd {
    font-size: var(--text-sm);
    color: var(--color-text);
    line-height: 1.5;
  }

  .contact-detail a {
    color: var(--color-accent);
    transition: opacity var(--dur-fast) ease;
  }

  .contact-detail a:hover { opacity: 0.7; }

  /* Form */
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

  .form-field input,
  .form-field select,
  .form-field textarea {
    font-family: var(--font-sans);
    font-size: var(--text-sm);
    color: var(--color-text);
    background: var(--color-surface);
    border: 1px solid var(--color-line);
    padding: var(--sp-3) var(--sp-4);
    width: 100%;
    appearance: none;
    transition: border-color var(--dur-fast) var(--ease-out-quint);
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
    border-color: var(--color-accent);
  }

  .form-field textarea { resize: vertical; min-height: 120px; }

  .form-submit {
    display: inline-flex;
    align-self: flex-start;
    font-size: var(--text-sm);
    font-weight: 500;
    padding: var(--sp-3) var(--sp-8);
    background: var(--color-text);
    color: var(--color-surface);
    border: 1px solid var(--color-text);
    letter-spacing: 0.02em;
    transition:
      background var(--dur-fast) var(--ease-out-quint),
      border-color var(--dur-fast) var(--ease-out-quint);
    cursor: pointer;
    margin-top: var(--sp-2);
  }

  .form-submit:hover:not(:disabled) {
    background: var(--color-accent);
    border-color: var(--color-accent);
  }

  .form-submit:disabled { opacity: 0.5; cursor: not-allowed; }

  /* Success */
  .form-success {
    padding: var(--sp-10);
    border: 1px solid var(--color-line);
    background: var(--color-surface-2);
  }

  .success-heading {
    font-size: var(--text-xl);
    font-weight: 600;
    margin-bottom: var(--sp-3);
  }

  .success-body {
    font-size: var(--text-base);
    color: var(--color-secondary);
  }

  @media (max-width: 900px) {
    .contact-layout { grid-template-columns: 1fr; }
    .form-row--two { grid-template-columns: 1fr; }
  }
</style>
