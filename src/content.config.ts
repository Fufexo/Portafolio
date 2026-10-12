import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Texto en los dos idiomas del sitio. */
const localized = z.object({ es: z.string(), en: z.string() });

const tone = z.enum(['primary', 'secondary', 'tertiary']);

/**
 * Ícono de una tecnología:
 * - material: nombre de Material Symbols (agrégalo también a la lista de Layout.astro)
 * - text: carácter o emoji (▲, ▼, 🌊)
 * - badge: sigla dentro de una caja (TS)
 */
const icon = z.object({
  kind: z.enum(['material', 'text', 'badge']),
  value: z.string(),
  tone: tone.optional(),
});

/**
 * Proyectos del portafolio: un archivo `data.json` por carpeta, con sus imágenes al lado.
 * Para agregar un proyecto nuevo: crea `src/content/projects/<slug>/data.json` + imágenes.
 */
const projects = defineCollection({
  loader: glob({
    pattern: '*/data.json',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number().int(),
      category: z.enum(['ecommerce', 'saas', 'ai', 'fintech']),
      accent: z.enum(['primary', 'secondary']).default('primary'),
      liveUrl: z.url(),
      seoDescription: localized,

      card: z.object({
        description: localized,
        tags: z.array(z.string()).max(5),
        image: image(),
        imageAlt: z.string(),
        imagePosition: z.string().default('object-top'),
        size: z.enum(['large', 'small']).default('small'),
      }),

      hero: z.object({
        badge: localized,
        subtitle: localized,
        image: image(),
        imageAlt: z.string(),
        role: localized,
        year: z.string(),
        platform: localized,
      }),

      challenge: z.object({
        body: localized,
        items: z
          .array(
            z.object({
              icon: z.string(),
              title: localized,
              description: localized,
              solutionIcon: z.string(),
              solution: localized,
              chips: z.array(z.string()),
            }),
          )
          .min(1),
      }),

      stack: z
        .array(
          z.object({
            name: z.string(),
            tagline: z.string(),
            icon,
            description: localized,
            note: localized,
            chips: z.array(z.string()),
            showLiveLink: z.boolean().default(false),
          }),
        )
        .min(1),

      gallery: z
        .array(
          z.object({
            image: image(),
            alt: z.string(),
            /** Ancho en la cuadrícula de 6 columnas: full=6, half=3, wide=4, narrow=2 */
            span: z.enum(['full', 'half', 'wide', 'narrow']),
            title: localized,
            description: localized,
          }),
        )
        .min(1),
    }),
});

export const collections = { projects };
