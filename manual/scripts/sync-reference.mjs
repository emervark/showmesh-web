#!/usr/bin/env node
// Pull the generated reference tables out of the Showmesh repo and splice them
// into the manual pages, between the markers each page carries.
//
//   npm run sync:reference -- v0.1.0-beta.5
//
// Sync from a RELEASE TAG, not `main`: a reader of the manual is running the
// shipped build, not unreleased work. (`main` is accepted too — useful before
// the first tag that contains the fragments, and for checking ahead.)
//
// The Showmesh repo is PRIVATE, so raw.githubusercontent.com answers 404 to an
// unauthenticated request — plain curl cannot fetch these. Two transports that
// do work, tried in order:
//
//   1. A local checkout, read at the exact ref with `git show`. No network, no
//      token, and a tag is pinned precisely. Point SHOWMESH_REPO at it, or keep
//      the default sibling layout (C:\dev\showmesh next to C:\dev\showmesh-web).
//   2. `gh api`, which reuses whatever login `gh auth status` reports. Works
//      from anywhere, needs no secret of its own.
//
// Why splice rather than VitePress's `<!--@include: -->`: .vitepress/config.mts
// builds llms.txt and llms-full.txt from each page's RAW markdown, and an
// include is only resolved when VitePress renders. The AI-readable full text
// would carry the literal comment instead of the table — losing exactly the
// reference material it exists to publish. Splicing keeps every page complete
// in its source, which also makes it right on GitHub and in a diff.
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ref = process.argv[2];
if (!ref) {
  console.error("usage: npm run sync:reference -- <tag|main>   e.g. v0.1.0-beta.5");
  process.exit(64);
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const REPO = "emervark/Showmesh";
const DIR = "docs/manual/generated";
const localRepo = process.env.SHOWMESH_REPO ?? join(root, "..", "..", "showmesh");
const useLocal = existsSync(join(localRepo, ".git"));

// One fragment may appear on one page per language; one page may host several
// fragments (projektifail carries both kind tables).
const BLOCKS = [
  { id: "params",         en: "reference/parameters.md",  et: "et/viited/parameetrid.md" },
  { id: "cue-fields",     en: "reference/cue-types.md",   et: "et/viited/cue-tuubid.md" },
  { id: "resource-types", en: "reference/project-file.md", et: "et/viited/projektifail.md" },
  { id: "output-types",   en: "reference/project-file.md", et: "et/viited/projektifail.md" },
  { id: "shortcuts",      en: "reference/shortcuts.md",     et: "et/viited/otseteed.md" },
];

function grab(name) {
  const path = `${DIR}/${name}`;
  const text = useLocal
    ? execFileSync("git", ["-C", localRepo, "show", `${ref}:${path}`], { encoding: "utf8" })
    : execFileSync("gh", ["api", `repos/${REPO}/contents/${path}?ref=${ref}`,
                          "-H", "Accept: application/vnd.github.raw"], { encoding: "utf8" });
  // Drop the generator's own header comment; the page carries its own marker.
  return text.replace(/^<!--[\s\S]*?-->\s*/, "").trim();
}

function splice(file, id, body) {
  const path = join(root, file);
  const src = readFileSync(path, "utf8");
  const startAt = src.indexOf(`<!-- generated:${id} start`);
  const endAt = src.indexOf(`<!-- generated:${id} end -->`);
  if (startAt < 0 || endAt < 0) {
    // Deliberately not guessing where the table belongs: that is the page
    // author's decision, and a script inventing a position would be worse
    // than a clear failure.
    throw new Error(`${file}: missing marker generated:${id} (start and/or end)`);
  }
  const afterStart = src.indexOf("-->", startAt) + 3;
  const next = src.slice(0, afterStart) + "\n\n" + body + "\n\n" + src.slice(endAt);
  if (next === src) return false;
  writeFileSync(path, next, "utf8");
  return true;
}

console.log(useLocal ? `reading ${ref} from ${localRepo}` : `reading ${ref} via gh api (${REPO})`);
let changed = 0;
for (const b of BLOCKS) {
  if (splice(b.en, b.id, grab(`${b.id}.md`)))    { console.log(`updated ${b.en} (${b.id})`); changed++; }
  if (splice(b.et, b.id, grab(`${b.id}.et.md`))) { console.log(`updated ${b.et} (${b.id})`); changed++; }
}
console.log(changed
  ? `${changed} block(s) updated from ${ref}`
  : `already current with ${ref}`);
