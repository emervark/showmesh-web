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
| Repository | `emervark/Intermission` |
| Branch | `claude/transitions-v2-o0jbi1` |
| Commit | `9cc234700f054ae696843b63573c40cc48aeef5a` |
| Commit date | 15 July 2026 |
| Protocol revision | 3 |
| UI revision | r25 |
| Manual languages | Estonian and English |

## Coverage

| Topic | Status | Next improvement |
|---|---|---|
| First launch and first show | Initial guide complete | Add real UI screenshots |
| Cue lifecycle and types | Covered | Confirm operator workflow for OSC cues |
| Actions v2 and reactive triggers | Covered | Add a video example and demo project |
| Transitions and crossfades | Covered | Add a measured audio crossfade example |
| Layers and GPU compositing | Covered | Update when transforms are implemented |
| Display, window, and NDI | Covered | Add NDI sender-name setup when exposed |
| Spout | Limitation documented | Replace after integration |
| OSC and MIDI | Initial reference complete | Add screenshots after MIDI trigger UI |
| Audio | Partial | Add mixer and gain-staging chapter |
| Text and image sequences | Partial | Expand after editor fields are complete |
| Headless operation | Partial | Add deployment and watchdog workflow |
| Recovery and journal | Partial | Test the user-visible recovery workflow |
| Installer and release upgrade | Missing | Feature does not exist yet |

## Known documentation debt

- The manual does not yet include real application screenshots.
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
