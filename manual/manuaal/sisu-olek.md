---
title: Content status
description: Manual coverage, source version, and outstanding documentation work.
---

# Content status

This maintenance index should be updated with major feature changes and release
preparation.

## Source version

| Field | Value |
|---|---|
| Repository | `emervark/Showmesh` |
| Branch | `main` |
| Commit | `5b8b9034f014de76ffef1fc2ae391ec29f98a6ce` |
| Commit date | 23 July 2026 |
| Protocol revision | 23 |
| UI revision | r51 |
| Manual languages | Estonian and English |

## Coverage

| Topic | Status | Next improvement |
|---|---|---|
| First launch and first show | Initial guide complete | Add real UI screenshots |
| Cue lifecycle and types | Covered | Add OSC and MIDI cue inspector screenshots |
| Actions v2 and reactive triggers | Covered | Add a video example and demo project |
| Transitions and crossfades | Covered | Add a measured audio crossfade example |
| Layers and GPU compositing | Covered | Document the layer transform workflow (position, scale, rotation) |
| Display, window, and NDI | Covered | Add NDI sender-name setup when exposed |
| Spout | Covered | Add receiver screenshots (Resolume, OBS) |
| OSC and MIDI | Covered | Add MIDI Learn screenshots |
| Audio | Partial | Add mixer and gain-staging chapter |
| Text and image sequences | Partial | Expand after editor fields are complete |
| Headless operation | Partial | Add deployment and watchdog workflow |
| Recovery and journal | Partial | Test the user-visible recovery workflow |
| Installer and release upgrade | Missing | Feature does not exist yet |

## Known documentation debt

- The manual does not yet include real application screenshots.
- The source moved from protocol rev 3 to rev 23; newer features such as the
  composition canvas, LTC Generator, and Live Audio Input resources are not
  documented yet.
- Audio mixing, limiting, and meters need a dedicated chapter.
- Resource organisation and missing-media recovery need finished UI.
- NDI and GPU sections need a supported-hardware matrix.
- Full keyboard accessibility has not been audited.

## Update checklist

- Did the Add-menu cue type list change?
- Did inspector section labels or fields change?
- Did `PROTOCOL_REV`, `UI_REV`, or `schemaVersion` change?
- Did the parameter registry gain an ID or capability?
- Did Output gain a working output type?
- Does the feature need Learning, Workflow, and Reference coverage?
- Can an old limitation warning now be removed?
- Were both language versions updated?
