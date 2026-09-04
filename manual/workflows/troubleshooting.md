---
title: Troubleshooting
description: Resolve common Showmesh connection, media, output, MIDI, and installation problems.
---

# Troubleshooting

First isolate the editor, engine, project, media, Showmesh output, and
downstream signal path.

## Engine link lost

1. Read the **ENGINE LINK LOST** banner and retry count.
2. Remember that playback may still be running.
3. Confirm whether `engined.exe` is listening on port `7788`.
4. Reopen the editor and allow it to attach to the persistent engine.
5. After reconnecting, verify NOW, NEXT, outputs, and control state before GO.

## Video is black

- Verify the selected program display; use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>0</kbd>
  for a windowed check.
- Test without `--gpu` and preserve the engine log.
- On a hybrid-GPU system, inspect Windows Graphics Settings.
- Test a known H.264 or ProRes file.
- Check opacity, scale, position, layer order, and both resource/cue trims.
- Confirm the downstream display, NDI receiver, or Spout receiver separately.

## Preview is missing

Preview is a separate low-rate channel. `SHOWMESH_PREVIEW_HZ=0` disables it.
The real program output is authoritative.

## No audio

- Check resource and cue Volume; they multiply.
- Verify the audio bus device and channel range.
- Check Windows mute/device state and embedded audio channels.
- A null-audio device produces no physical sound.

## MIDI is absent

Windows builds include RtMidi. The engine log should report both input and
output port counts. Reconnect the device, restart the engine if port
enumeration changed, inspect **Control I/O → MIDI**, and test the monitor before
using Learn.

## Installer is blocked

The beta installer is unsigned, so SmartScreen may warn. Use only an installer
received from a trusted Showmesh source. A missing NDI sender usually means the
NDI runtime is not installed.

## Build fails with `__std_*` or `_Thrd_*`

Delete the stale engine build directory and reconfigure from the matching
Visual Studio 2022 tools terminal. See `docs/SETUP.md` in the app repository.

## Show state is unclear

Use PANIC only when a fast global fade/cut is safer than the unknown state, then
use the prepared recovery cue. Never hand-edit the project during a live show.
