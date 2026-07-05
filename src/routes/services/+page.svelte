<script>
  import { services, company } from '$lib/data/placeholder.js';
  import { reveal } from '$lib/actions/reveal.js';

  /** @param {number} i */
  function blockClass(i) {
    if (i === services.length - 1) return 'section--dark';
    return i % 2 === 1 ? 'section--alt' : '';
  }
</script>

<svelte:head>
  <title>Services — Eco Volt Electrical</title>
  <meta name="description" content="Residential and commercial electrical installations, energy efficiency upgrades, and NYC DOB code compliance." />
</svelte:head>

<div class="page-header section">
  <div class="container">
    <span class="section-counter">SCOPE OF WORK</span>
    <h1 class="page-title">Four categories. Every job filed to code.</h1>
    <p class="page-intro">
      Electrical work from a single outlet to a full commercial buildout — always in
      partnership with a Licensed Master Electrician for permits and final sign-off.
    </p>
  </div>
</div>

{#each services as service, i}
  <section class="service-block {blockClass(i)}" aria-labelledby="service-{service.id}" use:reveal>
    <div class="container service-block__inner">
      <span class="service-block__number" aria-hidden="true">{service.number}</span>
      <div class="service-block__body">
        <h2 class="service-block__name" id="service-{service.id}">{service.name}</h2>
        <p class="service-block__summary">{service.summary}</p>
        <ul class="service-block__points" role="list">
          {#each service.points as point}
            <li>{point}</li>
          {/each}
        </ul>
      </div>
    </div>
  </section>
{/each}

<section class="section section--dark cta-section" aria-label="Contact call to action">
  <div class="container cta-inner">
    <div>
      <h2 class="cta-heading">Tell us the scope. We'll tell you what it takes.</h2>
      <p class="cta-sub">{company.phone} or {company.email}.</p>
    </div>
    <a href="/contact" class="btn btn--surface">SCHEDULE A CALL →</a>
  </div>
</section>

<style>
  .page-header {
    padding-top: calc(var(--nav-h) + var(--sp-12));
    padding-bottom: var(--sp-16);
  }

  .page-title {
    font-size: var(--text-2xl);
    font-weight: 700;
    letter-spacing: -0.04em;
    margin-top: var(--sp-4);
    margin-bottom: var(--sp-5);
    max-width: 16ch;
    line-height: 1.05;
  }

  .page-intro {
    font-size: var(--text-lg);
    font-weight: 300;
    color: var(--color-secondary);
    max-width: 52ch;
    line-height: 1.6;
  }

  .service-block {
    border-top: 2px solid var(--color-ink);
    padding-block: var(--sp-32);
  }

  .service-block__inner {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: var(--sp-16);
    align-items: start;
  }

  .service-block__number {
    font-size: var(--text-3xl);
    font-weight: 700;
    letter-spacing: -0.05em;
    line-height: 1;
    color: var(--color-ink);
    opacity: 0.12;
  }

  :global(.section--dark) .service-block__number {
    color: var(--color-surface);
  }

  .service-block__name {
    font-size: var(--text-xl);
    font-weight: 700;
    letter-spacing: -0.025em;
    line-height: 1.1;
    margin-bottom: var(--sp-4);
  }

  .service-block__summary {
    font-size: var(--text-base);
    color: var(--color-secondary);
    max-width: 55ch;
    line-height: 1.7;
    margin-bottom: var(--sp-8);
  }

  :global(.section--dark) .service-block__summary {
    color: oklch(65% 0.006 80);
  }

  .service-block__points {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    list-style: none;
    border-top: 1px solid var(--color-surface-3);
    max-width: 68ch;
  }

  :global(.section--dark) .service-block__points {
    border-top-color: oklch(30% 0.006 80);
  }

  .service-block__points li {
    font-size: var(--text-sm);
    font-weight: 500;
    padding: var(--sp-4) var(--sp-4) var(--sp-4) 0;
    border-bottom: 1px solid var(--color-surface-3);
  }

  :global(.section--dark) .service-block__points li {
    border-bottom-color: oklch(30% 0.006 80);
  }

  .service-block__points li:nth-child(odd) {
    border-right: 1px solid var(--color-surface-3);
    padding-right: var(--sp-4);
  }

  :global(.section--dark) .service-block__points li:nth-child(odd) {
    border-right-color: oklch(30% 0.006 80);
  }

  .cta-section {
    border-top: 2px solid var(--color-ink);
  }

  .cta-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sp-10);
    flex-wrap: wrap;
  }

  .cta-heading {
    font-size: var(--text-xl);
    font-weight: 700;
    color: var(--color-surface);
    letter-spacing: -0.03em;
    max-width: 32ch;
  }

  .cta-sub {
    font-size: var(--text-sm);
    color: oklch(65% 0.006 80);
    margin-top: var(--sp-2);
  }

  @media (max-width: 768px) {
    .service-block__inner {
      grid-template-columns: 1fr;
      gap: var(--sp-6);
    }
    .service-block__points {
      grid-template-columns: 1fr;
    }
    .service-block__points li:nth-child(odd) {
      border-right: none;
    }
  }
</style>
