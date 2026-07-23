---
title: What is Showmesh?
description: Showmesh architecture, core concepts, and main use cases.
---

# What is Showmesh?

Showmesh is a cue-based Windows media engine for live shows. An operator places
video, audio, image, text, timecode, and control events in a cue list and fires
them in a prepared sequence with **GO**.

```text
Editor (Electron)  ← WebSocket →  Engine (C++)  →  display / NDI / Spout / audio
                                         ↑
                                  OSC / MIDI / timecode
```

- The **Editor** presents the project, cue list, inspector, preview, transport,
  outputs, and control status.
- The **Engine** owns the `.show` project, decodes media, schedules cues, mixes
  audio, composites layers, and sends outputs.
- The **protocol** connects the editor, engine, and external controllers. The
  editor is a client; the engine remains the source of truth.

The engine can run headless. In an installed build, closing the editor does not
stop a persistent engine or the show it is running.

## What is it for?

- theatre, concert, touring, and corporate AV playback;
- installations, exhibitions, and presentation graphics;
- combined audio, image, video, and text cue lists;
- fullscreen, windowed, NDI, and Spout output;
- OSC- and MIDI-controlled shows and external-device cues;
- LTC/MTC chase and timecode-armed cues.

## Core concepts

<div class="fact-grid">
  <div><strong>Project</strong>One <code>.show</code> file containing resources, outputs, connections, triggers, and cue lists.</div>
  <div><strong>Cue</strong>One fireable event, such as media, a wait, MIDI, or a transition.</div>
  <div><strong>Action</strong>A command or parameter change tied to a cue lifecycle.</div>
  <div><strong>Trigger</strong>The lifecycle moment, timecode, or external event that fires an action.</div>
  <div><strong>Resource</strong>A media, text, LTC-generator, or live-input source referenced by a cue.</div>
  <div><strong>Output</strong>A display, NDI/Spout sender, or audio destination.</div>
</div>

Continue with [Capabilities and limitations](/sissejuhatus/voimalused), or
build [your first show](/alustamine/esimene-show).
