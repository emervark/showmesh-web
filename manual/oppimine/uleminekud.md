---
title: Transitions
description: Fades, curves, crossfades, and transition cues.
---

# Transitions

A Showmesh transition changes a parameter over time. Common parameters are
video opacity, audio volume, and pan.

## Anatomy of a transition

A Transition action contains:

- **Property** — parameter to change;
- **From** — optional starting value;
- **To** — destination value;
- **Duration** — change duration in milliseconds;
- **Delay** — delay after the trigger;
- **Curve** — shape of the value change;
- **Trigger** — when the action starts.

If From is omitted, the engine reads the parameter's current value when the
action fires. This is the right choice for interruptible or reversible fades.

## Curves

| Curve | Character |
|---|---|
| **Linear** | Constant mathematical rate |
| **Ease In** | Slow start |
| **Ease Out** | Slow finish |
| **S Curve / Ease In Out** | Soft start and finish |
| **Step Start** | Jumps at the beginning |
| **Step End / Hold Then Step** | Holds and jumps at the end |

Volume uses perceptual mapping and pan uses equal-power mapping. A linear raw
value therefore does not necessarily produce a linear perceived audio change.

## Fade-in and fade-out

| Action | Trigger | From | To |
|---|---|---:|---:|
| Opacity fade-in | On Play | 0 | 1 |
| Opacity fade-out | On Cue Stop | — | 0 |

For a video with audio, usually add the same pair for Volume.

## Crossfade between two videos

1. Put Video A on layer `0` and Video B on layer `1`.
2. Add Video B opacity `0 → 1` with **On Play**.
3. Add another action on Video B that targets Video A and fades opacity to `0`
   with **On Cue Start**.
4. Add an `At Time` or `On Finished` Stop command for Video A.

Equal durations produce a conventional crossfade. Fade Video A's volume too if
it contains audio.

## Legacy transition data

Older projects may contain `tracks[]`, `fadeInSec`, `fadeOutSec`, or single-
parameter transition fields. The engine migrates most of these to actions.
Tracks with relative destinations may remain on the legacy execution path.

::: warning Do not hand-edit migrated JSON casually
Save old projects under a new name and inspect the cue list. Actions are the new
source of truth; mixing old and new fields by hand makes a show difficult to
audit.
:::
