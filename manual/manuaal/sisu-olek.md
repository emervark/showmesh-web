---
title: Content status
description: Manual source version, audit coverage, and documentation debt.
---

# Content status

## Source version

| Field | Value |
|---|---|
| Application repository | `emervark/Showmesh` |
| Branch | `main` |
| Commit | `3e0e156e92359f6a5336e59a498c5ce140d3c3d6` |
| Commit date | 23 July 2026 |
| App version | `0.1.0-beta.1` |
| Protocol revision | `23` |
| UI revision | `r51` |
| Primary language | English |
| Translation | Estonian; may lag behind English |

## July 2026 audit

The manual was compared against 102 application commits after the previous
baseline. This update incorporates:

- the single v2 operator interface and selection-as-standby model;
- concurrent NOW display, STOP-all count, layered Esc, and panic fade;
- multi-selection, cue clipboard/duplicate, arrow navigation, and output keys;
- working Spout, geometry transforms, protocol rev 23, and UI r51;
- MIDI output cues plus GO/PANIC Learn;
- timecode action triggers and cue-level Timecode GO;
- the packaged Windows beta and persistent engine lifecycle;
- `.show` as the current project extension.

## Remaining documentation work

- Add current application screenshots and a short first-show video.
- Add dedicated audio buses/gain-staging and timecode workflow chapters.
- Document the final missing-media collect/relink workflow when shipped.
- Add supported-hardware and performance-test examples.
- Reconcile the full Estonian translation with this English edition.

## Update checklist

- Compare `docs/MANUAL.md`, `docs/STATUS.md`, schemas, generated kind registries,
  menu components, and installer configuration.
- Update version, protocol/UI revisions, limitations, and file extension.
- Check every Add-menu kind, inspector field, shortcut, and working output.
- Treat English as authoritative, then translate changed behaviour.
- Build both locales and inspect desktop/mobile rendering before release.
