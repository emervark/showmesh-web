---
title: Running a live show
description: Safe Show mode operation, concurrent playback, and recovery.
---

# Running a live show

## Before doors open

1. Start Showmesh and open the correct `.show` file.
2. Verify engine connection, build/version, outputs, inputs, and a safe idle
   picture.
3. Select the first intended cue and read **NEXT**.
4. Perform a short audio, visual, and controller test.
5. Enable **Show mode**.

## Show mode

Show mode hides editing panels and locks document changes and output
reconfiguration. Cue selection/arming, GO, STOP, PANIC, and Manual FIRE remain
available. Leave Show mode only for a deliberate edit, then save, test, and
lock again.

## GO and concurrent cues

GO or <kbd>Space</kbd> fires **NEXT**. The NOW block shows the most recently
fired cue and lists other live cues underneath. Auto-continue, Auto-follow,
timecode, or external triggers may start more cues without another GO.

## STOP

STOP applies to every live cue and shows its blast radius, for example
`STOP · 3`. It requests a polite stop so each cue can run its On Cue Stop fade.
Stopping a cue again ends it immediately.

## PANIC

Bare <kbd>Esc</kbd> or PANIC begins the global panic fade, approximately two
seconds to black/silence. Press again during the fade for an immediate hard
stop. Open menus and popovers consume Esc first and cannot accidentally pass it
through to PANIC.

## Engine-link loss

The editor shows **ENGINE LINK LOST**, freezes telemetry as **LAST KNOWN**, and
retries every second. Playback may still be running in the engine. Do not launch
a second engine merely because the editor disconnected.

If the editor closed, reopen it and let it attach to the persistent engine. If
the engine itself must restart:

1. put the downstream system into a safe state;
2. confirm and stop the old process;
3. start the correct engine and project;
4. wait for the editor to reconnect;
5. verify cue state, NEXT, and outputs;
6. fire the prepared recovery cue.
