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
| OSC and MIDI cues | Working | Send OSC messages or MIDI Note/CC/Program/MSC from the cue list |
| Fades and actions | Working | Command, Set, Transition, and eight trigger types |
| Audio waveform | Not available | No waveform view in the editor |
| Subtitles | Not available | Outside the current version |

## Outputs

| Feature | Status | Notes |
|---|---|---|
| Fullscreen and windowed output | Working | Can be changed while the engine runs |
| Multiple simultaneous outputs | Working | Output Manager and mirror outputs |
| NDI send | Working on Windows | CPU and GPU frame paths are implemented |
| Spout send | Working on Windows | SpoutDX; CPU and GPU frame paths are implemented |
| Alpha layer compositing | Working; GPU needs hardware validation | Premultiplied-alpha compositing from bottom to top |
| Layer transforms | Working | Per-cue position, scale, and rotation, controllable through OSC, MIDI, and fades |
| Crop and corner pin | Not available | Planned for later |

## Control and reliability

| Feature | Status | Notes |
|---|---|---|
| OSC input and output | Working | Default OSC input port is 8000 |
| MIDI Note and CC | Working | Per-action MIDI Learn and GO/PANIC Learn in the editor |
| Show mode | Working | Locks editing while transport remains active |
| Undo, redo, project load/save | Working | The engine is the only document writer |
| Journal and recovery | Working | Project operations are journalled |
| Missing-media pre-flight | Partial | Detection exists; relinker UI does not |
| HTTP/REST and Art-Net/sACN | Not available | Not implemented in this version |

::: tip Verify sharing outputs in the real receiver
NDI and Spout mirror the program composition. Confirm during rehearsal that the
receiving application sees the Showmesh sender and shows the expected picture.
:::

The technical implementation status is maintained in `docs/STATUS.md`. This
manual focuses on behaviour visible and testable by an operator.
