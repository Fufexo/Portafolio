/**
 * Ejecuta `fn` en cada carga de página del ClientRouter (`astro:page-load`)
 * y también ahora mismo si el DOM ya está listo: un módulo puede terminar de
 * cargar después del primer `astro:page-load` y perderse ese evento.
 *
 * `fn` debe ser idempotente (puede llamarse dos veces en la carga inicial).
 */
export function onPageLoad(fn: () => void): void {
  document.addEventListener('astro:page-load', fn);
  if (document.readyState !== 'loading') fn();
}
