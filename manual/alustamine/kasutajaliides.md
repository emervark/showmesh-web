---
title: User interface
description: The main Showmesh editor panels, menus, transport, and status information.
---

# User interface

The editor is divided into five work areas so the operator can see the next cue,
program state, and selected cue settings at the same time.

## 1. Title bar

The title bar contains the project name, **Edit / Show mode** switch, menus,
command palette, and engine connection state.

Menus are available in Edit mode:

- **File** — create, open, and save projects;
- **Edit** — undo and redo;
- **Add** — add a cue or resource;
- **Cue** — GO, Panic, and delete cue;
- **Output** — display, window, NDI, and the future Spout option;
- **View** — toggle Show mode.

## 2. Resources panel

The left panel groups video, image, audio, and text resources, outputs, and
connections. Drag a media resource into the cue list to create a suitable cue.

## 3. Cue list

The centre panel is the show sequence. Each row shows the cue number, name,
type, duration, and—depending on type—the target or nested actions.

- Click to select a cue.
- Drag rows to reorder cues.
- <kbd>Delete</kbd> removes the selected cue in Edit mode.
- GO fires the playhead's next cue, not necessarily the selected cue.

## 4. Inspector

The right panel edits the selected cue. Sections depend on cue type:

- **Identity** — number, name, type, and resource;
- **Playback** — play mode, video layer, and output;
- **Timing** — pre-wait, post-wait, duration, and continue mode;
- **Actions** — commands, parameter changes, and triggers;
- **Group** — group members;
- **Notes** — operator notes.

Changes are sent to the engine. Commit text and numeric fields by leaving the
field or pressing <kbd>Enter</kbd>.

## 5. Transport and status bar

The transport shows:

- **NOW** — running cue, clock, and progress;
- **NEXT** — what the next GO will do;
- **STOP** — stops the running cue;
- **GO** — fires the next cue;
- **PANIC** — stops everything immediately.

The bottom status drawer contains program preview, audio meters, engine metrics,
and warnings. The JPEG preview is approximately 12 fps and does not replace
checking the real program monitor.

::: tip Selection and playhead are different
Selecting a cue opens it in the inspector. GO follows a separate playhead.
Always verify the transport's **NEXT** line before firing.
:::
