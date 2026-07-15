---
title: Cue-tüübid
description: Showmeshi cue-tüüpide täielik viide.
---

# Cue-tüübid

## Ühised väljad

| Väli | Tüüp | Tähendus |
|---|---|---|
| Number | tekst | Operaatorile nähtav aadress; ei pea olema täisarv |
| Name | tekst | Cue kirjeldav nimi |
| Notes | tekst | Operaatori märkus |
| Pre-wait | sekundid | Viivitus enne põhitegevust |
| Post-wait | sekundid | Viivitus pärast põhitegevust |
| Continue | valik | None, Auto-continue või Auto-follow |
| Actions | loend | Cue elutsükliga seotud lisategevused |

## Video

Esitab video- või pildiressurssi. Video toetab play mode'i, kihti, väljundit,
opacity't, volume'it ja pan'i. Pildilaiendiga ressurss kuvatakse editoris Image
cue'na, kuid projektifailis on tüüp `video`.

## Audio

Esitab audioressurssi. Toetab play mode'i, volume'it ja pan'i. Videokihi ning
opacity välju pole.

## Text

Renderdab tekstiresurssi. Mootor toetab teksti, fonti, suurust, värve, joondust
ja lõuendi mõõte. Selle haru editor ei paku veel kõigi nende ressursiväljade
täielikku inspektorit.

## Wait

Ei esita meediat. Püsib `durationSec` aja ning sobib ajastatud action'ite ja
Auto-follow ahelate kandjaks.

## Transition

Action-põhine juhtcue, mis muudab enda või teiste cue'de parameetreid ja võib
saata transpordikäske. Uus Transition cue luuakse tühja `actions[]` loendiga.
Vanades projektides võib esineda legacy `tracks[]` vorm.

## Stop

Peatab target-cue. Tühi target tähendab kõiki cue'sid. Siht-cue `On Cue Stop`
action'id võivad anda pehme lõpetamise.

## Pause

Peatab target-cue kella ja meedia ajutiselt. Tühi target tähendab kõiki cue'sid.
Jätkamiseks kasuta Resume käsku OSC/MIDI kaudu või muud sobivat juhtimist.

## Go To

Liigutab cue-listi playhead'i valitud target-cue juurde. See valmistab ette
järgmise GO sihi; target peab olema määratud.

## Group

Kannab `children` loendis teiste cue'de ID-sid. Group-cue käivitab oma liikmed
koos. Editor hoiab grupiliikmed cue-listis grupi juures.

## OSC

Protokoll ja mootor tunnevad OSC cue tüüpi, mis kasutab connection'i,
`oscAddress` välja ning argumente. Selle haru Add-menüü ei paku OSC cue loomist,
mistõttu käsitle seda olemasolevate projektide / arendajafunktsioonina, mitte
valmis operaatori töövoona.

## Pilt ei ole eraldi failitüüp

Editor tunneb pildi ära laiendi järgi: PNG, JPEG, BMP, WebP, TIFF või GIF.
Pilt saab Image sildi, kuid säilib projektis video cue'na. See on oluline JSON-i
kontrollimisel ja action capability valikul.
