---
title: Sinu litsents
description: Showmeshi aktiveerimine, litsentsi liigutamine teise arvutisse ja mis juhtub siis, kui litsentsiserverini ei saa.
---

# Sinu litsents

Litsentsivõti aktiveerib Showmeshi **kahes arvutis**. Võti tuleb e-postiga:
beetatestija küsib selle aadressilt
[licenses.showmesh.app/beta](https://licenses.showmesh.app/beta), ostja saab
selle ostuga kaasa.

::: tip Beeta ei nõua veel litsentsi
See build näitab litsentsi olekut ja ei blokeeri midagi. Sa saad Showmeshi
paigaldada, show'd ehitada ja seda mängida ka ilma aktiveerimata. Aktiveerimine
tasub siiski ära teha — nii selgub varakult, kas see sinu masinas töötab, ja
just selleks beeta ongi.
:::

## Aktiveerimine

1. Vali **View ▸ License**. Sama paneel on ka Resources-nimekirja põhjas.
2. Kleebi võti väljale **License key** ja vajuta **Activate**.

Masin peab korra internetti jõudma. Pärast seda töötab Showmesh korraga kuni
30 päeva võrguta — vaata [Töö võrguta](#too-vorguta) allpool.

Paneel ei näita su tervet võtit enam kunagi, ainult viimaseid märke
(`Key …1C-V3`). Hoia kiri alles.

## Mida paneel ütleb

| Olek | Mida see tähendab |
| --- | --- |
| **Licensed** | Aktiveeritud ja hiljuti serveriga kontrollitud. |
| **Licensed (offline)** | Aktiveeritud ja kehtiv, töötab salvestatud sertifikaadiga. Normaalne. |
| **Not activated** | Selles arvutis pole võtit. |
| **Expired** | Rent sai läbi või beeta lõppes. |
| **Suspended** | Litsents on tagasi võetud — näiteks pärast tagasimakset. |
| **Error** | Midagi konkreetset läks valesti; paneel ütleb, mis. |

**License expires** ja **Offline access until** on **kaks eri kuupäeva** ja
paneel näitab mõlemat. Esimene on su litsentsi lõpp. Teine on hetk, mil see
arvuti järgmine kord internetti vajab — ühendus pikendab seda ega lühenda su
litsentsi.

## Töö võrguta

Showmesh ei vaja show mängimiseks ühendust. Aktiveerimine kirjutab arvutisse
allkirjastatud sertifikaadi, mis kehtib korraga 30 päeva. Iga käivitus uuendab
seda vaikselt, kui ühendus on olemas; kui ei ole, ei muutu midagi ja midagi ei
öelda.

Hoiatus **Online check needed** ilmub alles siis, kui võrguta aken hakkab
päriselt sulguma. Ühenda korra ja see kaob.

::: warning Juba mängivat show'd ei katkestata kunagi
Kui rent aegub või litsents võetakse tagasi keset show'd, jätkub mäng kuni
12 tundi, et etendus lõpuni saaks. Muudatus jõustub järgmisel käivitusel.
:::

## Teise arvutisse kolimine

Vajuta vanas arvutis **Deactivate**, kui see on võrgus. Koht vabaneb alles
siis, kui server on seda kinnitanud — nii ei lähe midagi kaotsi, kui ühendus
poole peal katkeb; vajuta lihtsalt uuesti.

Seejärel aktiveeri uues arvutis sama võtmega.

**Kui vana arvutini ei saa** — see läks katki, installiti üle, või kuulub
saalile, kust sa lahkusid — kirjuta
[support@showmesh.app](mailto:support@showmesh.app) ja koht vabastatakse sinu
eest.

## Kui midagi on valesti

**„This key is already active on its allowed number of machines."** Kaks
arvutit juba kasutavad seda. Deaktiveeri üks, või kirjuta tugiteenusele, kui
sa selleni ei saa.

**„The licensing server could not be reached."** Sinu ühendus või meie oma.
Juba aktiveeritud arvutit see ei puuduta — takistatud on ainult uue
aktiveerimine.

**„The system clock moved backward."** Showmesh peab meeles viimast aega, mida
ta on usaldanud, ja keeldub kellast, mis on sellest tahapoole hüpanud. Sea kell
õigeks, ühenda korra ja vajuta **Refresh**.

**„This machine's activation was released on the licensing server."**
Tugiteenus vabastas koha, või tegid seda ise mujalt. Vajuta **Activate** sama
võtmega ja võta see tagasi.

**Võti ei jõudnud kohale.** Küsi uuesti aadressilt
[licenses.showmesh.app/beta](https://licenses.showmesh.app/beta) sama
aadressiga — saad **sama võtme** uuesti, mitte teist litsentsi. Vaata enne
rämpsposti kausta.

## Mida Showmesh saadab

Aktiveerimine saadab su litsentsivõtme ja selle arvuti sõrmejälje, ja mitte
midagi muud. Sõrmejälg on ühesuunaline räsi: see eristab masina
litsentsiserveri jaoks, ütlemata talle masina kohta midagi.

Showmesh ei teata, mida sa mängid, mis su show's on ega millal sa seda jooksutad.
