# Showmesh Web

Initial marketing website for Showmesh, a Windows-first realtime show automation application for theatres, concerts, immersive installations and live events.

## Page structure

- **Hero** — positioning, tagline and an operator-interface placeholder.
- **Core model** — explains `Resource → Action → Trigger` as the product language.
- **Connected systems** — lists planned/targeted media, control and realtime-system categories without implying every integration is complete.
- **Operator interface** — describes the dark, professional, show-first visual direction.
- **Cloudflare deployment** — documents the static build output.
- **Early access** — initial contact call-to-action.

## Visual direction

The site uses a restrained dark operator-interface aesthetic: precise panels, muted production colors, monospaced technical details only where useful, and clear hierarchy around what is playing, what is next and what GO will run.

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
- **Node version:** a current Node.js LTS release

The generated static site is written to `dist/`.
