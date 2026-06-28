<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let scrolled = false;

  const links = [
    { href: '/projects', label: 'Projects' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/careers', label: 'Careers' },
  ];

  onMount(() => {
    const handler = () => { scrolled = window.scrollY > 60; };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  });
</script>

<nav class="nav" class:nav--scrolled={scrolled} aria-label="Main navigation">
  <div class="nav__inner">
    <a href="/" class="nav__logo" aria-label="Meridian Build — Home">
      <span class="nav__logo-text">MERIDIAN BUILD</span>
    </a>

    <ul class="nav__links" role="list">
      {#each links as link}
        <li>
          <a
            href={link.href}
            class="nav__link"
            aria-current={$page.url.pathname.startsWith(link.href) ? 'page' : undefined}
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>

    <a href="/contact" class="nav__cta" aria-label="Contact us">
      Contact
    </a>
  </div>
</nav>

<div class="nav__spacer" aria-hidden="true"></div>

<style>
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: var(--nav-h);
    background: transparent;
    transition:
      background var(--dur-base) var(--ease-out-quint),
      border-color var(--dur-base) var(--ease-out-quint);
    border-bottom: 1px solid transparent;
  }

  .nav--scrolled {
    background: var(--color-surface);
    border-bottom-color: var(--color-line);
  }

  .nav__inner {
    display: flex;
    align-items: center;
    gap: var(--sp-8);
    height: 100%;
    max-width: var(--max-width);
    margin-inline: auto;
    padding-inline: var(--gutter);
  }

  .nav__logo {
    margin-right: auto;
  }

  .nav__logo-text {
    font-size: var(--text-xs);
    font-weight: 600;
    letter-spacing: 0.14em;
    color: var(--color-text);
  }

  .nav__links {
    display: flex;
    align-items: center;
    gap: var(--sp-8);
    list-style: none;
  }

  .nav__link {
    font-size: var(--text-sm);
    font-weight: 400;
    color: var(--color-secondary);
    transition: color var(--dur-fast) var(--ease-out-quint);
    position: relative;
    padding-bottom: 2px;
  }

  .nav__link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 1.5px;
    background: var(--color-accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--dur-fast) var(--ease-out-quint);
  }

  .nav__link:hover,
  .nav__link[aria-current='page'] {
    color: var(--color-text);
  }

  .nav__link[aria-current='page']::after {
    transform: scaleX(1);
  }

  .nav__cta {
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--color-accent);
    border: 1px solid var(--color-accent);
    padding: var(--sp-2) var(--sp-5);
    letter-spacing: 0.02em;
    transition:
      background var(--dur-fast) var(--ease-out-quint),
      color var(--dur-fast) var(--ease-out-quint);
  }

  .nav__cta:hover {
    background: var(--color-accent);
    color: var(--color-surface);
  }

  .nav__spacer {
    height: var(--nav-h);
  }

  @media (max-width: 640px) {
    .nav__links { display: none; }
  }
</style>
