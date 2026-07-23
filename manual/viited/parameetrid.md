---
title: Parameters
description: Animatable Showmesh parameter registry and addresses.
---

# Parameters

The source of truth is `protocol/params.schema.json`.

| ID | Label | Range | Mapper / unit | Applies to |
|---|---|---:|---|---|
| `video.opacity` | Opacity | `0…1` | linear / `%` | video, image, text |
| `video.scale` | Scale | `0…4` | linear / `×` | video, image, text |
| `video.posX` | Position X | `-1…1` | canvas fraction | video, image, text |
| `video.posY` | Position Y | `-1…1` | canvas fraction | video, image, text |
| `video.rotation` | Rotation | `-180…180` | degrees | video, image, text |
| `audio.mainLevel` | Volume | `0…2` | perceptual / dB | video, audio |
| `audio.pan` | Pan | `-1…1` | equal power | video, audio |

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
