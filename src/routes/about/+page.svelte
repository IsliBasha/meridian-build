<script>
  import { company, team, clients } from '$lib/data/placeholder.js';
</script>

<svelte:head>
  <title>About — Meridian Build</title>
  <meta name="description" content="Meridian Build is a New York City commercial contractor specializing in electrical installations and full-scope construction. Est. 2009." />
</svelte:head>

<div class="page-header section">
  <div class="container">
    <div class="header-layout">
      <div>
        <p class="label label--accent">About</p>
        <h1 class="page-title">Built on precision.<br />Proven in New York.</h1>
      </div>
      <div class="header-text">
        <p>
          Meridian Build has delivered commercial construction and electrical installation
          programs across Manhattan and the outer boroughs since 2009. We work with
          developers, general contractors, and institutional owners who need a partner
          that holds the standard — not just the schedule.
        </p>
        <p>
          Our core expertise is electrical: primary distribution, emergency systems,
          building automation integration. Around that, we offer the full scope of
          commercial construction, from core-and-shell to tenant fit-out. Every project
          is managed in-house. No work is brokered.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- Credentials -->
<section class="section section--alt" aria-label="Credentials and certifications">
  <div class="container">
    <p class="label label--accent" style="margin-bottom: var(--sp-8);">Credentials</p>
    <div class="credentials">
      <div class="credential">
        <span class="credential__value">Est. {company.established}</span>
        <span class="credential__label">Years in Operation</span>
      </div>
      <div class="credential">
        <span class="credential__value">140+</span>
        <span class="credential__label">Projects Completed</span>
      </div>
      <div class="credential">
        <span class="credential__value">NYC DOB</span>
        <span class="credential__label">Licensed & Insured</span>
      </div>
      <div class="credential">
        <span class="credential__value">5 Boroughs</span>
        <span class="credential__label">Active Coverage</span>
      </div>
    </div>
    <p class="license-text">{company.license}</p>
  </div>
</section>

<!-- Team -->
<section class="section" aria-label="Our team">
  <div class="container">
    <p class="label label--accent" style="margin-bottom: var(--sp-10);">The People</p>
    <div class="team-grid">
      {#each team as person}
        <article class="team-member" aria-labelledby="person-{person.id}">
          <div class="team-member__avatar" aria-hidden="true">
            <span>{person.initials}</span>
          </div>
          <div>
            <h2 class="team-member__name" id="person-{person.id}">{person.name}</h2>
            <p class="team-member__title">{person.title}</p>
            <p class="team-member__bio">{person.bio}</p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- Clients -->
<section class="section section--alt" aria-label="Selected clients">
  <div class="container">
    <p class="label" style="margin-bottom: var(--sp-8);">Selected Clients</p>
    <ul class="clients-list" role="list">
      {#each clients as client}
        <li class="clients-item">
          <span class="clients-item__name">{client.name}</span>
          <span class="clients-item__sector">{client.sector}</span>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .page-header { padding-top: var(--sp-20); }

  .header-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--sp-16);
    align-items: start;
  }

  .page-title {
    font-size: var(--text-2xl);
    font-weight: 700;
    letter-spacing: -0.04em;
    margin-top: var(--sp-3);
    line-height: 1.05;
  }

  .header-text {
    display: flex;
    flex-direction: column;
    gap: var(--sp-5);
    padding-top: var(--sp-6);
  }

  .header-text p {
    font-size: var(--text-base);
    color: var(--color-secondary);
    line-height: 1.75;
    max-width: 55ch;
  }

  .credentials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--sp-8);
    margin-bottom: var(--sp-8);
  }

  .credential {
    display: flex;
    flex-direction: column;
    gap: var(--sp-2);
    padding-bottom: var(--sp-6);
    border-bottom: 2px solid var(--color-accent);
  }

  .credential__value {
    font-size: var(--text-xl);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .credential__label {
    font-size: var(--text-xs);
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .license-text {
    font-size: var(--text-xs);
    color: var(--color-secondary);
    letter-spacing: 0.02em;
  }

  .team-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--sp-16) var(--sp-20);
  }

  .team-member {
    display: grid;
    grid-template-columns: 64px 1fr;
    gap: var(--sp-6);
    align-items: start;
  }

  .team-member__avatar {
    width: 64px;
    height: 64px;
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
    line-height: 1.65;
    max-width: 38ch;
  }

  .clients-list {
    display: flex;
    flex-direction: column;
    gap: 0;
    list-style: none;
  }

  .clients-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: var(--sp-5);
    border-bottom: 1px solid var(--color-line);
    font-size: var(--text-sm);
  }

  .clients-item:first-child { border-top: 1px solid var(--color-line); }

  .clients-item__name { font-weight: 500; }
  .clients-item__sector { color: var(--color-secondary); }

  @media (max-width: 768px) {
    .header-layout { grid-template-columns: 1fr; }
    .credentials { grid-template-columns: 1fr 1fr; }
    .team-grid { grid-template-columns: 1fr; }
  }
</style>
