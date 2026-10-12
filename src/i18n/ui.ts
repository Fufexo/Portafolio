export const defaultLang = 'es' as const;
export type Lang = 'es' | 'en';

export const ui = {
  es: {
    // Brand
    brand: 'Fabrizio',

    // Nav (compartido TopNav + BottomNav)
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'nav.resume': 'Currículum',
    'nav.lang.label': 'Cambiar idioma a inglés',
    'nav.theme.label': 'Cambiar tema',
    'nav.main.label': 'Navegación principal',
    'a11y.skip': 'Saltar al contenido',
    'nav.lang.short': 'EN',
    'nav.theme.joke': 'No no no. Esto es un portfolio, no una hoja de Excel. 🤚',

    // Metadatos por página (título de pestaña y descripción para buscadores)
    'meta.default.description': 'Portafolio de Fabrizio Fournier, desarrollador full stack especializado en Angular.',
    'meta.home.title': 'Fabrizio Fournier — Desarrollador Full Stack',
    'meta.home.description': 'Proyectos de Fabrizio Fournier, desarrollador full stack: e-commerce con pagos reales, apps con IA y productos web de punta a punta.',
    'meta.about.title': 'Sobre mí | Fabrizio Fournier',
    'meta.about.description': 'Fabrizio Fournier, desarrollador full stack especializado en Angular, con experiencia construyendo productos en el sector financiero.',
    'meta.contact.title': 'Contacto | Fabrizio Fournier',
    'meta.contact.description': 'Contacta a Fabrizio Fournier para tu próximo proyecto web: páginas, tiendas online, aplicaciones a medida y más.',
    'stack.hint': 'Selecciona una tecnología para ver cómo la usé en este proyecto.',
    'stack.tablist.label': 'Tecnologías del proyecto',

    // Home / Projects
    'home.eyebrow': 'Fabrizio Fournier · Desarrollador Full Stack',
    'home.filter.label': 'Filtrar proyectos por categoría',
    'home.filter.empty': 'Aún no hay proyectos en esta categoría. Pronto habrá novedades.',
    'home.headline.lead': 'Construyo',
    'home.subtitle':
      'Proyectos seleccionados, desde un e-commerce con pagos reales hasta apps con IA, construidos de punta a punta: del diseño al despliegue.',
    'home.filter.all': 'Todos',
    'home.filter.ecommerce': 'E-Commerce',
    'home.filter.saas': 'SaaS',
    'home.filter.ai': 'IA & ML',
    'home.filter.fintech': 'FinTech',

    // Home
    'home.project.view': 'Ver proyecto',
    'home.coming-soon': 'Próximo proyecto',

    // Páginas de proyecto (textos comunes; lo específico vive en src/content/projects)
    'project.title.suffix': 'Caso de estudio',
    'project.meta.role': 'Rol',
    'project.meta.year': 'Año',
    'project.meta.platform': 'Plataforma',
    'project.challenge.label': 'El problema',
    'project.stack.label': 'Fundamentos',
    'project.stack.title': 'Stack tecnológico',
    'project.stack.in-project': 'En este proyecto',
    'project.gallery.label': 'Galería',
    'project.gallery.title': 'Alta fidelidad',
    'project.cta.title': '¿Quieres ver el proyecto completo?',
    'project.cta.live': 'Ver en vivo',
    'project.cta.back': 'Volver a proyectos',
    'project.flip.hint': 'Ver solución',
    'project.flip.back.title': 'La implementación',
    'project.flip.back.hint': 'Volver',

    // About page (solo bio)
    'about.label': 'Desarrollador Full Stack · Angular',
    'about.headline.lead': 'Diseño y desarrollo',
    'about.bio':
      'Soy Fabrizio, desarrollador full stack especializado en Angular. En Sip, una fintech, construyo aplicaciones empresariales y participé en su migración de Angular 11 a Angular 20 con Standalone Components y Signals. Complemento el frontend con backend en NestJS y despliegues en Azure y AWS, y llevo cada proyecto de la idea al despliegue con atención al detalle.',

    // Skills page
    'skills.label': 'Stack técnico',
    'skills.subtitle': 'Herramientas y tecnologías.',
    'skills.frontend': 'Arquitectura Frontend',
    'skills.designops.desc': 'Angular es mi base: componentes reutilizables, TypeScript estricto y estilos SCSS con metodología BEM. También construyo con React, Next.js y Astro.',
    'skills.backend': 'Backend',
    'skills.backend.desc': 'Java, C#, NestJS, Spring Boot, Node.js y WordPress con ACF para exponer endpoints REST.',
    'skills.databases': 'Bases de datos',
    'skills.cloud': 'Cloud y herramientas',
    'skills.databases.desc': 'Modelado relacional y NoSQL con MySQL, SQL Server, MongoDB, DynamoDB y Supabase.',
    'skills.cloud.desc': 'Despliegues en Azure, AWS y Vercel, con Git, Postman y Figma en el día a día.',

    // About — filosofía
    'about.phil.title': 'Mi filosofía',
    'about.phil.1.title': 'Funcionalidad ante todo',
    'about.phil.1.desc': 'El diseño bonito no vale nada si no funciona. Construyo interfaces que equilibran estética y rendimiento, donde cada decisión tiene un propósito claro.',
    'about.phil.2.title': 'Rendimiento como estándar',
    'about.phil.2.desc': 'Los tiempos de carga y la fluidez son parte del diseño. Un producto rápido es un producto que respeta al usuario.',

    // About — journey
    'about.journey.title': 'Experiencia',

    // Resume
    'resume.download': 'Descargar CV',

    // Contact page
    'contact.status': 'Disponible para proyectos',
    'contact.headline.lead': 'Construyamos',
    'contact.subtitle': 'Desde Lima, para cualquier parte del mundo. Me especializo en arquitecturas web de alto rendimiento que fusionan funcionalidad sólida con experiencias visuales impecables.',
    'contact.email.label': 'Correo directo',
    'contact.location.label': 'Ubicación',
    'contact.location.value': 'Lima, Perú · GMT-5',
    'contact.form.name': 'Nombre completo',
    'contact.form.name.placeholder': 'Tu nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.email.placeholder': 'tu@correo.com',
    'contact.form.type': 'Tipo de proyecto',
    'contact.form.type.placeholder': 'Selecciona una opción',
    'contact.form.type.group.web': 'Desarrollo web',
    'contact.form.type.landing': 'Página web o landing page',
    'contact.form.type.corporate': 'Sitio web corporativo o portafolio',
    'contact.form.type.ecommerce': 'Tienda online (e-commerce)',
    'contact.form.type.webapp': 'Aplicación web a medida',
    'contact.form.type.group.special': 'Especialidades',
    'contact.form.type.backend': 'Backend, APIs e integraciones',
    'contact.form.type.redesign': 'Rediseño o mejora de un sitio existente',
    'contact.form.type.uiux': 'Diseño UI/UX',
    'contact.form.type.group.other': 'Otros',
    'contact.form.type.maintenance': 'Mantenimiento y soporte',
    'contact.form.type.consulting': 'Consultoría técnica',
    'contact.form.type.other': 'Otro',
    'contact.form.message': 'Tu mensaje',
    'contact.form.message.placeholder': 'Cuéntame sobre tu proyecto...',
    'contact.form.submit': 'Enviar mensaje',
    'contact.form.secure': 'Tus datos están seguros',
    'contact.form.success.title': '¡Mensaje enviado!',
    'contact.form.success.sub': 'Te responderé lo antes posible.',
    'contact.form.error': 'Hubo un error. Inténtalo de nuevo.',
    'contact.form.error.connection': 'Hubo un error de conexión. Inténtalo de nuevo.',
    'contact.form.retry': 'Intentar de nuevo',
    'contact.form.sending': 'Enviando…',
    'contact.terminal.status': 'disponible',
    'contact.terminal.location': 'Lima, Perú 🇵🇪',
    'contact.terminal.comment': 'listo para tu próximo proyecto',

    // Footer
    'footer.copy': '© 2026 Fabrizio. Diseñado con precisión.',
  },

  en: {
    // Brand
    brand: 'Fabrizio',

    // Nav
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',
    'nav.lang.label': 'Switch language to Spanish',
    'nav.theme.label': 'Toggle theme',
    'nav.main.label': 'Main navigation',
    'a11y.skip': 'Skip to content',
    'nav.lang.short': 'ES',
    'nav.theme.joke': 'No no no. This is a portfolio, not an Excel spreadsheet. 🤚',

    // Page metadata (tab title and search description)
    'meta.default.description': 'Portfolio of Fabrizio Fournier, a full stack developer specialized in Angular.',
    'meta.home.title': 'Fabrizio Fournier — Full Stack Developer',
    'meta.home.description': 'Projects by Fabrizio Fournier, full stack developer: e-commerce with real payments, AI-powered apps and end-to-end web products.',
    'meta.about.title': 'About | Fabrizio Fournier',
    'meta.about.description': 'Fabrizio Fournier, a full stack developer specialized in Angular, with experience building products in the financial sector.',
    'meta.contact.title': 'Contact | Fabrizio Fournier',
    'meta.contact.description': 'Get in touch with Fabrizio Fournier for your next web project: websites, online stores, custom applications and more.',
    'stack.hint': 'Select a technology to see how I used it in this project.',
    'stack.tablist.label': 'Project technologies',

    // Home / Projects
    'home.eyebrow': 'Fabrizio Fournier · Full Stack Developer',
    'home.filter.label': 'Filter projects by category',
    'home.filter.empty': 'No projects in this category yet. More coming soon.',
    'home.headline.lead': 'I build',
    'home.subtitle':
      'Selected projects, from an e-commerce store with real payments to AI-powered apps, built end to end: from design to deployment.',
    'home.filter.all': 'All',
    'home.filter.ecommerce': 'E-Commerce',
    'home.filter.saas': 'SaaS',
    'home.filter.ai': 'AI & ML',
    'home.filter.fintech': 'FinTech',

    // Home
    'home.project.view': 'View Project',
    'home.coming-soon': 'Upcoming project',

    // Project pages (shared copy; project-specific copy lives in src/content/projects)
    'project.title.suffix': 'Case study',
    'project.meta.role': 'Role',
    'project.meta.year': 'Year',
    'project.meta.platform': 'Platform',
    'project.challenge.label': 'The problem',
    'project.stack.label': 'Foundations',
    'project.stack.title': 'Technology stack',
    'project.stack.in-project': 'In this project',
    'project.gallery.label': 'Gallery',
    'project.gallery.title': 'High fidelity',
    'project.cta.title': 'Want to see the full project?',
    'project.cta.live': 'View live',
    'project.cta.back': 'Back to projects',
    'project.flip.hint': 'See solution',
    'project.flip.back.title': 'The implementation',
    'project.flip.back.hint': 'Back',

    // About page (bio only)
    'about.label': 'Full Stack Developer · Angular',
    'about.headline.lead': 'I design and build',
    'about.bio':
      "I'm Fabrizio, a full stack developer specialized in Angular. At Sip, a fintech company, I build enterprise applications and took part in their migration from Angular 11 to Angular 20 with Standalone Components and Signals. I complement the frontend with NestJS on the backend and deployments on Azure and AWS, taking every project from idea to deployment with attention to detail.",

    // Skills page
    'skills.label': 'Technical Stack',
    'skills.subtitle': 'Tools and technologies.',
    'skills.frontend': 'Frontend Architecture',
    'skills.designops.desc': 'Angular is my foundation: reusable components, strict TypeScript and SCSS styles following BEM. I also build with React, Next.js and Astro.',
    'skills.backend': 'Backend',
    'skills.backend.desc': 'Java, C#, NestJS, Spring Boot, Node.js and WordPress with ACF to expose REST endpoints.',
    'skills.databases': 'Databases',
    'skills.cloud': 'Cloud & tools',
    'skills.databases.desc': 'Relational and NoSQL modeling with MySQL, SQL Server, MongoDB, DynamoDB and Supabase.',
    'skills.cloud.desc': 'Deployments on Azure, AWS and Vercel, with Git, Postman and Figma in my daily workflow.',

    // About — philosophy
    'about.phil.title': 'My philosophy',
    'about.phil.1.title': 'Function first',
    'about.phil.1.desc': 'Beautiful design means nothing if it doesn\'t work. I build interfaces that balance aesthetics and performance, where every decision has a clear purpose.',
    'about.phil.2.title': 'Performance as standard',
    'about.phil.2.desc': 'Load times and fluidity are part of the design. A fast product is a product that respects the user.',

    // About — journey
    'about.journey.title': 'Experience',

    // Resume
    'resume.download': 'Download CV',

    // Contact page
    'contact.status': 'Available for projects',
    'contact.headline.lead': "Let's build",
    'contact.subtitle': 'Based in Lima, working globally. I specialize in high-performance web architectures that fuse solid functionality with impeccable visual experiences.',
    'contact.email.label': 'Direct email',
    'contact.location.label': 'Location',
    'contact.location.value': 'Lima, Peru · GMT-5',
    'contact.form.name': 'Full name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email address',
    'contact.form.email.placeholder': 'you@email.com',
    'contact.form.type': 'Project type',
    'contact.form.type.placeholder': 'Select an option',
    'contact.form.type.group.web': 'Web development',
    'contact.form.type.landing': 'Website or landing page',
    'contact.form.type.corporate': 'Business website or portfolio',
    'contact.form.type.ecommerce': 'Online store (e-commerce)',
    'contact.form.type.webapp': 'Custom web application',
    'contact.form.type.group.special': 'Specialties',
    'contact.form.type.backend': 'Backend, APIs and integrations',
    'contact.form.type.redesign': 'Redesign or improve an existing site',
    'contact.form.type.uiux': 'UI/UX design',
    'contact.form.type.group.other': 'Other',
    'contact.form.type.maintenance': 'Maintenance and support',
    'contact.form.type.consulting': 'Technical consulting',
    'contact.form.type.other': 'Something else',
    'contact.form.message': 'Your message',
    'contact.form.message.placeholder': 'Tell me about your project...',
    'contact.form.submit': 'Send message',
    'contact.form.secure': 'Your data is safe',
    'contact.form.success.title': 'Message sent!',
    'contact.form.success.sub': "I'll get back to you as soon as possible.",
    'contact.form.error': 'Something went wrong. Please try again.',
    'contact.form.error.connection': 'Connection error. Please try again.',
    'contact.form.retry': 'Try again',
    'contact.form.sending': 'Sending…',
    'contact.terminal.status': 'available',
    'contact.terminal.location': 'Lima, Peru 🇵🇪',
    'contact.terminal.comment': 'ready for your next project',

    // Footer
    'footer.copy': '© 2026 Fabrizio. Designed with precision.',
  },
} as const;

export type UiKey = keyof typeof ui.es;

/** Texto en los dos idiomas del sitio. */
export type Localized<T = string> = Record<Lang, T>;

/** Idioma de la página a partir de Astro.currentLocale (español por defecto). */
export function getLang(locale: string | undefined): Lang {
  return locale === 'en' ? 'en' : 'es';
}

/** Traductor de claves de la interfaz para un idioma: `const tr = useTranslations(lang)`. */
export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key];
}

/** Devuelve una clave de traducción en ambos idiomas: { es, en }. */
export function t(key: UiKey): Localized {
  return { es: ui.es[key], en: ui.en[key] };
}

/** Resuelve un texto que puede ser fijo ("PCI-DSS") o traducido ({ es, en }). */
export function pick(value: string | Localized, lang: Lang): string {
  return typeof value === 'string' ? value : value[lang];
}

/** Ruta de una página en el idioma dado, siempre con barra final: '/about' → '/en/about/'. */
export function localizePath(path: string, lang: Lang): string {
  let clean = path.startsWith('/') ? path : `/${path}`;
  if (!clean.endsWith('/')) clean += '/';
  if (lang === defaultLang) return clean;
  return clean === '/' ? '/en/' : `/en${clean}`;
}

/** Quita el prefijo de idioma de una ruta: '/en/about' → '/about'. */
export function stripLangPrefix(pathname: string): string {
  if (pathname === '/en' || pathname === '/en/') return '/';
  return pathname.startsWith('/en/') ? pathname.slice(3) : pathname;
}

// Palabras que rotan en el titular de cada página (RotatingHeadline).
// Mantenlas cortas: la más ancha (en cualquier idioma) define la altura reservada.
export const headlineWords = {
  home: {
    es: ['tiendas online', 'apps con IA', 'productos fintech', 'interfaces rápidas'],
    en: ['online stores', 'AI-powered apps', 'fintech products', 'fast interfaces'],
  },
  about: {
    es: ['apps en Angular', 'APIs escalables', 'productos web'],
    en: ['Angular apps', 'scalable APIs', 'web products'],
  },
  contact: {
    es: ['algo juntos.', 'tu app.', 'tu tienda.', 'tu idea.'],
    en: ['together.', 'your app.', 'your store.', 'your idea.'],
  },
};
