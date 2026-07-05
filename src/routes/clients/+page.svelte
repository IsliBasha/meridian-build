<script>
  import { clients } from '$lib/data/placeholder.js';
  import ServeList from '$lib/components/ServeList.svelte';
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
    <h2 class="sr-only">Client categories</h2>
    <ServeList {clients} />
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

</style>
