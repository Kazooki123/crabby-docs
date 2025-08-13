// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import dotenv from 'dotenv';

dotenv.config();

/** @type {import('@docusaurus/types').Config} */
const config: Config = {
  title: "Crabby",
  tagline: "Crabby the Programming Language",
  favicon: "img/favicon.ico",

  // @ts-ignore
  title: "Welcome to Crabby!",
  // @ts-ignore
  tagline: "The New Programming Language🦀",
  // @ts-ignore
  favicon: "img/crabby.png",

  // Set the production url of your site here
  url: "https://crabby-docs.vercel.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "crabby-lang", // Usually your GitHub org/user name.
  projectName: "crabby-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: ["@docusaurus/theme-live-codeblock"],

  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: 'algolia-site-verification',
        content: '10816DF3670DB02C',
      },
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/Kazooki123/crabby-docs/tree/main/docs",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/Kazooki123/crabby-docs/tree/main/docs",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }) satisfies Preset.Options,
    ],
  ],

  // HEADER
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/crabby-social-card.jpg",
      navbar: {
        title: "Crabby",
        logo: {
          alt: "Crabby Logo",
          src: "img/crabby.png",
          // @ts-ignore
          src: "img/crabby.png",
        },
        items: [
          { to: "/downloads", label: "Download", position: "left" },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          { to: "/playground", label: "Playground", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/community", label: "Community", position: "left" },
          {
            href: "https://github.com/crabby-lang/crabby",
            label: "⭐ GitHub",
            position: "right",
          },
          {
            href: "https://discord.gg/BX7uDaab",
            label: "Discord",
            position: "right",
          },
        ],
      },
      algolia : {
        appId: process.env.ALGOLIA_ID,
        apiKey: process.env.SEARCH_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        contextualSearch: true,
        searchPagePath: "search",
      },
      // FOOTER
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/docs/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/crabby",
              },
              {
                label: "Discord",
                href: "https://discord.gg/BX7uDaab",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/crabbyofficial1",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/crabby-lang/crabby",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Crabby. Built with Docusaurus and love 💖`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }) satisfies Preset.ThemeConfig,

  plugins: [
    function myPlugin(context, options) {
      return {
        name: "custom-webpack-plugin",
        configureWebpack(config, isServer, utils) {
          return {
            resolve: {
              fallback: {
                child_process: false,
                path: require.resolve("path-browserify"),
              },
            },
          };
        },
      };
    },
  ],
};

export default config;
