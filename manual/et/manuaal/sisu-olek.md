---
title: Sisu olek
description: Millised Showmeshi teemad on manuaalis kaetud ja mida tuleb täiendada.
---

# Sisu olek

See on manuaali hooldusindeks. Uuenda tabelit koos suure funktsioonimuudatuse või
uue release'i ettevalmistamisega.

## Lähteversioon

| Väli | Väärtus |
|---|---|
| Repo | `emervark/Intermission` |
| Haru | `claude/transitions-v2-o0jbi1` |
| Commit | `9cc234700f054ae696843b63573c40cc48aeef5a` |
| Commit'i kuupäev | 15.07.2026 |
| Protocol revision | 3 |
| UI revision | r25 |
| Manuaali keeled | eesti ja inglise |

## Katvus

| Teema | Olek | Järgmine täiendus |
|---|---|---|
| Esmakäivitus ja esimene show | Esmane juhend valmis | Lisada päris UI kuvatõmmised |
| Cue elutsükkel ja tüübid | Kaetud | Kinnitada OSC cue operaatori töövoog |
| Actions v2 ja reaktiivsed triggerid | Kaetud | Lisada video-näide / demo projekt |
| Transition ja ristfade | Kaetud | Lisada heliga ristfade'i mõõdetud näide |
| Kihid ja GPU komposiit | Kaetud | Uuendada pärast transformide lisandumist |
| Ekraan, aken ja NDI | Kaetud | Lisada NDI saatja nime seadistus, kui UI valmib |
| Spout | Piirang dokumenteeritud | Asendada päris juhendiga pärast integratsiooni |
| OSC ja MIDI | Esmane viide valmis | Lisada MIDI trigger-maatriksi UI järel kuvatõmmised |
| Heli | Osaliselt kaetud | Vajab eraldi miksri ja gain staging'u peatükki |
| Tekst ja pildiseeriad | Osaliselt kaetud | Vajab editori väljade valmimist |
| Headless töö | Osaliselt kaetud | Vajab deployment'i ja watchdog'i töövoogu |
| Recovery ja žurnaal | Osaliselt kaetud | Vajab kasutajale nähtava taastamisvoo testi |
| Installer ja release upgrade | Puudub | Funktsioon pole veel olemas |

## Teadlikud dokumentatsioonivõlad

- Manuaalil puuduvad veel rakenduse päris kuvatõmmised.
- Eraldi audio-miksri, master-limiteri ja meetrite peatükk on vajalik.
- Ressursside korraldamine ning missing-media taastamine vajab UI valmimist.
- NDI ja GPU peatükid vajavad toetatud riistvara maatriksit.
- Accessibility ja klaviatuuriga täielik navigeerimine pole veel auditeeritud.

## Uuenduse kontrollküsimused

- Kas Add-menüü cue-tüüpide loend muutus?
- Kas inspektori sektsioonide sildid või väljad muutusid?
- Kas `PROTOCOL_REV`, `UI_REV` või `schemaVersion` muutus?
- Kas parameetri registry sai uue ID või capability?
- Kas Output-menüü sai uue töötava väljundi?
- Kas uus funktsioon vajab õppeteksti, töövoogu ja viitekirjet kõiki kolme?
- Kas vana piiranguhoiatuse saab eemaldada?
- Kas mõlemad keeleversioonid said uuendatud?
