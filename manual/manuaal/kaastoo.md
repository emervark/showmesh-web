---
title: Contributing to the manual
description: Showmesh manual structure, source verification, translation, and validation.
---

# Contributing to the manual

The manual is a standalone VitePress project. English at `/` is the
authoritative edition; Estonian lives under `/et/`.

## Local preview and check

```powershell
cd manual
npm install
npm run dev
```

Before publishing:

```powershell
npm run check
```

## Content layers

- **Getting started** — sequential beginner tasks;
- **Learning** — concepts and behaviour;
- **Workflows** — achieving a real operator outcome;
- **Reference** — exact current fields and allowed values.

Create English first. A translated page should use the same relative path under
`et/`, allowing the language menu to preserve the current topic.

## Verification sources

| Topic | Application source |
|---|---|
| Operator behaviour | `docs/MANUAL.md` |
| Version and feature state | `docs/STATUS.md`, `README.md` |
| Menus and shortcuts | `editor/src/renderer/v2/components/`, `v2/App.tsx` |
| Cue/action/output fields | `protocol/protocol.schema.json`, generated `kinds.gen.*` |
| Parameters | `protocol/params.schema.json` |
| Installation | `editor/package.json`, `editor/src/main/main.cjs`, `docs/BetaBuild.md` |
| Build and engine flags | `docs/SETUP.md` |

Generated registries are useful because the UI and engine consume the same kind
tables, but the schema remains the source of truth.

## Rules

- Write for the operator and use **Showmesh** consistently.
- Never document a roadmap item as available.
- Put real limitations beside the affected workflow.
- Use UI labels in bold, keys in `<kbd>`, and machine values in backticks.
- Avoid duplicating long value tables; link to Reference.
- Update source commit, app/protocol/UI versions, and content status together.
- Keep the English edition correct even when a translation must follow later.
