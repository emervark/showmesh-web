---
title: Action'id ja triggerid
description: Kuidas Action v2 mudeliga cue käitumist ehitada.
---

# Action'id ja triggerid

Action on cue sees olev täiendav tegevus. Üks cue võib korraga esitada video,
fade'ida heli, muuta teise cue läbipaistvust ja lõpuks saata stop-käsu.

## Kolm action'i tüüpi

### Command

Käivitab cue transpordikäsu: **Play**, **Pause** või **Stop**. Target määrab,
millist cue'd käsk mõjutab.

### Set

Määrab parameetri kohe kindlale väärtusele. Näiteks video opacity `0.5` või
helitugevus `1.0`.

### Transition

Muudab parameetri väärtust aja jooksul. Action võib määrata algväärtuse
(`From`), lõppväärtuse (`To`), kestuse, viivituse ja kurvi.

## Sihtmärk

Action'i **Target** võib olla:

- **This cue** — tühi target tähendab action'i omanikku;
- teine sobivat tüüpi cue samas cue-listis.

Meediacue action võib muuta enda opacity't või heli. Transition-cue'd kasutatakse
sageli teiste cue'de juhtimiseks.

## Triggerid

Trigger ütleb, millal action käivitub.

| Trigger | Käivitushetk |
|---|---|
| **On Cue Start** | Kohe cue elutsükli alguses |
| **On Play** | Kui meediapleier päriselt alustab |
| **On Cue Stop** | Kui cue'le antakse pehme STOP |
| **On Finished** | Kui cue tegevus ja ajastatud action'id on lõppenud |
| **At Time** | Määratud millisekundil cue kellal |
| **OSC** | Sobiva OSC aadressi saabumisel |
| **MIDI** | Sobiva MIDI CC sündmuse saabumisel |
| **Manual** | Action-kaardi **FIRE** nupuga |

Reaktiivsed triggerid — OSC, MIDI ja Manual — on relvastatud ainult siis, kui
nende cue mängib. Neid saab sama cue ajal korduvalt käivitada.

## Näide: video sisse ja välja

Video cue sisaldab kahte action'it:

```text
1. Transition · Opacity 0 → 1 · 1000 ms · On Play
2. Transition · Opacity current → 0 · 1000 ms · On Cue Stop
```

Esimene action toob video nähtavale pärast pleieri starti. Teine annab STOP-le
ühesekundilise lõpetamise. Kui `From` puudub, algab transition parameetri
tegelikust hetkeväärtusest.

## Näide: käsk pärast fade'i

Transition-cue võib juhtida juba mängivat video cue'd:

```text
1. Transition · target Video A · Opacity → 0 · 2000 ms · On Cue Start
2. Transition · target Video A · Volume → 0 · 2000 ms · On Cue Start
3. Command · target Video A · Stop · On Finished
```

Nii jõuavad pilt ja heli enne peatamist nulli.

## Konfliktid

Kui samale parameetrile käivitatakse uus transition, asendab see eelmise.
See **replace**-poliitika teeb retrigger'i ennustatavaks: uus fade alustab
tegelikust hetkeväärtusest ja liigub uue sihi poole.

Vaata lubatud välju ja väärtusi [action'ite viitest](/et/viited/actionid).
