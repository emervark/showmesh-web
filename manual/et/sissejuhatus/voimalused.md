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
| Fade'id ja action'id | Valmis | Command, Set ja Transition; 8 triggerit |
| Waveform | Puudub | Audio waveform'i editoris ei kuvata |
| Subtiitrid | Puudub | Ei kuulu praegusesse versiooni |

## Väljundid

| Funktsioon | Olek | Märkus |
|---|---|---|
| Täisekraan ja aknarežiim | Valmis | Väljundit saab muuta töötava rakenduse ajal |
| Mitu samaaegset väljundit | Valmis | Output Manager ja mirror-väljundid |
| NDI saatmine | Valmis Windowsis | GPU ja CPU kaadrite teed on olemas |
| Spout saatmine | Puudub | Menüüelement on nähtav, mootoris integratsiooni pole |
| Kihtide alfa-komposiit | Valmis, GPU vajab rauakinnitust | Alt üles premultiplied alpha |
| Kihi transformid | Puudub | Positsioon, skaala ja pööre pole veel kasutatavad |
| Crop ja corner pin | Puudub | Planeeritud hilisemaks |

## Juhtimine ja töökindlus

| Funktsioon | Olek | Märkus |
|---|---|---|
| OSC sisend ja väljund | Valmis | Sisendi vaikeport 8000 |
| MIDI Note ja CC | Valmis | MIDI Learn'i UI veel puudub |
| Show mode | Valmis | Lukustab projekti muutmise, transport töötab |
| Projektide undo/redo ja salvestus | Valmis | Mootor on ainus kirjutaja |
| Autosave'i žurnaal / taastamine | Valmis | Projekti muudatused žurnaalitakse |
| Missing-media kontroll | Valmis osaliselt | Pre-flight tuvastus olemas, relinker-UI puudub |
| HTTP/REST ja Art-Net/sACN | Puudub | Ei ole praeguses versioonis kasutatavad |

::: danger Ära planeeri show'd Spouti peale
Spout on editori Output-menüüs märgisega **soon**, kuid selle haru mootor ei
saada Spout-tekstuuri. Kasuta täisekraani, akent või NDI-d.
:::

Arenduse detailne tehniline seis on lähterepo failis `docs/STATUS.md`. Manuaal
keskendub operaatorile nähtavale ja testitavale käitumisele.
