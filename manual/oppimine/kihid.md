---
title: Layers and compositing
description: Display several visual cues at once and control their order.
---

# Layers and compositing

Showmesh can display several video, image, or text layers simultaneously. The
program is composited bottom to top using premultiplied-alpha **over** blending.

## Ordering

Visuals are ordered by:

1. lower **Layer** value underneath;
2. on the same layer, the earlier-fired cue underneath;
3. stable cue ID order as a final tie-breaker.

A useful convention is:

| Layer | Use |
|---:|---|
| 0 | Background video |
| 10 | Main image or second video |
| 20 | Graphics or lower third |
| 30 | Emergency or blackout layer |

Leave gaps between layer numbers so new levels can be inserted later.

## Opacity

Each visual layer's `video.opacity` multiplies its alpha. `0` is transparent and
`1` fully visible. An image file's own alpha is preserved and multiplied by cue
opacity.

## Current limitations

- Layer position, scale, and rotation are not editable.
- Per-output crop and corner pin are not implemented.
- Full alpha in the final external program output is not complete.
- The GPU compositor exists in source, but every Windows/GPU combination needs
  a hardware rehearsal.

::: tip A crossfade needs overlap
If Video A is stopped before Video B becomes visible, there is nothing to
crossfade. Keep both cues running for the transition and stop the lower cue only
after the fade.
:::
