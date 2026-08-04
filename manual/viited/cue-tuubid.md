---
title: Cue types
description: Complete reference for current Showmesh cue types.
---

# Cue types

## Fields by type

Generated from the cue-kind registry in the Showmesh repo
(`protocol/protocol.schema.json`), so it lists exactly the fields the engine
reads. What each type *does* is described in prose below — behaviour is not
something a schema can state.

<!-- generated:cue-fields start — from Showmesh docs/manual/generated/cue-fields.md; do not edit by hand, run `npm run sync:reference` -->

| Cue type | Label | Kind-specific fields |
|---|---|---|
| `wait` | Wait | — |
| `video` | Video | `target`, `layer`, `playMode`, `fadeInSec`, `fadeOutSec`, `audioOutput` |
| `image` | Image | `target`, `layer`, `playMode`, `fadeInSec`, `fadeOutSec` |
| `audio` | Audio | `target`, `playMode`, `fadeInSec`, `fadeOutSec`, `audioOutput` |
| `text` | Text | `target`, `layer` |
| `note` | Note | — |
| `transition` | Transition | `target`, `property`, `toValue`, `curve`, `timing`, `tracks`, `conflictPolicy`, `completionAction`, `stopBehavior` |
| `stop` | Stop | `target`, `targets` |
| `pause` | Pause | `target`, `targets` |
| `goto` | Go To | `target` |
| `group` | Group | `children` |
| `osc` | OSC | `connection`, `oscAddress`, `oscArgs`, `oscDurationSec`, `oscFadeFrom`, `oscFadeTo`, `oscCurve`, `oscPreWait` |
| `midi` | MIDI | `midiDevice`, `midiMessage`, `midiChannel`, `midiData1`, `midiData2`, `midiNoteHoldMs`, `mscCommand`, `mscCue` |

Every cue also carries these common fields:

`id` · `number` · `name` · `type` · `color` · `notes` · `preWait` · `postWait` · `continueMode` · `durationSec` · `actions` · `tcArm` · `tcArmEnabled`

<!-- generated:cue-fields end -->

## Common fields

| Field | Meaning |
|---|---|
| Number, Name, Notes, Color | Operator identity and notes |
| Pre-wait / Post-wait | Delay before activity / before completion |
| Continue | None, Auto-continue, or Auto-follow |
| Duration | Control-cue duration |
| Actions | Command, Set, and Transition actions |
| Timecode GO | `tcArmEnabled` and `tcArm` (`hh:mm:ss:ff`) |

## Media and content

| Type | Behaviour |
|---|---|
| **Video** | Video or still-image resource; play mode, layer, output, transforms, opacity, audio |
| **Audio** | Audio resource; play mode, output, volume, and pan |
| **Text** | Text resource; font, size, colours, alignment, canvas, layer, transforms |
| **Note** | Non-playing operator note |
| **Wait** | No media; completes after its duration |

Still images use a `video` cue in the project and receive an Image badge in the
editor.

## Control and structure

| Type | Behaviour |
|---|---|
| **Transition** | Action-based parameter/control cue; legacy fields may be migrated |
| **Stop** | Soft-stops one or several targets; empty target means all |
| **Pause** | Pauses one or several targets; empty target means all |
| **Go To** | Repositions the armed cue for the next GO |
| **Group** | Fires cue IDs stored in `children` together |

## External I/O

### OSC

Sends to a saved connection using `oscAddress`, `oscArgs`,
`oscDurationSec`, optional fade values/curve, and `oscPreWait`.

### MIDI

Sends to `midiDevice`. `midiMessage` selects note, CC, program change, or MSC.
Channel/data fields define the message; notes may use `midiNoteHoldMs`; MSC uses
`mscCommand` and `mscCue`.

Both OSC and MIDI appear in the Add menu.
