---
title: Kasutajaliides
description: Showmeshi editori põhipaneelid, menüüd, transport ja olekuinfo.
---

# Kasutajaliides

Showmeshi editor on jagatud viieks tööalaks. Paigutus on ehitatud nii, et
operaator näeb ühtaegu järgmist cue'd, programmi olekut ja valitud cue seadeid.

## 1. Ülariba

Ülaribal on projekti nimi, **Edit / Show mode** lüliti, menüüd, käsupalett ning
mootori ühenduse olek.

Menüüd on nähtavad Edit-režiimis:

- **File** — uus projekt, avamine ja salvestamine;
- **Edit** — undo ja redo;
- **Add** — cue või ressursi lisamine;
- **Cue** — GO, Panic ja cue kustutamine;
- **Output** — ekraan, aken, NDI ning Spouti tulevikuvalik;
- **View** — Show mode'i lülitamine.

## 2. Ressursipaneel

Vasak paneel rühmitab video-, pildi-, audio- ja tekstiressursid, väljundid ning
ühendused. Meediaressursi saab lohistada cue-listi; Showmesh loob sobiva cue.

## 3. Cue-list

Keskmine paneel on show järjestus. Iga rida näitab cue numbrit, nime, tüüpi,
kestust ja olenevalt tüübist sihtmärki või action'ite alaridu.

- Klõps vali cue.
- Lohista rida cue'de ümberjärjestamiseks.
- <kbd>Delete</kbd> kustutab valitud cue Edit-režiimis.
- GO käivitab playhead'i järgmise cue, mitte tingimata hiirega valitud cue.

## 4. Inspektor

Parempoolne paneel muudab valitud cue omadusi. Sektsioonid sõltuvad cue tüübist:

- **Identity** — number, nimi, tüüp ja ressurss;
- **Playback** — play mode, videokiht ja väljund;
- **Timing** — pre-wait, post-wait, kestus ja continue mode;
- **Actions** — cue käsud, parameetrimuutused ja triggerid;
- **Group** — grupi liikmed;
- **Notes** — operaatori märkmed.

Väljade muudatused saadetakse mootorile. Numbriväli kinnitatakse fookuse
kaotamisel või klahviga <kbd>Enter</kbd>.

## 5. Transport ja olekuriba

Transport näitab:

- **NOW** — praegu töötav cue, kell ja progress;
- **NEXT** — mida järgmine GO teeb;
- **STOP** — peatab parajasti töötava cue;
- **GO** — käivitab järgmise cue;
- **PANIC** — peatab kõik kohe.

Alumine olekuriba avab programmi eelvaate, helitasemed, engine'i mõõdikud ja
hoiatused. Eelvaade saabub JPEG-pildina umbes 12 korda sekundis ning ei asenda
programmi väljundi kontrollimist päris monitoril.

::: tip Valik ja playhead ei ole sama
Cue valimine avab selle inspektoris. GO kasutab eraldi playhead'i. Kontrolli
enne vajutamist alati transpordi **NEXT** rida.
:::
