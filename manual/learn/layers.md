---
title: Layers and compositing
description: Order, transform, and composite several visuals at once.
---

# Layers and compositing

Showmesh composites video, image, and text layers bottom to top using
premultiplied-alpha **over** blending.

## Ordering

1. Lower **Layer** values are underneath.
2. On the same layer, the earlier-fired cue is underneath.
3. Stable cue ID order is the final tie-breaker.

Leave gaps such as `0`, `10`, `20`, and `30` so levels can be inserted later.

## Transform

The selected visual resource exposes:

| Parameter | Range |
|---|---:|
| Opacity | `0…1` |
| Scale | `0…4×` |
| Position X / Y | `-1…1` of the canvas |
| Rotation | `-180…180°` |

These values can also be controlled by Set and Transition actions. Image alpha
is preserved and multiplied by opacity.

## Current limits

- Crop, corner pin, edge blending, and per-output geometry are not implemented.
- External alpha behaviour depends on the selected output path.
- Always load-test the exact resolution, number of layers, preview, NDI/Spout,
  and GPU used for the show.

::: tip A crossfade needs overlap
Keep both visual cues alive during the fade. Stop the lower cue only after the
transition completes.
:::
