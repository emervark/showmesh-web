---
title: Action'id ja triggerid
description: Action v2 väljade, triggerite, käskude ja kurvide täpne viide.
---

# Action'id ja triggerid

## Action'i ühised väljad

| Väli | Nõutud | Tähendus |
|---|---:|---|
| `id` | jah | Action'i stabiilne ID cue sees |
| `type` | jah | `command`, `set` või `transition` |
| `enabled` | ei | `false` jätab action'i vahele; vaikimisi lubatud |
| `target` | ei | Target-cue ID; tühi tähendab oma cue'd |
| `trigger` | jah | Action'i käivitusreegel |

## Command

| Väli | Tähendus |
|---|---|
| `command` | `play`, `pause` või `stop` |
| `target` | Cue, millele käsk saadetakse |

Video, audio ja image capability tabel lubab kõiki kolme käsku.

## Set

| Väli | Tähendus |
|---|---|
| `property` | Parameetri stabiilne registry ID |
| `to` | Uus väärtus |

OSC- ja MIDI-trigger võivad Set-action'i `to` väärtuse asemel kasutada live
sisendväärtust. Mootor piirab väärtuse registry min/max vahemikku.

## Transition

| Väli | Ühik | Tähendus |
|---|---|---|
| `property` | — | Parameetri registry ID |
| `from` | parameeter | Valikuline algväärtus; puudumisel hetkeseis |
| `to` | parameeter | Lõppväärtus |
| `durationMs` | ms | Muutuse kestus |
| `delayMs` | ms | Viivitus triggerist muutuse alguseni |
| `curve` | — | Interpolatsioonikurv |

Negatiivsed kestused ja viivitused ei ole mõistlikud; editor piirab kestuse
vähemalt nulli.

## Triggeri väljad

| `type` | Lisaväli | Käitumine |
|---|---|---|
| `onCueStart` | — | Cue elutsükli algus |
| `onPlay` | — | Meediapleieri tegelik start |
| `onCueStop` | — | Pehme stopp |
| `onFinished` | — | Cue põhitegevuse lõpp |
| `atTime` | `atMs` | Cue kella määratud hetk |
| `osc` | `address` | OSC aadress mängiva cue ajal |
| `midi` | `channel`, `controller` | MIDI CC mängiva cue ajal |
| `manual` | — | FIRE nupp või `action.fire` käsk |

## Kurvid

Lubatud `curve` väärtused:

```text
linear · easeIn · easeOut · sCurve · stepStart · stepEnd
holdThenStep · easeInOut
```

## Ajastuse arvestus

Cue action'ite efektiivne kestus on suurim väärtus:

```text
triggeri atMs + delayMs + durationMs
```

Arvesse lähevad action'id triggeriga `onCueStart`, `onPlay` või `atTime`.
`onCueStop`, `onFinished`, OSC, MIDI ja Manual on sellest kestusest väljaspool.

## Peatamise graatsia

Kui cue'l on lubatud `onCueStop` transition-action, võib esimene STOP hoida cue
väljundit action'i lõpuni. Teine STOP lõpetab kohe. OSC/MIDI otsene stop ja
PANIC võivad kasutada kohest peatamist; testi välise kontrolleri täpne käitumine
oma show-projektiga.
