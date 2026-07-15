---
title: Kihid ja komposiit
description: Mitme visuaalse cue samaaegne kuvamine ning kihtide järjestus.
---

# Kihid ja komposiit

Showmesh võib kuvada mitu video-, pildi- või tekstikihti korraga. Programm
komponeeritakse alt üles premultiplied-alpha **over** reegliga.

## Järjestus

Visuaalide järjekord on:

1. väiksem **Layer** väärtus allpool;
2. sama Layer väärtuse korral varem käivitatud cue allpool;
3. viimaseks stabiilne cue ID järjestus.

Seega tavapärane struktuur võiks olla:

| Layer | Kasutus |
|---:|---|
| 0 | Taustvideo |
| 10 | Põhipilt või teine video |
| 20 | Graafika / lower third |
| 30 | Häda- või blackout-kiht |

Jäta kihtide vahele ruumi, et saaksid hiljem uusi tasemeid vahele lisada.

## Opacity

Iga videokihi `video.opacity` korrutab selle alfa. Väärtus `0` on läbipaistev,
`1` täielikult nähtav. Pildifaili enda alfa säilib ning korrutatakse cue
opacity'ga.

## Praegused piirangud

- Kihi positsiooni, skaalat ega pööret editoris muuta ei saa.
- Per-output crop ja corner pin puuduvad.
- Programmi väljundi täielik alfa väljapoole pole veel valmis.
- GPU-komposiitor on lähtekoodis olemas, kuid iga Windows/GPU kombinatsioon
  vajab enne show'd rauatesti.

::: tip Ristfade vajab kattumist
Kui Video A lõpetatakse enne Video B nähtavaks saamist, pole komposiitoril
midagi ristfade'ida. Hoia mõlemad cue'd ülemineku kestel mängimas ja peata
alumine cue alles fade'i lõpus.
:::
