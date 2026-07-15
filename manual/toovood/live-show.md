---
title: Running a live show
description: Safe Show mode operation and transport during a performance.
---

# Running a live show

## Before doors open

1. Start the engine, then the editor.
2. Open the correct `.imsn` file.
3. Verify connection, engine version, and build stamp.
4. Open program output and confirm the safe idle state.
5. Read the transport's **NEXT** line.
6. Perform a short audio and first-visual test.
7. Enable **Show mode**.

## Show mode

Show mode locks document editing: adding, deleting, field changes, and output
reconfiguration are blocked. Transport and live parameter control continue.

Leave Show mode only when you deliberately choose to edit the project. Save,
test the change, and lock the project again.

## GO

GO and <kbd>Space</kbd> fire the cue shown on **NEXT**. Press once and confirm
the state change. Auto-continue or Auto-follow may fire more cues without
another operator action.

## STOP

STOP halts the running cue. An `On Cue Stop` transition may run through its
finishing grace period. A second STOP is immediate.

## PANIC

PANIC or <kbd>Esc</kbd> immediately ends all active cues. Use it when incorrect
content is on air or the show state can no longer be trusted.

::: danger PANIC is not a soft fade
PANIC does not wait for finishing actions. Prepare a dedicated blackout or
recovery cue when the design requires a controlled transition.
:::

## Recovery

If the editor disconnects, the engine remains the owner of show state. The
editor retries `ws://127.0.0.1:7788` every second. Do not start a second engine
until you know whether the first is still running and feeding program output.

If the engine must restart:

1. put the downstream system into a safe picture;
2. stop the old process;
3. start the engine with the correct project;
4. wait for the editor to reconnect;
5. verify playhead and output;
6. fire the prepared recovery cue.
