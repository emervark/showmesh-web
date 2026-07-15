---
title: Cue types
description: Complete reference for Showmesh cue types.
---

# Cue types

## Common fields

| Field | Type | Meaning |
|---|---|---|
| Number | text | Operator-facing address; does not need to be an integer |
| Name | text | Descriptive cue name |
| Notes | text | Operator note |
| Pre-wait | seconds | Delay before the main activity |
| Post-wait | seconds | Delay after the main activity |
| Continue | choice | None, Auto-continue, or Auto-follow |
| Actions | list | Extra activity tied to the cue lifecycle |

## Video

Plays a video or image resource. Supports play mode, layer, output, opacity,
volume, and pan. An image resource is labelled Image in the editor but remains
type `video` in the project file.

## Audio

Plays an audio resource. Supports play mode, volume, and pan, but not video
layer or opacity.

## Text

Renders a text resource. The engine supports content, font, size, colours,
alignment, and canvas dimensions. This branch does not expose every resource
field in the inspector.

## Wait

Plays no media. It lasts for `durationSec` and is useful for timed actions and
Auto-follow chains.

## Transition

An action-based control cue that changes parameters or sends transport commands
to itself or other cues. A new Transition cue starts with an empty `actions[]`.
Old projects may contain legacy `tracks[]`.

## Stop

Stops the target cue. An empty target means all cues. The target's On Cue Stop
actions may provide a soft finish.

## Pause

Pauses the target cue's clock and media. An empty target means all cues. Resume
through OSC, MIDI, or another suitable control path.

## Go To

Moves the cue-list playhead to the target cue. It prepares the next GO target;
the target is required.

## Group

Stores member cue IDs in `children` and fires them together. The editor keeps
group members adjacent to the group in the cue list.

## OSC

The protocol and engine recognise an OSC cue using `connection`, `oscAddress`,
and arguments. The Add menu does not expose OSC cue creation in this branch, so
treat it as an existing-project or developer feature.

## Image is not a separate project cue type

The editor recognises PNG, JPEG, BMP, WebP, TIFF, and GIF by extension and shows
an Image badge. The project still stores a video cue. This matters when reading
JSON and determining action capabilities.
