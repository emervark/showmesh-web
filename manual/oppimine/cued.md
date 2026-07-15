---
title: Cues and the cue list
description: Cue lifecycle, playhead, timing, continue mode, and play mode.
---

# Cues and the cue list

A cue is the smallest fireable unit in a show. It can play media, wait, control
another cue, send OSC, or carry a set of actions.

## Cue lifecycle

A typical cue moves through these states:

```text
idle → standby → prewait → playing → postwait → complete
                              ↕
                            paused
```

| State | Meaning |
|---|---|
| `idle` | The cue is inactive |
| `standby` | Loaded and ready |
| `prewait` | Counting down before the main activity |
| `playing` | Main cue activity is running |
| `postwait` | Main activity is done; post-wait is counting |
| `paused` | Cue clock and media are frozen |
| `complete` | The cue lifecycle has finished |

## GO and the playhead

GO fires the next cue indicated by the playhead. Clicking a cue selects it for
the inspector but does not automatically move the playhead. The transport's
**NEXT** line always summarises what GO will actually do.

## Timing

### Pre-wait

The delay between GO and the cue's main activity. **On Cue Start** fires at the
beginning of the lifecycle; **On Play** waits for the media player to start.

### Duration

The duration of Wait and control cues. For an action cue, effective duration is
the latest end time of an `On Cue Start`, `On Play`, or `At Time` action.

### Post-wait

The delay after the main activity and before the cue becomes complete.

## Continue mode

| Setting | Behaviour |
|---|---|
| **None** | The next cue waits for another GO |
| **Auto-continue** | The next cue fires immediately after this cue starts |
| **Auto-follow** | The next cue fires after this cue is fully complete |

Use Auto-continue for parallel events and Auto-follow for playlists or timed
chains.

## Media play mode

| Setting | Behaviour at media end |
|---|---|
| **Play once & eject** | Plays once and clears the output |
| **Play once & hold** | Plays once and holds the final frame |
| **Loop** | Repeats until stopped |

An image is a resource used by a video cue and behaves like held media.

## STOP, PAUSE, and PANIC

- **Pause** freezes the cue clock, media, and any finishing grace period.
- The first **Stop** may run `On Cue Stop` fades and wait for them.
- A second **Stop** on the same cue ends it immediately.
- **Panic** stops everything immediately and does not wait for actions.

See the complete [cue type reference](/viited/cue-tuubid).
