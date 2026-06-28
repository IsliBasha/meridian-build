<script>
  import { careers, company } from '$lib/data/placeholder.js';
</script>

<svelte:head>
  <title>Careers — Meridian Build</title>
  <meta name="description" content="Open positions at Meridian Build. Commercial construction and electrical careers in New York City." />
</svelte:head>

<div class="page-header section section--alt">
  <div class="container">
    <div class="header-layout">
      <div>
        <p class="label label--accent">Careers</p>
        <h1 class="page-title">Work at Meridian</h1>
      </div>
      <p class="page-intro">
        We hire people who care about the work, not just the hours. Small team, real accountability,
        projects you can point to.
      </p>
    </div>
  </div>
</div>

<section class="section" aria-label="Open positions">
  <div class="container">
    <p class="label" style="margin-bottom: var(--sp-8);">
      {careers.length} Open {careers.length === 1 ? 'Position' : 'Positions'}
    </p>

    <div class="roles-list">
      {#each careers as role}
        <article class="role" aria-labelledby="role-{role.id}">
          <header class="role__header">
            <div class="role__title-group">
              <h2 class="role__title" id="role-{role.id}">{role.title}</h2>
              <div class="role__meta">
                <span class="role__tag">{role.type}</span>
                <span class="role__tag">{role.location}</span>
                <span class="role__tag">{role.department}</span>
              </div>
            </div>
          </header>

          <div class="role__body">
            <p class="role__description">{role.description}</p>
            <div class="role__requirements">
              <p class="label" style="margin-bottom: var(--sp-4);">Requirements</p>
              <ul role="list">
                {#each role.requirements as req}
                  <li class="role__req">{req}</li>
                {/each}
              </ul>
            </div>
          </div>

          <footer class="role__footer">
            <a href="/contact?role={role.id}" class="btn-apply">Apply for this role</a>
          </footer>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- Speculative application CTA -->
<section class="section section--alt" aria-label="Speculative application">
  <div class="container spec-cta">
    <div>
      <p class="label" style="margin-bottom: var(--sp-3);">Don't see your role?</p>
      <h2 class="spec-heading">Send a speculative application.</h2>
      <p class="spec-body">
        We hire outside of open positions when the right person comes along.
        Tell us what you do and what you're looking for.
      </p>
    </div>
    <a href="mailto:{company.email}?subject=Speculative Application" class="btn-ghost-dark">
      {company.email}
    </a>
  </div>
</section>

<style>
  .page-header { padding-top: var(--sp-20); }

  .header-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--sp-16);
    align-items: end;
  }

  .page-title {
    font-size: var(--text-2xl);
    font-weight: 700;
    letter-spacing: -0.04em;
    margin-top: var(--sp-3);
  }

  .page-intro {
    font-size: var(--text-base);
    color: var(--color-secondary);
    max-width: 48ch;
    line-height: 1.7;
  }

  .roles-list {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .role {
    padding-block: var(--sp-12);
    border-bottom: 1px solid var(--color-line);
    display: flex;
    flex-direction: column;
    gap: var(--sp-8);
  }

  .role:first-child { border-top: 1px solid var(--color-line); }

  .role__title {
    font-size: var(--text-xl);
    font-weight: 600;
    letter-spacing: -0.025em;
    margin-bottom: var(--sp-3);
  }

  .role__meta {
    display: flex;
    gap: var(--sp-2);
    flex-wrap: wrap;
  }

  .role__tag {
    font-size: var(--text-xs);
    font-weight: 500;
    color: var(--color-secondary);
    border: 1px solid var(--color-line);
    padding: 3px 10px;
    letter-spacing: 0.03em;
  }

  .role__description {
    font-size: var(--text-base);
    color: var(--color-secondary);
    max-width: 65ch;
    line-height: 1.7;
    margin-bottom: var(--sp-6);
  }

  .role__req {
    font-size: var(--text-sm);
    color: var(--color-text);
    padding-block: var(--sp-2);
    border-bottom: 1px solid var(--color-line);
    display: flex;
    align-items: baseline;
    gap: var(--sp-3);
  }

  .role__req::before {
    content: '';
    display: block;
    width: 12px;
    height: 1px;
    background: var(--color-accent);
    flex-shrink: 0;
    position: relative;
    top: -1px;
  }

  .btn-apply {
    display: inline-flex;
    font-size: var(--text-sm);
    font-weight: 500;
    padding: var(--sp-3) var(--sp-6);
    background: var(--color-text);
    color: var(--color-surface);
    border: 1px solid var(--color-text);
    letter-spacing: 0.02em;
    transition: background var(--dur-fast) var(--ease-out-quint), border-color var(--dur-fast) var(--ease-out-quint);
  }

  .btn-apply:hover {
    background: var(--color-accent);
    border-color: var(--color-accent);
  }

  .spec-cta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--sp-8);
    flex-wrap: wrap;
  }

  .spec-heading {
    font-size: var(--text-xl);
    font-weight: 600;
    letter-spacing: -0.025em;
    margin-bottom: var(--sp-3);
  }

  .spec-body {
    font-size: var(--text-sm);
    color: var(--color-secondary);
    max-width: 48ch;
    line-height: 1.65;
  }

  .btn-ghost-dark {
    display: inline-flex;
    font-size: var(--text-sm);
    font-weight: 500;
    padding: var(--sp-3) var(--sp-6);
    background: transparent;
    color: var(--color-text);
    border: 1px solid var(--color-line);
    letter-spacing: 0.02em;
    white-space: nowrap;
    transition: border-color var(--dur-fast) var(--ease-out-quint);
  }

  .btn-ghost-dark:hover { border-color: var(--color-text); }

  @media (max-width: 768px) {
    .header-layout { grid-template-columns: 1fr; }
  }
</style>
