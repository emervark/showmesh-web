---
title: Kuidas manuaali täiendada
description: Showmeshi manuaali sisu-, stiili- ja kontrollireeglid.
---

# Kuidas manuaali täiendada

Manuaal on tahtlikult eraldatud rakenduse koodist: iga sisuleht on tavaline
Markdown, navigatsioon on ühes konfiguratsioonifailis ja sait ehitatakse
staatiliseks. Uue lehe lisamine ei nõua Reacti tundmist.

## Kohalik eelvaade

```powershell
cd manual
npm install
npm run dev
```

VitePress näitab aadressi terminalis ja uuendab lehte faili salvestamisel.

Enne muudatuse lõpetamist:

```powershell
npm run check
```

See ehitab kogu saidi ning püüab kinni vigased siselingid ja renderdusvead.

## Uue lehe lisamine

1. Vali õige sisukiht:
   - **Alustamine** — algaja järjestikune juhend;
   - **Õppimine** — mõiste või süsteemi toimimine;
   - **Töövood** — eesmärgi saavutamise protsess;
   - **Viited** — täpne ja ammendav väljade loend.
2. Loo ingliskeelne väikeste tähtedega sidekriipsuline `.md` fail manuaali juursisusse.
3. Loo sama suhtelise teega eestikeelne fail `et/` kausta alla.
4. Lisa mõlemale frontmatter vähemalt `title` ja `description` väljaga.
5. Lisa mõlemad lehed `.vitepress/config.mts` vastava locale'i külgribale.
6. Lisa mõlemas keeles vähemalt üks link lehele ning üks link lehelt edasi.
7. Käivita `npm run check`.

Samad suhtelised teed on kohustuslikud: keelevalik leiab nende abil praeguse
lehe vaste teises keeles.

Lehe alus:

```md
---
title: Lehe pealkiri
description: Ühe lausega kirjeldus otsingu ja metaandmete jaoks.
---

# Lehe pealkiri

Lühike vastus: mida kasutaja pärast seda lehte oskab või teab.

## Esimene alateema

...
```

## Üks teema, üks tõeallikas

- Õpetus selgitab **miks ja kuidas**, viiteleht **millised väärtused**.
- Ära kopeeri pikka lubatud väärtuste loendit mitmele lehele; lingi viitesse.
- Kui funktsioon on osaline, kirjuta piirang kasutuskoha lähedale.
- Ära dokumenteeri roadmap'i valmis funktsioonina.

## Koodist kontrollimise kaart

| Teema | Esmane lähteallikas repos |
|---|---|
| UI sildid, menüüd ja shortcut'id | `editor/src/renderer/App.tsx` |
| Editori tegevused ja default cue | `editor/src/renderer/store.ts` |
| Cue, action ja trigger väljad | `protocol/protocol.schema.json` |
| Animeeritavad parameetrid | `protocol/params.schema.json` |
| OSC aadressid | `engine/net/osc_dispatch.cpp` |
| MIDI käitumine | `engine/net/midi_dispatch.cpp`, `engine/rt/main.cpp` |
| Tegelik funktsioonide seis | `docs/STATUS.md` |
| Windowsi build ja lipud | `docs/SETUP.md` |

Genereeritud `protocol.gen.*` ja `params.gen.*` on head kiireks kontrolliks,
kuid nende tõeallikas on schema-fail.

## Stiil

- Kasuta toote nime **Showmesh**; lähtekoodi nime **Intermission** ainult siis,
  kui kasutaja näeb seda päriselt failis, protsessis või UI-s.
- Kirjuta kasutajale, mitte koodi autorile.
- Alusta tulemusest ja kasuta nummerdatud loendit ainult järjekorra puhul.
- Kasuta UI siltide jaoks rasvast kirja, klahvide jaoks `<kbd>` märgendit ning
  masinväärtuste jaoks backtick'e.
- Kasuta `warning` plokki reaalse riski, mitte tavapärase märkuse jaoks.
- Üks H1 pealkiri lehe kohta; H2 loob parempoolse sisukorra.

## Tõlkimine

- Uuenda käitumise muutumisel alati mõlemat keelt samas muudatuses.
- Tõlgi tähendus, mitte eestikeelse lauseehituse sõnasõnaline kuju.
- Jäta masina-ID-d, JSON väljad, OSC aadressid ja koodinäited muutmata.
- Kui tsiteerid rakenduse UI silti, kasuta selle tegelikku kuju.

## Pildid

Pane lehepõhised pildid vastava teema lähedale `public/images/` alamkausta ja
kasuta tähenduslikku nime, näiteks `public/images/alustamine/output-menu.webp`.

```md
![Output-menüü täisekraani ja NDI valikutega](/images/alustamine/output-menu.webp)
```

Lisa pilt ainult siis, kui see vähendab kasutaja eksimisvõimalust. Uuenda pilti,
kui UI silt või paigutus oluliselt muutub.

## Versiooni uuendamine

Kui manuaal viiakse uuele rakenduse harule või release'ile:

1. uuenda avalehe lähtecommit'i ja kuupäeva;
2. võrdle `protocol/*.schema.json`, `App.tsx`, `store.ts` ja `docs/STATUS.md`;
3. uuenda [sisu oleku](/et/manuaal/sisu-olek) tabelit;
4. ehita sait;
5. tee vähemalt võtmelehtede visuaalne kontroll töölaua- ja mobiililaiuses.
6. kontrolli, et keelevalik säilitab praeguse lehe.

## Avaldamine

`DOCS_BASE` võimaldab sama buildi avaldada domeeni juurkausta või alamteele:

```powershell
$env:DOCS_BASE='/Intermission/'
npm run build
```

Ilma muutujata on base `/`, mis sobib eraldi domeenile ja kohalikule preview'le.
