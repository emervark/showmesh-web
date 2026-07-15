---
title: Your first show
description: Build a first Showmesh cue list using video, image, and audio.
---

# Your first show

This example creates a simple project: a video fades in, holds its last frame,
and fades out when stopped.

## 1. Create a project

Choose **File → New Project**, then immediately use **File → Save As…** and
save it as `first-show.imsn`.

## 2. Add media

Choose **Add → Resource…** and select a video. Showmesh adds the resource and
creates a cue. You can also drag an existing resource from the left panel into
the cue list.

Select the cue and set:

- **Number:** `1`;
- **Name:** `Opening video`;
- **Play mode:** `Play once & hold`;
- **Layer:** `0`.

## 3. Add a fade-in

Open **Actions** and choose **+ Add Action → Fade In (1s)**. Verify:

- Property: **Opacity**;
- From: `0`;
- To: `1`;
- Duration: `1000 ms`;
- Trigger: **On Play**;
- Curve: **S Curve**.

## 4. Add a fade-out

Choose **+ Add Action → Fade Out on stop (1s)**. Its trigger should be
**On Cue Stop** and its final value `0`.

The first STOP lets the finishing action complete. A second STOP ends the cue
immediately. PANIC is always a hard stop.

## 5. Choose a test output

Select **Output → Windowed → Display 1 — resizable window**. The program window
opens immediately.

## 6. Rehearse

1. Check that **NEXT** shows `1 Opening video`.
2. Press <kbd>Space</kbd> or **GO**.
3. Check picture and audio.
4. Press **STOP** and watch the fade-out.
5. Save with <kbd>Ctrl</kbd>+<kbd>S</kbd>.

## 7. Add a second cue

Add an image, set it to **Play once & hold**, add a fade-in, and use a higher
layer such as `1`. It can now appear over the video.

::: warning Before using real outputs
A window test does not validate monitor colour, frame rate, NDI reception, or
audio routing. Always rehearse the complete signal path.
:::

Next, learn the [cue lifecycle](/oppimine/cued) and
[actions and triggers](/oppimine/actionid-ja-triggerid).
