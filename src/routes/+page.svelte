<script>
  import { company, services, clients, capabilityMap } from '$lib/data/placeholder.js';
  import { reveal } from '$lib/actions/reveal.js';
  import BuildingExplorer from '$lib/components/BuildingExplorer.svelte';
  import NumberedRow from '$lib/components/NumberedRow.svelte';
</script>

<svelte:head>
  <title>Eco Volt Electrical — Reliable Electrical Work, New York City</title>
  <meta name="description" content="Eco Volt Electrical brings professionalism, reliability, and personal attention to residential and commercial electrical work across New York City." />
</svelte:head>

<!-- ── Hero ── -->
<section class="hero" data-hero aria-label="Hero">
  <div class="container">
    <span class="section-counter">01 ————————————————————————————</span>
    <h1 class="hero__headline">RELIABLE ELECTRICAL WORK. FOR EVERY PROPERTY.</h1>
    <hr class="hero__rule" />
    <p class="hero__sub">
      Professionalism, reliability, and personal attention — the kind that's often
      missing in the field. Residential to large-scale, across New York City.
    </p>
  </div>
  <div class="hero__proof">
    <div class="container proof-inner">
      <span>LICENSED MASTER ELECTRICIAN PARTNERSHIP</span>
      <span>·</span>
      <span>NYC DOB COMPLIANT</span>
      <span>·</span>
      <span>RESIDENTIAL TO COMMERCIAL</span>
    </div>
  </div>
</section>

<!-- ── Featured Work / Capability Explorer ── -->
<section class="section" aria-label="Capability explorer" use:reveal>
  <div class="container">
    <span class="section-counter">02 ———— THE WORK, MAPPED</span>
    <div class="explorer-heading">
      <h2 class="section-heading">See what we install, room by room.</h2>
      <a href="/projects" class="view-all-link">VIEW ALL PROJECTS →</a>
    </div>
    <BuildingExplorer properties={capabilityMap} />
  </div>
</section>

<!-- ── Services ── -->
<section class="section section--alt" aria-label="Services" use:reveal>
  <div class="container">
    <span class="section-counter" style="margin-bottom: var(--sp-8); display: block;">03 ———— SCOPE OF WORK</span>
    <div class="services-list row-list" role="list">
      {#each services as service}
        <NumberedRow number={service.number} name={service.name} summary={service.summary} href="/services#{service.id}">
          <span aria-hidden="true">→</span>
        </NumberedRow>
      {/each}
    </div>
  </div>
</section>

<!-- ── Who We Serve ── -->
<section class="section section--tight who-we-serve" aria-label="Who we serve" use:reveal>
  <div class="container">
    <span class="section-counter" style="margin-bottom: var(--sp-8); display: block;">04 ———— WHO WE SERVE</span>
    <ul class="serve-list" role="list">
      {#each clients as client}
        <li class="serve-row">
          <span class="serve-row__name">{client.name}</span>
          <span class="serve-row__dots" aria-hidden="true"></span>
          <span class="serve-row__sector">{client.sector}</span>
        </li>
      {/each}
    </ul>
  </div>
</section>

<!-- ── CTA ── -->
<section class="section section--dark" aria-label="Contact call to action" use:reveal>
  <div class="container cta-inner">
    <div>
      <h2 class="cta-heading">Have a project in mind?</h2>
      <p class="cta-sub">Tell us about it — {company.phone} or {company.email}.</p>
    </div>
    <a href="/contact" class="btn btn--surface">SCHEDULE A CALL →</a>
  </div>
</section>

<style>
  /* ── Hero ── */
  .hero {
    padding-top: calc(var(--nav-h) + var(--sp-16));
  }

  .hero__headline {
    font-size: var(--text-3xl);
    font-weight: 700;
    line-height: 0.93;
    letter-spacing: -0.055em;
    max-width: 19ch;
    text-wrap: balance;
    margin-top: var(--sp-10);
  }

  .hero__rule {
    border: none;
    border-top: 2px solid var(--color-ink);
    margin: var(--sp-10) 0 var(--sp-6);
    max-width: 540px;
  }

  .hero__sub {
    font-size: var(--text-lg);
    font-weight: 300;
    line-height: 1.6;
    color: var(--color-secondary);
    max-width: 46ch;
    padding-bottom: var(--sp-12);
  }

  .hero__proof {
    border-top: 1px solid var(--color-line);
    padding-block: var(--sp-3);
  }

  .proof-inner {
    display: flex;
    flex-wrap: wrap;
    gap: var(--sp-6);
    font-weight: 500;
    font-size: 11.5px;
    letter-spacing: 0.12em;
    color: var(--color-secondary);
  }

  /* ── Explorer heading ── */
  .explorer-heading {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--sp-4);
    margin: var(--sp-6) 0 var(--sp-6);
  }

  .section-heading {
    font-size: var(--text-2xl);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.03em;
  }

  .view-all-link {
    font-size: var(--text-sm);
    font-weight: 700;
    letter-spacing: 0.04em;
    border-bottom: 2px solid var(--color-ink);
    padding-bottom: 2px;
    white-space: nowrap;
  }

  /* ── Services ── */
  .services-list {
    display: flex;
    flex-direction: column;
  }

  /* ── Who We Serve ── */
  .who-we-serve {
    background: var(--color-surface-2);
    border-top: 2px solid var(--color-ink);
    border-bottom: 2px solid var(--color-ink);
  }

  .serve-list {
    display: flex;
    flex-direction: column;
    gap: var(--sp-4);
    list-style: none;
    max-width: 880px;
  }

  .serve-row {
    display: flex;
    align-items: baseline;
    gap: var(--sp-4);
  }

  .serve-row__name {
    font-weight: 600;
    font-size: var(--text-lg);
    white-space: nowrap;
  }

  .serve-row__dots {
    flex: 1;
    border-bottom: 1.5px dotted var(--color-secondary);
  }

  .serve-row__sector {
    font-weight: 500;
    font-size: var(--text-xs);
    letter-spacing: 0.08em;
    color: var(--color-secondary);
    text-transform: uppercase;
    white-space: nowrap;
  }

  /* ── CTA ── */
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
  }

  .cta-sub {
    font-size: var(--text-sm);
    color: oklch(65% 0.006 80);
    margin-top: var(--sp-2);
  }

  @media (max-width: 900px) {
    .serve-row__name { white-space: normal; }
  }
</style>
