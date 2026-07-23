---
title: Cues and the cue list
description: Cue lifecycle, arming, timing, continue mode, and transport behaviour.
---

# Cues and the cue list

A cue is the smallest fireable unit in a show. It can play media, wait, control
another cue, send OSC/MIDI, or run actions.

## Cue lifecycle

```text
idle → standby → prewait → playing → postwait → complete
                              ↕
                            paused
```

| State | Meaning |
|---|---|
| `idle` | Inactive |
| `standby` | Loaded and ready |
| `prewait` | Counting down before activity |
| `playing` | Main activity is running |
| `postwait` | Activity ended; post-wait is counting |
| `paused` | Clock and media are frozen |
| `complete` | Lifecycle finished |

## Arming and GO

Selection is standby: plain-clicking a cue or moving with
<kbd>↑</kbd>/<kbd>↓</kbd> selects it, arms it, and re-aims GO. **NEXT** always
shows the armed cue and the intent of firing it.

Range selection does not change the armed cue. Use Shift to extend a range and
Ctrl-click to toggle individual rows. The command palette
(<kbd>Ctrl</kbd>+<kbd>K</kbd>) can search a number or name and arm that cue; it
never fires a cue merely because it was found.

## Timing

- **Pre-wait** delays the cue's main activity after GO. **On Cue Start** fires
  before this delay; **On Play** waits for the actual player start.
- **Duration** controls Wait and control cues. Action timing is derived from
  the latest scheduled action end.
- **Post-wait** delays completion after the main activity.
- **Timecode GO** arms a cue to fire when chased LTC/MTC crosses its
  `hh:mm:ss:ff` value.

## Continue mode

| Setting | Behaviour |
|---|---|
| **None** | Wait for another GO |
| **Auto-continue** | Fire the next cue after this cue starts |
| **Auto-follow** | Fire the next cue after this cue completes |

## Media play mode

| Setting | Behaviour at media end |
|---|---|
| **Play once & eject** | Clear the output |
| **Play once & hold** | Hold the final frame |
| **Loop** | Repeat until stopped |

## STOP and PANIC

STOP politely stops **all currently live cues**. Each cue may complete its own
On Cue Stop fade; stopping it again is immediate. PANIC is the global brake:
the first press starts the panic fade, and a second press during that fade hard
stops everything.

See the [cue type reference](/viited/cue-tuubid).
