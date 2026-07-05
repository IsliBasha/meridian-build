<script>
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';

  $: pathname = $page.url.pathname;
</script>

<Nav />
<main>
  {#key pathname}
    <div
      in:fade={{ duration: 200, delay: 80 }}
      out:fade={{ duration: 120 }}
    >
      <slot />
    </div>
  {/key}
</main>
<Footer />

<style>
  main {
    min-height: calc(100vh - var(--nav-h));
    position: relative;
  }

  @media (prefers-reduced-motion: reduce) {
    div { transition: none !important; }
  }
</style>
