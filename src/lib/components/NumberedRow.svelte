<script>
  /**
   * Full-width numbered row with a hard bottom border and full-row hover
   * inversion (background flips to ink, text to surface). Used for the
   * homepage/Services service list, About's "The People", and Careers'
   * role-type reference — anywhere a flat list reads better as rows than cards.
   *
   * Renders as <a> when `href` is set, otherwise a plain <div role="listitem">.
   * Trailing content (an arrow, a tag) goes in the default slot.
   */
  export let number = '';
  export let name = '';
  export let summary = '';
  export let href = '';
</script>

{#if href}
  <a {href} class="row row-invert">
    <span class="row__number">{number}</span>
    <span class="row__name">{name}</span>
    <span class="row__summary">{summary}</span>
    <span class="row__trailing"><slot /></span>
  </a>
{:else}
  <div role="listitem" class="row row-invert">
    <span class="row__number">{number}</span>
    <span class="row__name">{name}</span>
    <span class="row__summary">{summary}</span>
    <span class="row__trailing"><slot /></span>
  </div>
{/if}

<style>
  .row {
    display: grid;
    grid-template-columns: 50px 1fr 2fr 30px;
    align-items: baseline;
    gap: var(--sp-6);
    padding: var(--sp-6) var(--sp-2);
    border-bottom: 1.5px solid var(--color-ink);
    color: inherit;
  }

  :global(.row-list) .row:first-child {
    border-top: 1.5px solid var(--color-ink);
  }

  .row__number {
    font-weight: 600;
    font-size: var(--text-sm);
    letter-spacing: 0.08em;
    opacity: 0.55;
  }

  .row__name {
    font-weight: 700;
    font-size: var(--text-xl);
    letter-spacing: -0.025em;
  }

  .row__summary {
    font-weight: 300;
    font-size: var(--text-sm);
    opacity: 0.7;
  }

  .row__trailing {
    font-size: var(--text-lg);
    justify-self: end;
  }

  @media (max-width: 900px) {
    .row { grid-template-columns: 36px 1fr; }
    .row__summary, .row__trailing { display: none; }
  }
</style>
