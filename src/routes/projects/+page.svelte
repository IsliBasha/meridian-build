<script>
  import BuildingExplorer from '$lib/components/BuildingExplorer.svelte';
  import { capabilityMap } from '$lib/data/placeholder.js';
</script>

<svelte:head>
  <title>Capability Map — Eco Volt Electrical</title>
  <meta name="description" content="See the electrical work Eco Volt Electrical can perform, mapped room by room across residential, commercial, and retail properties." />
</svelte:head>

<div class="page-header section">
  <div class="container">
    <span class="section-counter">THE WORK, MAPPED</span>
    <h1 class="page-title">Capability Map</h1>
    <p class="page-intro">
      Navigate our capabilities spatially. Select a property type, explore its floors, and see the electrical work possible in every space.
    </p>
  </div>
</div>

<section class="section explorer-section" aria-label="Capability explorer">
  <div class="container">
    <BuildingExplorer properties={capabilityMap} />
    <p class="proof-line">RESIDENTIAL · COMMERCIAL · RETAIL — same crew, same code standard.</p>
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
    color: var(--color-secondary);
    max-width: 52ch;
    font-weight: 300;
    line-height: 1.6;
  }

  .explorer-section {
    padding-top: var(--sp-16);
    padding-bottom: var(--sp-32);
  }

  .proof-line {
    margin-top: var(--sp-8);
    font-size: 11.5px;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: var(--color-secondary);
    border-top: 1px solid var(--color-line);
    padding-top: var(--sp-3);
    text-align: center;
  }
</style>
