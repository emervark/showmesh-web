---
title: Project file
description: Showmesh .imsn JSON structure and safe editing rules.
---

# Project file

A Showmesh project is a JSON-formatted `.imsn` file. The engine loads,
normalises, migrates, and saves it using atomic writes and a journal.

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

| Field | Contents |
|---|---|
| `schemaVersion` | Document schema version; not the protocol revision |
| `resources` | Media and text sources |
| `outputs` | Display, NDI, Spout, or null outputs |
| `connections` | Currently OSC output connections |
| `triggers` | MIDI Note/CC transport mappings |
| `cueLists` | Cue lists; the editor currently uses the first list |

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
      "durationMs": 1000,
      "curve": "sCurve",
      "trigger": { "type": "onPlay" }
    }
  ]
}
```

An empty action target means the owning cue.

## Safe editing

1. Prefer the editor; the engine is the only document writer.
2. Stop the engine before unavoidable hand editing.
3. Make a copy.
4. Keep IDs unique and do not rename parameter IDs.
5. Validate JSON syntax.
6. Open in Showmesh, inspect migration warnings, and save under a new name.
7. Rehearse the entire show.

## Migration

On load, the engine converts legacy `fadeInSec`, `fadeOutSec`, `tracks[]`, and
`completionAction` data into visible actions where possible. Migration is
idempotent. A legacy track with a relative destination may remain on the old
execution path.
