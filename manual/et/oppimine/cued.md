---
title: Cue'd ja cue-list
description: Cue elutsükkel, playhead, ajastus, continue mode ning play mode.
---

# Cue'd ja cue-list

Cue on show väikseim käivitatav üksus. See võib esitada meediat, oodata,
juhtida teist cue'd, saata OSC-i või käivitada action'ite komplekti.

## Cue elutsükkel

Tüüpiline cue liigub läbi järgmiste olekute:

```text
idle → standby → prewait → playing → postwait → complete
                              ↕
                            paused
```

| Olek | Tähendus |
|---|---|
| `idle` | Cue ei ole aktiivne |
| `standby` | Cue on laetud ja valmis |
| `prewait` | Pre-wait loendab enne käivitust |
| `playing` | Cue põhiline tegevus töötab |
| `postwait` | Põhitegevus lõppes, post-wait loendab |
| `paused` | Cue kell ja meedia on külmutatud |
| `complete` | Cue elutsükkel on lõpetatud |

## GO ja playhead

GO käivitab playhead'i näidatud järgmise cue. Cue-listis hiirega valitud rida on
inspektori valik ning ei liiguta automaatselt playhead'i. Transpordi **NEXT**
väljal on alati GO tegeliku mõju kokkuvõte.

Kui cue käivitub, liigub playhead tavaliselt järgmise reani. Continue mode võib
selle järgmise rea automaatselt käivitada.

## Ajastus

### Pre-wait

Viivitus GO ja cue põhilise tegevuse vahel. Trigger **On Cue Start** käivitub
cue alguses; **On Play** alles siis, kui meediapleier tegelikult alustab.

### Duration

Wait- ja juhtcue'de kestus. Action-cue efektiivne kestus on pikima
`On Cue Start`, `On Play` või `At Time` action'i lõpphetk.

### Post-wait

Viivitus pärast põhitegevuse lõppu, enne cue märkimist lõpetatuks.

## Continue mode

| Valik | Käitumine |
|---|---|
| **None** | Järgmine cue ootab uut GO-d |
| **Auto-continue** | Järgmine cue käivitub kohe pärast selle cue käivitamist |
| **Auto-follow** | Järgmine cue käivitub pärast selle cue täielikku lõppu |

::: tip Millal kasutada?
Kasuta Auto-continue'i paralleelsete sündmuste alustamiseks ja Auto-follow'd
järjestikuse playlisti või ajastatud ahela jaoks.
:::

## Meedia play mode

| Valik | Käitumine meedia lõpus |
|---|---|
| **Play once & eject** | Esitab üks kord ja vabastab väljundi |
| **Play once & hold** | Esitab üks kord ning hoiab viimast kaadrit |
| **Loop** | Kordab kuni peatamiseni |

Pilt on video-cue ressurss ja töötab praktiliselt hold-režiimis. Helil pole
visuaalset viimast kaadrit, kuid loop ja üks kord esitamine toimivad samal
põhimõttel.

## STOP, PAUSE ja PANIC

- **Pause** külmutab cue kella, meedia ja aktiivse lõpetamisgraatsia.
- Esimene **Stop** võib käivitada `On Cue Stop` fade'i ning oodata selle lõppu.
- Teine **Stop** samale cue'le lõpetab selle kohe.
- **Panic** peatab kõik kohe ja ei oota action'eid.

Cue-tüüpide täielik loend on [viiteosas](/et/viited/cue-tuubid).
