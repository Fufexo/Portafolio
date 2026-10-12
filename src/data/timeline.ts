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
    role: 'Junior Front End Developer',
    company: { es: 'FinancieraOH → Sip · Lima, Perú', en: 'FinancieraOH → Sip · Lima, Peru' },
    description: {
      es: 'Desarrollé aplicaciones en Angular e integré APIs para el rebranding de la marca (Sip). Gestioné contenido dinámico con WordPress/ACF y monitoreé despliegues en Azure.',
      en: 'Built Angular applications and integrated APIs for the brand relaunch (Sip). Managed dynamic content with WordPress/ACF and monitored deployments on Azure.',
    },
    tech: 'Angular · SCSS (BEM) · GTM · Azure · WordPress · AWS · Git',
    active: true,
  },
  {
    period: { es: 'Sep 2024 — Ene 2025', en: 'Sep 2024 — Jan 2025' },
    role: 'Junior Full Stack Developer',
    company: { es: 'Tranzferme · Lima, Perú', en: 'Tranzferme · Lima, Peru' },
    description: {
      es: 'Contribuí al desarrollo de una plataforma de transferencias internacionales usando microservicios (NestJS) y arquitectura Serverless.',
      en: 'Contributed to an international money-transfer platform built with microservices (NestJS) and a serverless architecture.',
    },
    tech: 'NestJS · AWS · Angular · Scrum',
  },
];
