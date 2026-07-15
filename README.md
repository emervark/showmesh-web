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

## Manual (`manual.showmesh.app`)

The product manual lives in [`manual/`](manual/) as a self-contained
[VitePress](https://vitepress.dev) project, separate from the Astro marketing
site. English is the default locale (served at the root) and Estonian is an
additional locale under `/et/`. The manual is linked from the marketing site's
navigation and footer at `https://manual.showmesh.app`.

Local development (run from `manual/`):

```bash
cd manual
npm install
npm run dev      # local preview
npm run build    # writes .vitepress/dist/
```

The manual is deployed as its **own Cloudflare Pages project** (separate from
the marketing site) bound to the `manual.showmesh.app` subdomain:

- **Root directory:** `manual`
- **Build command:** `npm run build`
- **Output directory:** `.vitepress/dist` (relative to the root directory)
- **Node version:** a current Node.js LTS release
- **Custom domain:** `manual.showmesh.app`

The two Cloudflare Pages projects build independently from the same repository:
the marketing site from the repository root, the manual from `manual/`.
