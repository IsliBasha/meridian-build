<script>
  import { clients } from '$lib/data/placeholder.js';
</script>

<svelte:head>
  <title>Clients — Eco Volt Electrical</title>
  <meta name="description" content="Who Eco Volt Electrical proudly serves — homeowners, property managers, small businesses, and general contractor partners across New York City." />
</svelte:head>

<div class="page-header section">
  <div class="container">
    <span class="section-counter">WHO WE SERVE</span>
    <h1 class="page-title">Who we've proudly served.</h1>
    <p class="page-intro">
      From single-unit homes to full commercial buildouts — every job gets the same
      professionalism, reliability, and personal attention.
    </p>
  </div>
</div>

<section class="section section--alt" aria-label="Client categories">
  <div class="container">
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
  }

  .page-intro {
    font-size: var(--text-lg);
    font-weight: 300;
    color: var(--color-secondary);
    max-width: 52ch;
    line-height: 1.6;
  }

  .serve-list {
    display: flex;
    flex-direction: column;
    gap: var(--sp-6);
    list-style: none;
    max-width: 880px;
  }

  .serve-row {
    display: flex;
    align-items: baseline;
    gap: var(--sp-4);
    padding-bottom: var(--sp-5);
    border-bottom: 1.5px solid var(--color-ink);
  }

  .serve-row__name {
    font-weight: 700;
    font-size: var(--text-xl);
    letter-spacing: -0.02em;
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

  @media (max-width: 640px) {
    .serve-row { flex-wrap: wrap; }
    .serve-row__dots { display: none; }
  }
</style>
