---
title: Project file
description: Showmesh .show JSON structure and safe editing rules.
---

# Project file

A Showmesh project is a JSON-formatted `.show` file. The engine normalises,
migrates, journals, and atomically saves it.

## Top-level structure

```json
{
  "schemaVersion": 1,
  "name": "My show",
  "resources": [],
  "outputs": [],
  "connections": [],
  "triggers": [],
  "cueLists": [
    { "id": "main", "name": "Main", "cues": [] }
  ]
}
```

Connections currently describe OSC destinations. Triggers map MIDI Note/CC to
transport actions including GO and PANIC.

### Resource types

<!-- generated:resource-types start — from Showmesh docs/manual/generated/resource-types.md; do not edit by hand, run `npm run sync:reference` -->

| Resource type | Label | Kind-specific fields |
|---|---|---|
| `media` | Media | `path`, `fps` |
| `text` | Text | `text`, `font`, `fontSize`, `textColor`, `align`, `width`, `height`, `backgroundColor` |
| `ltcGen` | LTC | `startTc`, `ltcRate` |
| `liveIn` | Live audio input | `inputDevice` |

<!-- generated:resource-types end -->

### Output types

<!-- generated:output-types start — from Showmesh docs/manual/generated/output-types.md; do not edit by hand, run `npm run sync:reference` -->

| Output type | Label | Kind-specific fields |
|---|---|---|
| `display` | Program output | `display`, `windowed`, `width`, `height` |
| `ndi` | NDI output | `width`, `height`, `ndiName` |
| `spout` | Spout output | `width`, `height`, `spoutName` |
| `null` | Output | — |
| `audioOut` | Output | `deviceName`, `channelStart`, `channelCount` |

<!-- generated:output-types end -->

## Minimal video cue with an action

```json
{
  "id": "cue-video",
  "number": "1",
  "name": "Opening video",
  "type": "video",
  "target": "res-video",
  "playMode": "onceHold",
  "preWait": 0,
  "postWait": 0,
  "continueMode": "none",
  "durationSec": 0,
  "actions": [
    {
      "id": "fade-in",
      "type": "transition",
      "property": "video.opacity",
      "from": 0,
      "to": 1,
      "durationSec": 1,
      "curve": "sCurve",
      "trigger": { "type": "onPlay" }
    }
  ]
}
```

## Safe editing

1. Prefer the editor; the engine is the only document writer.
2. Stop the engine before unavoidable hand editing.
3. Copy the project and keep IDs unique.
4. Do not rename registry IDs.
5. Validate JSON, open the copy, inspect warnings, save, and rehearse.

Legacy fade and transition fields are migrated where possible. Save migrated
projects under a new name.
