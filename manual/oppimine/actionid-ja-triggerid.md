---
title: Actions and triggers
description: Build cue behaviour with the Actions v2 model.
---

# Actions and triggers

An action is additional activity inside a cue. One cue can play video, fade its
audio, change another cue's opacity, and finally send a stop command.

## Three action types

### Command

Sends a transport command: **Play**, **Pause**, or **Stop**. Target selects the
cue that receives the command.

### Set

Immediately sets a parameter, such as opacity `0.5` or volume `1.0`.

### Transition

Changes a parameter over time. It can define a starting value, destination,
duration, delay, and curve.

## Target

An action target can be:

- **This cue** — an empty target means the cue that owns the action;
- another compatible cue in the same cue list.

Media cues often control their own opacity and audio. Transition cues are
commonly used to control other cues.

## Triggers

| Trigger | Fires when |
|---|---|
| **On Cue Start** | The cue lifecycle begins |
| **On Play** | The media player actually starts |
| **On Cue Stop** | The cue receives a soft STOP |
| **On Finished** | Cue activity and scheduled actions finish |
| **At Time** | The cue clock reaches a specified millisecond |
| **OSC** | A matching OSC address arrives |
| **MIDI** | A matching MIDI CC arrives |
| **Manual** | The operator presses **FIRE** on the action card |

OSC, MIDI, and Manual triggers are armed only while their owning cue is playing.
They may fire repeatedly during the same run.

## Example: fade a video in and out

```text
1. Transition · Opacity 0 → 1 · 1000 ms · On Play
2. Transition · Opacity current → 0 · 1000 ms · On Cue Stop
```

The first action reveals the video after playback starts. The second gives STOP
a one-second finish. If `From` is omitted, the transition starts from the real
current value.

## Example: stop after a fade

```text
1. Transition · target Video A · Opacity → 0 · 2000 ms · On Cue Start
2. Transition · target Video A · Volume → 0 · 2000 ms · On Cue Start
3. Command · target Video A · Stop · On Finished
```

## Conflicts

A new transition on the same parameter replaces the previous transition. This
**replace** policy makes retriggering predictable: the new fade starts from the
current value and moves towards its new destination.

See the exact fields in the [action reference](/viited/actionid).
