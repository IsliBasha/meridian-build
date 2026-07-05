<script>
  import { company, team, clients } from '$lib/data/placeholder.js';
  import { reveal } from '$lib/actions/reveal.js';
  import NumberedRow from '$lib/components/NumberedRow.svelte';
</script>

<svelte:head>
  <title>About — Eco Volt Electrical</title>
  <meta name="description" content="Eco Volt Electrical brings professionalism, reliability, and personal attention to residential and commercial electrical work in New York City." />
</svelte:head>

<div class="page-header section">
  <div class="container">
    <span class="section-counter">HOW WE'RE STRUCTURED</span>
    <h1 class="page-title">One point of contact.<br />One crew. One licensed partner.</h1>
    <div class="header-text">
      <p>
        Eco Volt Electrical was founded to bring clients the kind of professionalism,
        reliability, and personal attention that was often missing in the field.
        We work with homeowners, property managers, and small businesses across
        New York City — from small upgrades to large-scale projects.
      </p>
    </div>
  </div>
</div>

<!-- The Chain -->
<section class="section section--alt chain-section" aria-label="How a job moves through our crew" use:reveal>
  <div class="container">
    <span class="section-counter" style="margin-bottom: var(--sp-8); display: block;">THE CHAIN</span>
    <div class="chain">
      {#each team as person, i}
        <div class="chain__node">{person.name}</div>
        {#if i < team.length - 1}
          <span class="chain__arrow" aria-hidden="true">—→</span>
        {/if}
      {/each}
      <span class="chain__arrow" aria-hidden="true">—→</span>
      <div class="chain__node chain__node--partner">Licensed Master Electrician<br /><span>(Partner)</span></div>
    </div>
    <p class="chain-note">{company.partnership}</p>
  </div>
</section>

<!-- The People -->
<section class="section" aria-label="The people" use:reveal>
  <div class="container">
    <span class="section-counter" style="margin-bottom: var(--sp-8); display: block;">THE PEOPLE</span>
    <div class="row-list" role="list">
      {#each team as person, i}
        <NumberedRow number={String(i + 1).padStart(2, '0')} name={person.name} summary="{person.title} — {person.bio}" />
      {/each}
    </div>
  </div>
</section>

<!-- Who We Serve -->
<section class="section section--alt" aria-label="Who we serve" use:reveal>
  <div class="container">
    <span class="section-counter" style="margin-bottom: var(--sp-8); display: block;">WHO WE SERVE</span>
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
    margin-bottom: var(--sp-6);
    line-height: 1.05;
    max-width: 20ch;
  }

  .header-text p {
    font-size: var(--text-base);
    color: var(--color-secondary);
    line-height: 1.75;
    max-width: 60ch;
  }

  /* ── The Chain ── */
  .chain {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    gap: var(--sp-3);
    margin-bottom: var(--sp-8);
  }

  .chain__node {
    flex: 1;
    min-width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--sp-6) var(--sp-4);
    border: 1.5px solid var(--color-ink);
    background: var(--color-surface);
    font-weight: 700;
    font-size: var(--text-sm);
    letter-spacing: 0.02em;
  }

  .chain__node--partner {
    background: var(--color-ink);
    color: var(--color-surface);
    flex-basis: 220px;
  }

  .chain__node--partner span {
    display: block;
    font-weight: 400;
    font-size: var(--text-xs);
    opacity: 0.65;
    margin-top: var(--sp-1);
  }

  .chain__arrow {
    display: flex;
    align-items: center;
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    color: var(--color-secondary);
    flex-shrink: 0;
  }

  .chain-note {
    font-size: var(--text-xs);
    letter-spacing: 0.02em;
    color: var(--color-secondary);
    border-left: 2px solid var(--color-ink);
    padding-left: var(--sp-4);
    max-width: 60ch;
  }

  /* ── Who We Serve (matches homepage/clients pattern) ── */
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

  @media (max-width: 768px) {
    .chain { flex-direction: column; }
    .chain__arrow { justify-content: center; transform: rotate(90deg); padding-block: var(--sp-1); }
    .serve-row { flex-wrap: wrap; }
    .serve-row__dots { display: none; }
  }
</style>
