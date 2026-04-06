export interface TimelineEntry {
  period: string;
  role: string;
  company: string;
  description: string;
  tech: string;
  active?: boolean;
}

export const timeline: TimelineEntry[] = [
  {
    period: 'Feb 2025 — Presente',
    role: 'Junior Front End Developer',
    company: 'FinancieraOH → Sip · Lima, Perú',
    description:
      'Desarrollé aplicaciones en Angular e integré APIs para el rebranding de la marca (Sip). Gestioné contenido dinámico con WordPress/ACF y monitoreé despliegues en Azure.',
    tech: 'Angular · SCSS (BEM) · GTM · Azure · WordPress · AWS · Git',
    active: true,
  },
  {
    period: 'Sep 2024 — Ene 2025',
    role: 'Junior Full Stack Developer',
    company: 'Tranzferme · Lima, Perú',
    description:
      'Contribuí al desarrollo de una plataforma de transferencias internacionales usando microservicios (NestJS) y arquitectura Serverless.',
    tech: 'NestJS · AWS · Angular · Scrum',
  },
];
