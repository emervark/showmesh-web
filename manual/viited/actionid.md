---
title: Actions and triggers
description: Exact Actions v2 field, trigger, command, and curve reference.
---

# Actions and triggers

## Common action fields

| Field | Required | Meaning |
|---|---:|---|
| `id` | yes | Stable action ID inside the cue |
| `type` | yes | `command`, `set`, or `transition` |
| `enabled` | no | `false` skips the action; enabled by default |
| `target` | no | Target cue ID; empty means the owning cue |
| `trigger` | yes | Rule that fires the action |

## Command

| Field | Meaning |
|---|---|
| `command` | `play`, `pause`, or `stop` |
| `target` | Cue receiving the command |

Video, audio, and image capabilities allow all three commands.

## Set

| Field | Meaning |
|---|---|
| `property` | Stable parameter registry ID |
| `to` | New value |

OSC and MIDI triggers may provide a live value instead of `to`. The engine
clamps it to the registry range.

## Transition

| Field | Unit | Meaning |
|---|---|---|
| `property` | — | Parameter registry ID |
| `from` | parameter | Optional start; current value if omitted |
| `to` | parameter | Destination value |
| `durationMs` | ms | Duration |
| `delayMs` | ms | Delay after trigger |
| `curve` | — | Interpolation curve |

## Trigger fields

| `type` | Extra field | Behaviour |
|---|---|---|
| `onCueStart` | — | Start of cue lifecycle |
| `onPlay` | — | Actual media-player start |
| `onCueStop` | — | Soft stop |
| `onFinished` | — | End of main cue activity |
| `atTime` | `atMs` | Specified cue-clock time |
| `osc` | `address` | OSC while owning cue plays |
| `midi` | `channel`, `controller` | MIDI CC while owning cue plays |
| `manual` | — | FIRE button or `action.fire` command |

## Curves

Allowed `curve` values:

```text
linear · easeIn · easeOut · sCurve · stepStart · stepEnd
holdThenStep · easeInOut
```

## Timing calculation

Effective action-cue duration is the maximum of:

```text
trigger atMs + delayMs + durationMs
```

Only `onCueStart`, `onPlay`, and `atTime` actions contribute. On Cue Stop, On
Finished, OSC, MIDI, and Manual are outside this duration.

## Stop grace

An enabled `onCueStop` transition may keep output alive until it finishes after
the first STOP. A second STOP ends immediately. Direct external stops and PANIC
may be hard stops; rehearse the exact controller path used by your show.
