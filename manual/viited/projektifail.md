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

Resources may be media, text, LTC generators, or live inputs. Outputs may be
display, NDI, Spout, null, or audio buses. Connections currently describe OSC
destinations. Triggers map MIDI Note/CC to transport actions including GO and
PANIC.

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
