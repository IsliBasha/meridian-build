<script>
  import { fade } from 'svelte/transition';

  /** @type {import('$lib/data/placeholder.js').explorerProjects[number]} */
  export let project;

  /** @type {'building' | 'floor' | 'room'} */
  let level = 'building';
  let selectedFloor = null;
  let selectedRoom = null;
  let hoveredFloor = null;
  let hoveredRoom = null;

  const FLOOR_HEIGHT = 110;
  const BUILDING_Y_START = 30;
  const FLOORS_COUNT = 4;

  /** @param {number} floorNumber */
  function floorY(floorNumber) {
    return BUILDING_Y_START + (FLOORS_COUNT - floorNumber) * FLOOR_HEIGHT;
  }

  /** @param {typeof project.floors[number]} floor */
  function selectFloor(floor) {
    selectedFloor = floor;
    selectedRoom = null;
    hoveredFloor = null;
    level = 'floor';
  }

  /** @param {typeof project.floors[number]['rooms'][number]} room */
  function selectRoom(room) {
    selectedRoom = room;
    hoveredRoom = null;
    level = 'room';
  }

  function backToBuilding() {
    level = 'building';
    selectedFloor = null;
    selectedRoom = null;
  }

  function backToFloor() {
    level = 'floor';
    selectedRoom = null;
  }

  /** @param {KeyboardEvent} e @param {Function} action */
  function onKey(e, action) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); action(); }
  }

  const windows = Array.from({ length: 4 }, (_, col) =>
    Array.from({ length: 3 }, (_, row) => ({ col, row }))
  ).flat();
</script>

<div class="explorer" aria-label="Interactive project explorer">

  <!-- Demo badge -->
  <div class="explorer__header">
    <span class="demo-badge">DEMO PROJECT</span>
    <span class="project-meta">{project.name} · {project.type} · {project.year}</span>
  </div>

  <!-- Breadcrumb -->
  <nav class="breadcrumb" aria-label="Explorer navigation">
    <button
      class="crumb"
      class:crumb--active={level === 'building'}
      on:click={backToBuilding}
      disabled={level === 'building'}
    >
      {project.name}
    </button>
    {#if selectedFloor}
      <span class="crumb-sep" aria-hidden="true">→</span>
      <button
        class="crumb"
        class:crumb--active={level === 'floor'}
        on:click={backToFloor}
        disabled={level === 'floor'}
      >
        Floor {selectedFloor.number}
      </button>
    {/if}
    {#if selectedRoom}
      <span class="crumb-sep" aria-hidden="true">→</span>
      <span class="crumb crumb--current">{selectedRoom.name}</span>
    {/if}
  </nav>

  <!-- ── Level 1: Building view ── -->
  {#if level === 'building'}
    <div class="view view--building" transition:fade={{ duration: 280 }}>
      <div class="building-hint">
        <span class="label">Select a floor to explore</span>
      </div>

      <div class="building-layout">
        <!-- Building SVG -->
        <svg
          viewBox="0 0 300 510"
          class="building-svg"
          role="group"
          aria-label="Building floor selector. {project.floors.length} floors available."
        >
          <!-- Building body -->
          <rect x="50" y="30" width="200" height="440" fill="var(--color-surface-2)" stroke="var(--color-line)" stroke-width="1.5"/>

          <!-- Roof cap -->
          <rect x="70" y="10" width="160" height="22" fill="var(--color-surface-2)" stroke="var(--color-line)" stroke-width="1"/>
          <line x1="150" y1="0" x2="150" y2="10" stroke="var(--color-line)" stroke-width="1"/>

          <!-- Clickable floor zones -->
          {#each project.floors as floor}
            {@const fy = floorY(floor.number)}
            <!-- svelte-ignore a11y-interactive-supports-focus -->
            <g
              class="floor-zone"
              role="button"
              tabindex="0"
              aria-label="Floor {floor.number}: {floor.label}. {floor.rooms.length} rooms."
              on:click={() => selectFloor(floor)}
              on:keydown={(e) => onKey(e, () => selectFloor(floor))}
              on:mouseenter={() => hoveredFloor = floor.number}
              on:mouseleave={() => hoveredFloor = null}
            >
              <!-- Floor hover fill -->
              <rect
                x="51" y={fy + 1} width="198" height={FLOOR_HEIGHT - 1}
                fill={hoveredFloor === floor.number ? 'var(--color-accent-light)' : 'transparent'}
                style="transition: fill 150ms ease-out;"
              />

              <!-- Floor divider -->
              <line x1="50" y1={fy} x2="250" y2={fy} stroke="var(--color-line)" stroke-width="1"/>

              <!-- Windows -->
              {#each windows as w}
                <rect
                  x={78 + w.col * 38}
                  y={fy + 22 + w.row * 28}
                  width="20" height="14"
                  rx="1"
                  fill={hoveredFloor === floor.number ? 'var(--color-accent)' : 'var(--color-line)'}
                  opacity={hoveredFloor === floor.number ? 0.25 : 0.55}
                  style="transition: fill 150ms ease-out, opacity 150ms ease-out;"
                />
              {/each}

              <!-- Floor label (left of building) -->
              <text
                x="42" y={fy + FLOOR_HEIGHT / 2 + 5}
                text-anchor="end"
                class="floor-label"
                fill={hoveredFloor === floor.number ? 'var(--color-accent)' : 'var(--color-secondary)'}
                style="transition: fill 150ms ease-out;"
              >F{floor.number}</text>
            </g>
          {/each}

          <!-- Bottom line -->
          <line x1="50" y1="470" x2="250" y2="470" stroke="var(--color-line)" stroke-width="1.5"/>

          <!-- Ground shadow -->
          <rect x="40" y="470" width="220" height="8" fill="var(--color-line)" opacity="0.4"/>
        </svg>

        <!-- Project meta sidebar -->
        <aside class="building-meta">
          <dl class="meta-list">
            <div class="meta-item">
              <dt>Location</dt>
              <dd>{project.location}</dd>
            </div>
            <div class="meta-item">
              <dt>Type</dt>
              <dd>{project.type}</dd>
            </div>
            <div class="meta-item">
              <dt>Area</dt>
              <dd>{project.area}</dd>
            </div>
            <div class="meta-item">
              <dt>Completed</dt>
              <dd>{project.year}</dd>
            </div>
            <div class="meta-item meta-item--full">
              <dt>Scope</dt>
              <dd>{project.scope}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  {/if}

  <!-- ── Level 2 + 3: Floor & Room views ── -->
  {#if (level === 'floor' || level === 'room') && selectedFloor}
    <div class="view view--floor" transition:fade={{ duration: 280 }}>
      <div class="floor-layout">

        <!-- Floor plan SVG -->
        <div class="floor-plan-wrap">
          <p class="floor-label-text label">
            Floor {selectedFloor.number} — {selectedFloor.label}
          </p>
          <svg
            viewBox="0 0 580 380"
            class="floor-svg"
            role="group"
            aria-label="Floor {selectedFloor.number} plan. {selectedFloor.rooms.length} rooms."
          >
            <!-- Outer wall -->
            <rect x="20" y="20" width="540" height="340"
              fill="var(--color-surface-2)"
              stroke="var(--color-text)"
              stroke-width="2"/>

            <!-- Rooms -->
            {#each selectedFloor.rooms as room}
              {@const isSelected = selectedRoom?.id === room.id}
              {@const isHovered = hoveredRoom === room.id}
              <!-- svelte-ignore a11y-interactive-supports-focus -->
              <g
                class="room-zone"
                role="button"
                tabindex="0"
                aria-label="{room.name}, {room.type}, {room.area} sq ft, {room.orientation} facing"
                aria-pressed={isSelected}
                on:click={() => selectRoom(room)}
                on:keydown={(e) => onKey(e, () => selectRoom(room))}
                on:mouseenter={() => hoveredRoom = room.id}
                on:mouseleave={() => hoveredRoom = null}
              >
                <rect
                  x={room.svgX} y={room.svgY}
                  width={room.svgW} height={room.svgH}
                  fill={isSelected
                    ? 'var(--color-accent-light)'
                    : isHovered
                      ? 'oklch(94% 0.03 180)'
                      : 'transparent'}
                  stroke={isSelected ? 'var(--color-accent)' : 'var(--color-line)'}
                  stroke-width={isSelected ? '1.5' : '1'}
                  style="transition: fill 150ms ease-out, stroke 150ms ease-out;"
                />

                <!-- Room name -->
                <text
                  x={room.svgX + room.svgW / 2}
                  y={room.svgY + room.svgH / 2 - (room.svgH > 80 ? 10 : 4)}
                  text-anchor="middle"
                  class="room-name-text"
                  fill={isSelected ? 'var(--color-accent)' : 'var(--color-text)'}
                  style="transition: fill 150ms ease-out;"
                >{room.name}</text>

                {#if room.svgH > 80}
                  <text
                    x={room.svgX + room.svgW / 2}
                    y={room.svgY + room.svgH / 2 + 10}
                    text-anchor="middle"
                    class="room-area-text"
                    fill="var(--color-secondary)"
                  >{room.area} sq ft</text>
                {/if}
              </g>
            {/each}
          </svg>
        </div>

        <!-- Side panel -->
        <aside class="side-panel">
          {#if level === 'room' && selectedRoom}
            <div class="room-detail" transition:fade={{ duration: 200 }}>
              <p class="label label--accent">Room Detail</p>
              <h3 class="room-detail__name">{selectedRoom.name}</h3>
              <dl class="spec-list">
                <div class="spec-item">
                  <dt>Type</dt>
                  <dd>{selectedRoom.type}</dd>
                </div>
                <div class="spec-item">
                  <dt>Area</dt>
                  <dd>{selectedRoom.area} sq ft</dd>
                </div>
                <div class="spec-item">
                  <dt>Floor</dt>
                  <dd>{selectedRoom.floor}</dd>
                </div>
                <div class="spec-item">
                  <dt>Orientation</dt>
                  <dd>{selectedRoom.orientation}</dd>
                </div>
              </dl>
            </div>
          {:else}
            <div class="floor-hint" transition:fade={{ duration: 200 }}>
              <p class="floor-hint__number">F{selectedFloor.number}</p>
              <p class="floor-hint__label">{selectedFloor.label}</p>
              <p class="label" style="margin-top: var(--sp-6);">
                {selectedFloor.rooms.length} rooms · Select one to inspect
              </p>
            </div>
          {/if}
        </aside>
      </div>
    </div>
  {/if}

</div>

<style>
  .explorer {
    width: 100%;
  }

  /* Header */
  .explorer__header {
    display: flex;
    align-items: center;
    gap: var(--sp-4);
    margin-bottom: var(--sp-5);
  }

  .demo-badge {
    font-size: var(--text-xs);
    font-weight: 500;
    letter-spacing: 0.1em;
    color: var(--color-accent);
    border: 1px solid var(--color-accent);
    padding: 3px 8px;
  }

  .project-meta {
    font-size: var(--text-sm);
    color: var(--color-secondary);
  }

  /* Breadcrumb */
  .breadcrumb {
    display: flex;
    align-items: center;
    gap: var(--sp-2);
    margin-bottom: var(--sp-8);
    min-height: 24px;
  }

  .crumb {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    font-size: var(--text-sm);
    color: var(--color-secondary);
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color var(--dur-fast) var(--ease-out-quint);
  }

  .crumb:hover:not(:disabled) { color: var(--color-text); }
  .crumb:disabled { cursor: default; text-decoration: none; color: var(--color-secondary); }
  .crumb--current { text-decoration: none; color: var(--color-text); font-weight: 500; }

  .crumb-sep { color: var(--color-line); font-size: var(--text-sm); }

  /* Views */
  .view {
    width: 100%;
  }

  .building-hint {
    margin-bottom: var(--sp-6);
  }

  /* Building layout */
  .building-layout {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--sp-12);
    align-items: start;
  }

  .building-svg {
    width: 240px;
    flex-shrink: 0;
  }

  .floor-zone {
    cursor: pointer;
  }

  .floor-zone:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 4px;
  }

  .floor-label {
    font-size: 11px;
    font-family: var(--font-sans);
    font-weight: 500;
    letter-spacing: 0.04em;
  }

  /* Building meta */
  .building-meta {
    padding-top: var(--sp-4);
    border-top: 1px solid var(--color-line);
  }

  .meta-list {
    display: flex;
    flex-direction: column;
    gap: var(--sp-4);
    list-style: none;
  }

  .meta-item {
    display: grid;
    grid-template-columns: 110px 1fr;
    gap: var(--sp-2);
    font-size: var(--text-sm);
  }

  .meta-item dt { color: var(--color-secondary); }
  .meta-item dd { font-weight: 500; }

  /* Floor layout */
  .floor-layout {
    display: grid;
    grid-template-columns: 1fr 260px;
    gap: var(--sp-8);
    align-items: start;
  }

  .floor-plan-wrap {
    min-width: 0;
  }

  .floor-label-text {
    margin-bottom: var(--sp-4);
  }

  .floor-svg {
    width: 100%;
    height: auto;
  }

  .room-zone {
    cursor: pointer;
  }

  .room-zone:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  .room-name-text {
    font-size: 11px;
    font-family: var(--font-sans);
    font-weight: 600;
    letter-spacing: 0.01em;
    pointer-events: none;
    user-select: none;
  }

  .room-area-text {
    font-size: 9px;
    font-family: var(--font-sans);
    pointer-events: none;
    user-select: none;
  }

  /* Side panel */
  .side-panel {
    min-height: 280px;
  }

  .room-detail {
    padding: var(--sp-6);
    background: var(--color-surface-2);
    border: 1px solid var(--color-line);
  }

  .room-detail__name {
    font-size: var(--text-xl);
    font-weight: 600;
    margin-top: var(--sp-3);
    margin-bottom: var(--sp-6);
    line-height: 1.1;
  }

  .spec-list {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .spec-item {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: var(--sp-2);
    font-size: var(--text-sm);
    padding-block: var(--sp-3);
    border-bottom: 1px solid var(--color-line);
  }

  .spec-item:last-child { border-bottom: none; }
  .spec-item dt { color: var(--color-secondary); }
  .spec-item dd { font-weight: 500; }

  .floor-hint {
    padding: var(--sp-6);
    border: 1px solid var(--color-line);
  }

  .floor-hint__number {
    font-size: var(--text-3xl);
    font-weight: 700;
    color: var(--color-accent);
    line-height: 1;
    letter-spacing: -0.04em;
  }

  .floor-hint__label {
    font-size: var(--text-sm);
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-top: var(--sp-2);
  }

  /* Responsive */
  @media (max-width: 900px) {
    .building-layout {
      grid-template-columns: 1fr;
    }

    .building-svg {
      width: 180px;
      margin: 0 auto;
    }

    .floor-layout {
      grid-template-columns: 1fr;
    }

    .side-panel {
      order: -1;
    }
  }
</style>
