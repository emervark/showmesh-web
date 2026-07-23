---
title: Your first show
description: Build and rehearse a first Showmesh video cue.
---

# Your first show

This example creates a video that fades in, holds its last frame, and fades out
when stopped.

## 1. Create and save a project

Choose **File → New Project**, then **File → Save As…** and save
`first-show.show`.

## 2. Add media

Choose **Add → Resource…** and select a video. Showmesh adds the resource and a
matching cue. Select the cue and set:

- **Number:** `1`;
- **Name:** `Opening video`;
- **Play mode:** **Play once & hold**;
- **Layer:** `0`.

Selecting the row also arms it: the row receives the green **NEXT** marker.

## 3. Add fades

In **Actions**, add **Fade In (1s)**:

- Property: **Opacity**;
- From: `0`;
- To: `1`;
- Duration: `1 s`;
- Trigger: **On Play**;
- Curve: **S Curve**.

Add **Fade Out on stop (1s)** with trigger **On Cue Stop** and destination `0`.
The first STOP lets that finishing action run; a second STOP ends immediately.

## 4. Choose a test output

Choose **Output → Windowed → Display 1 — resizable window**, or press
<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>0</kbd>.

## 5. Rehearse

1. Confirm **NEXT** shows `1 · Opening video`.
2. Press <kbd>Space</kbd>.
3. Check picture and audio on the real output path.
4. Press **STOP** and watch the fade-out.
5. Save with <kbd>Ctrl</kbd>+<kbd>S</kbd>.

Add an image on a higher layer and overlap the two cues to try a crossfade.

::: warning Validate real outputs
A window test does not validate monitor colour, refresh rate, NDI/Spout
reception, or audio routing. Rehearse the complete signal path.
:::

Next, learn [cues and the cue list](/oppimine/cued) and
[actions and triggers](/oppimine/actionid-ja-triggerid).
