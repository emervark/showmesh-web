---
title: Your licence
description: Activate Showmesh, move it between computers, and understand what happens when the licence server cannot be reached.
---

# Your licence

A licence key activates Showmesh on **two computers**. The key arrives by
email: beta testers request one at
[licenses.showmesh.app/beta](https://licenses.showmesh.app/beta), buyers get
theirs with the purchase.

::: tip The beta does not require a licence yet
This build shows your licence state and blocks nothing. You can install
Showmesh, build a show and run it without activating. Activation is worth
doing anyway — it is how you find out early whether it works on your machine,
which is the point of a beta.
:::

## Activate

1. Choose **View ▸ License**. The same panel sits at the bottom of the
   Resources list.
2. Paste the key into **License key** and press **Activate**.

The machine needs to reach the internet once. After that Showmesh runs offline
for up to 30 days at a time — see [Working offline](#working-offline) below.

The panel never shows your full key again, only its last characters
(`Key …1C-V3`). Keep the email.

## What the panel tells you

| State | What it means |
| --- | --- |
| **Licensed** | Activated and checked with the server recently. |
| **Licensed (offline)** | Activated and valid, running on the stored certificate. Normal. |
| **Not activated** | No key on this computer. |
| **Expired** | A rental ran out, or a beta ended. |
| **Suspended** | The licence was withdrawn — after a refund, for instance. |
| **Error** | Something specific went wrong; the panel says what. |

**License expires** and **Offline access until** are different dates and the
panel shows both. The first is when your licence ends. The second is when this
computer next needs the internet — reconnecting extends it, and it does not
shorten your licence.

## Working offline

Showmesh does not need a connection to run a show. Activation writes a signed
certificate to this computer, and that certificate is good for 30 days at a
time. Every launch quietly renews it when there is a connection; if there is
not, nothing changes and nothing is said.

The warning **Online check needed** appears only when the offline window is
genuinely close to closing. Connect once and it goes away.

::: warning A show already running is never interrupted
If a rental expires, or a licence is withdrawn, mid-show, playback continues
for up to 12 hours so the performance finishes. The next launch is what
enforces the change.
:::

## Move to another computer

Press **Deactivate** on the old computer while it is online. The slot is freed
only once the server confirms it, so nothing is lost if the network fails
halfway — press it again.

Then activate on the new computer with the same key.

**If you cannot reach the old computer** — it died, it was reinstalled, it
belongs to a venue you have left — email
[support@showmesh.app](mailto:support@showmesh.app) and the slot is released
for you.

## When something is wrong

**"This key is already active on its allowed number of machines."** Two
computers are already using it. Deactivate one, or write to support if you
cannot reach it.

**"The licensing server could not be reached."** Your connection, or ours. An
already-activated computer is unaffected — this only blocks activating a new
one.

**"The system clock moved backward."** Showmesh keeps a record of the latest
time it has trusted, and refuses a clock that has jumped behind it. Set the
clock correctly, connect once, and press **Refresh**.

**"This machine's activation was released on the licensing server."** Support
freed the seat, or you did from elsewhere. Press **Activate** with the same key
to take it back.

**The key never arrived.** Ask again at
[licenses.showmesh.app/beta](https://licenses.showmesh.app/beta) with the same
address — you will get the same key resent, not a second licence. Check the
spam folder first.

## What Showmesh sends

Activation sends your licence key and a fingerprint of this computer, and
nothing else. The fingerprint is a one-way hash: it identifies the machine to
the licence server without telling it anything about the machine.

Showmesh does not report what you play, what your show contains, or when you
run it.
