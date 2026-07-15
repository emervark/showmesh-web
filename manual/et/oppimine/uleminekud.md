---
title: Üleminekud
description: Fade'id, kurvid, ristfade ning transition-cue tööpõhimõte.
---

# Üleminekud

Showmeshis on üleminek ajas muutuv parameeter. Kõige tavalisemad on video
opacity, heli volume ja pan.

## Ülemineku anatoomia

Transition-action sisaldab:

- **Property** — millist parameetrit muudetakse;
- **From** — valikuline algväärtus;
- **To** — lõppväärtus;
- **Duration** — muutuse kestus millisekundites;
- **Delay** — viivitus pärast triggerit;
- **Curve** — väärtuse liikumise kuju;
- **Trigger** — käivitushetk.

Kui From on määramata, loeb mootor action'i käivitumisel parameetri hetkeväärtuse.
See on õige valik katkestatava või ümberpööratava fade'i puhul.

## Kurvid

| Kurv | Iseloom |
|---|---|
| **Linear** | Ühtlane matemaatiline muutus |
| **Ease In** | Alustab aeglaselt |
| **Ease Out** | Lõpetab aeglaselt |
| **S Curve / Ease In Out** | Pehme algus ja lõpp |
| **Step Start** | Hüpe alguses |
| **Step End / Hold Then Step** | Hoiab väärtust ja hüppab lõpus |

Helitugevus kasutab perceptual-mapper'it ning pan equal-power-mapper'it. Seetõttu
ei võrdu toorväärtuse lineaarne liikumine tingimata tajutava helitugevuse
lineaarse muutusega.

## Fade-in ja fade-out

Meediacue tüüpiline paar:

| Action | Trigger | From | To |
|---|---|---:|---:|
| Opacity fade-in | On Play | 0 | 1 |
| Opacity fade-out | On Cue Stop | — | 0 |

Videol lisa tavaliselt sama paar ka Volume parameetrile, kui fail sisaldab heli.

## Ristfade kahe video vahel

1. Sea Video A kihile `0` ja Video B kihile `1`.
2. Lisa Video B cue'le enda opacity `0 → 1`, triggeriga **On Play**.
3. Lisa samale cue'le action targetiga Video A, opacity `→ 0`, triggeriga
   **On Cue Start**.
4. Lisa `At Time` või `On Finished` Stop-käsk Video A-le.

Mõlema transition'i sama kestus annab klassikalise ristfade'i. Kui Video A
sisaldab heli, fade'i ka selle volume.

## Vana transition-kuju

Vanad projektid võivad sisaldada `tracks[]`, `fadeInSec`, `fadeOutSec` või
ühe parameetriga transition-välju. Mootor migreerib enamiku neist action'iteks.
Suhtelise sihtväärtusega vanad track'id võivad jääda pärandteele.

::: warning Ära muuda migreeritud JSON-i käsitsi
Salvesta vana projekt uue nimega ja kontrolli cue-listi visuaalselt. Action'id
on uue mudeli allikas; vanade ja uute väljade käsitsi segamine muudab tulemuse
raskesti auditeeritavaks.
:::
