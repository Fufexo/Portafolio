// Rutas con barra final: coinciden con las URLs que genera el build (/about/ → about/index.html)
export const navItems = [
  { href: '/', labelKey: 'nav.projects', icon: 'grid_view' },
  { href: '/about/', labelKey: 'nav.about', icon: 'person' },
  { href: '/contact/', labelKey: 'nav.contact', icon: 'mail' },
] as const;

const withSlash = (path: string) => (path.endsWith('/') ? path : `${path}/`);

/**
 * ¿El enlace corresponde a la página actual? `pathname` va sin prefijo de idioma.
 * Las páginas de proyecto cuentan como parte de "Proyectos".
 */
export function isNavActive(href: string, pathname: string): boolean {
  const current = withSlash(pathname);
  if (href === '/') return current === '/' || current.startsWith('/proyectos/');
  return current.startsWith(withSlash(href));
}
