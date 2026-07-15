---
title: Show ettevalmistamine
description: Kontrollnimekiri Showmeshi projekti loomiseks ja läbimänguks.
---

# Show ettevalmistamine

Hea live-show ehitatakse nii, et operaator ei pea etenduse ajal projekti
parandama. Tee järgnevad sammud enne publikuga läbimängu.

## 1. Projekti struktuur

- Anna cue'dele lühikesed, kõnes selgelt eristatavad nimed.
- Kasuta numbreid, kuhu saab hiljem ridu vahele lisada: `1`, `1.1`, `1.2`, `2`.
- Kirjuta kriitiline operaatoriinfo **Notes** väljale.
- Rühmita samaaegselt käivituvad cue'd Group-cue alla või kasuta
  Auto-continue'i ainult siis, kui paralleelsus on taotluslik.
- Tee eraldi stopp- või taastamiscue'd keerukatele stseenidele.

## 2. Meedia kontroll

Kontrolli iga faili puhul:

- failitee on kehtiv;
- kestus, esimene ja viimane kaader on õiged;
- helikanalid ja tase on ootuspärased;
- loop on visuaalselt ja heliliselt sujuv;
- alfa töötab päris väljundis;
- GPU-dekoodimise automaatne fallback ei tekita katkestust.

Showmesh tuvastab puuduva meedia pre-flight'is, kuid selles versioonis puudub
relinker-UI. Paranda tee projektis või lisa ressurss uuesti.

## 3. Ajastus ja action'id

- Kontrolli transpordi **NEXT** kokkuvõtet iga cue ees.
- Veendu, et On Play ning On Cue Start pole omavahel vahetatud.
- Lisa stop-fade'ile alati selge kestus.
- Kui fade'i järel peab cue lõppema, lisa Stop-käsk triggeriga On Finished või
  piisava At Time viitega.
- Testi reaktiivset action'it vähemalt kaks korda sama cue jooksul.

## 4. Väljundid

- Vali õige monitor ja kontrolli, et Windowsi kuvanumbrid vastavad Showmeshile.
- Testi täisekraani resolutsiooni ning kaadrisagedust.
- NDI puhul vaata signaali päris vastuvõtjas, mitte ainult editori preview's.
- Kontrolli heli Windowsi tegelikus väljundseadmes.
- Ära kasuta Spouti selle versiooni show-plaanis.

## 5. Läbimäng

Tee vähemalt kaks läbimängu:

1. **Tehniline läbimäng:** peata iga cue järel ja kontrolli pilti, heli,
   triggerit ning logi.
2. **Etenduse tempos läbimäng:** kasuta ainult neid nuppe ja kontrollereid,
   mida operaator päriselt kasutab.

Proovi teadlikult ka:

- topelt-GO;
- STOP fade'i ajal;
- teine STOP ehk kohene katkestus;
- PAUSE ja RESUME;
- PANIC ning taastamiscue;
- mootori ja editori uuesti ühendamine.

## 6. Lukusta ja salvesta

Salvesta projekt, tee varukoopia ning lülita sisse **Show mode**. Kontrolli, et
projekti muutmise väljad kaovad või lukustuvad, aga GO, STOP, PANIC ja Manual
FIRE jäävad kättesaadavaks.
