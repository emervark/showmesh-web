---
title: Parameters
description: Animatable Showmesh parameter registry and addresses.
---

# Parameters

The source of truth is `protocol/params.schema.json` in the Showmesh repo; the
table below is generated from it.

<!-- generated:params start — from Showmesh docs/manual/generated/params.md; do not edit by hand, run `npm run sync:reference` -->

| ID | Label | Range | Default fade target | Mapper | Unit | Applies to |
|---|---|---:|---:|---|---|---|
| `video.opacity` | Opacity | `0…1` | `0` | linear | `%` | video, image, text |
| `video.scale` | Scale | `0…4` | `1` | linear | `×` | video, image, text |
| `video.posX` | Position X | `-1…1` | `0` | linear | `canvas` | video, image, text |
| `video.posY` | Position Y | `-1…1` | `0` | linear | `canvas` | video, image, text |
| `video.rotation` | Rotation | `-180…180` | `0` | linear | `°` | video, image, text |
| `audio.mainLevel` | Volume | `0…2` | `0` | perceptual | `dB` | video, audio |
| `audio.pan` | Pan | `-1…1` | `0` | equalPower | `pan` | video, audio |

<!-- generated:params end -->

"Default fade target" is the value a newly added fade starts with — not the
parameter's resting value. It is why *Add Fade Out* lands on `0`; an untouched
cue still renders fully visible.

## Resource and cue levels

```text
final opacity = resource opacity × cue opacity
final volume  = resource volume  × cue volume
final pan     = clamp(resource pan + cue pan, -1, 1)
```

Common OSC addresses:

```text
/resource/{resource-id}/opacity
/resource/{resource-id}/volume
/resource/{resource-id}/pan

/cue/{cue-id}/opacity
/cue/{cue-id}/volume
/cue/{cue-id}/pan
```

If a cue is silent, invisible, off-canvas, or unexpectedly small, inspect both
resource and cue trims plus transform actions.
