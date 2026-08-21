# Fardin Farhan Khan — Portfolio

Personal portfolio site for Fardin Farhan Khan (transportation, data, research,
infrastructure), replacing the previous Google Sites version. Built with
Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Status

Technical foundation only. Design system, navigation, theming, the hero, and
the site's IA (routes for About, Research, Experience, Projects, Education,
Achievements, Lab, Field Notes, Contact) are in place. Most pages show an
"in progress" placeholder rather than invented content — see
`src/components/sections/BuildingNotice.tsx` and
`src/components/sections/PagePending.tsx`. They fill in once the source
content (biography, CV, project archive, employment/education history,
achievements, contact links) is confirmed.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/                 routes (App Router)
  components/
    chrome/             nav, footer
    sections/           page-level sections (Hero, PageHeader, PagePending, ...)
    theme/               theme provider/toggle/init script
    visual/              NetworkCanvas (the site's recurring nodes/routes motif)
    motion/               scroll-reveal primitive
  data/                 content data (e.g. projects.ts), separate from presentation
  lib/                  shared config (routes.ts)
```

## Design system

- Type: Space Grotesk (display), Inter (body), JetBrains Mono (technical/metadata)
- Color: near-black ink / warm off-white paper / muted grey / one accent, with
  distinct (non-inverted) light and dark palettes — see `src/app/globals.css`
- Motif: an abstract network of nodes and routes (`NetworkCanvas`), reused in
  the hero and footer, respecting `prefers-reduced-motion`
