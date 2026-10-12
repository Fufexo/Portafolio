/**
 * Aparición suave de los bloques de cada <section> dentro de <main> al hacer scroll.
 * Se llama en cada `astro:page-load` (carga inicial y navegaciones del ClientRouter).
 */
const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT']);
const SKIP_CLASSES = ['absolute', 'fixed', 'pointer-events-none'];

function shouldSkip(el: Element): boolean {
  return SKIP_TAGS.has(el.tagName) || SKIP_CLASSES.some((c) => el.classList.contains(c));
}

export function initScrollReveal(): void {
  const targets: HTMLElement[] = [];

  document.querySelectorAll('main section').forEach((section) => {
    Array.from(section.children)
      .filter((el): el is HTMLElement => el instanceof HTMLElement && !shouldSkip(el) && !el.classList.contains('scroll-reveal'))
      .forEach((el, idx) => {
        el.classList.add('scroll-reveal');
        el.style.setProperty('--reveal-delay', `${idx * 90}ms`);
        targets.push(el);
      });
  });

  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // También revela lo que quedó por encima del viewport (scroll rápido, anclas, volver atrás)
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -50px 0px' },
  );

  targets.forEach((el) => observer.observe(el));
}
