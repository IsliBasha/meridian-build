<script>
  import { company, services, clients, team } from '$lib/data/placeholder.js';
</script>

<svelte:head>
  <title>Meridian Build — Commercial Construction & Electrical, New York</title>
  <meta name="description" content="Commercial contractor specializing in electrical installations, fit-out, and ground-up construction across New York City. Est. 2009." />
</svelte:head>

<!-- ── Hero ── -->
<section class="hero" aria-label="Hero">
  <div class="container hero__inner">
    <div class="hero__content">
      <p class="label hero__location">{company.city} — Est. {company.established}</p>
      <h1 class="hero__headline">
        We Build<br />At Scale.
      </h1>
      <p class="hero__sub">{company.tagline}</p>
      <div class="hero__actions">
        <a href="/projects" class="btn btn--primary">View Our Work</a>
        <a href="/contact" class="btn btn--ghost">Get in Touch</a>
      </div>
    </div>
    <div class="hero__aside" aria-hidden="true">
      <span class="hero__vertical-text">Commercial Construction</span>
    </div>
  </div>

  <!-- Stats strip -->
  <div class="hero__stats" aria-label="Company statistics">
    <div class="container stats-inner">
      {#each company.stats as stat, i}
        <div class="stat">
          <span class="stat__value">{stat.value}</span>
          <span class="stat__label">{stat.label}</span>
        </div>
        {#if i < company.stats.length - 1}
          <div class="stat-sep" aria-hidden="true"></div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<!-- ── Explorer Teaser ── -->
<section class="section explorer-teaser" aria-label="Project explorer preview">
  <div class="container">
    <div class="explorer-teaser__layout">
      <div class="explorer-teaser__text">
        <p class="label label--accent">Our Work</p>
        <h2 class="section-heading">Every project is navigable.</h2>
        <p class="body-copy">
          We don't show slideshows. Explore our completed projects floor by floor, room by room —
          the same precision we bring to construction, applied to how we present it.
        </p>
        <a href="/projects" class="btn btn--primary" style="margin-top: var(--sp-8);">
          Explore Projects →
        </a>
      </div>
      <div class="explorer-teaser__visual" aria-hidden="true">
        <!-- Miniature building schematic, decorative -->
        <svg viewBox="0 0 180 300" class="teaser-svg">
          <rect x="30" y="20" width="120" height="260" fill="var(--color-surface-2)" stroke="var(--color-line)" stroke-width="1.5"/>
          <rect x="46" y="10" width="88" height="12" fill="var(--color-surface-2)" stroke="var(--color-line)" stroke-width="1"/>
          {#each [0,1,2,3] as floor}
            <line x1="30" y1={85 + floor * 65} x2="150" y2={85 + floor * 65} stroke="var(--color-line)" stroke-width="1"/>
            {#each [0,1,2] as col}
              {#each [0,1] as row}
                <rect
                  x={50 + col * 32}
                  y={32 + floor * 65 + row * 24}
                  width="18" height="14"
                  fill="var(--color-accent)"
                  opacity="0.15"
                />
              {/each}
            {/each}
          {/each}
          <rect x="30" y="280" width="120" height="6" fill="var(--color-line)" opacity="0.4"/>
        </svg>
      </div>
    </div>
  </div>
</section>

<!-- ── Services ── -->
<section class="section section--alt" aria-label="Services">
  <div class="container">
    <p class="label label--accent" style="margin-bottom: var(--sp-6);">What We Do</p>
    <div class="services-list" role="list">
      {#each services as service}
        <article class="service-item" role="listitem">
          <span class="service-item__number" aria-hidden="true">{service.number}</span>
          <div class="service-item__content">
            <h3 class="service-item__name">{service.name}</h3>
            <p class="service-item__summary">{service.summary}</p>
          </div>
          <a href="/services#{service.id}" class="service-item__link" aria-label="Learn more about {service.name}">
            <span aria-hidden="true">→</span>
          </a>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- ── Clients ── -->
<section class="section section--tight" aria-label="Selected clients">
  <div class="container">
    <p class="label" style="margin-bottom: var(--sp-8); text-align: center;">Selected Clients</p>
    <ul class="clients-list" role="list">
      {#each clients as client}
        <li class="clients-list__item">{client.name}</li>
      {/each}
    </ul>
  </div>
</section>

<!-- ── Team ── -->
<section class="section" aria-label="Our team">
  <div class="container">
    <div class="team-header">
      <p class="label label--accent">The Team</p>
      <h2 class="section-heading">Small. Precise.<br />Accountable.</h2>
    </div>
    <div class="team-grid">
      {#each team as person}
        <article class="team-member">
          <div class="team-member__avatar" aria-hidden="true">
            <span>{person.initials}</span>
          </div>
          <div class="team-member__info">
            <h3 class="team-member__name">{person.name}</h3>
            <p class="team-member__title">{person.title}</p>
            <p class="team-member__bio">{person.bio}</p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- ── CTA ── -->
<section class="section section--dark" aria-label="Contact call to action">
  <div class="container cta-inner">
    <h2 class="cta-heading">Ready to discuss your project?</h2>
    <p class="cta-sub">Commercial construction, electrical installation, or fit-out. We work across all five boroughs.</p>
    <a href="/contact" class="btn btn--surface">Get in Touch</a>
  </div>
</section>

<style>
  /* Hero */
  .hero {
    padding-top: var(--sp-24);
    padding-bottom: 0;
    min-height: 88vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero__inner {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--sp-12);
    align-items: end;
    padding-bottom: var(--sp-20);
  }

  .hero__location {
    margin-bottom: var(--sp-5);
  }

  .hero__headline {
    font-size: var(--text-3xl);
    font-weight: 700;
    line-height: 0.95;
    letter-spacing: -0.04em;
    margin-bottom: var(--sp-6);
  }

  .hero__sub {
    font-size: var(--text-lg);
    color: var(--color-secondary);
    font-weight: 300;
    margin-bottom: var(--sp-10);
  }

  .hero__actions {
    display: flex;
    gap: var(--sp-4);
    flex-wrap: wrap;
  }

  .hero__aside {
    padding-bottom: var(--sp-4);
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
  }

  .hero__vertical-text {
    font-size: var(--text-xs);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-secondary);
    opacity: 0.5;
  }

  /* Stats */
  .hero__stats {
    border-top: 1px solid var(--color-line);
  }

  .stats-inner {
    display: flex;
    align-items: center;
    gap: 0;
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: var(--sp-1);
    padding: var(--sp-6) var(--sp-8);
  }

  .stat__value {
    font-size: var(--text-xl);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .stat__label {
    font-size: var(--text-xs);
    color: var(--color-secondary);
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .stat-sep {
    width: 1px;
    height: 40px;
    background: var(--color-line);
    flex-shrink: 0;
  }

  /* Buttons */
  .btn {
    display: inline-flex;
    align-items: center;
    font-size: var(--text-sm);
    font-weight: 500;
    padding: var(--sp-3) var(--sp-6);
    letter-spacing: 0.02em;
    transition:
      background var(--dur-fast) var(--ease-out-quint),
      color var(--dur-fast) var(--ease-out-quint),
      border-color var(--dur-fast) var(--ease-out-quint);
  }

  .btn--primary {
    background: var(--color-text);
    color: var(--color-surface);
    border: 1px solid var(--color-text);
  }

  .btn--primary:hover {
    background: var(--color-accent);
    border-color: var(--color-accent);
  }

  .btn--ghost {
    background: transparent;
    color: var(--color-text);
    border: 1px solid var(--color-line);
  }

  .btn--ghost:hover {
    border-color: var(--color-text);
  }

  .btn--surface {
    background: var(--color-surface);
    color: var(--color-text);
    border: 1px solid var(--color-surface);
  }

  .btn--surface:hover {
    background: var(--color-accent-light);
    border-color: var(--color-accent-light);
  }

  /* Explorer teaser */
  .explorer-teaser__layout {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--sp-16);
    align-items: center;
  }

  .section-heading {
    font-size: var(--text-2xl);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.03em;
    margin-top: var(--sp-3);
    margin-bottom: var(--sp-5);
  }

  .body-copy {
    font-size: var(--text-base);
    color: var(--color-secondary);
    max-width: 52ch;
    line-height: 1.7;
  }

  .teaser-svg {
    width: 160px;
    opacity: 0.6;
  }

  /* Services */
  .services-list {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .service-item {
    display: grid;
    grid-template-columns: 60px 1fr auto;
    gap: var(--sp-6);
    align-items: center;
    padding-block: var(--sp-8);
    border-bottom: 1px solid var(--color-line);
  }

  .service-item:first-child { border-top: 1px solid var(--color-line); }

  .service-item__number {
    font-size: var(--text-xl);
    font-weight: 700;
    color: var(--color-line);
    letter-spacing: -0.04em;
    line-height: 1;
  }

  .service-item__name {
    font-size: var(--text-lg);
    font-weight: 600;
    margin-bottom: var(--sp-1);
    letter-spacing: -0.02em;
  }

  .service-item__summary {
    font-size: var(--text-sm);
    color: var(--color-secondary);
    max-width: 60ch;
  }

  .service-item__link {
    font-size: var(--text-lg);
    color: var(--color-secondary);
    padding: var(--sp-2);
    transition: color var(--dur-fast) var(--ease-out-quint), transform var(--dur-fast) var(--ease-out-quint);
  }

  .service-item__link:hover {
    color: var(--color-accent);
    transform: translateX(4px);
  }

  /* Clients */
  .clients-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sp-2) var(--sp-10);
    list-style: none;
  }

  .clients-list__item {
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--color-secondary);
    letter-spacing: 0.01em;
  }

  /* Team */
  .team-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--sp-8);
    align-items: start;
    margin-bottom: var(--sp-12);
  }

  .team-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--sp-12) var(--sp-16);
  }

  .team-member {
    display: grid;
    grid-template-columns: 56px 1fr;
    gap: var(--sp-5);
    align-items: start;
  }

  .team-member__avatar {
    width: 56px;
    height: 56px;
    background: var(--color-surface-3);
    border: 1px solid var(--color-line);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--color-secondary);
    flex-shrink: 0;
  }

  .team-member__name {
    font-size: var(--text-base);
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 1.2;
  }

  .team-member__title {
    font-size: var(--text-sm);
    color: var(--color-accent);
    margin-top: var(--sp-1);
    margin-bottom: var(--sp-3);
  }

  .team-member__bio {
    font-size: var(--text-sm);
    color: var(--color-secondary);
    line-height: 1.6;
    max-width: 38ch;
  }

  /* CTA */
  .cta-inner {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--sp-5);
  }

  .cta-heading {
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--color-surface);
    letter-spacing: -0.03em;
    line-height: 1.05;
  }

  .cta-sub {
    font-size: var(--text-base);
    color: oklch(55% 0.006 80);
    max-width: 48ch;
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    .hero__inner { grid-template-columns: 1fr; }
    .hero__aside { display: none; }
    .team-header { grid-template-columns: 1fr; }
    .team-grid { grid-template-columns: 1fr; }
    .explorer-teaser__layout { grid-template-columns: 1fr; }
    .teaser-svg { display: none; }
    .stats-inner { flex-wrap: wrap; }
    .service-item { grid-template-columns: 48px 1fr; }
    .service-item__link { display: none; }
  }
</style>
