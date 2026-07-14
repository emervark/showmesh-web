# Showmesh Web

Marketing website for Showmesh, a Windows-first realtime show automation application for theatres, concerts, immersive installations and live events.

## Page structure

- **Hero** — positioning, tagline, early-access CTA and a product-interface preview based on the app UI.
- **Platform positioning** — explains why Showmesh is not just “QLab for Windows” and frames it as a show-control workspace plus automation model.
- **Core model** — explains `Resource → Action → Trigger` as the product language.
- **Windows-first engine direction** — describes the native playback, timing and output direction without implying all engine work is complete.
- **Capability map** — labels product areas as `Core`, `Planned` or `Research` so unfinished integrations are not presented as already available.
- **Audience / marketing strategy** — frames theatres, immersive rooms and technical artists as early audiences.
- **Early access** — initial contact call-to-action.

## Visual direction

The site uses a restrained dark operator-interface aesthetic: precise panels, muted production colors, monospaced technical details only where useful, and clear hierarchy around what is playing, what is next and what GO will run.

The V2 design leans further into the product’s own application language: a show heartbeat, visible resource/action/trigger relationships, parent cues that own their actions, stronger NOW/NEXT/GO hierarchy and a calmer professional desktop feel inspired by modern creative tools rather than generic SaaS landing pages.

## Review workflow with Cloudflare Pages

Use Cloudflare Pages previews as the default review path. This avoids manually switching between Codex-generated branches for every design iteration.

Recommended workflow:

1. Ask for a site change in Codex.
2. Codex updates the code, runs checks, commits the work and prepares PR metadata.
3. In the Codex UI, publish the prepared PR if the UI asks for it.
4. Open the Cloudflare Pages preview URL posted on the PR.
5. Review the site in the browser.
6. Merge the PR into `main` only when the preview looks correct.

Production deployment:

- `main` is the Cloudflare Pages production branch.
- Every merge to `main` updates the production site.
- Pull-request branches are for previews only.

Local preview is optional. If you need it, prefer checking out by PR number instead of copying long branch names:

```bash
gh pr checkout <PR_NUMBER>
npm install
npm run dev
```

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
- **Node version:** Node.js 22.12+ for the current Astro version

The generated static site is written to `dist/`.
