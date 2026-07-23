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
| Repo | `emervark/Showmesh` |
| Haru | `main` |
| Commit | `5b8b9034f014de76ffef1fc2ae391ec29f98a6ce` |
| Commit'i kuupäev | 23.07.2026 |
| Protocol revision | 23 |
| UI revision | r51 |
| Manuaali keeled | eesti ja inglise |

## Katvus

| Teema | Olek | Järgmine täiendus |
|---|---|---|
| Esmakäivitus ja esimene show | Esmane juhend valmis | Lisada päris UI kuvatõmmised |
| Cue elutsükkel ja tüübid | Kaetud | Lisada OSC ja MIDI cue inspektori kuvatõmmised |
| Actions v2 ja reaktiivsed triggerid | Kaetud | Lisada video-näide / demo projekt |
| Transition ja ristfade | Kaetud | Lisada heliga ristfade'i mõõdetud näide |
| Kihid ja GPU komposiit | Kaetud | Dokumenteerida kihi-transformide töövoog (positsioon, skaala, pööre) |
| Ekraan, aken ja NDI | Kaetud | Lisada NDI saatja nime seadistus, kui UI valmib |
| Spout | Kaetud | Lisada vastuvõtja kuvatõmmised (Resolume, OBS) |
| OSC ja MIDI | Kaetud | Lisada MIDI Learn'i kuvatõmmised |
| Heli | Osaliselt kaetud | Vajab eraldi miksri ja gain staging'u peatükki |
| Tekst ja pildiseeriad | Osaliselt kaetud | Vajab editori väljade valmimist |
| Headless töö | Osaliselt kaetud | Vajab deployment'i ja watchdog'i töövoogu |
| Recovery ja žurnaal | Osaliselt kaetud | Vajab kasutajale nähtava taastamisvoo testi |
| Installer ja release upgrade | Puudub | Funktsioon pole veel olemas |

## Teadlikud dokumentatsioonivõlad

- Manuaalil puuduvad veel rakenduse päris kuvatõmmised.
- Lähtekood liikus protocol rev 3-lt rev 23-le; uuemad funktsioonid nagu
  composition canvas, LTC Generator ja Live Audio Input pole veel
  dokumenteeritud.
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
