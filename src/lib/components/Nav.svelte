<script>
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import { afterNavigate } from '$app/navigation';
  import { onMount, onDestroy } from 'svelte';

  let showQuoteBar = false;
  let mobileOpen = false;
  /** @type {HTMLButtonElement} */
  let hamburgerBtn;

  const links = [
    { href: '/about', label: 'About' },
    { href: '/clients', label: 'Clients' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  onMount(() => {
    const handler = () => {
      const hero = document.querySelector('[data-hero]');
      showQuoteBar = hero ? hero.getBoundingClientRect().bottom < 0 : false;
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  });

  onDestroy(() => {
    if (browser) document.body.style.overflow = '';
  });

  function openMobile() {
    mobileOpen = true;
    document.body.style.overflow = 'hidden';
  }

  function closeMobile() {
    mobileOpen = false;
    document.body.style.overflow = '';
    hamburgerBtn?.focus();
  }

  function toggleMobile() {
    mobileOpen ? closeMobile() : openMobile();
  }

  /** @param {KeyboardEvent} e */
  function onGlobalKeydown(e) {
    if (e.key === 'Escape' && mobileOpen) closeMobile();
  }

  // Close on route change. Using afterNavigate (not a `$:` statement) deliberately —
  // a reactive statement that reads `mobileOpen` inside its body gets `mobileOpen`
  // added to its own dependency list by Svelte's compiler, so opening the menu would
  // immediately re-trigger this block and close it again in the same tick.
  afterNavigate(() => {
    if (mobileOpen) closeMobile();
  });

  /** @param {HTMLElement} node @param {boolean} [active] */
  function trapFocus(node, active) {
    const sel = 'a[href], button:not([disabled])';
    const focusable = () => /** @type {HTMLElement[]} */ ([...node.querySelectorAll(sel)]);

    /** @param {KeyboardEvent} e */
    function handleKey(e) {
      if (e.key !== 'Tab') return;
      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    node.addEventListener('keydown', handleKey);
    setTimeout(() => focusable()[0]?.focus(), 50);

    return { destroy() { node.removeEventListener('keydown', handleKey); } };
  }
</script>

<svelte:window on:keydown={onGlobalKeydown} />

<!-- Sticky quote bar — slides in once the current page's hero has scrolled out of view -->
{#if showQuoteBar}
  <div class="quote-bar" role="region" aria-label="Quote call to action">
    <span class="quote-bar__brand">ECO VOLT ELECTRICAL</span>
    <span class="quote-bar__msg">Have a project in mind? Let's talk it through.</span>
    <a href="/contact" class="quote-bar__cta">SCHEDULE A CALL →</a>
  </div>
{/if}

<nav class="nav" class:nav--bar-visible={showQuoteBar} aria-label="Main navigation">
  <div class="nav__inner">
    <a href="/" class="nav__logo" aria-label="Eco Volt Electrical — Home">
      <span class="nav__logo-text">ECO VOLT ELECTRICAL</span>
    </a>

    <!-- Desktop links -->
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

    <a href="/contact" class="nav__cta" aria-label="Get in touch">
      GET IN TOUCH →
    </a>

    <!-- Mobile hamburger -->
    <button
      bind:this={hamburgerBtn}
      class="nav__hamburger"
      aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={mobileOpen}
      aria-controls="mobile-menu"
      on:click={toggleMobile}
    >
      <span class="bar" class:bar--1-open={mobileOpen}></span>
      <span class="bar" class:bar--2-open={mobileOpen}></span>
      <span class="bar" class:bar--3-open={mobileOpen}></span>
    </button>
  </div>
</nav>

<div class="nav__spacer" aria-hidden="true"></div>

<!-- Invisible click-to-close backdrop -->
{#if mobileOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="mobile-backdrop" on:click={closeMobile} aria-hidden="true"></div>
{/if}

<!-- Mobile full-viewport dark takeover -->
<div
  id="mobile-menu"
  class="mobile-panel"
  class:mobile-panel--open={mobileOpen}
  role="dialog"
  aria-modal="true"
  aria-label="Site navigation"
  aria-hidden={!mobileOpen}
  use:trapFocus={mobileOpen}
>
  <div class="mobile-panel__header">
    <span class="mobile-logo">ECO VOLT ELECTRICAL</span>
    <button class="mobile-close" on:click={closeMobile} aria-label="Close navigation menu">
      <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </button>
  </div>

  <nav aria-label="Mobile navigation links">
    <ul class="mobile-links" role="list">
      {#each links as link}
        <li>
          <a
            href={link.href}
            class="mobile-link"
            aria-current={$page.url.pathname.startsWith(link.href) ? 'page' : undefined}
            tabindex={mobileOpen ? 0 : -1}
          >
            {link.label}
            <span class="mobile-link__arrow" aria-hidden="true">→</span>
          </a>
        </li>
      {/each}
    </ul>
  </nav>

  <div class="mobile-panel__footer">
    <a
      href="/contact"
      class="mobile-cta"
      tabindex={mobileOpen ? 0 : -1}
    >
      GET IN TOUCH →
    </a>
  </div>
</div>

<style>
  /* ── Sticky quote bar ── */
  .quote-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 101;
    height: var(--quote-bar-h);
    background: var(--color-dark);
    color: var(--color-surface);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sp-8);
    padding-inline: var(--gutter);
    animation: barSlideDown 400ms cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  @keyframes barSlideDown {
    from { transform: translateY(-100%); }
    to { transform: translateY(0); }
  }

  .quote-bar__brand {
    font-weight: 700;
    font-size: var(--text-xs);
    letter-spacing: 0.02em;
    flex-shrink: 0;
  }

  .quote-bar__msg {
    font-weight: 300;
    font-size: var(--text-sm);
    color: oklch(72% 0.006 80);
    flex: 1;
    text-align: center;
  }

  .quote-bar__cta {
    font-weight: 700;
    font-size: var(--text-xs);
    letter-spacing: 0.06em;
    border-bottom: 1.5px solid var(--color-surface);
    padding-bottom: 2px;
    flex-shrink: 0;
    white-space: nowrap;
  }

  /* ── Desktop nav ── */
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: var(--nav-h);
    background: var(--color-surface);
    border-bottom: 2px solid var(--color-ink);
    transition: transform var(--dur-base) var(--ease-out-quint);
  }

  .nav--bar-visible {
    transform: translateY(var(--quote-bar-h));
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

  .nav__logo { margin-right: auto; }

  .nav__logo-text {
    font-size: var(--text-xs);
    font-weight: 700;
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
    font-weight: 600;
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
    height: 2px;
    background: var(--color-accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--dur-fast) var(--ease-out-quint);
  }

  .nav__link:hover,
  .nav__link[aria-current='page'] { color: var(--color-text); }

  .nav__link[aria-current='page']::after { transform: scaleX(1); }

  .nav__cta {
    font-size: var(--text-xs);
    font-weight: 700;
    letter-spacing: 0.04em;
    color: var(--color-surface);
    background: var(--color-ink);
    padding: var(--sp-3) var(--sp-5);
    transition: background var(--dur-fast) var(--ease-out-quint);
  }

  .nav__cta:hover {
    background: var(--color-accent);
  }

  .nav__spacer { height: var(--nav-h); }

  /* ── Hamburger button ── */
  .nav__hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 44px;
    height: 44px;
    background: none;
    border: none;
    padding: 0 var(--sp-2);
    cursor: pointer;
    flex-shrink: 0;
  }

  .bar {
    display: block;
    width: 22px;
    height: 1.5px;
    background: var(--color-text);
    transition:
      transform 280ms var(--ease-out-expo),
      opacity 180ms ease;
    transform-origin: center;
  }

  .bar--1-open { transform: translateY(6.5px) rotate(45deg); }
  .bar--2-open { opacity: 0; transform: scaleX(0); }
  .bar--3-open { transform: translateY(-6.5px) rotate(-45deg); }

  /* ── Backdrop (invisible, catches outside clicks) ── */
  .mobile-backdrop {
    position: fixed;
    inset: 0;
    z-index: 199;
    background: transparent;
  }

  /* ── Mobile panel — full-viewport dark takeover ── */
  .mobile-panel {
    position: fixed;
    inset: 0;
    z-index: 200;
    background: var(--color-dark);
    display: flex;
    flex-direction: column;
    transform: translateY(-100%);
    transition: transform 320ms var(--ease-out-expo);
    overflow: hidden;
    /* Keep in DOM but off-screen so transition works */
    pointer-events: none;
  }

  .mobile-panel--open {
    transform: translateY(0);
    pointer-events: auto;
  }

  .mobile-panel__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--sp-6);
    height: var(--nav-h);
    border-bottom: 1px solid oklch(30% 0.006 80);
    flex-shrink: 0;
  }

  .mobile-logo {
    font-size: var(--text-xs);
    font-weight: 700;
    letter-spacing: 0.14em;
    color: var(--color-surface);
  }

  .mobile-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: none;
    border: none;
    color: var(--color-surface);
    cursor: pointer;
  }

  .mobile-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: var(--sp-8) 0;
    flex: 1;
    justify-content: center;
  }

  .mobile-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--sp-5) var(--sp-8);
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--color-surface);
    letter-spacing: -0.02em;
    transition: color var(--dur-fast) var(--ease-out-quint);
    min-height: 44px;
  }

  .mobile-link:hover,
  .mobile-link[aria-current='page'] {
    color: var(--color-accent-on-dark);
  }

  .mobile-link__arrow {
    font-size: var(--text-lg);
    opacity: 0;
    transform: translateX(-4px);
    transition:
      opacity var(--dur-fast) ease,
      transform var(--dur-fast) var(--ease-out-quint);
  }

  .mobile-link:hover .mobile-link__arrow,
  .mobile-link[aria-current='page'] .mobile-link__arrow {
    opacity: 1;
    transform: translateX(0);
  }

  .mobile-panel__footer {
    padding: var(--sp-6) var(--sp-8);
    border-top: 1px solid oklch(30% 0.006 80);
    flex-shrink: 0;
  }

  .mobile-cta {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--text-sm);
    font-weight: 700;
    letter-spacing: 0.04em;
    padding: var(--sp-4) var(--sp-6);
    background: var(--color-surface);
    color: var(--color-ink);
    min-height: 44px;
    transition: background var(--dur-fast) var(--ease-out-quint);
  }

  .mobile-cta:hover {
    background: var(--color-accent-mid);
    color: var(--color-surface);
  }

  /* ── Responsive ── */
  @media (max-width: 640px) {
    .nav__links { display: none; }
    .nav__cta { display: none; }
    .nav__hamburger { display: flex; }
    .quote-bar__msg { display: none; }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .nav, .mobile-panel, .quote-bar { transition: none; animation: none; }
    .bar { transition: none; }
  }
</style>
