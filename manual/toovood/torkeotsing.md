---
title: Troubleshooting
description: Resolve common Showmesh connection, media, output, and build problems.
---

# Troubleshooting

First determine whether the fault is in the editor, engine, project, media, or
the signal path after Showmesh.

## The editor shows Disconnected

1. Confirm that `engined.exe` is running.
2. Check the WebSocket port in the log; default is `7788`.
3. Make sure another process is not using the same port.
4. Wait at least one second for automatic reconnection.
5. After reconnecting, verify playhead and program output before GO.

## The engine is older than the editor

Rebuild the engine:

```bat
cmake --build engine\build --config RelWithDebInfo
```

Stop the old process, launch the new binary, and verify the build stamp.

## Video is black or GPU fallback starts

- Try the file without `--gpu`.
- Update the GPU driver and check which adapter owns the output.
- On a hybrid-GPU system, inspect Windows Graphics Settings.
- Do not disable the automatic GPU probe before saving the log.
- Test a standard H.264 or ProRes re-export.

## Program works but preview is missing

Preview is a separate JPEG-over-WebSocket channel. `INTERMISSION_PREVIEW_HZ=0`
disables it. GPU preview may drop frames under load; real program output is the
more important source of truth.

## No audio

- Check audio peaks in the status drawer.
- Check both cue and resource Volume; they multiply.
- Verify the Windows output device and mute state.
- `audioDeviceNull` means no physical audio device was opened.
- Test a known stereo file without transitions.

## NDI does not appear

- Confirm that NDI is enabled in Output.
- Check firewall rules and the Windows network profile.
- Ensure sender and receiver share the same discovery environment.
- Start with a simple 1080p file and Disabled display output.
- Check the engine log for sender or frame errors.

## Build fails with `__std_*` or `_Thrd_*`

The usual cause is a mismatch between the CMake cache and vcpkg toolsets. Run a
clean configure from the same Visual Studio 2022 terminal. Detailed steps are
in `docs/SETUP.md`, under **Toolset mismatch**.

## Show state is unclear

Use PANIC only when an immediate cut is safer than an unknown state, then use a
prepared recovery cue. Do not hand-edit the project file during a live show.
