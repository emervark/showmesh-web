---
title: Transitions
description: Fades, curves, crossfades, and transition actions.
---

# Transitions

A transition changes a parameter over time: opacity, scale, position, rotation,
volume, or pan.

## Anatomy

- **Property** — parameter to change;
- **From** — optional start value; current value when omitted;
- **To** — destination;
- **Duration** — change duration in seconds;
- **Pre-wait** — delay after the trigger;
- **Curve** — interpolation shape;
- **Trigger** — lifecycle, external, manual, or timecode event.

## Curves

| Curve | Character |
|---|---|
| **Linear** | Constant mathematical rate |
| **Ease In** | Slow start |
| **Ease Out** | Slow finish |
| **S Curve / Ease In Out** | Soft start and finish |
| **Step Start** | Jump at the beginning |
| **Step End / Hold Then Step** | Hold, then jump at the end |

Volume uses perceptual mapping and pan uses equal-power mapping, so a linear raw
value does not imply a linear perceived audio change.

## Crossfade two videos

1. Put Video A below Video B.
2. On Video B, fade its opacity `0 → 1` with **On Play**.
3. Add another Video B action targeting Video A and fade opacity to `0`.
4. Fade Video A's volume when it contains audio.
5. Stop Video A after both fades complete.

Older projects may contain `tracks[]`, `fadeInSec`, `fadeOutSec`, or other
legacy transition fields. The engine migrates supported data into visible
actions. Save migrated projects under a new name and rehearse them.
