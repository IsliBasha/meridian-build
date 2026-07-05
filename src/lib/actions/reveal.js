/**
 * Svelte action: adds `is-revealed` class when element enters the viewport.
 * Respects prefers-reduced-motion — reveals immediately if motion is reduced.
 *
 * Usage: <section use:reveal> or <section use:reveal={{ threshold: 0.2, delay: 100 }}>
 *
 * @param {HTMLElement} node
 * @param {{ threshold?: number, delay?: number }} [options]
 */
export function reveal(node, options = {}) {
  const { threshold = 0.15, delay = 0 } = options;

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return {};
  }

  /** @type {ReturnType<typeof setTimeout>} */
  let timer;

  // Mark element as animation-ready on mount (sets initial hidden state via CSS)
  // Using rAF so SSR-rendered content stays visible until JS hydrates
  requestAnimationFrame(() => {
    node.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timer = setTimeout(() => {
              node.classList.add('is-revealed');
            }, delay);
            observer.unobserve(node);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);
  });

  return {
    destroy() {
      clearTimeout(timer);
    }
  };
}
