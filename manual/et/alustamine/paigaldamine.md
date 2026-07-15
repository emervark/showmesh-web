---
title: Paigaldamine ja käivitamine
description: Arendusversiooni ehitamine ning Showmeshi mootori ja editori käivitamine Windowsis.
---

# Paigaldamine ja käivitamine

Showmeshi praegune versioon käivitatakse lähtekoodist. Allolev lühijuhend on
operaatorile, kes peab testbuildi tööle saama. Täielikud arenduskeskkonna
detailid on repo failis `docs/SETUP.md`.

## Nõuded

- Windows 11;
- Visual Studio 2022 töökoormusega **Desktop development with C++**;
- CMake 3.24 või uuem;
- vcpkg ja keskkonnamuutuja `VCPKG_ROOT`;
- Node.js 22 LTS;
- Git.

## Mootori ehitamine

Ava **x64 Native Tools Command Prompt for VS 2022** repo juurkaustas:

```bat
cmake -B engine\build -S engine -G "Visual Studio 17 2022" -A x64 ^
  -DCMAKE_TOOLCHAIN_FILE="%VCPKG_ROOT%\scripts\buildsystems\vcpkg.cmake"
cmake --build engine\build --config RelWithDebInfo
ctest --test-dir engine\build -C RelWithDebInfo --output-on-failure
```

Esimene build võib võtta kaua, sest vcpkg hangib ja ehitab meediateegid.

## Rakenduse käivitamine

Käivita mootor esimeses terminalis:

```bat
engine\build\RelWithDebInfo\engined.exe --gpu
```

Käivita editori veebiosa teises terminalis:

```bat
cd editor
npm install
npm run dev
```

Käivita Electron kolmandas terminalis:

```bat
cd editor
npm run electron
```

Editor ühendub vaikimisi aadressile `ws://127.0.0.1:7788`. Ülariba
ühendusindikaator peab näitama, et mootor on ühendatud.

## Levinud käivituslipud

```text
engined.exe [--port 7788] [--project show.imsn]
            [--display N] [--windowed WxH] [--gpu] [--run]
```

| Lipp | Tähendus |
|---|---|
| `--project show.imsn` | Avab käivitamisel projekti |
| `--windowed 960x540` | Avab programmi väljundi kohe aknas |
| `--display N` | Valib monitori; koos aknaseadega täisekraan |
| `--gpu` | Lubab D3D11VA GPU-dekoodimise ja vajadusel CPU fallback'i |
| `--run` | Käivitab headless show mode'i ilma editorita |

::: warning Engine ja editor peavad sobima
Kui editor näitab teadet, et engine on vanem, rebuild'i mootor ja käivita see
uuesti. Ülaribal kuvatav UI revisjon ning engine build stamp aitavad tuvastada,
kas käivitasid õige binaari.
:::

## Järgmine samm

Tutvu [kasutajaliidesega](/et/alustamine/kasutajaliides) ja tee väljund alguses
aknarežiimis.
