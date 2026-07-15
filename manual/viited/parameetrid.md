---
title: Parameters
description: Animatable Showmesh parameter registry and addresses.
---

# Parameters

The parameter source of truth is `protocol/params.schema.json`. A stable ID must
not be renamed without a project migration.

| ID | Label | Range | Mapper | Resources |
|---|---|---:|---|---|
| `video.opacity` | Opacity | `0…1` | linear | video, image |
| `audio.mainLevel` | Volume | `0…2` | perceptual | video, audio |
| `audio.pan` | Pan | `-1…1` | equalPower | video, audio |

## Opacity

`0` is transparent and `1` fully visible. It multiplies the file's own alpha.

## Volume

`0` is silence, `1` nominal gain, and `2` up to double linear gain. Transitions
use perceptual/dB-domain mapping. The master limiter protects the sum but does
not replace correct gain staging.

## Pan

`-1` is left, `0` centre, and `1` right. Interpolation uses an equal-power curve.

## Resource and cue levels

Showmesh keeps a resource fader and cue playback trim separately:

```text
final opacity = resource opacity × cue opacity
final volume  = resource volume  × cue volume
final pan     = clamp(resource pan + cue pan, -1, 1)
```

Addresses:

```text
/resource/{resource-id}/opacity
/resource/{resource-id}/volume
/resource/{resource-id}/pan

/cue/{cue-id}/opacity
/cue/{cue-id}/volume
/cue/{cue-id}/pan
```

OSC directly controls numeric `/resource/...` addresses in this branch. Cue
actions normally write the `/cue/...` trim.

::: tip Troubleshooting
If a cue is unexpectedly silent or transparent, inspect both levels. A zero at
either multiplied level produces zero output.
:::
