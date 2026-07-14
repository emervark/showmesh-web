# Showmesh Web

Marketing website for Showmesh, a Windows-first realtime show automation application for theatres, concerts, immersive installations and live events.

## Page structure

- **Hero** — positioning, tagline, early-access CTA and a product-interface concept preview.
- **Platform positioning** — explains why Showmesh is not simply “QLab for Windows” and frames it as cue control + automation + media engine.
- **Core model** — explains `Resource → Action → Trigger` as the product language.
- **Windows-first engine direction** — describes the native playback, timing and output direction without implying all engine work is complete.
- **Capability map** — labels product areas as `Core`, `Planned` or `Research` so unfinished integrations are not presented as already available.
- **Audience / marketing strategy** — frames theatres, immersive rooms and technical artists as early audiences.
- **Early access** — initial contact call-to-action.

## Visual direction

The site uses a restrained dark operator-interface aesthetic: precise panels, muted production colors, monospaced technical details only where useful, and clear hierarchy around what is playing, what is next and what GO will run.

The V2 design leans further into the product’s own application language: a show workspace, visible resource/action/trigger relationships, stronger NOW/NEXT/GO hierarchy and a calmer professional desktop feel inspired by modern creative tools rather than generic SaaS landing pages.

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run Astro checks:

```bash
npm run check
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Format the project:

```bash
npm run format
```

## Cloudflare Pages deployment

This project is a static Astro site and does not require `@astrojs/cloudflare`.

Use these Cloudflare Pages settings:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Root directory:** repository root
- **Node version:** a current Node.js LTS release that satisfies Astro’s engine requirement

The generated static site is written to `dist/`.
