# Fabrizio — Portfolio

Personal portfolio built with Astro and Tailwind CSS v4. Features a dark bento-grid layout, bilingual support (ES/EN), and smooth View Transitions between pages.

## Tech Stack

- **[Astro 6](https://astro.build/)** — Static site generation, zero JS by default, View Transitions
- **[Tailwind CSS v4](https://tailwindcss.com/)** — CSS-first config via `@theme` in `global.css`
- **Material Symbols Outlined** — Icon system
- **Formspree** — Contact form backend (no server required)
- **Vanilla JS** — All interactivity, no framework overhead

## Features

- Bilingual UI (Spanish / English) with `localStorage` persistence
- Dark theme with Material Design 3 color system
- Bento grid layout for projects page
- Case study page with expandable tech stack cards and flip challenge cards
- Animated scroll reveal on all sections
- Fully responsive (mobile-first)
- Contact form with styled success/error states

## Project Structure

```
src/
├── components/
│   ├── atelier/
│   │   └── FlipCard.astro      # Reusable flip card for case study challenges
│   ├── BottomNav.astro
│   ├── Footer.astro
│   ├── TechTag.astro           # Reusable tech badge
│   └── TopNav.astro
├── data/
│   ├── stack.ts                # Tech stack tag arrays
│   └── timeline.ts             # Career timeline entries
├── i18n/
│   └── ui.ts                   # All translations (ES + EN)
├── layouts/
│   └── Layout.astro            # Base HTML shell
├── pages/
│   ├── proyectos/
│   │   └── atelier.astro       # Case study page
│   ├── about.astro
│   ├── contact.astro
│   └── index.astro
└── styles/
    └── global.css              # Tailwind @theme + custom utilities

public/
├── images/                     # Project screenshots
├── scripts/
│   ├── i18n.js                 # Language switcher + nav active state
│   └── scroll-reveal.js        # Intersection Observer reveal animation
└── resume.pdf
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # Production build → ./dist/
npm run preview   # Preview production build locally
```

## I18N System

All translations live in `src/i18n/ui.ts`. The system uses `data-i18n`, `data-es`, and `data-en` HTML attributes — no framework, no routing, just a small script in `public/scripts/i18n.js` that swaps text on toggle and on each View Transition.

To add a new translatable string:

1. Add the key to both `es` and `en` objects in `ui.ts`
2. Use it in templates: `data-es={es['your.key']} data-en={en['your.key']}`

## Adding a New Project

1. Add a card to the bento grid in `src/pages/index.astro`
2. Create a new page under `src/pages/proyectos/`
3. Add any new i18n keys to `src/i18n/ui.ts`
4. Place screenshots in `public/images/`
