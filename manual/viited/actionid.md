---
title: Actions and triggers
description: Exact current action and trigger field reference.
---

# Actions and triggers

## Common fields

| Field | Meaning |
|---|---|
| `id` | Stable action ID inside the cue |
| `type` | `command`, `set`, or `transition` |
| `enabled` | Disabled actions are skipped |
| `target` | Target cue ID; empty means owner |
| `trigger` | Trigger object |

## Action fields

| Type | Fields |
|---|---|
| `command` | `command`: `play`, `pause`, or `stop` |
| `set` | `property`, `to` |
| `transition` | `property`, optional `from`, `to`, `durationSec`, `curve`, `preWait` |

The engine clamps values to the parameter registry. A new transition on the
same target/property replaces the previous transition.

## Triggers

| Type | Extra fields | Behaviour |
|---|---|---|
| `onCueStart` | — | Cue lifecycle begins |
| `onPlay` | — | Media player starts |
| `onCueStop` | — | Soft stop begins |
| `onFinished` | — | Main cue activity finishes |
| `atTime` | `atMs` | Cue clock reaches milliseconds |
| `osc` | `address` | Matching OSC while cue plays |
| `midi` | `channel`, `controller` | Matching MIDI CC while cue plays |
| `manual` | — | FIRE button or `action.fire` |
| `timecode` | `atTc` | Chased timecode crosses `hh:mm:ss:ff` |

Allowed curves:

```text
linear · easeIn · easeOut · sCurve · stepStart · stepEnd
holdThenStep · easeInOut
```

An enabled On Cue Stop transition can keep output alive until it finishes.
A second stop ends the cue immediately.
