---
title: Actions and triggers
description: Build cue behaviour with commands, values, fades, and nine trigger types.
---

# Actions and triggers

An action adds activity to a cue. A cue can play media, fade its own audio,
change another cue's opacity, and issue a stop command.

## Action types

- **Command** sends **Play**, **Pause**, or **Stop** to a compatible cue.
- **Set** immediately writes a parameter value.
- **Transition** changes a parameter over time using an optional starting
  value, destination, duration, pre-wait, and curve.

An empty target means the cue that owns the action.

## Triggers

| Trigger | Fires when |
|---|---|
| **On Cue Start** | The cue lifecycle begins |
| **On Play** | The media player actually starts |
| **On Cue Stop** | The cue receives a soft stop |
| **On Finished** | Main cue activity finishes |
| **At Time** | The cue clock reaches `atMs` |
| **OSC** | A matching address arrives while the cue plays |
| **MIDI CC** | A matching channel/controller arrives while the cue plays |
| **Manual** | The operator presses **FIRE** |
| **Timecode** | Chased timecode crosses `atTc` |

OSC, MIDI, and Manual triggers may fire repeatedly during one cue run. A Set
action can follow a numeric OSC argument or map MIDI CC `0…127` to the target
parameter range.

## Example: fade in and out

```text
1. Transition · Opacity 0 → 1 · 1 s · On Play
2. Transition · Opacity current → 0 · 1 s · On Cue Stop
```

If **From** is omitted, the engine starts from the real current value. A new
transition on the same target parameter replaces the previous one and continues
from the current state.

See the exact fields in [Actions and triggers reference](/viited/actionid).
