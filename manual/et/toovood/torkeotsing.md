---
title: Tõrkeotsing
description: Showmeshi tüüpiliste ühenduse, meedia, väljundi ja buildi vigade lahendamine.
---

# Tõrkeotsing

Alusta alati küsimusest: kas viga on editoris, mootoris, projektis, meedias või
signaaliteel pärast Showmeshi?

## Editor näitab Disconnected

1. Kontrolli, et `engined.exe` töötab.
2. Kontrolli mootori logist porti; vaikimisi on WebSocket `7788`.
3. Veendu, et samal pordil pole teist protsessi.
4. Oota vähemalt sekund — editor proovib automaatselt uuesti.
5. Kui ühendus taastub, kontrolli enne GO-d playhead'i ja programmi väljundit.

## Engine on vanem kui editor

Editor näitab seda, kui projektis puuduvad uue protokolli väljad või engine'i
versioon on vana. Rebuild'i mootor:

```bat
cmake --build engine\build --config RelWithDebInfo
```

Peata vana protsess ja käivita värskelt ehitatud binaar. Kontrolli ülariba
build stamp'i.

## Video on must või GPU fallback käivitub

- Proovi sama faili ilma `--gpu` liputa.
- Uuenda GPU draiverit ja kontrolli, millisele adapterile output avati.
- Hybrid-GPU masinas kontrolli Windows Graphics Settings'i rakenduse GPU valikut.
- Ära lülita automaatset GPU-probe'i välja enne, kui oled logi salvestanud.
- Kui probleem puudutab ainult üht encode'i, tee kontrollre-export standardse
  H.264 või ProRes failiga.

## Programmi eelvaade puudub, kuid väljund töötab

Preview on eraldi JPEG-over-WebSocket kanal. Kontrolli keskkonnamuutujat
`INTERMISSION_PREVIEW_HZ`: väärtus `0` lülitab selle välja. GPU preview võib
suure koormuse korral kaadreid vahele jätta; päris programmi väljund on
olulisem tõeallikas.

## Heli puudub

- Vaata olekuriba audio peak'e.
- Kontrolli cue ja ressursi Volume väärtust; need korrutatakse omavahel.
- Kontrolli Windowsi valitud väljundseadet ja mute'i.
- Mootori `audioDeviceNull` olek tähendab, et päris heliseadet ei avatud.
- Testi ühe teadaoleva stereofailiga ilma transition'iteta.

## NDI ei ilmu vastuvõtjasse

- Kontrolli, et NDI linnuke on Output-menüüs sees.
- Kontrolli, et tulemüür lubab rakendust ja võrk pole Public profiili piiranguga.
- Veendu, et saatja ning vastuvõtja on samas NDI discovery keskkonnas.
- Testi kõigepealt lihtsa 1080p faili ja Disabled display'ga.
- Vaata mootori logi NDI saatja loomise või kaadrite saatmise veateateid.

## Build annab `__std_*` või `_Thrd_*` lingivea

Põhjus on tavaliselt CMake cache'i ja vcpkg toolset'i erinevus. Tee puhas
rekonfiguratsioon sama Visual Studio 2022 terminali seest. Täpne juhis on
repo failis `docs/SETUP.md` peatükis **Toolset'i mittevastavus**.

## Show olek on ebaselge

Kasuta PANIC'ut ainult siis, kui kohene katkestus on ohutum kui teadmata olek.
Seejärel taasta ettevalmistatud cue'ga. Ära hakka live'is projektifaili käsitsi
muutma.
