import { defineConfig } from "vitepress";

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
    { text: "Getting started", link: "/alustamine/" },
    { text: "Learning", link: "/oppimine/" },
    { text: "Workflows", link: "/toovood/" },
    { text: "Reference", link: "/viited/" },
    { text: "Contributing", link: "/manuaal/kaastoo" }
  ],
  sidebar: [
    {
      text: "Introduction",
      items: [
        { text: "What is Showmesh?", link: "/sissejuhatus/" },
        { text: "Capabilities and limitations", link: "/sissejuhatus/voimalused" }
      ]
    },
    {
      text: "Getting started",
      collapsed: false,
      items: [
        { text: "Overview", link: "/alustamine/" },
        { text: "Install and run", link: "/alustamine/paigaldamine" },
        { text: "User interface", link: "/alustamine/kasutajaliides" },
        { text: "Your first show", link: "/alustamine/esimene-show" }
      ]
    },
    {
      text: "Learning",
      collapsed: false,
      items: [
        { text: "Overview", link: "/oppimine/" },
        { text: "Cues and the cue list", link: "/oppimine/cued" },
        { text: "Actions and triggers", link: "/oppimine/actionid-ja-triggerid" },
        { text: "Transitions", link: "/oppimine/uleminekud" },
        { text: "Layers and compositing", link: "/oppimine/kihid" }
      ]
    },
    {
      text: "Workflows",
      collapsed: false,
      items: [
        { text: "Overview", link: "/toovood/" },
        { text: "Preparing a show", link: "/toovood/show-ettevalmistamine" },
        { text: "Running a live show", link: "/toovood/live-show" },
        { text: "Outputs, NDI, and Spout", link: "/toovood/valjundid" },
        { text: "OSC and MIDI", link: "/toovood/osc-midi" },
        { text: "Troubleshooting", link: "/toovood/torkeotsing" }
      ]
    },
    {
      text: "Reference",
      collapsed: true,
      items: [
        { text: "Reference index", link: "/viited/" },
        { text: "Cue types", link: "/viited/cue-tuubid" },
        { text: "Actions and triggers", link: "/viited/actionid" },
        { text: "Parameters", link: "/viited/parameetrid" },
        { text: "Keyboard shortcuts", link: "/viited/otseteed" },
        { text: "Project file", link: "/viited/projektifail" },
        { text: "Glossary", link: "/viited/moisted" }
      ]
    },
    {
      text: "Manual",
      collapsed: true,
      items: [
        { text: "Contributing to the manual", link: "/manuaal/kaastoo" },
        { text: "Content status", link: "/manuaal/sisu-olek" }
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
  head: [
    ["meta", { name: "theme-color", content: "#101316" }],
    ["meta", { name: "color-scheme", content: "dark light" }]
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

