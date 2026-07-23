---
title: Sisu olek
description: Showmeshi eestikeelse tõlke alus ja uuendamise vajadus.
---

# Sisu olek

## Keeleversioonid

| Väli | Väärtus |
|---|---|
| Peamine keel | inglise |
| Ingliskeelse manuali lähterepo | `emervark/Showmesh` |
| Ingliskeelse manuali commit | `3e0e156e92359f6a5336e59a498c5ce140d3c3d6` |
| Rakenduse versioon | `0.1.0-beta.1` |
| Protokoll / UI | rev `23` / `r51` |
| Eestikeelse tõlke alus | 15.07.2026 eelmine manual |
| Tõlke olek | vajab täielikku sünkroniseerimist |

Ingliskeelne manual on autoriteetne. Eestikeelsed lehed säilitavad varasema
õppematerjali, kuid võivad veel väita, et installer, Spout, MIDI Learn,
geomeetriatransformid või MIDI cue puuduvad, ning võivad kasutada vana `.imsn`
faililaiendit. Need väited ei kirjelda praegust rakenduse `main` haru.

## Ingliskeelses versioonis juba uuendatud

- Windowsi beeta-installer ja püsiv engine'i elutsükkel;
- `.show` projektifail;
- üks v2 operaatoriliides ning selection-as-standby;
- mitmikvalik, cue kopeerimine/dubleerimine ja väljundi otseteed;
- töötav Spout ning scale/position/rotation parameetrid;
- MIDI output cue, GO/PANIC Learn ja timecode-trigger;
- protokoll rev 23 ja UI r51.

## Tõlke järgmine töö

Tõlgi ingliskeelsed muutunud lehed sama suhtelise tee alla, säilita UI tegelikud
ingliskeelsed sildid ning jäta JSON-väljad, OSC aadressid ja masinväärtused
muutmata. Enne avaldamist ehita mõlemad locale'id ja kontrolli keelevahetust.
