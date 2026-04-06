export const defaultLang = 'es' as const;
export type Lang = 'es' | 'en';

export const gradientStyle =
  'background: linear-gradient(135deg, #d2bbff 0%, #7c3aed 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;';

export const ui = {
  es: {
    // Brand
    brand: 'Fabrizio',

    // Nav (compartido TopNav + BottomNav)
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'nav.resume': 'Currículum',

    // Home / Projects
    'home.archive': 'Archivo 2026',
    'home.title.html': `<span class="hero-word" style="${gradientStyle}">PROYECTOS</span><br><span class="hero-accent" style="${gradientStyle}">SELECCIONADOS</span>`,
    'home.subtitle':
      'Una galería digital que muestra profundidad técnica, precisión arquitectónica e ingeniería de alto rendimiento en el desarrollo web moderno.',
    'home.filter.all': 'Todos',
    'home.filter.ecommerce': 'E-Commerce',
    'home.filter.saas': 'SaaS',
    'home.filter.ai': 'IA & ML',
    'home.filter.fintech': 'FinTech',

    // Home
    'home.project.view': 'Ver Proyecto',
    'home.coming-soon': 'Próximo proyecto',

    // Atelier card
    'atelier.desc': 'Moda contemporánea con esencia atemporal. Calidad y diseño en cada prenda.',

    // Atelier project detail
    'atelier.badge': 'E-Commerce',
    'atelier.hero.subtitle': 'E-commerce de moda para el mercado peruano con pagos reales vía Culqi, panel de administración completo y emails transaccionales automáticos.',
    'atelier.meta.role': 'Rol',
    'atelier.meta.role.value': 'Full Stack Developer',
    'atelier.meta.timeline': 'Timeline',
    'atelier.meta.timeline.value': '2026',
    'atelier.meta.platform': 'Plataforma',
    'atelier.meta.platform.value': 'Web',
    'atelier.challenge.label': 'El Problema',
    'atelier.challenge.title': 'Un e-commerce real para el mercado peruano, de cero.',
    'atelier.challenge.body': 'Construir una tienda online completa — catálogo, carrito, checkout con pago real y panel admin — orientada al mercado local con integración de pasarela de pago peruana y gestión operacional desde el día uno.',
    'atelier.challenge.p1.title': 'Pagos locales',
    'atelier.challenge.p1.desc': 'Integrar Culqi (tarjetas peruanas) con tokenización segura y descuento de stock automático tras cada cobro exitoso.',
    'atelier.challenge.p2.title': 'Operación autónoma',
    'atelier.challenge.p2.desc': 'El negocio necesitaba gestionar productos, pedidos y analíticas sin depender de un desarrollador para el día a día.',
    'atelier.challenge.p3.title': 'Emails transaccionales',
    'atelier.challenge.p3.desc': 'Cada venta debía disparar automáticamente un email de confirmación al cliente y una notificación al administrador.',
    'atelier.challenge.p4.title': 'Carrito persistente',
    'atelier.challenge.p4.desc': 'El carrito tenía que sobrevivir recargas y cierres de pestaña sin perder los productos seleccionados.',
    'atelier.solution.label': 'La Solución',
    'atelier.solution.title': 'Next.js App Router + Supabase como columna vertebral.',
    'atelier.solution.body': 'App Router con Server Components para máximo rendimiento y SEO, Supabase para auth, base de datos y storage de imágenes, Culqi para cobros reales y Resend para emails transaccionales automáticos.',
    'atelier.solution.li1': 'Server Components en catálogo y producto para carga instantánea y SEO óptimo.',
    'atelier.solution.li2': 'Checkout con Culqi: tokenización, cobro y descuento de stock en una sola transacción atómica.',
    'atelier.solution.li3': 'Panel /admin completo: CRUD de productos, gestión de pedidos, analíticas de ventas y alertas de stock bajo.',
    'atelier.stack.in-project': 'En este proyecto',
    'atelier.flip.hint': 'Ver solución',
    'atelier.flip.back.title': 'La implementación',
    'atelier.stack.label': 'Fundamentos',
    'atelier.stack.title': 'Stack Tecnológico',
    'atelier.stack.nextjs.desc': 'App Router con Server Components, rutas dinámicas y optimización automática de imágenes.',
    'atelier.stack.supabase.desc': 'Auth, base de datos PostgreSQL, storage de imágenes y políticas RLS por rol.',
    'atelier.stack.ts.desc': 'Tipado estricto en toda la codebase — tipos globales, helpers y contextos completamente tipados.',
    'atelier.stack.tailwind.desc': 'Tailwind v4 con sistema de diseño coherente y completamente responsive.',
    'atelier.stack.culqi.desc': 'Pasarela de pago peruana: tokenización de tarjetas y cobro seguro en el servidor.',
    'atelier.stack.resend.desc': 'Emails transaccionales: confirmación al cliente y notificación al admin tras cada venta.',
    'atelier.stack.vercel.desc': 'Deploy automático con edge network global y previews por rama.',
    'atelier.gallery.label': 'Galería',
    'atelier.gallery.title': 'Alta Fidelidad',
    'atelier.gallery.1': 'Hero — Primera impresión',
    'atelier.gallery.1.desc': 'El inicio de la tienda: visual de impacto y llamada a la acción directa.',
    'atelier.gallery.2': 'Nosotros — La identidad de marca',
    'atelier.gallery.2.desc': 'Página editorial que comunica los valores: diseño, calidad y atemporalidad.',
    'atelier.gallery.3': 'Tienda — Catálogo con filtros',
    'atelier.gallery.3.desc': 'Grid de productos con filtros por género, categoría y búsqueda en tiempo real.',
    'atelier.cta.title': '¿Quieres ver el proyecto completo?',
    'atelier.cta.live': 'Ver',
    'atelier.cta.back': 'Volver a proyectos',

    // About page (solo bio)
    'about.label': 'Desarrollador Full Stack',
    'about.title.html': `<span class="hero-word" style="${gradientStyle}">CONSTRUYENDO</span><br><span class="hero-accent" style="${gradientStyle}">PRODUCTOS DIGITALES</span>`,
    'about.bio':
      'Soy Fabrizio, desarrollador full stack apasionado por construir productos digitales que combinan funcionalidad sólida con experiencias visuales impecables. Me especializo en arquitecturas modernas con Next.js, React y TypeScript, llevando cada proyecto desde la idea hasta el deploy con atención al detalle.',
    'about.badge.years': '3+ Años',
    'about.badge.label': 'Experiencia en la Industria',
    'about.work.title': 'Historial Laboral',

    // Skills page
    'skills.label': 'Stack Técnico',
    'skills.title.html': `Mis <span style="${gradientStyle}">Habilidades.</span>`,
    'skills.subtitle': 'Herramientas y tecnologías.',
    'skills.frontend': 'Arquitectura Frontend',
    'skills.designops': 'Design Ops',
    'skills.designops.desc': 'Sistemizando lenguajes visuales en librerías de componentes escalables y accesibles.',
    'skills.backend': 'Backend',
    'skills.backend.desc': 'Java, C#, NestJS, Spring Boot, Node.js y WordPress con ACF para exponer endpoints REST.',
    'skills.databases': 'Bases de datos',
    'skills.cloud': 'Cloud & Tools',
    'skills.scalability': 'Escalabilidad & Backend',
    'skills.scalability.desc': 'Funciones serverless y modelado de datos robusto para máximo rendimiento.',

    // About — filosofía
    'about.phil.title': 'La Filosofía',
    'about.phil.1.title': 'Funcionalidad ante todo',
    'about.phil.1.desc': 'El diseño bonito no vale nada si no funciona. Construyo interfaces que equilibran estética y rendimiento, donde cada decisión tiene un propósito claro.',
    'about.phil.2.title': 'Rendimiento como estándar',
    'about.phil.2.desc': 'Los tiempos de carga y la fluidez son parte del diseño. Un producto rápido es un producto que respeta al usuario.',

    // About — journey
    'about.journey.title': 'El Recorrido',

    // Resume
    'resume.download': 'Descargar CV',

    // Contact page
    'contact.status': 'Disponible para proyectos',
    'contact.title': 'Construyamos algo',
    'contact.title.accent': 'juntos.',
    'contact.subtitle': 'Desde Lima, trabajando globalmente. Me especializo en arquitecturas web de alto rendimiento que fusionan funcionalidad sólida con experiencias visuales impecables.',
    'contact.email.label': 'Correo directo',
    'contact.location.label': 'Ubicación',
    'contact.location.value': 'Lima, Perú · GMT-5',
    'contact.form.name': 'Nombre completo',
    'contact.form.name.placeholder': 'Tu nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.email.placeholder': 'tu@correo.com',
    'contact.form.type': 'Tipo de proyecto',
    'contact.form.type.1': 'Diseño UI/UX',
    'contact.form.type.2': 'Desarrollo Full Stack',
    'contact.form.type.3': 'Estrategia técnica',
    'contact.form.type.4': 'Otro',
    'contact.form.message': 'Tu mensaje',
    'contact.form.message.placeholder': 'Cuéntame sobre tu proyecto...',
    'contact.form.submit': 'Enviar mensaje',
    'contact.form.secure': 'Tus datos están seguros',
    'contact.form.success.title': '¡Mensaje enviado!',
    'contact.form.success.sub': 'Te responderé lo antes posible.',
    'contact.form.error': 'Hubo un error. Intentá de nuevo.',
    'contact.form.error.connection': 'Hubo un error de conexión.',
    'contact.image.label': 'Estudio digital',
    'contact.image.sublabel': 'Esperando tus parámetros.',

    // Footer
    'footer.copy': '© 2026 Fabrizio. Diseñado con precisión.',
  },

  en: {
    // Brand
    brand: 'Fabrizio',

    // Nav
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',

    // Home / Projects
    'home.archive': 'Archive 2026',
    'home.title.html': `<span class="hero-word" style="${gradientStyle}">SELECTED</span><br><span class="hero-accent" style="${gradientStyle}">PROJECTS</span>`,
    'home.subtitle':
      'A digital gallery showcasing technical depth, architectural precision, and high-performance engineering in modern web development.',
    'home.filter.all': 'All',
    'home.filter.ecommerce': 'E-Commerce',
    'home.filter.saas': 'SaaS',
    'home.filter.ai': 'AI & ML',
    'home.filter.fintech': 'FinTech',

    // Home
    'home.project.view': 'View Project',
    'home.coming-soon': 'Upcoming project',

    // Atelier card
    'atelier.desc': 'Contemporary fashion with timeless essence. Quality and design in every garment.',

    // Atelier project detail
    'atelier.badge': 'E-Commerce',
    'atelier.hero.subtitle': 'Fashion e-commerce for the Peruvian market with real payments via Culqi, a full admin panel and automatic transactional emails.',
    'atelier.meta.role': 'Role',
    'atelier.meta.role.value': 'Full Stack Developer',
    'atelier.meta.timeline': 'Timeline',
    'atelier.meta.timeline.value': '2026',
    'atelier.meta.platform': 'Platform',
    'atelier.meta.platform.value': 'Web',
    'atelier.challenge.label': 'The Problem',
    'atelier.challenge.title': 'A real e-commerce for the Peruvian market, from scratch.',
    'atelier.challenge.body': 'Build a complete online store — catalog, cart, checkout with real payments and admin panel — tailored to the local market with a Peruvian payment gateway and operational management from day one.',
    'atelier.challenge.p1.title': 'Local payments',
    'atelier.challenge.p1.desc': 'Integrate Culqi (Peruvian cards) with secure tokenization and automatic stock deduction after each successful charge.',
    'atelier.challenge.p2.title': 'Autonomous operation',
    'atelier.challenge.p2.desc': 'The business needed to manage products, orders and analytics without relying on a developer day-to-day.',
    'atelier.challenge.p3.title': 'Transactional emails',
    'atelier.challenge.p3.desc': 'Every sale needed to automatically trigger a confirmation email to the customer and a notification to the admin.',
    'atelier.challenge.p4.title': 'Persistent cart',
    'atelier.challenge.p4.desc': 'The cart had to survive page reloads and tab closes without losing the selected products.',
    'atelier.solution.label': 'The Solution',
    'atelier.solution.title': 'Next.js App Router + Supabase as the backbone.',
    'atelier.solution.body': 'App Router with Server Components for maximum performance and SEO, Supabase for auth, database and image storage, Culqi for real payments and Resend for automatic transactional emails.',
    'atelier.solution.li1': 'Server Components in catalog and product pages for instant load and optimal SEO.',
    'atelier.solution.li2': 'Culqi checkout: tokenization, charge and stock deduction in a single atomic transaction.',
    'atelier.solution.li3': 'Full /admin panel: product CRUD, order management, sales analytics and low-stock alerts.',
    'atelier.stack.in-project': 'In this project',
    'atelier.flip.hint': 'See solution',
    'atelier.flip.back.title': 'The implementation',
    'atelier.stack.label': 'Foundations',
    'atelier.stack.title': 'Technology Stack',
    'atelier.stack.nextjs.desc': 'App Router with Server Components, dynamic routes and automatic image optimization.',
    'atelier.stack.supabase.desc': 'Auth, PostgreSQL database, image storage and RLS policies by role.',
    'atelier.stack.ts.desc': 'Strict typing across the entire codebase — global types, helpers and fully typed contexts.',
    'atelier.stack.tailwind.desc': 'Tailwind v4 with a coherent and fully responsive design system.',
    'atelier.stack.culqi.desc': 'Peruvian payment gateway: card tokenization and secure server-side charging.',
    'atelier.stack.resend.desc': 'Transactional emails: customer confirmation and admin notification after each sale.',
    'atelier.stack.vercel.desc': 'Automatic deployment with global edge network and branch previews.',
    'atelier.gallery.label': 'Gallery',
    'atelier.gallery.title': 'High Fidelity',
    'atelier.gallery.1': 'Hero — First Impression',
    'atelier.gallery.1.desc': 'The store entrance: bold visual and direct call to action.',
    'atelier.gallery.2': 'About — Brand Identity',
    'atelier.gallery.2.desc': 'Editorial page communicating core values: design, quality and timelessness.',
    'atelier.gallery.3': 'Store — Catalog with Filters',
    'atelier.gallery.3.desc': 'Product grid with gender, category and real-time search filters.',
    'atelier.cta.title': 'Want to see the full project?',
    'atelier.cta.live': 'View',
    'atelier.cta.back': 'Back to projects',

    // About page (bio only)
    'about.label': 'Full Stack Developer',
    'about.title.html': `<span class="hero-word" style="${gradientStyle}">Building</span><br><span class="hero-accent" style="${gradientStyle}">Digital Products</span>`,
    'about.bio':
      "I'm Fabrizio, a full stack developer passionate about building digital products that combine solid functionality with impeccable visual experiences. I specialize in modern architectures with Next.js, React and TypeScript, taking every project from idea to deployment with attention to detail.",
    'about.badge.years': '3+ Years',
    'about.badge.label': 'Industry Experience',
    'about.work.title': 'Work History',

    // Skills page
    'skills.label': 'Technical Stack',
    'skills.title.html': `My <span style="${gradientStyle}">Skills.</span>`,
    'skills.subtitle': 'Tools and technologies.',
    'skills.frontend': 'Frontend Architecture',
    'skills.designops': 'Design Ops',
    'skills.designops.desc': 'Systemizing visual languages into scalable, accessible component libraries.',
    'skills.backend': 'Backend',
    'skills.backend.desc': 'Java, C#, NestJS, Spring Boot, Node.js and WordPress with ACF to expose REST endpoints.',
    'skills.databases': 'Databases',
    'skills.cloud': 'Cloud & Tools',
    'skills.scalability': 'Scalability & Backend',
    'skills.scalability.desc': 'Serverless functions and robust data modeling for peak performance.',

    // About — philosophy
    'about.phil.title': 'The Philosophy',
    'about.phil.1.title': 'Function first',
    'about.phil.1.desc': 'Beautiful design means nothing if it doesn\'t work. I build interfaces that balance aesthetics and performance, where every decision has a clear purpose.',
    'about.phil.2.title': 'Performance as standard',
    'about.phil.2.desc': 'Load times and fluidity are part of the design. A fast product is a product that respects the user.',

    // About — journey
    'about.journey.title': 'The Journey',

    // Resume
    'resume.download': 'Download CV',

    // Contact page
    'contact.status': 'Available for projects',
    'contact.title': "Let's build something",
    'contact.title.accent': 'together.',
    'contact.subtitle': 'Based in Lima, working globally. I specialize in high-performance web architectures that fuse solid functionality with impeccable visual experiences.',
    'contact.email.label': 'Direct email',
    'contact.location.label': 'Location',
    'contact.location.value': 'Lima, Peru · GMT-5',
    'contact.form.name': 'Full name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email address',
    'contact.form.email.placeholder': 'you@email.com',
    'contact.form.type': 'Project type',
    'contact.form.type.1': 'UI/UX Design',
    'contact.form.type.2': 'Full Stack Development',
    'contact.form.type.3': 'Technical Strategy',
    'contact.form.type.4': 'Other',
    'contact.form.message': 'Your message',
    'contact.form.message.placeholder': 'Tell me about your project...',
    'contact.form.submit': 'Send message',
    'contact.form.secure': 'Your data is safe',
    'contact.form.success.title': 'Message sent!',
    'contact.form.success.sub': "I'll get back to you as soon as possible.",
    'contact.form.error': 'Something went wrong. Please try again.',
    'contact.form.error.connection': 'Connection error. Please try again.',
    'contact.image.label': 'Digital Studio',
    'contact.image.sublabel': 'Awaiting your parameters.',

    // Footer
    'footer.copy': '© 2026 Fabrizio. Designed with precision.',
  },
} as const;
