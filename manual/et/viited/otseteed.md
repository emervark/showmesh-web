---
title: Klaviatuuri otseteed
description: Showmeshi editori klaviatuuri käskude täielik loend.
---

# Klaviatuuri otseteed

Windowsis kasuta <kbd>Ctrl</kbd>. Kood toetab samades kombinatsioonides ka
<kbd>Cmd</kbd> modifikaatorit.

Tabel on genereeritud editori enda otseteede registrist (`editor/src/shared/
shortcuts.json` Showmeshi repos) — sama tabel, mille vastu klahvikäsitleja
matchib ja millest menüüriba oma vihjed loeb, nii et see leht ei saa
rakendusest maha jääda.

<!-- generated:shortcuts start — Showmeshi docs/manual/generated/shortcuts.et.md; ära toimeta käsitsi, uuenda `npm run sync:reference` -->

## Rakendus

| Kiirklahv | Tegevus |
|---|---|
| <kbd>Ctrl</kbd>+<kbd>K</kbd> | Ava või sulge käsupalett |
| <kbd>Ctrl</kbd>+<kbd>Q</kbd> | Sulge Showmesh (küsib enne, siis peatab mootori) |

## Fail ja redigeerimine

| Kiirklahv | Tegevus |
|---|---|
| <kbd>Ctrl</kbd>+<kbd>N</kbd> | Uus projekt ¹ |
| <kbd>Ctrl</kbd>+<kbd>O</kbd> | Ava projekt ¹ |
| <kbd>Ctrl</kbd>+<kbd>S</kbd> | Salvesta ¹ |
| <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>S</kbd> | Salvesta kui ¹ |
| <kbd>Ctrl</kbd>+<kbd>Z</kbd> | Võta tagasi ¹ |
| <kbd>Ctrl</kbd>+<kbd>Y</kbd> või <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd> | Tee uuesti ¹ |
| <kbd>Ctrl</kbd>+<kbd>C</kbd> | Kopeeri valitud cue |
| <kbd>Ctrl</kbd>+<kbd>V</kbd> | Aseta cue ¹ |
| <kbd>Ctrl</kbd>+<kbd>D</kbd> | Dubleeri valitud cue ¹ |
| <kbd>Del</kbd> | Kustuta valik ¹ |

## Transport ja navigeerimine

| Kiirklahv | Tegevus |
|---|---|
| <kbd>Space</kbd> | GO — käivita relvastatud cue |
| <kbd>Esc</kbd> | PANIC — peata kõik (ainult kui ükski menüü või dialoog ei kasuta Esc-i) |
| <kbd>↑</kbd> / <kbd>↓</kbd> | Vali ja relvasta eelmine / järgmine cue |
| <kbd>Shift</kbd>+<kbd>↑</kbd> / <kbd>↓</kbd> | Laienda cue-valikut |
| <kbd>Shift</kbd>+<kbd>click</kbd> | Vali järjestikune vahemik |
| <kbd>Ctrl</kbd>+<kbd>click</kbd> | Lülita üht rida ilma relvastamata |

## Programmi väljund

| Kiirklahv | Tegevus |
|---|---|
| <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd> | Lülita programmi väljund välja ¹ |
| <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>0</kbd> | Programmi väljund muudetava suurusega aknasse ¹ |
| <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>1</kbd> … <kbd>9</kbd> | Programmi väljund täisekraanil ekraanile 1 … 9 ¹ |

## Käsupalett (kui avatud)

| Kiirklahv | Tegevus |
|---|---|
| <kbd>↑</kbd> / <kbd>↓</kbd> | Liiguta valikut (jätab pealkirjad ja mittesaadaval read vahele) |
| <kbd>Enter</kbd> | Käivita valitud kirje |
| <kbd>Esc</kbd> | Sulge palett |

¹ Show-režiim lukustab redigeerimise: neid ei saa kasutada, kuni lukk on peal.

<!-- generated:shortcuts end -->

::: danger Escape on PANIC
Kui käsupalett pole avatud ja fookus pole sisestusväljal, on <kbd>Esc</kbd>
globaalne PANIC. Ära kasuta seda lihtsalt valiku tühistamiseks live-show ajal.
:::
