---
title: Väljundid ja NDI
description: Ekraani-, akna- ja NDI-väljundi seadistamine Showmeshis.
---

# Väljundid ja NDI

Väljundeid muudetakse Edit-režiimis menüüst **Output**. Mootor rakendab
valiku töötamise ajal: akna saab avada, sulgeda või teisele monitorile viia
ilma mootori restartimata.

## Disabled

Programmi display-väljund on välja lülitatud. NDI mirror võib samal ajal edasi
töötada. Kasuta seda headless või ainult võrgupõhise väljundi puhul.

## Fullscreen

Vali **Output → Fullscreen → Display N**. Showmesh avab vastaval monitoril
borderless täisekraani. Monitori kirje näitab võimalusel resolutsiooni.

Enne show'd kontrolli Windows Display Settings'is:

- monitoride järjekorda;
- resolutsiooni ja refresh rate'i;
- HDR ja scaling seadeid;
- et show-ekraan pole primary desktop, kui see pole taotluslik.

## Windowed

Vali **Output → Windowed → Display N — resizable window**. See on sobiv
arenduseks, eelkontrolliks ja olukorda, kus teine tarkvara võtab akna capture'ina.

## NDI

Lülita **Composition Output Sharing → Network streaming (NDI)** sisse. NDI on
programmi kompositsiooni mirror ning võib töötada ka Disabled display kõrval.

Kontrolli vastuvõtjas:

- õiget saatja nime;
- resolutsiooni ja kaadrisagedust;
- alfa ja värvide ootuspärast käitumist;
- heli olemasolu eraldi, kui töövoog seda eeldab;
- võrgu stabiilsust kogu läbimängu jooksul.

GPU-kaadrid loetakse NDI jaoks vajadusel tagasi ja saadetakse NV12-na. Rasked
4K komposiidid koos preview'ga võivad seetõttu vajada päris raual koormustesti.

## Spout

Menüüvalik **Texture sharing (Spout) — soon** on ettevalmistus tulevaseks
funktsiooniks. Selle haru mootoris SpoutDX-integratsiooni pole.

## Ressursi output

Meediacue **Playback → Output** saab siduda ressursi kindla väljundiga või jätta
valikule **Default**. Hoia lihtsas show's kõik ressursid default-programmis;
kasuta eraldi marsruuti ainult siis, kui väljundite plaan on dokumenteeritud ja
läbi testitud.
