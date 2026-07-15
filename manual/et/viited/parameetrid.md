---
title: Parameetrid
description: Animeeritavate Showmeshi parameetrite registry ja aadressid.
---

# Parameetrid

Parameetrite allikas on repo `protocol/params.schema.json`. Stabiilset ID-d ei
tohi ümber nimetada ilma projektimigratsioonita.

| ID | Silt | Vahemik | Mapper | Toetatud ressursid |
|---|---|---:|---|---|
| `video.opacity` | Opacity | `0…1` | linear | video, image |
| `audio.mainLevel` | Volume | `0…2` | perceptual | video, audio |
| `audio.pan` | Pan | `-1…1` | equalPower | video, audio |

## Opacity

`0` on läbipaistev ja `1` täielikult nähtav. See väärtus korrutatakse faili
enda alfaga.

## Volume

`0` on vaikus, `1` nominaaltase ja `2` kuni kahekordne lineaarvõimendus.
Transition kasutab tajupõhist ehk dB-valdkonna mapper'it. Master-limiter kaitseb
summa tippu, kuid ei asenda korrektset gain staging'ut.

## Pan

`-1` on vasak, `0` keskel ja `1` parem. Interpolatsioon kasutab equal-power
pan-kurvi.

## Ressursi- ja cue-tasand

Showmesh hoiab eraldi ressursi faderit ja cue playback trimmi:

```text
lõplik opacity = resource opacity × cue opacity
lõplik volume  = resource volume  × cue volume
lõplik pan     = clamp(resource pan + cue pan, -1, 1)
```

Aadressid:

```text
/resource/{resource-id}/opacity
/resource/{resource-id}/volume
/resource/{resource-id}/pan

/cue/{cue-id}/opacity
/cue/{cue-id}/volume
/cue/{cue-id}/pan
```

OSC välisjuhtimine toetab selles harus otse `/resource/...` numbrilisi
aadresse. Cue action'id kirjutavad tavaliselt `/cue/...` trimmi.

::: tip Veaotsing
Kui cue on ootamatult vaikne või läbipaistev, kontrolli mõlemat tasandit.
Ressursifader ja cue-trimm korrutatakse, seega null kummalgi tasandil annab
lõpptulemuseks nulli.
:::
