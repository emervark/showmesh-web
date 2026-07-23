---
title: Mis on Showmesh?
description: Showmeshi arhitektuur, põhimõisted ja peamised kasutusjuhud.
---

# Mis on Showmesh?

Showmesh on Windowsile ehitatud cue-põhine meediamootor live-show'de jaoks.
Operaator paneb video-, heli-, pildi-, teksti- ja juhtimiskäsud cue-listi ning
käivitab need ettevalmistatud järjekorras nupuga **GO**.

Showmesh koosneb kahest eraldi osast:

```text
Editor (Electron)  ← WebSocket →  Engine (C++)  →  ekraan / NDI / Spout / heli
                                         ↑
                                  OSC / MIDI
```

- **Editor** näitab projekti, cue-listi, inspektorit, eelvaadet ja transporti.
- **Engine** hoiab projekti tõest olekut, dekodeerib meediat, ajastab cue'sid,
  miksib heli, komponeerib kihid ja saadab väljundid.
- **Protokoll** seob editori, mootori ja välised juhtimisseadmed. Editor ei
  kirjuta projekti mootorist mööda.

See eraldus võimaldab mootorit kasutada ka ilma editorita ehk headless-režiimis.

## Milleks Showmesh sobib?

Showmesh sobib olukorda, kus esituse sündmused peavad käivituma kindlas
järjekorras ja korratavalt:

- teatri- ja kontserdivideo;
- installatsioonid ja näitused;
- esitlus- ning konverentsigraafika;
- heli, pildi ja video ühine cue-list;
- NDI või Spouti kaudu teise videosüsteemi pildi saatmine;
- OSC või MIDI abil käivitatavad sündmused.

## Olulised mõisted

<div class="fact-grid">
  <div><strong>Projekt</strong>Üks <code>.imsn</code>-fail koos ressursside, väljundite, ühenduste ja cue-listiga.</div>
  <div><strong>Cue</strong>Üks käivitatav sündmus, näiteks video, ooteaeg või üleminek.</div>
  <div><strong>Action</strong>Cue elutsükli ajal käivitatav käsk või parameetri muutus.</div>
  <div><strong>Trigger</strong>Hetk või väline sündmus, mis action'i käivitab.</div>
  <div><strong>Ressurss</strong>Meedia- või tekstiallikas, millele cue viitab.</div>
  <div><strong>Väljund</strong>Programmi pildi või heli sihtkoht.</div>
</div>

Jätka [võimaluste ja piirangutega](/et/sissejuhatus/voimalused) või ehita kohe
[esimene show](/et/alustamine/esimene-show).
