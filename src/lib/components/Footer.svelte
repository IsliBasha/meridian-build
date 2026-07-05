<script>
  import { company } from '$lib/data/placeholder.js';
</script>

<footer class="footer">
  <div class="container footer__inner">
    <div class="footer__brand">
      <span class="footer__name">ECO VOLT ELECTRICAL</span>
      <p class="footer__city">{company.city}</p>
      <p class="footer__disclaimer">{company.partnership}</p>
    </div>

    <nav class="footer__nav" aria-label="Footer navigation">
      <ul role="list">
        <li><a href="/about">About</a></li>
        <li><a href="/clients">Clients</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>

    <div class="footer__contact">
      <a href="tel:{company.phone}">{company.phone}</a>
      <a href="mailto:{company.email}">{company.email}</a>
    </div>
  </div>

  <div class="footer__bottom">
    <div class="container footer__bottom-inner">
      <span>&copy; {new Date().getFullYear()} Eco Volt Electrical. All rights reserved.</span>
      <span>New York City</span>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--color-dark);
    color: var(--color-surface-2);
    padding-top: var(--sp-20);
    border-top: 2px solid var(--color-ink);
  }

  .footer__inner {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: var(--sp-12);
    padding-bottom: var(--sp-16);
    border-bottom: 1.5px solid oklch(30% 0.006 80);
  }

  .footer__name {
    display: block;
    font-size: var(--text-xs);
    font-weight: 700;
    letter-spacing: 0.14em;
    color: var(--color-surface);
    margin-bottom: var(--sp-4);
  }

  .footer__city {
    font-size: var(--text-sm);
    color: var(--color-secondary-inverse);
    line-height: 1.6;
    margin-top: var(--sp-2);
  }

  .footer__disclaimer {
    font-size: var(--text-xs);
    color: var(--color-secondary-inverse);
    line-height: 1.6;
    margin-top: var(--sp-4);
    max-width: 40ch;
  }

  .footer__nav ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--sp-3);
  }

  .footer__nav a {
    font-size: var(--text-sm);
    color: var(--color-secondary-inverse);
    transition: color var(--dur-fast) var(--ease-out-quint);
  }

  .footer__nav a:hover { color: var(--color-surface); }

  .footer__contact {
    display: flex;
    flex-direction: column;
    gap: var(--sp-3);
  }

  .footer__contact a {
    font-size: var(--text-sm);
    color: var(--color-secondary-inverse);
    transition: color var(--dur-fast) var(--ease-out-quint);
  }

  .footer__contact a:hover { color: var(--color-surface); }

  .footer__bottom {
    padding-block: var(--sp-5);
  }

  .footer__bottom-inner {
    display: flex;
    justify-content: space-between;
    font-size: var(--text-xs);
    color: var(--color-secondary-inverse);
  }

  @media (max-width: 768px) {
    .footer__inner {
      grid-template-columns: 1fr;
      gap: var(--sp-8);
    }
  }
</style>
