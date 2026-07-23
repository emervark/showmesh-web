---
title: OSC and MIDI
description: External Showmesh transport, parameter, and action control.
---

# OSC and MIDI

The engine listens for OSC on UDP port `8000` by default. At startup, MIDI opens
all detected input ports when the engine is built with RtMidi.

## OSC transport

| Address | Effect |
|---|---|
| `/go` | Fires the playhead's next cue |
| `/panic` | Stops everything immediately |
| `/stop` | Stops all cues |
| `/pause` | Pauses all cues |
| `/resume` | Resumes all paused cues |
| `/cue/12/go` | Fires cue number or ID `12` |
| `/cue/12/stop` | Stops cue `12` |
| `/cue/12/pause` | Pauses cue `12` |
| `/cue/12/resume` | Resumes cue `12` |
| `/cue/12/load` | Loads cue `12` into standby |

## OSC parameters

The OSC address for a resource parameter is the parameter address itself. The
first argument must be numeric:

```text
/resource/res-video/opacity  0.5
/resource/res-video/volume   0.8
/resource/res-video/pan     -0.25
```

## OSC-triggered action

Set the action trigger to **OSC** and enter an address such as `/fx/dim`. It
listens only while its owning cue is playing.

- A **Set** action uses a numeric OSC argument as a live value when present.
- A **Transition** action starts its configured fade.
- The same address can fire repeatedly during one cue run.

## MIDI trigger matrix

The project's `triggers` list maps a MIDI Note or CC event to a cue command:
go, stop, pause, resume, or load. A CC becomes a button press at value `64` or
higher. MIDI Show Control GO, STOP, RESUME, and LOAD are also handled.

The editor includes MIDI Learn. **Control I/O → MIDI → TRANSPORT** binds a
controller button to the global GO and PANIC commands, and every OSC- or
MIDI-triggered action has a **◎ Learn** button: move a control on the
controller and the incoming channel and controller number (or OSC address) is
bound to the action.

## MIDI-triggered action

The **MIDI** action trigger uses channel and controller number:

- Set follows the CC value live, mapping `0…127` to the parameter range;
- Transition fires when the CC value reaches at least `64`;
- the action listens only while its cue is playing.

::: warning Test channel numbering
MIDI protocol, controller UIs, and project files may use zero- or one-based
channel numbers. The action editor presents channels as one-based; verify the
first mapping in the engine log.
:::
