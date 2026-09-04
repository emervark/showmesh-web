import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vitepress";

const SITE = "https://manual.showmesh.app";

/** Every manual page as { url, title, summary, body }, English first. */
function collectPages(srcDir: string) {
  const files: string[] = [];
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== "node_modules" && !entry.name.startsWith(".")) walk(full);
      } else if (entry.name.endsWith(".md") && entry.name !== "readme.md") {
        files.push(full);
      }
    }
  };
  walk(srcDir);

  return files
    .map((file) => {
      const rel = path.relative(srcDir, file).split(path.sep).join("/");
      const url = SITE + "/" + rel.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, "");
      // Strip frontmatter, then take the first heading as title and the first
      // ordinary paragraph as the one-line summary.
      const source = fs.readFileSync(file, "utf8");
      const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/)?.[1] ?? "";
      const raw = source.slice(source.indexOf("---") === 0 ? frontmatter.length + 8 : 0);
      // Home pages use the `hero:` layout and carry no `#` heading, so fall
      // back to the frontmatter title or hero name before the file path.
      const title =
        raw.match(/^#\s+(.+)$/m)?.[1].trim() ??
        frontmatter.match(/^\s*(?:name|title|text):\s*["']?(.+?)["']?\s*$/m)?.[1] ??
        rel;
      const summary = raw
        .split(/\r?\n\r?\n/)
        .map((block) => block.trim())
        .find((block) => block && !/^[#>:|\-*<]|^\d+\.|^```/.test(block))
        ?.replace(/\s+/g, " ")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/:$/, ".");
      return { rel, url, title, summary, body: raw.trim() };
    })
    .sort((a, b) => {
      // English before Estonian, then the manual's own reading order, then
      // section overviews (index.md) before the pages inside them.
      // The two locales have different slugs — English pages moved to English
      // URLs — so the reading order is listed per locale rather than shared.
      const ORDER = [
        ["", "introduction", "getting-started", "learn", "workflows", "reference", "manual"],
        ["", "sissejuhatus", "alustamine", "oppimine", "toovood", "viited", "manuaal"]
      ];
      const locale = (p: string) => (p.startsWith("et/") ? 1 : 0);
      const parts = (p: string) => p.replace(/^et\//, "").split("/");
      const chapter = (p: string) => {
        const order = ORDER[locale(p)];
        const segments = parts(p);
        const rank = order.indexOf(segments.length > 1 ? segments[0] : "");
        return rank === -1 ? order.length : rank;
      };
      const isOverview = (p: string) => (parts(p).at(-1) === "index.md" ? 0 : 1);
      return (
        locale(a.rel) - locale(b.rel) ||
        chapter(a.rel) - chapter(b.rel) ||
        isOverview(a.rel) - isOverview(b.rel) ||
        a.rel.localeCompare(b.rel)
      );
    });
}

/**
 * Write /llms.txt (a link index following the llmstxt.org convention) and
 * /llms-full.txt (every page's markdown in one file) so language models can
 * read the manual without crawling and parsing the rendered HTML.
 */
function writeLlmsFiles(srcDir: string, outDir: string) {
  const pages = collectPages(srcDir);
  const section = (pages: ReturnType<typeof collectPages>) =>
    pages
      .map((p) => `- [${p.title}](${p.url})${p.summary ? `: ${p.summary}` : ""}`)
      .join("\n");
  const en = pages.filter((p) => !p.rel.startsWith("et/"));
  const et = pages.filter((p) => p.rel.startsWith("et/"));

  const index = `# Showmesh Manual

> Operator and system-setup manual for Showmesh, a Windows-first realtime show
> automation application for theatres, concerts, immersive installations and
> live events. Showmesh is in beta and is developed by VFX OÜ. English is served
> at the root and Estonian under /et/.

The product site is at https://showmesh.app and its own index at
https://showmesh.app/llms.txt. The complete manual as a single markdown file is
at ${SITE}/llms-full.txt.

## Manual (English)

${section(en)}

## Manuaal (eesti keeles)

${section(et)}
`;

  const full = `# Showmesh Manual — complete text

Source: ${SITE}
This file contains every manual page as markdown, English first, then Estonian.

${pages.map((p) => `\n---\n\n<!-- ${p.url} -->\n\n${p.body}\n`).join("\n")}`;

  fs.writeFileSync(path.join(outDir, "llms.txt"), index, "utf8");
  fs.writeFileSync(path.join(outDir, "llms-full.txt"), full, "utf8");
}

const sharedTheme = {
  logo: { src: "/logo.svg", alt: "Showmesh" },
  siteTitle: "Showmesh Manual",
  externalLinkIcon: true,
  socialLinks: [
    { icon: "github", link: "https://github.com/emervark/Showmesh" }
  ],
  i18nRouting: true
};

const etTheme = {
  ...sharedTheme,
  nav: [
    { text: "Alustamine", link: "/et/alustamine/" },
    { text: "Õppimine", link: "/et/oppimine/" },
    { text: "Töövood", link: "/et/toovood/" },
    { text: "Viited", link: "/et/viited/" },
    { text: "Manuaali arendamine", link: "/et/manuaal/kaastoo" }
  ],
  sidebar: [
    {
      text: "Sissejuhatus",
      items: [
        { text: "Mis on Showmesh?", link: "/et/sissejuhatus/" },
        { text: "Võimalused ja piirangud", link: "/et/sissejuhatus/voimalused" }
      ]
    },
    {
      text: "Alustamine",
      collapsed: false,
      items: [
        { text: "Ülevaade", link: "/et/alustamine/" },
        { text: "Paigaldamine ja käivitamine", link: "/et/alustamine/paigaldamine" },
        { text: "Kasutajaliides", link: "/et/alustamine/kasutajaliides" },
        { text: "Esimene show", link: "/et/alustamine/esimene-show" }
      ]
    },
    {
      text: "Õppimine",
      collapsed: false,
      items: [
        { text: "Ülevaade", link: "/et/oppimine/" },
        { text: "Cue'd ja cue-list", link: "/et/oppimine/cued" },
        { text: "Action'id ja triggerid", link: "/et/oppimine/actionid-ja-triggerid" },
        { text: "Üleminekud", link: "/et/oppimine/uleminekud" },
        { text: "Kihid ja komposiit", link: "/et/oppimine/kihid" }
      ]
    },
    {
      text: "Töövood",
      collapsed: false,
      items: [
        { text: "Ülevaade", link: "/et/toovood/" },
        { text: "Show ettevalmistamine", link: "/et/toovood/show-ettevalmistamine" },
        { text: "Live-show juhtimine", link: "/et/toovood/live-show" },
        { text: "Väljundid, NDI ja Spout", link: "/et/toovood/valjundid" },
        { text: "OSC ja MIDI", link: "/et/toovood/osc-midi" },
        { text: "Tõrkeotsing", link: "/et/toovood/torkeotsing" }
      ]
    },
    {
      text: "Viited",
      collapsed: true,
      items: [
        { text: "Viiteosa", link: "/et/viited/" },
        { text: "Cue-tüübid", link: "/et/viited/cue-tuubid" },
        { text: "Action'id ja triggerid", link: "/et/viited/actionid" },
        { text: "Parameetrid", link: "/et/viited/parameetrid" },
        { text: "Klaviatuuri otseteed", link: "/et/viited/otseteed" },
        { text: "Projektifail", link: "/et/viited/projektifail" },
        { text: "Mõisted", link: "/et/viited/moisted" }
      ]
    },
    {
      text: "Manuaal",
      collapsed: true,
      items: [
        { text: "Kuidas manuaali täiendada", link: "/et/manuaal/kaastoo" },
        { text: "Sisu olek", link: "/et/manuaal/sisu-olek" }
      ]
    }
  ],
  outline: { level: [2, 3] as [number, number], label: "Sellel lehel" },
  docFooter: { prev: "Eelmine", next: "Järgmine" },
  lastUpdated: { text: "Viimati uuendatud" },
  darkModeSwitchLabel: "Välimus",
  sidebarMenuLabel: "Menüü",
  returnToTopLabel: "Tagasi üles",
  langMenuLabel: "Muuda keelt",
  footer: {
    message: "Showmeshi manuaal · põhineb emervark/Showmesh main harul",
    copyright: "Dokumentatsiooni versioon 0.2"
  }
};

const enTheme = {
  ...sharedTheme,
  nav: [
    { text: "Getting started", link: "/getting-started/" },
    { text: "Learning", link: "/learn/" },
    { text: "Workflows", link: "/workflows/" },
    { text: "Reference", link: "/reference/" },
    { text: "Contributing", link: "/manual/contributing" }
  ],
  sidebar: [
    {
      text: "Introduction",
      items: [
        { text: "What is Showmesh?", link: "/introduction/" },
        { text: "Capabilities and limitations", link: "/introduction/capabilities" }
      ]
    },
    {
      text: "Getting started",
      collapsed: false,
      items: [
        { text: "Overview", link: "/getting-started/" },
        { text: "Install and run", link: "/getting-started/install" },
        { text: "User interface", link: "/getting-started/interface" },
        { text: "Your first show", link: "/getting-started/first-show" }
      ]
    },
    {
      text: "Learning",
      collapsed: false,
      items: [
        { text: "Overview", link: "/learn/" },
        { text: "Cues and the cue list", link: "/learn/cues" },
        { text: "Actions and triggers", link: "/learn/actions-and-triggers" },
        { text: "Transitions", link: "/learn/transitions" },
        { text: "Layers and compositing", link: "/learn/layers" }
      ]
    },
    {
      text: "Workflows",
      collapsed: false,
      items: [
        { text: "Overview", link: "/workflows/" },
        { text: "Preparing a show", link: "/workflows/preparing-a-show" },
        { text: "Running a live show", link: "/workflows/live-show" },
        { text: "Outputs, NDI, and Spout", link: "/workflows/outputs" },
        { text: "OSC and MIDI", link: "/workflows/osc-and-midi" },
        { text: "Troubleshooting", link: "/workflows/troubleshooting" }
      ]
    },
    {
      text: "Reference",
      collapsed: true,
      items: [
        { text: "Reference index", link: "/reference/" },
        { text: "Cue types", link: "/reference/cue-types" },
        { text: "Actions and triggers", link: "/reference/actions" },
        { text: "Parameters", link: "/reference/parameters" },
        { text: "Keyboard shortcuts", link: "/reference/shortcuts" },
        { text: "Project file", link: "/reference/project-file" },
        { text: "Glossary", link: "/reference/glossary" }
      ]
    },
    {
      text: "Manual",
      collapsed: true,
      items: [
        { text: "Contributing to the manual", link: "/manual/contributing" },
        { text: "Content status", link: "/manual/content-status" }
      ]
    }
  ],
  outline: { level: [2, 3] as [number, number], label: "On this page" },
  docFooter: { prev: "Previous", next: "Next" },
  lastUpdated: { text: "Last updated" },
  darkModeSwitchLabel: "Appearance",
  sidebarMenuLabel: "Menu",
  returnToTopLabel: "Return to top",
  langMenuLabel: "Change language",
  footer: {
    message: "Showmesh manual · based on emervark/Showmesh main",
    copyright: "Documentation version 0.2"
  }
};

export default defineConfig({
  base: process.env.DOCS_BASE ?? "/",
  cleanUrls: true,
  lastUpdated: true,
  // readme.md documents how to work on the manual; it is not manual content
  // and was being published at /readme and listed in the sitemap.
  srcExclude: ["readme.md"],
  sitemap: { hostname: SITE },
  buildEnd(siteConfig) {
    writeLlmsFiles(siteConfig.srcDir, siteConfig.outDir);
  },
  head: [
    ["meta", { name: "theme-color", content: "#101316" }],
    ["meta", { name: "color-scheme", content: "dark light" }],
    // Google tag (gtag.js). GT-KDQF8PWT is the loadable tag ID; it forwards to
    // its destination G-LKFYD8SLRB, the GA4 stream shared with showmesh.app.
    // VitePress navigates client-side; GA4 enhanced measurement counts those as
    // page views through its browser-history signal.
    ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=GT-KDQF8PWT" }],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GT-KDQF8PWT');`
    ]
  ],
  themeConfig: {
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: "Search", buttonAriaLabel: "Search the manual" },
              modal: {
                noResultsText: "No results found",
                resetButtonTitle: "Reset search",
                footer: {
                  selectText: "select",
                  navigateText: "navigate",
                  closeText: "close"
                }
              }
            }
          },
          et: {
            translations: {
              button: { buttonText: "Otsi", buttonAriaLabel: "Otsi manuaalist" },
              modal: {
                noResultsText: "Tulemusi ei leitud",
                resetButtonTitle: "Lähtesta otsing",
                footer: {
                  selectText: "vali",
                  navigateText: "liigu",
                  closeText: "sulge"
                }
              }
            }
          }
        }
      }
    }
  },
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      title: "Showmesh Manual",
      description: "Showmesh operator and system setup manual",
      themeConfig: enTheme
    },
    et: {
      label: "Eesti",
      lang: "et-EE",
      link: "/et/",
      title: "Showmesh Manual",
      description: "Showmeshi kasutusjuhend operaatoritele ja süsteemi seadistajatele",
      themeConfig: etTheme
    }
  },
  markdown: {
    lineNumbers: true,
    image: { lazyLoading: true }
  }
});

