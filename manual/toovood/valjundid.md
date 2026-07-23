---
title: Outputs, NDI, and Spout
description: Configure display, windowed, NDI, and Spout output in Showmesh.
---

# Outputs, NDI, and Spout

Outputs are configured from **Output** while in Edit mode. The engine applies
changes live: a window can open, close, or move to another monitor without an
engine restart.

## Disabled

Program display output is disabled. NDI and Spout mirrors may continue to run.
This is useful for headless or network-only output.

## Fullscreen

Choose **Output → Fullscreen → Display N**. Showmesh opens a borderless
fullscreen window on that monitor.

Before a show, verify Windows display order, resolution, refresh rate, HDR,
scaling, and whether the show display should be the primary desktop.

## Windowed

Choose **Output → Windowed → Display N — resizable window**. This is useful for
development, checks, and workflows where another application captures a window.

## NDI

Enable **Composition Output Sharing → Network streaming (NDI)**. NDI mirrors
the program composition and may run even when display output is Disabled.

Check the real receiver for sender identity, resolution, frame rate, colour,
alpha, expected audio, and network stability throughout a rehearsal.

GPU frames may require readback before being sent as NV12. Heavy 4K
compositions with preview therefore require a hardware load test.

## Spout

Enable **Composition Output Sharing → Texture sharing (Spout)**. Spout mirrors
the program composition to other applications on the same machine, such as
Resolume, TouchDesigner, or OBS, and may run alongside any display output.

CPU frames are sent as RGBA; GPU-decoded frames are read back before sending.
Confirm during rehearsal that the receiving application sees the Showmesh
sender and shows the expected picture.

## Resource output

A media cue's **Playback → Output** can bind its resource to a specific output
or leave it at **Default**. Keep simple shows on the default program route and
use explicit routing only when the output plan is documented and rehearsed.
