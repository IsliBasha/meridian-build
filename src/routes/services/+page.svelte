<script>
  import { services } from '$lib/data/placeholder.js';
</script>

<svelte:head>
  <title>Services — Meridian Build</title>
  <meta name="description" content="Commercial construction, electrical installations, fit-out, and project management across New York City." />
</svelte:head>

<div class="page-header section section--alt">
  <div class="container">
    <p class="label label--accent">What We Do</p>
    <h1 class="page-title">Services</h1>
    <p class="page-intro">
      Full-scope commercial construction. From primary power distribution to fit-out delivery.
    </p>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="services-list">
      {#each services as service}
        <article class="service" id={service.id} aria-labelledby="service-{service.id}">
          <header class="service__header">
            <span class="service__number" aria-hidden="true">{service.number}</span>
            <h2 class="service__name" id="service-{service.id}">{service.name}</h2>
          </header>
          <div class="service__body">
            <p class="service__summary">{service.summary}</p>
            <ul class="service__points" role="list">
              {#each service.points as point}
                <li class="service__point">{point}</li>
              {/each}
            </ul>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="container cta-inner">
    <h2 class="cta-heading">Have a project in mind?</h2>
    <p class="cta-sub">We scope and quote within 5 business days. No obligation.</p>
    <a href="/contact" class="btn-surface">Request a Quote</a>
  </div>
</section>

<style>
  .page-header {
    padding-top: var(--sp-20);
    padding-bottom: var(--sp-16);
  }

  .page-title {
    font-size: var(--text-2xl);
    font-weight: 700;
    letter-spacing: -0.04em;
    margin-top: var(--sp-3);
    margin-bottom: var(--sp-5);
  }

  .page-intro {
    font-size: var(--text-lg);
    color: var(--color-secondary);
    max-width: 52ch;
    font-weight: 300;
  }

  .services-list {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .service {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: var(--sp-16);
    padding-block: var(--sp-16);
    border-bottom: 1px solid var(--color-line);
  }

  .service:first-child { border-top: 1px solid var(--color-line); }

  .service__header {
    display: flex;
    flex-direction: column;
    gap: var(--sp-3);
  }

  .service__number {
    font-size: var(--text-3xl);
    font-weight: 700;
    color: var(--color-line);
    letter-spacing: -0.05em;
    line-height: 1;
  }

  .service__name {
    font-size: var(--text-xl);
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 1.1;
  }

  .service__summary {
    font-size: var(--text-base);
    color: var(--color-secondary);
    max-width: 55ch;
    line-height: 1.7;
    margin-bottom: var(--sp-8);
  }

  .service__points {
    display: flex;
    flex-direction: column;
    gap: var(--sp-3);
    list-style: none;
  }

  .service__point {
    font-size: var(--text-sm);
    color: var(--color-text);
    display: flex;
    align-items: baseline;
    gap: var(--sp-3);
  }

  .service__point::before {
    content: '';
    display: block;
    width: 16px;
    height: 1px;
    background: var(--color-accent);
    flex-shrink: 0;
    position: relative;
    top: -1px;
  }

  .cta-inner {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--sp-5);
  }

  .cta-heading {
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--color-surface);
    letter-spacing: -0.03em;
  }

  .cta-sub {
    font-size: var(--text-base);
    color: oklch(55% 0.006 80);
    max-width: 42ch;
  }

  .btn-surface {
    display: inline-flex;
    font-size: var(--text-sm);
    font-weight: 500;
    padding: var(--sp-3) var(--sp-6);
    background: var(--color-surface);
    color: var(--color-text);
    border: 1px solid var(--color-surface);
    transition: background var(--dur-fast) var(--ease-out-quint);
    letter-spacing: 0.02em;
  }

  .btn-surface:hover {
    background: var(--color-accent-light);
    border-color: var(--color-accent-light);
  }

  @media (max-width: 768px) {
    .service {
      grid-template-columns: 1fr;
      gap: var(--sp-6);
    }
  }
</style>
