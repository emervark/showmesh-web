---
title: What is Showmesh?
description: Showmesh architecture, core concepts, and main use cases.
---

# What is Showmesh?

Showmesh is a cue-based Windows media engine for live shows. An operator places
video, audio, image, text, and control events in a cue list and fires them in a
prepared sequence with **GO**.

Showmesh has two separate parts:

```text
Editor (Electron)  ← WebSocket →  Engine (C++)  →  display / NDI / Spout / audio
                                         ↑
                                  OSC / MIDI
```

- The **Editor** presents the project, cue list, inspector, preview, and transport.
- The **Engine** owns the project state, decodes media, schedules cues, mixes
  audio, composites layers, and sends outputs.
- The **protocol** connects the editor, engine, and external controllers. The
  editor never writes around the engine.

This separation also allows the engine to run headless without the editor.

## What is it for?

Showmesh fits live environments where events must fire in a repeatable order:

- theatre and concert video;
- installations and exhibitions;
- presentation and conference graphics;
- combined audio, image, and video cue lists;
- feeding another video system through NDI or Spout;
- OSC- or MIDI-triggered events.

## Core concepts

<div class="fact-grid">
  <div><strong>Project</strong>One <code>.imsn</code> file containing resources, outputs, connections, and cue lists.</div>
  <div><strong>Cue</strong>One fireable event, such as media, a wait, or a transition.</div>
  <div><strong>Action</strong>A command or parameter change tied to a cue lifecycle.</div>
  <div><strong>Trigger</strong>The moment or external event that fires an action.</div>
  <div><strong>Resource</strong>A media or text source referenced by a cue.</div>
  <div><strong>Output</strong>The destination for the program picture or audio.</div>
</div>

Continue with [Capabilities and limitations](/sissejuhatus/voimalused), or
build [your first show](/alustamine/esimene-show).
