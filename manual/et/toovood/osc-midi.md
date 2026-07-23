---
title: OSC ja MIDI
description: Showmeshi transpordi, parameetrite ja action'ite väline juhtimine.
---

# OSC ja MIDI

Showmeshi mootor kuulab vaikimisi OSC UDP porti `8000`. MIDI avab käivitamisel
kõik leitud sisendpordid, kui mootor on ehitatud RtMidi toega.

## OSC transport

| Aadress | Mõju |
|---|---|
| `/go` | Käivitab playhead'i järgmise cue |
| `/panic` | Peatab kõik kohe |
| `/stop` | Peatab kõik cue'd |
| `/pause` | Peatab kõik ajutiselt |
| `/resume` | Jätkab kõiki peatatud cue'sid |
| `/cue/12/go` | Käivitab cue numbri või ID `12` |
| `/cue/12/stop` | Peatab cue `12` |
| `/cue/12/pause` | Peatab cue `12` ajutiselt |
| `/cue/12/resume` | Jätkab cue'd `12` |
| `/cue/12/load` | Laeb cue `12` standby'sse |

## OSC parameetrid

Ressursiparameetri OSC aadress on parameetri enda aadress. Esimene argument
peab olema arv:

```text
/resource/res-video/opacity  0.5
/resource/res-video/volume   0.8
/resource/res-video/pan     -0.25
```

## OSC-triggeriga action

Vali action'i triggeriks **OSC** ja määra aadress, näiteks `/fx/dim`.
Action kuulab seda aadressi ainult siis, kui omanikcue mängib.

- **Set** action kasutab numbrilist OSC argumenti live-väärtusena, kui see on
  saadetud; väärtus piiratakse parameetri lubatud vahemikku.
- **Transition** action käivitab määratud fade'i.
- Sama aadressi võib cue mängimise jooksul mitu korda saata.

## MIDI trigger-maatriks

Projektifaili `triggers` loend seob MIDI Note või CC sündmuse cue
transpordikäsuga: go, stop, pause, resume või load. CC käsitletakse nupuna, kui
väärtus on vähemalt `64`. MIDI Show Controli GO, STOP, RESUME ja LOAD käske
töödeldakse samuti.

Editoris on MIDI Learn olemas. **Control I/O → MIDI → TRANSPORT** seob
kontrolleri nupu globaalse GO ja PANIC käsuga ning igal OSC- või
MIDI-triggeriga action'il on **◎ Learn** nupp: liiguta kontrolleril nuppu või
faderit ja sissetulev kanal ja controller'i number (või OSC aadress) seotakse
action'iga.

## MIDI-triggeriga action

Action'i **MIDI** trigger kasutab kanalit ja controller'i numbrit:

- Set-action järgib CC väärtust reaalajas, teisendades `0…127` parameetri
  lubatud vahemikku;
- Transition-action käivitub nupuvajutusel, kui CC väärtus on vähemalt `64`;
- action kuulab ainult selle cue mängimise ajal.

::: warning Testi kanalite numeratsiooni
MIDI protokolli, kontrolleri UI ja projektifaili kanalite numeratsioon võib olla
0- või 1-põhine. Selle haru action'i editor esitab kasutajale kanalid 1-põhiselt;
kontrolli esimene mapping mootori logist.
:::
