import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export interface TimelineEntry {
  period: Localized;
  role: string;
  company: Localized;
  description: Localized;
  tech: string;
  active?: boolean;
}

export const timeline: TimelineEntry[] = [
  {
    period: { es: 'Feb 2025 — Presente', en: 'Feb 2025 — Present' },
    role: 'Front End Developer',
    company: { es: 'Sip · Fintech · Lima, Perú', en: 'Sip · Fintech · Lima, Peru' },
    description: {
      es: 'Desarrollo y mantengo aplicaciones empresariales en Angular y participé en su evolución de Angular 11 a Angular 20, adoptando Standalone Components, Signals y el nuevo control flow. Diseño arquitecturas escalables con componentes reutilizables, lazy loading, guards e interceptors; integro APIs REST, WordPress/ACF y Google Tag Manager, y monitoreo despliegues en Azure.',
      en: 'I build and maintain enterprise Angular applications and took part in their evolution from Angular 11 to Angular 20, adopting Standalone Components, Signals and the new control flow. I design scalable architectures with reusable components, lazy loading, guards and interceptors; integrate REST APIs, WordPress/ACF and Google Tag Manager, and monitor deployments on Azure.',
    },
    tech: 'Angular · TypeScript · SCSS (BEM) · Angular Material · WordPress (ACF) · GTM · Azure',
    active: true,
  },
  {
    period: { es: 'Sep 2024 — Ene 2025', en: 'Sep 2024 — Jan 2025' },
    role: 'Full Stack Developer',
    company: { es: 'Tranzferme · Lima, Perú', en: 'Tranzferme · Lima, Peru' },
    description: {
      es: 'Desarrollé soluciones backend y frontend para una plataforma de transferencias internacionales: microservicios con NestJS sobre arquitectura serverless, interfaces en Angular 14 y despliegues en AWS, trabajando con Scrum.',
      en: 'Built backend and frontend solutions for an international money-transfer platform: NestJS microservices on a serverless architecture, Angular 14 interfaces and deployments on AWS, working with Scrum.',
    },
    tech: 'NestJS · Angular · AWS · Serverless · Scrum',
  },
];
