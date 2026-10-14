# Fabrizio — Portfolio

Personal portfolio built with Astro and Tailwind CSS v4. Dark bento-grid layout, bilingual UI (ES/EN) and smooth View Transitions between pages.

## Tech Stack

- **[Astro 7](https://astro.build/)** — Static site generation, content collections, image optimization (`astro:assets`), View Transitions
- **[Tailwind CSS v4](https://tailwindcss.com/)** — CSS-first config via `@theme` in `global.css`
- **Material Symbols Outlined** — Icons (only the icons listed in `Layout.astro` are downloaded)
- **Formspree** — Contact form backend (no server required)
- **Vanilla JS** — All interactivity, no framework overhead

## Features

- Bilingual site with real URLs per language: Spanish at `/`, English at `/en/` (static HTML in both, indexable by search engines)
- Project case studies generated from a content collection (one page template for every project)
- Optimized, responsive images (WebP + `srcset`) generated at build time
- Social share previews (Open Graph / Twitter), canonical URLs, `hreflang` alternates, i18n sitemap and `robots.txt`
- Accessible components: keyboard-navigable tabs, real buttons, skip link, reduced-motion support
- Fully responsive (mobile-first) with touch-friendly targets

## Project Structure

```
src/
├── assets/og-default.png          # Default share image (1200×630)
├── components/
│   ├── project/                   # Case study sections (Hero, Challenges, Gallery, CTA, SectionHeading)
│   ├── LocalizedText.astro        # Renders a { es, en } text in the current page language
│   ├── StackShowcase.astro        # Tech stack tabs + detail panel
│   ├── FlipCard.astro             # Challenge card (problem / solution)
│   ├── ProjectCard.astro          # Home page project card
│   ├── RotatingHeadline.astro     # Typewriter headline
│   └── TopNav / BottomNav / Footer / ...
├── content/projects/<slug>/       # One folder per project: data.json + source images
├── content.config.ts              # Collection schema (validated with Zod)
├── data/                          # nav, stack, timeline
├── i18n/ui.ts                     # UI translations + helpers (getLang, useTranslations, localizePath)
├── layouts/Layout.astro           # HTML shell + SEO meta
├── lib/projects.ts                # Project queries and static paths
├── pages/                         # Routes only: each file renders a view
│   ├── index / about / contact    # Spanish (/)
│   ├── proyectos/[slug].astro
│   ├── en/...                     # English (/en/), same views
│   └── robots.txt.ts
├── scripts/                       # Client modules (TypeScript, bundled by Astro)
├── styles/global.css              # Tailwind @theme tokens + global styles
└── views/                         # Page content shared by both languages
    ├── HomePage / AboutPage / ContactPage / ProjectPage
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
3. Optional: add `links` (label + URL) to show extra buttons next to "View live", such as the source code or API docs.
4. Run `npm run check`: the schema in `src/content.config.ts` reports any missing or invalid field.

The project automatically appears on the home page (sorted by `order`) and gets its page at `/proyectos/<slug>/`. If you use a new Material icon, add its name to the list in `src/layouts/Layout.astro`.

## I18N System

Routing uses Astro's built-in i18n (`astro.config.mjs`): Spanish is the default locale without prefix and English lives under `/en/`. Pages in `src/pages` and `src/pages/en` are thin wrappers around the same view in `src/views`, and every component reads the language from `Astro.currentLocale`, so each URL is rendered server-side in its own language (no client-side text swapping).

- **UI strings:** add the key to both `es` and `en` in `src/i18n/ui.ts`, then use it:

  ```astro
  ---
  import { getLang, useTranslations, localizePath } from '../i18n/ui';
  const lang = getLang(Astro.currentLocale);
  const tr = useTranslations(lang);
  ---
  <h2>{tr('project.gallery.title')}</h2>
  <a href={localizePath('/contact/', lang)}>{tr('nav.contact')}</a>
  ```

- **Content with both languages** (project data, timeline): store `{ "es": "...", "en": "..." }` and render it with `LocalizedText` or `value[lang]`. Short technical labels can stay as plain strings.

- **Client scripts** live in `<script>` tags (processed by Astro). Initialize them with `onPageLoad()` from `src/scripts/lifecycle.ts` so they run on the first load and after every View Transition.

- **New page:** create the view in `src/views/`, then add a wrapper in both `src/pages/` and `src/pages/en/`.
