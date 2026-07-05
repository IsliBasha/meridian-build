<script>
  /**
   * Capability map explorer: not a project-history viewer (Eco Volt hasn't published
   * one), but a blueprint-style showcase of the electrical work performed in each
   * type of space. Tabs switch property type -> elevation (pick a floor) -> plan
   * (hover a zone to preview, click to pin the full capability sheet).
   */
  /** @type {typeof import('$lib/data/placeholder.js').capabilityMap} */
  export let properties = [];

  let activeProperty = 0;
  /** @type {'elevation' | 'plan'} */
  let viewMode = 'elevation';
  /** @type {number | null} */
  let floor = null;
  /** @type {number | null} */
  let hoverFloor = null;
  /** @type {number | null} */
  let hoverZone = null;
  /** @type {number | null} */
  let selectedZone = null;

  $: property = properties[activeProperty];
  $: currentFloor = property?.floors.find((f) => f.number === floor) ?? null;
  $: activeZoneIndex = selectedZone ?? hoverZone;
  $: activeZone = activeZoneIndex != null ? currentFloor?.zones[activeZoneIndex] : null;

  /** @param {number} i */
  function selectProperty(i) {
    activeProperty = i;
    resetView();
  }

  function resetView() {
    viewMode = 'elevation';
    floor = null;
    hoverFloor = null;
    hoverZone = null;
    selectedZone = null;
  }

  /** @param {number} n */
  function openFloor(n) {
    viewMode = 'plan';
    floor = n;
    hoverZone = null;
    selectedZone = null;
  }

  function backToElevation() {
    viewMode = 'elevation';
    floor = null;
    hoverZone = null;
    selectedZone = null;
  }

  function backToSummary() {
    selectedZone = null;
  }

  /** @param {KeyboardEvent} e @param {() => void} action */
  function onKey(e, action) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); action(); }
  }
</script>

<div class="explorer" aria-label="Electrical capability explorer">

  <h2 class="sr-only">Capability details</h2>

  <!-- Property type tabs -->
  <div class="tabs" role="tablist" aria-label="Property type">
    {#each properties as p, i}
      <button
        type="button"
        role="tab"
        aria-selected={activeProperty === i}
        class="tab"
        class:tab--active={activeProperty === i}
        on:click={() => selectProperty(i)}
      >
        {p.name}
      </button>
    {/each}
  </div>

  <div class="explorer__frame">
    {#if viewMode === 'elevation'}
      <!-- ── ELEVATION: pick a floor ── -->
      <div class="elevation">
        <div class="elevation__info">
          <span class="ascii-frame">ELEVATION — SELECT A FLOOR</span>
          <p class="elevation__blurb">{property.description}</p>
          <div class="spacer"></div>
          <p class="elevation__hint">▸ HOVER A FLOOR TO PREVIEW — CLICK TO OPEN ITS PLAN</p>
        </div>
        <div class="elevation__stage blueprint-grid">
          <div class="floor-stack">
            {#each property.floors as f, i}
              <button
                type="button"
                class="floor-row"
                style="height:{i === 0 ? '52px' : '38px'}; background:{hoverFloor === f.number ? 'color-mix(in oklab, var(--color-accent) 24%, var(--color-surface))' : 'transparent'}"
                on:mouseenter={() => (hoverFloor = f.number)}
                on:mouseleave={() => (hoverFloor = null)}
                on:focus={() => (hoverFloor = f.number)}
                on:blur={() => (hoverFloor = null)}
                on:click={() => openFloor(f.number)}
              >
                <span class="floor-row__label" style="opacity:{hoverFloor === f.number ? 1 : 0.7}">{f.label}</span>
                <span class="floor-row__arrow" style="opacity:{hoverFloor === f.number ? 1 : 0}">PLAN →</span>
              </button>
            {/each}
          </div>
        </div>
      </div>
    {:else if currentFloor}
      <!-- ── PLAN: zone grid + capability panel ── -->
      <div class="plan">
        <div class="plan__grid-wrap">
          <div class="plan__crumb">
            <button type="button" class="crumb-link" on:click={backToElevation}>{property.name}</button>
            <span class="crumb-sep">▸</span>
            <span>{currentFloor.label}</span>
          </div>
          <div class="zone-grid">
            {#each currentFloor.zones as zone, i}
              <button
                type="button"
                class="zone"
                style="grid-column:{zone.gc}; grid-row:{zone.gr}; background:{selectedZone === i ? 'color-mix(in oklab, var(--color-accent) 34%, var(--color-surface))' : hoverZone === i ? 'color-mix(in oklab, var(--color-accent) 18%, var(--color-surface))' : 'var(--color-surface)'}"
                on:mouseenter={() => (hoverZone = i)}
                on:mouseleave={() => (hoverZone = null)}
                on:focus={() => (hoverZone = i)}
                on:blur={() => (hoverZone = null)}
                on:click={() => (selectedZone = i)}
                on:keydown={(e) => onKey(e, () => (selectedZone = i))}
              >
                <span class="zone__short">{zone.short}</span>
                <span class="zone__area">{zone.area}</span>
              </button>
            {/each}
          </div>
        </div>

        <div class="plan__panel">
          <!-- Hover/focus preview and the default summary are visual-only — they
               change too often (every zone hover/tab-stop) to announce without
               spamming screen-reader users. Only the pinned "click to pin"
               state below is a deliberate action worth announcing. -->
          {#if selectedZone == null}
            {#if hoverZone != null && activeZone}
              <span class="ascii-frame">ZONE PREVIEW</span>
              <h3 class="panel-zone-name">{activeZone.name}</h3>
              <ul class="panel-preview-list">
                {#each activeZone.services.slice(0, 2) as service}
                  <li>{service}</li>
                {/each}
              </ul>
              <p class="panel-hint">CLICK TO SEE THE FULL BREAKDOWN →</p>
            {:else}
              <span class="ascii-frame">CAPABILITY MAP</span>
              <h3 class="panel-zone-name">{currentFloor.label}</h3>
              <p class="panel-summary-count">{currentFloor.zones.length} ZONES MAPPED</p>
              <p class="panel-hint">Hover a zone to preview the work we can do there. Click to pin the full breakdown.</p>
              <div class="spacer"></div>
              <button type="button" class="panel-back" on:click={backToElevation}>← BACK TO ELEVATION</button>
            {/if}
          {/if}

          <div class="plan__panel-live" aria-live="polite" aria-atomic="true">
            {#if selectedZone != null && activeZone}
              <button type="button" class="panel-back" on:click={backToSummary}>← FLOOR SUMMARY</button>
              <span class="ascii-frame">CAPABILITY SHEET</span>
              <h3 class="panel-zone-name">{activeZone.name}</h3>
              <span class="panel-area">{activeZone.area}</span>
              <div class="panel-services">
                <span class="panel-services__label">ELECTRICAL WORK IN THIS SPACE</span>
                <ul>
                  {#each activeZone.services as service}
                    <li>{service}</li>
                  {/each}
                </ul>
              </div>
              <p class="panel-desc">{activeZone.desc}</p>
            {/if}
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .explorer {
    border: 2px solid var(--color-ink);
    background: var(--color-surface);
  }

  /* ── Tabs ── */
  .tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
    border-bottom: 2px solid var(--color-ink);
  }

  .tab {
    font-family: inherit;
    font-weight: 700;
    font-size: var(--text-xs);
    letter-spacing: 0.05em;
    padding: var(--sp-4) var(--sp-6);
    background: transparent;
    color: var(--color-text);
    border: none;
    border-right: 1.5px solid var(--color-ink);
    cursor: pointer;
    transition: background var(--dur-fast) ease, color var(--dur-fast) ease;
  }

  .tab:last-child { border-right: none; }

  .tab--active {
    background: var(--color-ink);
    color: var(--color-surface);
  }

  .tab:hover:not(.tab--active) {
    background: var(--color-surface-2);
  }

  .explorer__frame { min-height: 480px; }

  /* ── Elevation ── */
  .elevation {
    display: grid;
    grid-template-columns: 5fr 7fr;
    min-height: 480px;
  }

  .elevation__info {
    padding: var(--sp-8);
    border-right: 2px solid var(--color-ink);
    display: flex;
    flex-direction: column;
    gap: var(--sp-5);
  }

  .elevation__blurb {
    font-size: var(--text-base);
    font-weight: 300;
    line-height: 1.6;
    color: var(--color-text);
    max-width: 40ch;
  }

  .elevation__hint {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.06em;
    color: var(--color-secondary);
  }

  .spacer { flex: 1; }

  .elevation__stage {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: var(--sp-10) var(--sp-10) 0;
  }

  .floor-stack {
    width: min(80%, 280px);
    border: 2px solid var(--color-ink);
    border-bottom: none;
    display: flex;
    flex-direction: column-reverse;
    background: var(--color-surface);
  }

  .floor-row {
    font-family: inherit;
    border: none;
    border-top: 1.5px solid var(--color-ink);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: var(--sp-3);
    cursor: pointer;
    transition: background 120ms ease;
  }

  .floor-row__label,
  .floor-row__arrow {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.1em;
    transition: opacity 120ms ease;
  }

  /* ── Plan ── */
  .plan {
    display: grid;
    grid-template-columns: 7fr 5fr;
    min-height: 480px;
  }

  .plan__grid-wrap {
    padding: var(--sp-6) var(--sp-8);
    display: flex;
    flex-direction: column;
    gap: var(--sp-4);
  }

  .plan__crumb {
    display: flex;
    align-items: baseline;
    gap: var(--sp-3);
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
  }

  .crumb-link {
    font: inherit;
    background: none;
    border: none;
    padding: 0;
    color: var(--color-secondary);
    border-bottom: 1px solid var(--color-secondary);
    cursor: pointer;
  }

  .crumb-sep { color: var(--color-secondary); }

  .zone-grid {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1.5px;
    background: var(--color-ink);
    border: 2px solid var(--color-ink);
    min-height: 380px;
    position: relative;
  }

  .zone {
    font-family: inherit;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--sp-3);
    cursor: pointer;
    transition: background 120ms ease;
    min-width: 44px;
    min-height: 44px;
  }

  .zone__short {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.08em;
  }

  .zone__area {
    font-family: var(--font-mono);
    font-size: 9px;
    letter-spacing: 0.06em;
    color: var(--color-secondary);
    align-self: flex-end;
  }

  .plan__panel {
    border-left: 2px solid var(--color-ink);
    padding: var(--sp-8);
    display: flex;
    flex-direction: column;
    gap: var(--sp-4);
  }

  .plan__panel-live {
    display: flex;
    flex-direction: column;
    gap: var(--sp-4);
  }

  .plan__panel-live:empty {
    display: contents;
  }

  .panel-back {
    align-self: flex-start;
    font-family: var(--font-mono);
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 0.08em;
    background: none;
    border: none;
    color: var(--color-secondary);
    cursor: pointer;
    padding: 0;
  }

  .panel-zone-name {
    font-size: var(--text-xl);
    font-weight: 700;
    letter-spacing: -0.025em;
    line-height: 1.05;
  }

  .panel-area {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.06em;
    color: var(--color-secondary);
  }

  .panel-summary-count {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    font-weight: 500;
    border-top: 2px solid var(--color-ink);
    padding-top: var(--sp-3);
  }

  .panel-services {
    border-top: 2px solid var(--color-ink);
    padding-top: var(--sp-4);
    display: flex;
    flex-direction: column;
    gap: var(--sp-2);
  }

  .panel-services__label {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.1em;
    color: var(--color-secondary);
  }

  .panel-services ul,
  .panel-preview-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--sp-2);
  }

  .panel-services li,
  .panel-preview-list li {
    font-size: var(--text-sm);
    font-weight: 500;
    padding-left: var(--sp-4);
    position: relative;
  }

  .panel-services li::before,
  .panel-preview-list li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--color-accent);
  }

  .panel-desc {
    font-size: var(--text-sm);
    font-weight: 300;
    color: var(--color-secondary);
    line-height: 1.6;
  }

  .panel-hint {
    font-family: var(--font-mono);
    font-size: 10.5px;
    letter-spacing: 0.06em;
    color: var(--color-secondary);
  }

  @media (max-width: 900px) {
    .elevation, .plan {
      grid-template-columns: 1fr;
    }
    .elevation__info, .plan__panel {
      border-right: none;
      border-left: none;
      border-bottom: 2px solid var(--color-ink);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .floor-row, .zone, .tab { transition: none; }
  }
</style>
