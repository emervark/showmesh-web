---
title: Cue'd ja cue-list
description: Cue elutsükkel, ettevalmistamine, ajastus, continue mode ja transpordi käitumine.
---

# Cue'd ja cue-list

Cue on show'i väikseim käivitatav üksus. See võib esitada meediat, oodata,
juhtida teist cue'd, saata OSC/MIDI sõnumit või käivitada action'eid.

## Cue elutsükkel

```text
idle → standby → prewait → playing → postwait → complete
                              ↕
                            paused
```

| Olek | Tähendus |
|---|---|
| `idle` | Passiivne |
| `standby` | Laaditud ja valmis |
| `prewait` | Enne tegevust loeb aega maha |
| `playing` | Põhitegevus käib |
| `postwait` | Tegevus lõppes; post-wait loeb aega |
| `paused` | Kell ja meedia on peatatud |
| `complete` | Elutsükkel lõppenud |

## Ettevalmistamine ja GO

Valimine on standby: cue'l lihtsalt klõpsamine või liikumine nooltega
<kbd>↑</kbd>/<kbd>↓</kbd> valib selle, valmistab ette ja suunab GO ümber.
**NEXT** näitab alati ettevalmistatud cue'd ja seda, mida selle käivitamine
teeb.

Vahemiku valimine ettevalmistatud cue'd ei muuda. Vahemiku laiendamiseks
kasuta Shift'i ja üksikute ridade lülitamiseks Ctrl-klõpsu. Käsupalett
(<kbd>Ctrl</kbd>+<kbd>K</kbd>) võib otsida numbrit või nime ja valmistada
selle cue ette; see ei käivita cue'd ainuüksi seepärast, et see leiti.

## Ajastus

- **Pre-wait** lükkab cue põhitegevuse pärast GO-d edasi. **On Cue Start**
  käivitub enne seda viivitust; **On Play** ootab tegelikku playeri käivitust.
- **Duration** juhib Wait ja juhtcue'sid. Action'ite ajastus tuletatakse
  viimasest planeeritud action'i lõpust.
- **Post-wait** lükkab lõpetamise pärast põhitegevust edasi.
- **Timecode GO** valmistab cue ette käivituma, kui jälgitav LTC/MTC ületab
  selle `hh:mm:ss:ff` väärtuse.

## Continue mode

| Seade | Käitumine |
|---|---|
| **None** | Ootab järgmist GO-d |
| **Auto-continue** | Käivitab järgmise cue pärast selle cue algust |
| **Auto-follow** | Käivitab järgmise cue pärast selle cue lõppu |

## Meedia play mode

| Seade | Käitumine meedia lõpus |
|---|---|
| **Play once & eject** | Tühjendab väljundi |
| **Play once & hold** | Hoiab viimast kaadrit |
| **Loop** | Kordab, kuni peatatakse |

## STOP ja PANIC

STOP peatab viisakalt **kõik parajasti töötavad cue'd**. Iga cue võib läbida
oma On Cue Stop fade'i; sama cue uuesti peatamine on kohene. PANIC on
globaalne pidur: esimene vajutus käivitab panic-fade'i ja teine vajutus
selle fade'i ajal peatab kõik kohe.

Vaata [cue-tüüpide viidet](/et/viited/cue-tuubid).
