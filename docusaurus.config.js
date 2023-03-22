// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "EZ PR Bot",
  tagline: "Accelerate your team's PR review process",
  favicon: "img/favicon.ico",
  url: "https://ezprbot.com",
  baseUrl: "/",
  organizationName: "jcserv", // Usually your GitHub org/user name.
  projectName: "ezprbot.com", // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/jcserv/ezprbot.com/tree/main/docs",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/jcserv/ezprbot.com/tree/main/blog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: 'openapi/ez-pr-bot.yml',
            route: '/api/',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo.png",
      navbar: {
        title: "EZ PR Bot",
        logo: {
          alt: "EZ PR Bot Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "right" },
          {
            label: "Add to Slack",
            to: "https://api.ezprbot.com/slack/install",
            position: "right",
            className: "button button--secondary button--md",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Product",
            items: [
              {
                label: "Features",
                to: "/docs/category/features",
              },
              {
                label: "Commands",
                to: "/docs/commands",
              },
            ],
          },
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/intro",
              },
              {
                label: "API Reference",
                to: "/api",
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
                href: "https://github.com/jcserv/ez-pr-bot",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EZ PR Bot, Inc. <br/>Made with 💙 (and Docusaurus) by Jarrod Servilla.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
