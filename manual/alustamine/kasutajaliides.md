---
title: User interface
description: The Showmesh editor panels, transport, selection model, and status information.
---

# User interface

The editor keeps the armed cue, live cues, selected settings, outputs, and
system health visible in one operator workspace.

## 1. Title bar and menus

The title bar contains the project name, **Edit / Show mode** pill, command
palette, menus, and engine connection state.

- **File** — New, Open, Save, and Save As;
- **Edit** — Undo and Redo;
- **Add** — all cue types, media resources, LTC Generator, and Live Audio Input;
- **Cue** — GO, PANIC, Copy, Paste, Duplicate, and Delete;
- **Output** — Disabled, fullscreen/windowed displays, NDI, and Spout;
- **View** — Show mode.

Menus and editing affordances disappear in Show mode.

## 2. Resources and systems

The left panel groups media, text, timecode, live inputs, outputs, connections,
and **Control I/O**. Drag media into the cue list to create a cue at the drop
position. Select a resource, output, OSC node, MIDI node, or audio node to open
its inspector.

## 3. Cue list: selection is standby

The centre panel is the show sequence. Each row shows cue number, name, kind,
duration, state, relationships, and nested actions.

- A plain click selects **and arms** a cue. The green rail and **NEXT** badge
  move with it.
- <kbd>↑</kbd>/<kbd>↓</kbd> select and arm the previous/next cue.
- <kbd>Shift</kbd>+click or <kbd>Shift</kbd>+arrow extends a contiguous range.
- <kbd>Ctrl</kbd>+click toggles rows without changing the armed cue.
- Delete removes the complete selection as one undoable operation.
- Drag rows to reorder them in Edit mode.

## 4. Inspector

The right inspector adapts to the selected cue, resource, output, or system
node. Cue sections include identity, playback, transform, timing, timecode GO,
kind-specific settings, actions, groups, and notes. Numeric and text fields
commit on <kbd>Enter</kbd> or blur.

The resource inspector provides preview/scrub, media facts, **Show in
Explorer**, **Replace file**, transform controls, and guarded deletion.

## 5. Transport

- **NOW** shows the most recently fired live cue. Up to three other live cues
  remain visible underneath, so concurrent playback is never hidden.
- **NEXT** shows exactly what GO will fire.
- **STOP** softly stops every live cue and shows the number affected.
- **GO** or <kbd>Space</kbd> fires the armed cue.
- **PANIC** or bare <kbd>Esc</kbd> starts the global panic fade. Press again
  during the fade for an immediate hard stop.

If a menu, popover, or command palette is open, <kbd>Esc</kbd> closes that layer
instead of reaching PANIC.

## 6. Connection and status

On engine-link loss, the transport becomes **LAST KNOWN**, progress freezes,
and a full-width warning appears while the editor retries every second. Playback
may still be running in the engine.

The status drawer shows the program preview, meters, performance information,
real OSC/MIDI state, and a warning queue. The low-rate preview is a confidence
monitor, not a replacement for checking the real program output.
