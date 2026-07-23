---
title: Võimalused ja piirangud
description: Millised Showmeshi funktsioonid on kasutatavad ning millised alles arenduses.
---

# Võimalused ja piirangud

See leht kirjeldab manuaali lähteharu tegelikku seisu. Märgistus:
**valmis**, **osaline** ja **puudub**.

## Meedia ja cue'd

| Funktsioon | Olek | Märkus |
|---|---|---|
| Video ja heli taasesitus | Valmis | FFmpeg, A/V-sünk, loop ja üks kord esitamine |
| Pildid ja pildiseeriad | Valmis | Pilt käitub video-cue ressursina |
| Tekst | Valmis mootoris | Editori väljad ei kata veel kõiki tekstiseadeid |
| Wait, Stop, Pause, Go To ja Group | Valmis | Juhitavad cue-listist |
| OSC ja MIDI cue'd | Valmis | Saadavad cue-listist OSC-sõnumi või MIDI Note/CC/Program/MSC käsu |
| Fade'id ja action'id | Valmis | Command, Set ja Transition; 8 triggerit |
| Waveform | Puudub | Audio waveform'i editoris ei kuvata |
| Subtiitrid | Puudub | Ei kuulu praegusesse versiooni |

## Väljundid

| Funktsioon | Olek | Märkus |
|---|---|---|
| Täisekraan ja aknarežiim | Valmis | Väljundit saab muuta töötava rakenduse ajal |
| Mitu samaaegset väljundit | Valmis | Output Manager ja mirror-väljundid |
| NDI saatmine | Valmis Windowsis | GPU ja CPU kaadrite teed on olemas |
| Spout saatmine | Valmis Windowsis | SpoutDX; CPU ja GPU kaadrite teed on olemas |
| Kihtide alfa-komposiit | Valmis, GPU vajab rauakinnitust | Alt üles premultiplied alpha |
| Kihi transformid | Valmis | Cue-põhine positsioon, skaala ja pööre; juhitavad OSC, MIDI ja fade'idega |
| Crop ja corner pin | Puudub | Planeeritud hilisemaks |

## Juhtimine ja töökindlus

| Funktsioon | Olek | Märkus |
|---|---|---|
| OSC sisend ja väljund | Valmis | Sisendi vaikeport 8000 |
| MIDI Note ja CC | Valmis | Editoris on action'i-põhine MIDI Learn ning GO/PANIC Learn |
| Show mode | Valmis | Lukustab projekti muutmise, transport töötab |
| Projektide undo/redo ja salvestus | Valmis | Mootor on ainus kirjutaja |
| Autosave'i žurnaal / taastamine | Valmis | Projekti muudatused žurnaalitakse |
| Missing-media kontroll | Valmis osaliselt | Pre-flight tuvastus olemas, relinker-UI puudub |
| HTTP/REST ja Art-Net/sACN | Puudub | Ei ole praeguses versioonis kasutatavad |

::: tip Kontrolli sharing-väljundeid päris vastuvõtjas
NDI ja Spout peegeldavad programmi kompositsiooni. Veendu läbimängul, et
vastuvõttev rakendus näeb Showmeshi saatjat ja pilt on ootuspärane.
:::

Arenduse detailne tehniline seis on lähterepo failis `docs/STATUS.md`. Manuaal
keskendub operaatorile nähtavale ja testitavale käitumisele.
