---
title: Capabilities and limitations
description: Which Showmesh beta features are usable and which remain in development.
---

# Capabilities and limitations

This page describes the `main` build documented on the manual home page.

## Media, cues, and timing

| Feature | Status | Notes |
|---|---|---|
| Video, audio, images, and text | Working | FFmpeg playback, A/V sync, loops, one-shot modes, text rendering |
| Wait, Note, Transition, Stop, Pause, Go To, Group | Working | Available in the Add menu |
| OSC and MIDI cues | Working | Send OSC messages/fades or MIDI note, CC, program, and MSC |
| Actions and reactive triggers | Working | Command, Set, Transition, and nine trigger types |
| LTC/MTC chase and timecode-armed cues | Working | Rehearse the selected input, frame rate, and rollover |
| LTC generator and live audio input | Working | Added as resources |
| Audio waveform | Not available | No waveform timeline in the editor |
| Subtitle tracks | Not available | Outside the current beta |

## Outputs and compositing

| Feature | Status | Notes |
|---|---|---|
| Fullscreen and windowed display | Working | Reconfigurable while the engine runs |
| Multiple outputs and audio buses | Working | Outputs reconcile live |
| NDI send | Working on Windows | Requires the NDI runtime |
| Spout send | Working on Windows | GPU texture sharing |
| Layer opacity and alpha compositing | Working | Premultiplied-alpha composition |
| Scale, position, and rotation | Working | Available in the resource Transform inspector |
| Crop, corner pin, and edge blend | Not available | Not part of the current beta |

## Operation and reliability

| Feature | Status | Notes |
|---|---|---|
| OSC and MIDI input/output | Working | MIDI is built in on Windows |
| GO/PANIC MIDI Learn | Working | Available in **Control I/O → MIDI** |
| Show mode | Working | Locks editing while transport remains active |
| Undo/redo and project load/save | Working | The engine is the only document writer |
| Journal and recovery | Working | Document operations are journalled |
| Missing-media relinker | Partial | Detection exists; the complete collection/relink workflow is not finished |
| Windows installer | Beta | Per-user NSIS installer; currently unsigned |
| HTTP/REST and Art-Net/sACN | Not available | Candidates only if beta feedback requires them |

::: info 1.0 scope
ISF shaders, the Timeline panel, and Lua cues were moved to the 1.1 candidate
list. Do not design a 1.0 show around them.
:::

The application repository maintains the detailed engineering matrix in
`docs/STATUS.md`. This manual documents operator-visible behaviour.
