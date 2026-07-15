---
title: Esimene show
description: Koosta video, pildi ja heli abil esimene Showmeshi cue-list.
---

# Esimene show

Selles näites lood lihtsa projekti: video fade'ib sisse, hoiab viimast kaadrit
ja lõpetamisel fade'ib välja.

## 1. Loo projekt

Vali **File → New Project**. Salvesta kohe käsuga **File → Save As…** ja anna
failile nimi, näiteks `esimene-show.imsn`.

## 2. Lisa meedia

Vali **Add → Resource…** ja vali videofail. Showmesh lisab ressursi ning loob
sellele cue. Alternatiivina lohista olemasolev ressurss vasakust paneelist
cue-listi.

Vali cue ja määra inspektoris:

- **Number:** `1`;
- **Name:** `Avavideo`;
- **Play mode:** `Play once & hold`;
- **Layer:** `0`.

## 3. Lisa fade-in

Ava cue **Actions** sektsioon ja vali **+ Add Action → Fade In (1s)**.
Kontrolli action'i kaardil:

- Property: **Opacity**;
- From: `0`;
- To: `1`;
- Duration: `1000 ms`;
- Trigger: **On Play**;
- Curve: **S Curve**.

## 4. Lisa fade-out

Vali **+ Add Action → Fade Out on stop (1s)**. Selle trigger peab olema
**On Cue Stop** ja lõppväärtus `0`.

Showmeshi esimene STOP annab lõpetamis-action'ile aega lõpuni joosta. Teine
STOP peatab cue kohe. PANIC teeb alati kohese kõva peatuse.

## 5. Vali testväljund

Vali **Output → Windowed → Display 1 — resizable window**. Programmi aken
avaneb kohe. Kui vajutad GO, ilmub video sellesse aknasse.

## 6. Proovi läbi

1. Veendu, et transpordi **NEXT** näitab cue'd `1 Avavideo`.
2. Vajuta <kbd>Space</kbd> või **GO**.
3. Kontrolli pilti ja heli.
4. Vajuta transpordis **STOP** ning jälgi fade-out'i.
5. Salvesta <kbd>Ctrl</kbd>+<kbd>S</kbd>.

## 7. Lisa teine cue

Lisa pilt. Sea selle play mode väärtuseks **Play once & hold**, lisa fade-in ja
anna videost kõrgem **Layer**, näiteks `1`. Nüüd saab pilt ilmuda video peale.

::: warning Enne päris väljundit
Aknatest ei kinnita monitori värviruumi, kaadrisagedust, NDI vastuvõttu ega
heliseadme marsruuti. Tee enne show'd alati täielik läbimäng päris signaaliteel.
:::

Järgmisena õpi [cue'de elutsüklit](/et/oppimine/cued) ning
[action'ite ja triggerite loogikat](/et/oppimine/actionid-ja-triggerid).
