---
title: OSC and MIDI
description: Receive and send Showmesh transport, parameter, and device control.
---

# OSC and MIDI

Showmesh receives external control and sends control to other systems. OSC
listens on UDP port `8000` by default. MIDI input and output are built into the
Windows engine and open all detected ports.

## OSC input

| Address | Effect |
|---|---|
| `/go` | Fire the armed cue |
| `/panic` | Global PANIC |
| `/stop` | Stop all cues |
| `/pause` | Pause all cues |
| `/resume` | Resume paused cues |
| `/cue/12/go` | Fire cue number/ID `12` |
| `/cue/12/stop` | Stop cue `12` |
| `/cue/12/pause` | Pause cue `12` |
| `/cue/12/resume` | Resume cue `12` |
| `/cue/12/load` | Load cue `12` |

Numeric resource parameters use addresses such as:

```text
/resource/res-video/opacity  0.5
/resource/res-video/volume   0.8
/resource/res-video/pan     -0.25
```

## MIDI Learn for GO and PANIC

Open **Control I/O → MIDI**. A green health dot and device list confirm input;
the monitor shows incoming events.

1. In the **Transport** card, click **Learn** beside GO or PANIC.
2. Press the desired controller button.
3. Test it with the exact controller and USB/MIDI route used in the show.

The learned mapping is global: it does not target a particular cue. MIDI Show
Control GO, STOP, RESUME, and LOAD are also understood.

## Reactive action triggers

OSC and MIDI CC action triggers listen while their owning cue is playing.

- A Set action can follow an OSC numeric argument.
- MIDI Set maps CC `0…127` to the parameter range.
- MIDI Transition fires at value `64` or higher.
- Reactive actions can re-fire during the same cue run.

## OSC cue

An OSC cue sends a message or value fade to a saved OSC connection. Configure
host, port, address, arguments, duration, start/end values, curve, and pre-wait
in the cue inspector.

## MIDI cue

A MIDI cue sends to a chosen output device:

- note on/off, with an optional hold time;
- control change;
- program change;
- MIDI Show Control command and cue number.

OSC and MIDI cues are ordinary list cues and can fire from GO,
Auto-continue/follow, timecode, or another trigger.
