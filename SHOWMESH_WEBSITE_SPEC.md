# Showmesh Website Implementation Specification

**Version:** 1.0  
**Status:** Mandatory implementation specification  
**Date:** 15 July 2026  
**Applies to:** Showmesh public website and all website prototypes  
**Companion document:** `SHOWMESH_UI_UX_DESIGN_PRINCIPLES.md`

> This document is prescriptive. Requirements marked **MUST**, **MUST NOT**, **SHOULD**, and **MAY** are to be interpreted literally. If an implementation conflicts with this specification, the implementation is wrong.

---

## 1. Objective

Build a precise, restrained product website for **Showmesh**, a Windows-first realtime show automation system.

The website must feel like the Showmesh operator interface has expanded into an editorial product page. It must not look like a generic SaaS startup template, gaming product, crypto site, creative agency portfolio, or conventional media-player landing page.

The product itself is the visual evidence. The site should communicate:

- what Showmesh is;
- why cue-based show automation needs a Windows-first platform;
- how the Resource → Action → Trigger model works;
- how an operator understands current, next, GO, and system state;
- how media, realtime graphics, external systems, and control protocols connect;
- which capabilities exist now and which are planned.

Primary product line:

> **Connect, automate and run the show.**

Primary category:

> **Realtime show automation for Windows.**

Do not position Showmesh primarily through comparison with another product.

---

## 2. Source-of-truth order

When requirements appear to conflict, use this priority:

1. This file: `SHOWMESH_WEBSITE_SPEC.md`
2. `SHOWMESH_UI_UX_DESIGN_PRINCIPLES.md`
3. Supplied current Showmesh application screenshot
4. Existing website implementation
5. General design conventions

The current application screenshot is the visual source of truth for colors, surface hierarchy, component geometry, data density, and operator character. Do not restyle the application screenshot to match a newly invented website aesthetic.

---

## 3. Required implementation approach

Unless the repository already establishes an equivalent stack, use:

- Astro;
- TypeScript;
- semantic HTML;
- custom CSS;
- static deployment compatible with Cloudflare Pages.

### 3.1 Dependencies

- Do not add React, Vue, Svelte, Tailwind, Bootstrap, a component library, or an animation framework solely for this landing page.
- Prefer CSS for layout and restrained transitions.
- Use JavaScript only where it adds real behavior.
- Do not add an icon package for a handful of icons; use an existing project icon set or small accessible inline SVGs.

### 3.2 Quality requirements

The implementation MUST:

- use valid semantic landmarks;
- have no horizontal page overflow at supported widths;
- have no browser-console errors;
- preserve visible keyboard focus;
- respect `prefers-reduced-motion`;
- avoid cumulative layout shift from unloaded media;
- define image dimensions or aspect ratios;
- keep the core page useful without JavaScript.

---

## 4. Non-negotiable visual direction

The website MUST be:

- dark;
- calm;
- precise;
- technical;
- grid-based;
- product-led;
- restrained in color and motion;
- recognizably derived from the Showmesh application.

The website MUST NOT use:

- generic SaaS hero composition by default;
- oversized typography that makes the product image secondary;
- decorative gradients, radial color washes, auroras, blobs, or glow fields;
- glassmorphism or backdrop-blurred floating cards;
- neon or cyberpunk styling;
- a cloud of badges, chips, or claim pills;
- stock photos of theatres, concerts, control rooms, or audiences as primary visuals;
- decorative 3D objects;
- invented product UI;
- fake testimonials, customer logos, metrics, or awards;
- the phrase `QLab for Windows`, including negative constructions such as `Not just “QLab for Windows”`;
- lime as the main brand color;
- endless ambient animation;
- centered marketing copy when a structured editorial layout would communicate better.

If the page looks like it could belong to an unrelated developer tool after changing the logo and text, it fails this specification.

---

## 5. Design tokens

Use these values as the website baseline. Small adjustments require a documented accessibility reason.

```css
:root {
  color-scheme: dark;

  --sm-bg-shell: #0a0c0f;
  --sm-bg-panel: #0d0f13;
  --sm-bg-workspace: #14171d;
  --sm-bg-elevated: #171b22;
  --sm-bg-soft: rgb(255 255 255 / 3.5%);

  --sm-text-strong: #e9ecf0;
  --sm-text-primary: #dee2e8;
  --sm-text-secondary: #aeb5bf;
  --sm-text-muted: #7a828e;
  --sm-text-faint: #5e6672;

  --sm-ready: #57c878;
  --sm-go: #2e9d57;
  --sm-playing: #f2606a;
  --sm-live: #45c8e8;
  --sm-warning: #e3a94f;

  --sm-border: rgb(255 255 255 / 6%);
  --sm-border-strong: rgb(255 255 255 / 11%);

  --sm-radius-control: 6px;
  --sm-radius-panel: 10px;
  --sm-radius-overlay: 12px;

  --sm-space-1: 4px;
  --sm-space-2: 8px;
  --sm-space-3: 12px;
  --sm-space-4: 16px;
  --sm-space-6: 24px;
  --sm-space-8: 32px;
  --sm-space-12: 48px;
  --sm-space-16: 64px;
  --sm-space-24: 96px;

  --sm-content-max: 1440px;
  --sm-copy-max: 680px;
}
```

### 5.1 Semantic color rules

- `--sm-go` is the primary CTA color.
- `--sm-ready` communicates readiness, next state, or healthy state.
- `--sm-playing` is reserved for live playback, stop, critical, and destructive states.
- `--sm-live` represents connections, protocols, and externally driven values.
- `--sm-warning` represents validation, missing resources, degraded state, or warnings.
- Accent colors MUST NOT be used as arbitrary decoration.
- Each semantic color MUST be paired with text, an icon, a position, or another non-color cue when it communicates state.

### 5.2 Prohibited substitutions

- Do not replace the documented greens with fluorescent lime.
- Do not create a separate purple, blue, or orange marketing palette.
- Do not place multicolor gradients inside headings, buttons, borders, or page backgrounds.

---

## 6. Typography

### 6.1 Families

- Use **Inter** for headings, body copy, navigation, labels, and buttons.
- Use **JetBrains Mono** for eyebrow labels, protocol names, timings, cue numbers, compact metadata, shortcuts, and technical readouts.
- Use system fallbacks and avoid blocking content while fonts load.

### 6.2 Desktop type scale

Use this scale as a strong constraint:

| Role | Size | Line height | Maximum |
|---|---:|---:|---|
| Hero heading | `clamp(52px, 5.2vw, 76px)` | `0.98–1.04` | 3 rendered lines at 1440 px |
| Section heading | `clamp(36px, 4vw, 56px)` | `1.02–1.10` | 3 lines |
| Subsection heading | `24–32px` | `1.15` | — |
| Lead body | `18–21px` | `1.5–1.6` | 680 px text width |
| Body | `16–18px` | `1.55–1.7` | 680 px text width |
| Navigation / button | `14–16px` | `1.2` | — |
| Technical label | `11–13px` | `1.3` | uppercase only when short |

The hero heading MUST NOT exceed `76px`. It MUST NOT create a five- or six-line typographic wall. It MUST NOT push the product UI outside the initial viewport solely to create visual drama.

### 6.3 Copy styling

- Use sentence case for headings and controls.
- Avoid excessive uppercase.
- Do not highlight ordinary phrases with inline bold every few words.
- Do not use monospace for paragraphs.
- Do not use artificial condensed, outlined, italic, or distorted display lettering.

---

## 7. Page grid and spacing

### 7.1 Global container

- Maximum content width: `1440px`.
- Desktop side padding: `32–48px`.
- Tablet side padding: `24–32px`.
- Mobile side padding: `18–20px`.
- Major section spacing: `96–144px` desktop, `72–96px` tablet, `56–72px` mobile.

### 7.2 Grid

Use a 12-column desktop grid. Layout alignment should be visible across navigation, headings, product imagery, diagrams, and section content.

Do not use a random collection of independently centered blocks. Do not place every section inside a rounded card.

### 7.3 Surface hierarchy

Prefer large, quiet page regions separated by spacing, subtle background steps, or one-pixel borders. Rounded containers should be used for real grouped content such as the application frame, a model diagram, or a technical detail—not for every paragraph.

---

## 8. Navigation specification

The header MUST be compact and subordinate to the hero.

### 8.1 Content

Recommended navigation:

- Showmesh wordmark;
- Platform;
- Model;
- Engine;
- Roadmap or Development;
- one primary action: `Request access`, `Join the waitlist`, or the actual current conversion goal.

Only use labels for sections that exist.

### 8.2 Geometry

- Header height: `64–72px` desktop.
- No floating pill-shaped header.
- No oversized logo container.
- CTA may have a 6–8 px radius; it should not be a capsule unless the rest of the system establishes capsule controls.
- Use a subtle bottom border, not a shadow or glow.

### 8.3 Mobile

Use an accessible menu button and a simple disclosure panel. Do not recreate desktop links at unreadable sizes. The menu must close with Escape and restore focus.

---

## 9. Hero specification

The hero is a balanced product introduction, not a display-type poster.

### 9.1 Desktop layout

At widths of `1100px` and above:

- use a two-column composition;
- copy occupies approximately 5 of 12 columns;
- product UI occupies approximately 7 of 12 columns;
- gap: `48–72px`;
- align the main product UI with the primary headline block;
- keep the meaningful portion of the application visible in the initial viewport at a typical 1440 × 900 display.

The product visual MUST be at least as visually important as the headline. Neither column may overlap the other.

### 9.2 Required hero content

1. Technical eyebrow: `REALTIME SHOW AUTOMATION FOR WINDOWS`
2. Heading: `Connect, automate and run the show.`
3. One concise paragraph explaining the category and audience
4. One primary CTA
5. One secondary text or outline action, only if there is a genuine destination
6. One credible current product screenshot or carefully cropped set of real screenshot regions

### 9.3 Hero copy constraints

- Keep the heading exactly as written unless the user approves a change.
- Maximum body copy: approximately 55–75 words.
- Do not put the full Resource → Action → Trigger explanation in the hero paragraph.
- Do not add claim pills beneath the CTA.
- Do not add `Not just “QLab for Windows”` or similar comparison copy.
- Do not add unsupported beta, availability, customer, or performance claims.

### 9.4 CTA

Primary CTA:

- background: `--sm-go`;
- foreground: a verified high-contrast near-white or near-black value;
- radius: `6–8px`;
- minimum height: `44px`;
- clear hover, active, focus-visible, and disabled states;
- no glow;
- no fluorescent lime;
- label must match the actual action.

Secondary CTA, when used:

- transparent or `--sm-bg-soft` background;
- `--sm-border-strong` border;
- must not visually compete with the primary CTA.

### 9.5 Prohibited hero treatments

- no heading above `76px`;
- no heading exceeding 3 lines at 1440 px;
- no decorative background gradient;
- no overlapping headline and screenshot;
- no screenshot cropped randomly at the browser edge;
- no giant device frame;
- no floating feature cards around the screenshot;
- no badge cloud or three-pill proof row;
- no auto-playing full-screen video;
- no fake UI recreation when the supplied screenshot can be used.

---

## 10. Product screenshot specification

The application screenshot is evidence, not wallpaper.

### 10.1 Fidelity

- Use the latest supplied Showmesh application screenshot.
- Do not redraw, simplify, recolor, rename, or rearrange its internal UI without explicit approval.
- Historical `Intermission` branding inside a current screenshot may be replaced only in a source asset or accurate edit, not by covering it with unrelated website elements.
- Do not fabricate functionality that is absent from the source image.

### 10.2 Presentation

- Preserve the screenshot’s aspect ratio.
- Use a subtle one-pixel border and a restrained shadow only if separation is needed.
- Maximum frame radius: `10–12px`.
- Do not place the screenshot on a strong colored glow.
- Important text and cue states must remain legible at the rendered size.
- At desktop width, show enough of the complete operator shell to communicate current, next, GO, resources, cue list, inspector, and status.

### 10.3 Cropping

Intentional crops are allowed below the hero to explain one feature at a time. Each crop must:

- correspond to a real region of the current screenshot;
- preserve readable scale;
- have a clear narrative purpose;
- avoid cutting controls in a way that implies broken layout;
- use the same crop consistently if repeated.

Random clipping caused by overflow is a defect, not an intentional crop.

### 10.4 Mobile

Do not shrink the entire desktop screenshot until it becomes unreadable. Use a sequence of real crops showing, for example:

1. current + next + GO;
2. playing and next cue rows;
3. Resource → Action → Trigger details;
4. inspector or system telemetry.

---

## 11. Required page structure

The initial website should use the following order unless content availability justifies a documented change.

### 11.1 Hero

Purpose: establish category, promise, audience, and visual credibility.

### 11.2 Product thesis

Headline direction:

> One operator workspace for the systems that make a show.

Explain that Showmesh brings media, realtime graphics, control signals, and external engines into one cue-centered workflow.

Use a wide, readable application view or a two-part crop. Do not use generic feature cards.

### 11.3 Resource → Action → Trigger

Explain the product model in three connected stages:

- **Resource:** what can be controlled;
- **Action:** what changes;
- **Trigger:** when it happens.

Use a compact horizontal diagram on desktop and a vertical sequence on mobile. The diagram should use real product vocabulary and semantic accents, not glossy illustrations.

Required conceptual constraint:

> Native media playback belongs to the cue lifecycle. Do not show artificial Play/Stop action cards as the explanation of this model.

### 11.4 Operator workflow

Show and explain:

- what is playing;
- what is next;
- GO;
- safe editing while running;
- warnings and recovery context.

Use the current/next/GO and cue-list regions from the real interface.

### 11.5 Windows-first engine

Explain only verified architecture and capabilities. Approved themes include:

- Windows-first design;
- separate operator UI and playback engine processes;
- native media and output paths;
- hardware-aware performance;
- visible timing and health.

Avoid turning architecture into an unreadable logo wall.

### 11.6 Connections and integrations

Use cyan for live connections and protocols. Group items by meaning rather than showing every name as an equal pill.

Possible categories:

- media and output;
- control and time;
- realtime graphics and external engines.

Every item must be labeled accurately as available, in development, planned, or exploratory.

### 11.7 Reliability

Show concrete operational practices such as validation, missing-resource warnings, system telemetry, logs, autosave, backups, or crash recovery only to the extent they are implemented or explicitly on the roadmap.

Amber is appropriate for the warning example; do not make the whole section amber.

### 11.8 Audience

Present theatre, concerts, immersive installations, and live events as concise use contexts. Avoid four generic icon cards. Prefer an editorial list, a compact matrix, or product-led examples.

### 11.9 Final CTA

End with one clear action. Repeat the product promise or a concise development invitation. Do not add a different visual language at the bottom of the page.

### 11.10 Footer

Include only real destinations: product, development/roadmap, documentation when available, legal links when required, and contact or social links that exist.

---

## 12. Component rules

### 12.1 Buttons

- Use rectangular controls with `6–8px` radius.
- Do not use pill buttons by default.
- Use one primary button per decision region.
- Icon-only buttons require accessible names.
- Button labels describe the result, not vague intent.

### 12.2 Tags and badges

Tags are allowed only for real status such as `IN DEVELOPMENT`, `PLANNED`, `WINDOWS`, `OSC LIVE`, or `WARNING`.

- No decorative claim pills.
- No badge clouds.
- Do not convert normal sentences into tags.
- Prefer a short metadata line when several labels would otherwise accumulate.

### 12.3 Cards

Cards require a real grouping reason. A three- or four-column generic feature-card grid should not be the default solution.

Before adding a card, ask whether alignment, a divider, or a shared section surface would communicate the content more clearly.

### 12.4 Icons

- Use simple line or filled icons consistent with the application.
- Icons support labels; they do not replace unfamiliar concepts.
- Avoid oversized decorative icons.
- Do not mix several icon styles.

### 12.5 Dividers and borders

Use `--sm-border` sparingly. Prefer alignment and spacing. Avoid luminous borders, gradient borders, and thick outlines.

---

## 13. Motion specification

Motion must demonstrate state or preserve spatial continuity.

Allowed examples:

- a cue progress line advancing;
- next becoming playing after a deliberate GO demonstration;
- an OSC value updating;
- a section entering with a short opacity/position transition;
- a connection activity indicator changing state.

Constraints:

- normal transition duration: `120–240ms`;
- editorial reveal maximum: approximately `400ms`;
- no bounce or elastic easing;
- no continuous floating;
- no scroll-jacking;
- no parallax required for comprehension;
- no cursor-following effects;
- no animated gradient backgrounds;
- all nonessential motion disabled under `prefers-reduced-motion: reduce`.

---

## 14. Responsive behavior

### 14.1 Wide desktop: `1440px+`

- Keep content centered within the 1440 px maximum.
- Do not let type grow beyond the defined caps.
- Product UI remains large and readable, not stretched to fill empty space.

### 14.2 Desktop: `1100–1439px`

- Use the two-column hero.
- Preserve at least 5/7 column balance.
- Avoid clipping the application frame.

### 14.3 Tablet: `768–1099px`

- Stack hero copy above product UI or use an asymmetric layout only when both remain readable.
- Reduce section spacing.
- Convert multi-column explanations to one or two columns.
- Use deliberate screenshot crops where the full UI would be too small.

### 14.4 Mobile: `<768px`

- Single-column page.
- Hero heading: `clamp(42px, 13vw, 58px)` with a maximum of 4 short lines.
- Primary and secondary actions may stack.
- Use one UI detail per visual block.
- Do not allow horizontal page scrolling.
- Do not hide essential copy or the primary CTA.
- Keep minimum interactive target size near 44 × 44 px.

### 14.5 Required verification widths

Visually inspect at minimum:

- `375 × 812`;
- `768 × 1024`;
- `1280 × 800`;
- `1440 × 900`;
- `1920 × 1080`.

---

## 15. Accessibility

The website MUST:

- target WCAG 2.2 AA contrast;
- have one logical `h1` and ordered heading levels;
- include a skip link;
- provide meaningful alternative text for product imagery;
- avoid putting essential explanatory text only inside an image;
- use real buttons and links for actions;
- preserve visible focus states;
- support keyboard navigation;
- avoid color-only meaning;
- respect reduced motion;
- work at 200% zoom without losing content or controls;
- label mobile navigation state with appropriate accessible attributes.

Product screenshot alt text should explain what the screenshot demonstrates, not list every visible field.

---

## 16. Content and truthfulness

### 16.1 Voice

Use concise, confident, operational language. Prefer verbs and concrete system behavior.

Good:

- `See what is live, what is next, and what will fire.`
- `Connect media, realtime graphics, and control in one cue workflow.`
- `Built for Windows. Designed for the pressure of a live show.`

Avoid:

- `Revolutionize your workflow.`
- `The ultimate creative platform.`
- `Effortless magic for every event.`
- unexplained superlatives;
- competitor-led positioning.

### 16.2 Feature status

Every feature statement must be one of:

- available;
- in development;
- planned;
- exploratory.

Do not present a mockup, architecture decision, or roadmap item as shipped functionality. If status is uncertain, use neutral product-direction language or omit the claim until verified.

### 16.3 Naming

- Product name: `Showmesh`.
- Historical name: `Intermission`; do not use it in current marketing copy.
- Category: `realtime show automation`.
- Primary line: `Connect, automate and run the show.`
- Model: `Resource → Action → Trigger`.

---

## 17. Performance and metadata

The implementation SHOULD:

- ship minimal client JavaScript;
- use responsive image formats and sizes;
- preload only critical fonts or imagery;
- lazy-load below-the-fold imagery;
- avoid heavy video in the hero;
- provide a useful title and meta description;
- define Open Graph metadata;
- include a favicon and real social preview asset when available;
- use structured data only when accurate and useful.

Target a strong Lighthouse result without sacrificing honest product imagery. Do not replace the real UI with generic vector decoration merely to improve a synthetic score.

---

## 18. Required workflow for Codex or another implementation agent

Before changing code, the agent MUST:

1. Read this specification in full.
2. Read `SHOWMESH_UI_UX_DESIGN_PRINCIPLES.md`.
3. Inspect the latest supplied product screenshot.
4. Inspect the existing repository and preserve unrelated user changes.
5. State which existing page elements violate this specification.
6. Produce a short implementation plan mapped to the relevant sections of this document.

During implementation, the agent MUST:

1. Use the documented tokens.
2. Reuse the real product screenshot.
3. Avoid inventing unsupported content or features.
4. Check desktop and mobile layouts, not only the default preview width.
5. Keep accessibility and reduced motion working.

Before declaring completion, the agent MUST:

1. Run the project’s build and relevant checks.
2. Render or inspect the page at all required verification widths.
3. Compare the result against the acceptance checklist below.
4. Fix violations rather than merely listing them.
5. Report any deliberate deviation and the exact reason.

---

## 19. Acceptance checklist

The page is not complete until every applicable item passes.

### Identity and positioning

- [ ] The product is called Showmesh everywhere in current marketing copy.
- [ ] The category is realtime show automation for Windows.
- [ ] The hero uses `Connect, automate and run the show.`
- [ ] There is no `QLab for Windows` comparison.
- [ ] Claims distinguish available, in-development, planned, and exploratory work.

### Visual direction

- [ ] The page looks derived from the Showmesh application.
- [ ] There are no decorative gradients, glows, auroras, or glass surfaces.
- [ ] There is no fluorescent-lime marketing palette.
- [ ] Semantic colors follow the documented meanings.
- [ ] There is no generic feature-card grid or badge cloud.
- [ ] Buttons and labels are not unnecessarily pill-shaped.

### Hero

- [ ] The desktop heading is no larger than 76 px.
- [ ] The desktop heading occupies no more than 3 rendered lines at 1440 px.
- [ ] Product UI is at least as visually important as the heading.
- [ ] The product image is not randomly clipped.
- [ ] The meaningful product state is visible in the initial viewport.
- [ ] The CTA uses `--sm-go`, not fluorescent lime.
- [ ] There are no claim pills below the CTA.

### Product imagery

- [ ] The latest real screenshot is used without invented internal UI.
- [ ] Screenshot aspect ratio is preserved.
- [ ] Current, next, GO, cue list, and relevant state remain readable.
- [ ] Mobile uses intentional readable crops rather than a tiny full screenshot.
- [ ] Every crop has a specific explanatory purpose.

### Layout and responsive behavior

- [ ] Content aligns to a coherent grid.
- [ ] The page has no horizontal overflow.
- [ ] The page has been inspected at all five required viewport sizes.
- [ ] Navigation, CTA, copy, and product evidence remain available on mobile.
- [ ] Section spacing is deliberate and consistent.

### Interaction and accessibility

- [ ] Keyboard focus is visible.
- [ ] Navigation and controls work with a keyboard.
- [ ] Reduced motion is respected.
- [ ] Color is not the only state indicator.
- [ ] Heading structure and landmarks are valid.
- [ ] Text and controls meet the intended contrast target.
- [ ] The page works at 200% zoom.

### Engineering quality

- [ ] Production build succeeds.
- [ ] There are no console errors.
- [ ] Images have dimensions or stable aspect ratios.
- [ ] Below-the-fold media is loaded responsibly.
- [ ] Unnecessary frameworks and animation dependencies were not added.

---

## 20. Immediate correction requirements for the rejected hero direction

Any implementation matching the previously rejected concept must be corrected as follows:

1. Reduce the hero heading to the specified maximum and keep it within three desktop lines.
2. Remove every claim pill below the hero actions.
3. Remove the phrase `Not just “QLab for Windows”`.
4. Replace fluorescent lime with `--sm-go` and `--sm-ready` according to semantic role.
5. Remove decorative blue/green background washes.
6. Restore the complete, readable application frame or create an intentional source-faithful crop.
7. Prevent the application image from being clipped by the viewport or container.
8. Keep the real GO control and current/next state visible in the product image.
9. Reduce generic startup styling in navigation and buttons.
10. Rebalance the hero so product evidence is at least as prominent as marketing copy.

These are required corrections, not optional suggestions.

