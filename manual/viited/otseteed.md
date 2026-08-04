---
title: Keyboard shortcuts
description: Current Showmesh editor and output-routing shortcuts.
---

# Keyboard shortcuts

Generated from the editor's own shortcut registry
(`editor/src/shared/shortcuts.json` in the Showmesh repo) — the same table the
keydown handler matches against and the menu strip prints its hints from, so
this page cannot fall behind the application.

<!-- generated:shortcuts start — from Showmesh docs/manual/generated/shortcuts.md; do not edit by hand, run `npm run sync:reference` -->

## Application

| Shortcut | Command |
|---|---|
| <kbd>Ctrl</kbd>+<kbd>K</kbd> | Open or close the command palette |
| <kbd>Ctrl</kbd>+<kbd>Q</kbd> | Quit Showmesh (asks first, then stops the engine) |

## File and editing

| Shortcut | Command |
|---|---|
| <kbd>Ctrl</kbd>+<kbd>N</kbd> | New project ¹ |
| <kbd>Ctrl</kbd>+<kbd>O</kbd> | Open project ¹ |
| <kbd>Ctrl</kbd>+<kbd>S</kbd> | Save ¹ |
| <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>S</kbd> | Save As ¹ |
| <kbd>Ctrl</kbd>+<kbd>Z</kbd> | Undo ¹ |
| <kbd>Ctrl</kbd>+<kbd>Y</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd> | Redo ¹ |
| <kbd>Ctrl</kbd>+<kbd>C</kbd> | Copy the selected cue |
| <kbd>Ctrl</kbd>+<kbd>V</kbd> | Paste a cue ¹ |
| <kbd>Ctrl</kbd>+<kbd>D</kbd> | Duplicate the selected cue ¹ |
| <kbd>Del</kbd> | Delete the selection ¹ |

## Transport and navigation

| Shortcut | Command |
|---|---|
| <kbd>Space</kbd> | GO — fire the armed cue |
| <kbd>Esc</kbd> | PANIC — stop everything (only when no menu or dialog owns Esc) |
| <kbd>↑</kbd> / <kbd>↓</kbd> | Select and arm the previous / next cue |
| <kbd>Shift</kbd>+<kbd>↑</kbd> / <kbd>↓</kbd> | Extend the cue selection |
| <kbd>Shift</kbd>+<kbd>click</kbd> | Select a contiguous range |
| <kbd>Ctrl</kbd>+<kbd>click</kbd> | Toggle one row without re-arming |

## Program output

| Shortcut | Command |
|---|---|
| <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd> | Disable the program output ¹ |
| <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>0</kbd> | Program output to a resizable window ¹ |
| <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>1</kbd> … <kbd>9</kbd> | Program output fullscreen to display 1 … 9 ¹ |

## Command palette (while open)

| Shortcut | Command |
|---|---|
| <kbd>↑</kbd> / <kbd>↓</kbd> | Move the selection (skips headings and unavailable entries) |
| <kbd>Enter</kbd> | Run the selected entry |
| <kbd>Esc</kbd> | Close the palette |

¹ Show mode locks editing: these are refused while it is on.

<!-- generated:shortcuts end -->

The same shortcuts use <kbd>Cmd</kbd> where supported.
