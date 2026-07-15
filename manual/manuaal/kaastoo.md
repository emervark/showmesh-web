---
title: Contributing to the manual
description: Showmesh manual content, style, translation, and validation rules.
---

# Contributing to the manual

The manual is deliberately separate from application code. Each content page
is plain Markdown, navigation lives in one configuration file, and the site is
built as static output. Adding a page requires no React knowledge.

## Local preview

```powershell
cd manual
npm install
npm run dev
```

Before completing a change:

```powershell
npm run check
```

This builds both languages and catches broken internal links and rendering
errors.

## Adding a page

1. Choose the correct content layer:
   - **Getting started** — sequential beginner guide;
   - **Learning** — concept or system behaviour;
   - **Workflows** — process for achieving an outcome;
   - **Reference** — exact and complete field definitions.
2. Create the English page in the root content tree.
3. Create the matching Estonian page under `et/` using the same relative path.
4. Add `title` and `description` frontmatter to both.
5. Add both pages to their locale sidebars in `.vitepress/config.mts`.
6. Add at least one incoming and one outgoing link in each language.
7. Run `npm run check`.

Matching paths are important: the language menu maps corresponding pages by
relative path.

## One topic, one source of truth

- Learning pages explain **why and how**; reference pages list **allowed values**.
- Do not duplicate long value lists across several pages—link to the reference.
- Put partial-feature limitations close to the relevant workflow.
- Never document a roadmap item as a working feature.

## Source-code verification map

| Topic | Primary repository source |
|---|---|
| UI labels, menus, shortcuts | `editor/src/renderer/App.tsx` |
| Editor actions and default cues | `editor/src/renderer/store.ts` |
| Cue, action, and trigger fields | `protocol/protocol.schema.json` |
| Animatable parameters | `protocol/params.schema.json` |
| OSC addresses | `engine/net/osc_dispatch.cpp` |
| MIDI behaviour | `engine/net/midi_dispatch.cpp`, `engine/rt/main.cpp` |
| Feature status | `docs/STATUS.md` |
| Windows build and flags | `docs/SETUP.md` |

Generated `protocol.gen.*` and `params.gen.*` files are useful for a quick
check, but the schema files are their source of truth.

## Writing style

- Use **Showmesh** as the product name. Use **Intermission** only when the user
  actually sees it in a file, process, or UI label.
- Write for the user rather than the code author.
- Start with the outcome. Use numbered lists only when order matters.
- Use bold text for UI labels, `<kbd>` for keys, and backticks for machine values.
- Reserve warning blocks for real risk.
- Use one H1 per page; H2 headings build the page outline.

## Translation rules

- Estonian and English pages must keep the same relative path.
- Translate meaning, not source sentence structure.
- Keep UI labels in their actual interface language when quoting them.
- Keep machine IDs, JSON fields, OSC addresses, and code examples unchanged.
- Update both languages in the same change when behaviour changes.

## Images

Store images in a suitable `public/images/` subfolder. Use an informative alt
text in each language. Add images only when they materially reduce user error.

## Version updates

When moving the manual to a new release or branch:

1. update source commit and date on both home pages;
2. compare schemas, `App.tsx`, `store.ts`, and `docs/STATUS.md`;
3. update both content-status pages;
4. build both languages;
5. visually inspect key pages in desktop and mobile widths;
6. verify that the language menu preserves the current page.

## Publishing

`DOCS_BASE` supports a root domain or subpath build:

```powershell
$env:DOCS_BASE='/Intermission/'
npm run build
```
