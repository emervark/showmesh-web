---
title: Outputs, NDI, and Spout
description: Configure display, windowed, NDI, Spout, and audio outputs.
---

# Outputs, NDI, and Spout

Configure outputs from **Output** in Edit mode. Changes apply live without an
engine restart.

## Program display

- **Disabled** closes the program display while NDI or Spout sharing may remain
  active.
- **Fullscreen → Display N** opens a borderless fullscreen output.
- **Windowed → Display N** opens a resizable program window.

Shortcuts:

```text
Ctrl+Shift+D       Disabled
Ctrl+Shift+1…9     Fullscreen on display 1…9
Ctrl+Shift+0       Windowed on display 1
```

Verify Windows display order, resolution, refresh rate, scaling, HDR/colour
settings, and the physical signal path before a show.

## NDI

Enable **Composition Output Sharing → Network streaming (NDI)**. NDI mirrors
the program canvas and requires the NDI runtime. Check sender discovery,
resolution, frame rate, colour, audio, and network stability on the real
receiver.

## Spout

Enable **Composition Output Sharing → Texture sharing (Spout)**. Spout shares
the program texture with another Windows application on the same GPU/system.
Confirm the sender name and texture in the actual receiver; do not infer Spout
health from the editor preview.

## Audio outputs

Audio buses are separate from video outputs. Confirm the device, starting
channel, channel count, cue/resource levels, and Windows device state.

## Performance

Display, preview, NDI readback, Spout, composition, and decode share GPU and CPU
resources in different ways. Rehearse the maximum simultaneous load at the real
show resolution.
