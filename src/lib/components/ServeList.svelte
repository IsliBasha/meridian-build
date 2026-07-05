<script>
  /**
   * Dotted-leader "who we serve" list — shared across the homepage, About,
   * and Clients pages so the treatment can't drift between copies again.
   */
  /** @type {Array<{ name: string, sector: string }>} */
  export let clients = [];
</script>

<ul class="serve-list" role="list">
  {#each clients as client}
    <li class="serve-row">
      <span class="serve-row__name">{client.name}</span>
      <span class="serve-row__dots" aria-hidden="true"></span>
      <span class="serve-row__sector">{client.sector}</span>
    </li>
  {/each}
</ul>

<style>
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

  @media (max-width: 900px) {
    .serve-row { flex-wrap: wrap; }
    .serve-row__dots { display: none; }
  }
</style>
