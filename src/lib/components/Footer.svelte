<script>
  import { company } from '$lib/data/placeholder.js';
</script>

<footer class="footer">
  <div class="container footer__inner">
    <div class="footer__brand">
      <span class="footer__name">MERIDIAN BUILD</span>
      <p class="footer__address">{company.address}</p>
      <p class="footer__license">{company.license}</p>
    </div>

    <nav class="footer__nav" aria-label="Footer navigation">
      <ul role="list">
        <li><a href="/projects">Projects</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/careers">Careers</a></li>
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
      <span>&copy; {new Date().getFullYear()} Meridian Build LLC. All rights reserved.</span>
      <span>New York City</span>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--color-dark);
    color: var(--color-surface-2);
    padding-top: var(--sp-20);
  }

  .footer__inner {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: var(--sp-12);
    padding-bottom: var(--sp-16);
    border-bottom: 1px solid oklch(30% 0.006 80);
  }

  .footer__name {
    display: block;
    font-size: var(--text-xs);
    font-weight: 600;
    letter-spacing: 0.14em;
    color: var(--color-surface);
    margin-bottom: var(--sp-4);
  }

  .footer__address,
  .footer__license {
    font-size: var(--text-sm);
    color: oklch(55% 0.006 80);
    line-height: 1.6;
    margin-top: var(--sp-2);
  }

  .footer__nav ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--sp-3);
  }

  .footer__nav a {
    font-size: var(--text-sm);
    color: oklch(55% 0.006 80);
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
    color: oklch(55% 0.006 80);
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
    color: oklch(40% 0.005 80);
  }

  @media (max-width: 768px) {
    .footer__inner {
      grid-template-columns: 1fr;
      gap: var(--sp-8);
    }
  }
</style>
