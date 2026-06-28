<script>
  import BuildingExplorer from '$lib/components/BuildingExplorer.svelte';
  import { explorerProjects } from '$lib/data/placeholder.js';

  const project = explorerProjects[0];
</script>

<svelte:head>
  <title>Projects — Meridian Build</title>
  <meta name="description" content="Explore Meridian Build's completed commercial construction and electrical projects across New York City." />
</svelte:head>

<div class="page-header section section--alt">
  <div class="container">
    <p class="label label--accent">Our Portfolio</p>
    <h1 class="page-title">Projects</h1>
    <p class="page-intro">
      Navigate our work spatially. Select a project, explore its floors, inspect each space.
    </p>
  </div>
</div>

<section class="section explorer-section" aria-label="Project explorer">
  <div class="container">
    <BuildingExplorer {project} />
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
    line-height: 1.5;
  }

  .explorer-section {
    padding-top: var(--sp-16);
    padding-bottom: var(--sp-32);
  }
</style>
