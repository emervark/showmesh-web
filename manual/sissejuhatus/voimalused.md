---
title: Capabilities and limitations
description: Which Showmesh features are usable and which are still in development.
---

# Capabilities and limitations

This page describes the actual state of the source branch used for this manual.

## Media and cues

| Feature | Status | Notes |
|---|---|---|
| Video and audio playback | Working | FFmpeg, A/V sync, looping, and one-shot playback |
| Images and image sequences | Working | Images are resources used by video cues |
| Text | Working in the engine | The editor does not expose every text setting yet |
| Wait, Stop, Pause, Go To, Group | Working | Available in the cue list |
| Fades and actions | Working | Command, Set, Transition, and eight trigger types |
| Audio waveform | Not available | No waveform view in the editor |
| Subtitles | Not available | Outside the current version |

## Outputs

| Feature | Status | Notes |
|---|---|---|
| Fullscreen and windowed output | Working | Can be changed while the engine runs |
| Multiple simultaneous outputs | Working | Output Manager and mirror outputs |
| NDI send | Working on Windows | CPU and GPU frame paths are implemented |
| Spout send | Not available | Visible in the menu, but not implemented in the engine |
| Alpha layer compositing | Working; GPU needs hardware validation | Premultiplied-alpha compositing from bottom to top |
| Layer transforms | Not available | Position, scale, and rotation are not exposed |
| Crop and corner pin | Not available | Planned for later |

## Control and reliability

| Feature | Status | Notes |
|---|---|---|
| OSC input and output | Working | Default OSC input port is 8000 |
| MIDI Note and CC | Working | MIDI Learn UI is not implemented |
| Show mode | Working | Locks editing while transport remains active |
| Undo, redo, project load/save | Working | The engine is the only document writer |
| Journal and recovery | Working | Project operations are journalled |
| Missing-media pre-flight | Partial | Detection exists; relinker UI does not |
| HTTP/REST and Art-Net/sACN | Not available | Not implemented in this version |

::: danger Do not design a show around Spout
The Output menu labels Spout as **soon**, but this branch does not send a Spout
texture. Use fullscreen, windowed output, or NDI.
:::

The technical implementation status is maintained in `docs/STATUS.md`. This
manual focuses on behaviour visible and testable by an operator.
