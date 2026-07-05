<script>
  import { careersNote, team, company } from '$lib/data/placeholder.js';
  import { reveal } from '$lib/actions/reveal.js';
  import NumberedRow from '$lib/components/NumberedRow.svelte';
</script>

<svelte:head>
  <title>Careers — Eco Volt Electrical</title>
  <meta name="description" content="No open positions at Eco Volt Electrical right now — send a speculative application or check back." />
</svelte:head>

<div class="page-header section">
  <div class="container">
    <span class="section-counter">CAREERS</span>
    <h1 class="page-title">No open roles right now.</h1>
    <p class="status-strip">STATUS: NO OPEN POSITIONS · CHECK BACK OR REACH OUT DIRECTLY</p>
  </div>
</div>

<section class="section section--alt" aria-label="Roles on our crew" use:reveal>
  <div class="container">
    <h2 class="section-counter" style="margin-bottom: var(--sp-3); display: block;">WHAT WE HIRE FOR</h2>
    <p class="roles-note">These are the roles on our crew — none are open right now.</p>
    <div class="roles-list row-list" role="list">
      {#each team as person, i}
        <NumberedRow number={String(i + 1).padStart(2, '0')} name={person.name} summary="{person.title} — {person.bio}" />
      {/each}
    </div>
  </div>
</section>

<section class="section section--dark spec-section" aria-label="Speculative application">
  <div class="container spec-inner">
    <span class="section-counter spec-counter">SPECULATIVE APPLICATIONS</span>
    <h2 class="spec-heading">Send a speculative application.</h2>
    <p class="spec-body">{careersNote}</p>
    <a href="mailto:{company.email}?subject=Speculative Application" class="btn btn--surface">
      {company.email} →
    </a>
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

  .status-strip {
    font-size: 11.5px;
    font-weight: 500;
    letter-spacing: 0.12em;
    color: var(--color-secondary);
    border-top: 1px solid var(--color-line);
    padding-top: var(--sp-3);
    max-width: 52ch;
  }

  .roles-note {
    font-size: var(--text-base);
    font-weight: 300;
    color: var(--color-secondary);
    max-width: 52ch;
    margin-bottom: var(--sp-8);
  }

  .spec-section {
    border-top: 2px solid var(--color-ink);
  }

  .spec-inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--sp-5);
  }

  .spec-counter {
    color: var(--color-secondary-inverse);
  }

  .spec-heading {
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--color-surface);
    letter-spacing: -0.03em;
    max-width: 20ch;
  }

  .spec-body {
    font-size: var(--text-base);
    font-weight: 300;
    color: var(--color-secondary-inverse);
    max-width: 52ch;
    line-height: 1.6;
  }
</style>
