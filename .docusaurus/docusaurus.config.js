export default {
  "title": "Decoo Wiki",
  "tagline": "Decoo = Decentralized cloud storage",
  "url": "https://wiki.decoo.io",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "decooio",
  "projectName": "decoo-wiki",
  "themeConfig": {
    "navbar": {
      "title": "wiki",
      "logo": {
        "alt": "Decoo Logo",
        "src": "img/logo.svg"
      },
      "hideOnScroll": false,
      "items": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": true,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/eericxu/work/decoo-wiki/sidebars.js",
          "routeBasePath": "/",
          "editUrl": "https://github.com/decooio/decoo-wiki/edit/main/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/decooio/decoo-wiki/edit/main/"
        },
        "theme": {
          "customCss": "/Users/eericxu/work/decoo-wiki/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};