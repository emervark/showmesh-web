---
title: Preparing a show
description: Checklist for building and rehearsing a Showmesh project.
---

# Preparing a show

A reliable live show is prepared so the operator does not need to repair the
project during the performance.

## 1. Project structure

- Give cues short, clearly distinguishable names.
- Leave numbering space: `1`, `1.1`, `1.2`, `2`.
- Put critical operator information in **Notes**.
- Group simultaneous cues or use Auto-continue only when parallel firing is
  intentional.
- Build dedicated stop and recovery cues for complex scenes.

## 2. Media check

For every file, verify:

- the path is valid;
- duration, first frame, and final frame are correct;
- audio channels and level are expected;
- loops are visually and audibly seamless;
- alpha works on the real output;
- GPU decode fallback does not interrupt playback.

Showmesh detects missing media during pre-flight, but this version has no
relinker UI. Repair the path or add the resource again.

## 3. Timing and actions

- Verify the transport's **NEXT** summary before every cue.
- Do not confuse On Play with On Cue Start.
- Give every stop fade an explicit duration.
- If a cue must stop after a fade, add a Stop command on On Finished or at a
  sufficiently late At Time.
- Fire each reactive action at least twice during the same cue.

## 4. Outputs

- Select the correct monitor and map Windows display numbers to Showmesh.
- Test fullscreen resolution and refresh rate.
- For NDI, check the real receiver—not only the editor preview.
- Verify the actual Windows audio device.
- Do not include Spout in the show plan for this version.

## 5. Rehearsal

Run at least two rehearsals:

1. **Technical rehearsal:** stop after every cue and inspect picture, audio,
   triggers, and logs.
2. **Performance-speed rehearsal:** use only the buttons and controllers the
   operator will use live.

Deliberately test double-GO, STOP during a fade, second STOP, Pause/Resume,
PANIC and recovery, and editor reconnection.

## 6. Lock and save

Save the project, make a backup, and enable **Show mode**. Confirm that editing
is locked while GO, STOP, PANIC, and Manual FIRE remain available.
