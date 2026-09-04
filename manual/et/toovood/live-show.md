---
title: Live-show juhtimine
description: Turvaline Show mode töö, samaaegne taasesitus ja taastumine.
---

# Live-show juhtimine

## Enne uste avamist

1. Käivita Showmesh ja ava õige `.show` fail.
2. Kontrolli mootori ühendust, build'i/versiooni, väljundeid, sisendeid ja
   ohutut vaikepilti.
3. Vali esimene kavandatud cue ja loe **NEXT** rida.
4. Tee lühike audio-, visuaal- ja kontrolleritest.
5. Lülita sisse **Show mode**.

## Show mode

Show mode peidab redigeerimispaneelid ning lukustab dokumendi muudatused ja
väljundite ümberseadistamise. Cue valimine ja ettevalmistamine, GO, STOP,
PANIC ja Manual FIRE jäävad kättesaadavaks. Lahku Show mode'ist ainult
tahtliku muudatuse tegemiseks, seejärel salvesta, testi ja lukusta uuesti.

## GO ja samaaegsed cue'd

GO või <kbd>Space</kbd> käivitab **NEXT** cue. NOW plokk näitab viimati
käivitatud cue'd ja loetleb selle all teised töötavad cue'd. Auto-continue,
Auto-follow, timecode või välised triggerid võivad käivitada rohkem cue'sid
ilma uue GO-ta.

## STOP

STOP rakendub kõigile töötavatele cue'dele ja näitab, mitut cue'd see
mõjutab, nt `STOP · 3`. See taotleb viisakat peatumist, nii et iga cue saab
läbida oma On Cue Stop fade'i. Sama cue uuesti peatamine lõpetab selle kohe.

## PANIC

Pelgalt <kbd>Esc</kbd> või PANIC käivitab globaalse panic-fade'i, umbes kaks
sekundit musta/vaikuseni. Vajuta uuesti fade'i ajal kohese kõva peatuse
saamiseks. Avatud menüüd ja hüpikaknad tarbivad Esc enne ning ei lase sellel
kogemata PANIC-uni jõuda.

## Engine-lingi kadumine

Editor näitab **ENGINE LINK LOST**, külmutab telemeetria kui **LAST KNOWN**
ning proovib uuesti iga sekundi järel. Taasesitus võib mootoris ikka
töötada. Ära käivita teist mootorit ainult sellepärast, et editor katkestas
ühenduse.

Kui editor sulgus, ava see uuesti ja lase sel püsiva mootoriga uuesti
ühenduda. Kui mootor ise peab taaskäivituma:

1. vii järgnev süsteem ohutusse olekusse;
2. kinnita ja peata vana protsess;
3. käivita õige mootor ja projekt;
4. oota, kuni editor uuesti ühendub;
5. kontrolli cue olekut, NEXT-i ja väljundeid;
6. käivita ettevalmistatud taastumis-cue.
