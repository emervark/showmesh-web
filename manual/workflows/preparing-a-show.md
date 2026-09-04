---
title: Preparing a show
description: Checklist for building and rehearsing a Showmesh project.
---

# Preparing a show

Prepare a live project so it does not need repair during the performance.

## Project and media

- Use short, distinguishable cue names and leave numbering gaps.
- Put critical operator information in **Notes**.
- Use groups or Auto-continue only for intentional parallel firing.
- Verify every path, duration, first/final frame, audio channel, loop, and alpha.
- Exercise GPU fallback with representative media.
- Keep the show project and media in a stable location. The complete
  collect/relink workflow is not finished in this beta.

## Timing and control

- Click or arrow to the intended cue and verify **NEXT** before GO.
- Distinguish **On Cue Start** from **On Play**.
- Give stop fades explicit durations and test a second STOP.
- Test every OSC/MIDI mapping and MIDI output device.
- For timecode, verify source, frame rate, start value, dropout behaviour, and
  re-cueing after a backward jump.

## Outputs

- Map Windows display numbers to Showmesh labels.
- Test real fullscreen resolution, refresh rate, scaling, and colour path.
- Verify NDI on the real receiver and Spout in the receiving application.
- Verify the actual audio device and channel assignment.
- Load-test all simultaneous layers, outputs, preview, and network sends.

## Rehearsal

Run a technical rehearsal that pauses for inspection, then a
performance-speed rehearsal using only the live operator controls. Deliberately
test double-GO, STOP during a fade, second STOP, pause/resume, first and second
PANIC, engine-link loss, editor restart, and the prepared recovery cue.

## Lock and identify the build

Save a dated `.show` copy, back it up, and enable **Show mode**. Record the app
version, protocol revision, UI revision, media package, and output configuration
used in the rehearsal.
