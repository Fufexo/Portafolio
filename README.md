# Fabrizio — Portfolio

Personal portfolio built with Astro and Tailwind CSS v4. Dark bento-grid layout, bilingual UI (ES/EN) and smooth View Transitions between pages.

## Tech Stack

- **[Astro 7](https://astro.build/)** — Static site generation, content collections, image optimization (`astro:assets`), View Transitions
- **[Tailwind CSS v4](https://tailwindcss.com/)** — CSS-first config via `@theme` in `global.css`
- **Material Symbols Outlined** — Icons (only the icons listed in `Layout.astro` are downloaded)
- **Formspree** — Contact form backend (no server required)
- **Vanilla JS** — All interactivity, no framework overhead

## Features

- Bilingual UI (Spanish / English) with `localStorage` persistence
- Project case studies generated from a content collection (one page template for every project)
- Optimized, responsive images (WebP + `srcset`) generated at build time
- Social share previews (Open Graph / Twitter), canonical URLs, sitemap and `robots.txt`
- Accessible components: keyboard-navigable tabs, real buttons, skip link, reduced-motion support
- Fully responsive (mobile-first) with touch-friendly targets

## Project Structure

```
src/
├── assets/
│   └── og-default.png             # Default share image (1200×630)
├── components/
│   ├── project/                   # Case study sections
│   │   ├── ProjectHero.astro
│   │   ├── ProjectChallenges.astro
│   │   ├── ProjectGallery.astro
│   │   ├── ProjectCta.astro
│   │   └── SectionHeading.astro
│   ├── LocalizedText.astro        # Bilingual text (data-i18n contract in one place)
│   ├── StackShowcase.astro        # Tech stack tabs + detail panel
│   ├── FlipCard.astro             # Challenge card (problem / solution)
│   ├── ProjectCard.astro          # Home page project card
│   ├── RotatingHeadline.astro     # Typewriter headline
│   ├── TopNav.astro / BottomNav.astro / Footer.astro
│   └── ...
├── content/
│   └── projects/<slug>/           # One folder per project
│       ├── data.json              # All project content (ES + EN)
│       └── *.png                  # Source images (optimized at build time)
├── content.config.ts              # Collection schema (validated with Zod)
├── data/                          # nav, stack, timeline
├── i18n/ui.ts                     # UI translations (ES + EN) + t() helper
├── layouts/Layout.astro           # HTML shell + SEO meta
├── pages/
│   ├── proyectos/[slug].astro     # Case study template (one page per project)
│   ├── index.astro / about.astro / contact.astro
│   └── robots.txt.ts
└── styles/global.css              # Tailwind @theme tokens + global styles

public/
├── scripts/                       # i18n, nav state, scroll reveal
├── favicon.svg
└── resume.pdf
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:4321
npm run check     # Type-check (.astro, .ts and content schema)
npm run build     # Type-check + production build → ./dist/
npm run preview   # Preview production build locally
```

## Deploying

Set the public domain as an environment variable before building (e.g. in Vercel → Settings → Environment Variables):

```
SITE_URL=https://your-domain.com
```

With `SITE_URL` set, the build adds canonical URLs, absolute share images (`og:image`) and generates `sitemap-index.xml`, referenced from `robots.txt`. Without it, the site still builds; those tags are simply omitted.

## Adding a New Project

1. Create `src/content/projects/<slug>/data.json` (copy an existing one as a template).
2. Put its screenshots in the same folder and reference them with relative paths (`"./hero.png"`).
3. Run `npm run check`: the schema in `src/content.config.ts` reports any missing or invalid field.

The project automatically appears on the home page (sorted by `order`) and gets its page at `/proyectos/<slug>/`. If you use a new Material icon, add its name to the list in `src/layouts/Layout.astro`.

## I18N System

UI strings live in `src/i18n/ui.ts`; project content lives in each `data.json` as `{ "es": "...", "en": "..." }`. The page renders Spanish, and `public/scripts/i18n.js` swaps text using `data-i18n`, `data-es` and `data-en` attributes.

Prefer the `LocalizedText` component over writing the attributes by hand:

```astro
---
import LocalizedText from '../components/LocalizedText.astro';
import { t } from '../i18n/ui';
---
<LocalizedText as="h2" text={t('project.gallery.title')} class="text-4xl" />
<LocalizedText as="p" text={{ es: 'Hola', en: 'Hello' }} />
```
