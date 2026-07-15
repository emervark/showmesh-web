---
title: Projektifail
description: Showmeshi .imsn JSON-faili struktuur ja muutmise reeglid.
---

# Projektifail

Showmeshi projekt on JSON-vormingus `.imsn` fail. Mootor laadib, normaliseerib,
migreerib ja salvestab selle atomaarse kirjutuse ning žurnaaliga.

## Ülemine struktuur

```json
{
  "schemaVersion": 1,
  "name": "Minu show",
  "resources": [],
  "outputs": [],
  "connections": [],
  "triggers": [],
  "cueLists": [
    { "id": "main", "name": "Main", "cues": [] }
  ]
}
```

| Väli | Sisu |
|---|---|
| `schemaVersion` | Dokumendi skeemi versioon; ei ole sama mis protocol revision |
| `resources` | Meedia- ja tekstiallikad |
| `outputs` | Display, NDI, Spout või null väljundid |
| `connections` | Praegu OSC väljundühendused |
| `triggers` | MIDI Note/CC transpordiseosed |
| `cueLists` | Cue-listid; editor töötab praegu esimese loendiga |

## Minimaalne video cue action'itega

```json
{
  "id": "cue-video",
  "number": "1",
  "name": "Avavideo",
  "type": "video",
  "target": "res-video",
  "playMode": "onceHold",
  "preWait": 0,
  "postWait": 0,
  "continueMode": "none",
  "durationSec": 0,
  "actions": [
    {
      "id": "fade-in",
      "type": "transition",
      "property": "video.opacity",
      "from": 0,
      "to": 1,
      "durationMs": 1000,
      "curve": "sCurve",
      "trigger": { "type": "onPlay" }
    }
  ]
}
```

Tühi action target tähendab oma cue'd.

## Turvaline muutmine

1. Eelista editorit: mootor on dokumendi ainus kirjutaja.
2. Kui käsitsi muutmine on vältimatu, peata mootor.
3. Tee failist koopia.
4. Kasuta unikaalseid ID-sid ja ära nimeta olemasolevaid parameetri-ID-sid.
5. Kontrolli JSON süntaksit.
6. Ava projekt Showmeshis, vaata migratsioonihoiatusi ja salvesta uue nimega.
7. Tee täielik läbimäng.

## Migratsioon

Laadimisel teisendab mootor vanad `fadeInSec`, `fadeOutSec`, `tracks[]` ja
`completionAction` väljad võimalusel nähtavateks action'iteks. Migratsioon on
idempotentne ehk sama faili korduv laadimine ei tohiks action'eid dubleerida.
Suhtelise destination'iga legacy track võib jääda vanale täitmisteele.
