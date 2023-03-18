// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

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
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "EZ PR Bot",
        logo: {
          alt: "EZ PR Bot Logo",
          src: "img/logo.svg",
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
            to: "https://slack.com/oauth/v2/authorize?scope=app_mentions%3Aread%2Cchannels%3Ajoin%2Cchannels%3Ahistory%2Cchat%3Awrite%2Cchat%3Awrite.public%2Ccommands%2Cemoji%3Aread%2Cim%3Awrite%2Creactions%3Aread%2Creactions%3Awrite%2Cusers%3Aread%2Cusergroups%3Aread%2Cworkflow.steps%3Aexecute&amp;user_scope=&amp;redirect_uri=https%3A%2F%2Fapi.ezprbot.com%2Fslack%2Foauth_redirect&amp;client_id=4605520153728.4567294168359",
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
                to: "/docs/category/commands",
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
