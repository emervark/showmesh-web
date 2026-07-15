# Showmesh Manual

Showmeshi laiendatav eesti- ja ingliskeelne kasutusjuhend. Avalik sisu on
Markdown-failides ning VitePress lisab navigatsiooni, keelevaliku, kohaliku
otsingu, mobiilivaate ja staatilise buildi.

## Kohalik töö

```powershell
cd manual
npm install
npm run dev
```

Build ja katkiste siselinkide kontroll:

```powershell
npm run check
```

Valmis staatiline sait tekib kausta `manual/.vitepress/dist`.

## Sisu struktuur

- `sissejuhatus/` — toote ulatus ja piirangud;
- `alustamine/` — esimese kasutuskorra juhendid;
- `oppimine/` — mõisteid ja tööpõhimõtteid õpetavad lehed;
- `toovood/` — eesmärgipõhised protsessid;
- `viited/` — ammendavad tabelid ja väljade kirjeldused;
- `manuaal/` — manuaali enda hooldusinfo;
- juurkaustade sisulehed — ingliskeelne vaikimisi versioon;
- `et/` — eestikeelne peegelstruktuur; samad suhtelised teed võimaldavad
  keelevalikul avada vastava lehe;
- `.vitepress/config.mts` — menüü, külgriba ja saidi üldseaded;
- `.vitepress/theme/` — ainult ühine visuaalne kiht;
- `public/` — staatilised pildid ja failid.

Loe täpsemalt lehelt `manuaal/kaastoo.md` või `et/manuaal/kaastoo.md`.
