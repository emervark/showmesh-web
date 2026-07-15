---
title: Live-show juhtimine
description: Ohutu Show mode'i töökorraldus ning transport etenduse ajal.
---

# Live-show juhtimine

## Enne maja avamist

1. Käivita mootor ja alles seejärel editor.
2. Ava õige `.imsn` fail.
3. Kontrolli ülaribal ühendust, engine'i versiooni ja build stamp'i.
4. Ava programmi väljund ning kontrolli musta / ooteolekut.
5. Vaata transpordi **NEXT** rida.
6. Tee helitaseme ja esimese visuaali lühitest.
7. Lülita sisse **Show mode**.

## Show mode

Show mode lukustab dokumendi muutmise: cue lisamine, kustutamine, väljade
muutmine ja väljundi ümberseadistamine pole lubatud. Transport ja parameetrite
live-juhtimine jäävad tööle.

Lülita Show mode välja ainult siis, kui otsustad teadlikult projekti muuta.
Pärast parandust salvesta, tee vajadusel kontroll-GO ja lukusta uuesti.

## GO

GO nupp ja <kbd>Space</kbd> käivitavad transpordi **NEXT** real näidatud cue.
Vajuta üks kord ning kinnita oleku muutus. Auto-continue või Auto-follow võib
käivitada järgmisi cue'sid ilma uue vajutuseta.

## STOP

Transpordi STOP peatab parajasti töötava cue. Kui cue'l on `On Cue Stop`
transition, lastakse sellel lõpetamisgraatsia jooksul töötada. Teine STOP on
kohene.

## PANIC

PANIC või <kbd>Esc</kbd> lõpetab kõik aktiivsed cue'd kohe. Kasuta seda, kui
vale sisu on programmis või show seisund pole enam usaldusväärne.

::: danger PANIC ei ole pehme fade
PANIC ei oota lõpetamis-action'eid. Hoia eraldi ettevalmistatud blackout- või
taastamiscue, kui show disain vajab kontrollitud üleminekut.
:::

## Taastumine

Kui editor kaotab ühenduse, mootor on endiselt show tõest oleku omanik. Editor
proovib vaikimisi iga sekundi järel aadressile `ws://127.0.0.1:7788` uuesti
ühenduda. Ära käivita uut mootori protsessi enne, kui oled kontrollinud, kas
vana veel töötab ja saadab programmi väljundit.

Kui mootor tuleb taaskäivitada:

1. vii välissüsteem turvalisse pilti;
2. peata vana protsess;
3. käivita mootor õige projektiga;
4. oota editori ühendust;
5. kontrolli playhead'i ja väljundit;
6. käivita ettenähtud taastamiscue.
