// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Developer documentation_',
  tagline: 'Explore our guides and examples to integrate Health Discovery',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cgaege.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docusaurus/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cgaege', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/cgaege/docusaurus/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cgaege/docusaurus/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark'
      },
      // Replace with your project's social card
      image: 'img/health-discovery-social-card.png',
      navbar: {
        logo: {
          alt: 'Averbis Logo',
          src: 'img/averbis-logo-dark.svg',
          srcDark: 'img/averbis-logo.svg',
          height: 40
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Getting Started',
          },
          {to: '/docs/category/reference', label: 'Reference', position: 'left'},
          {to: '/blog', label: 'Releases', position: 'left'}
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Averbis Logo',
          src: 'img/averbis-logo.svg',
          href: 'https://averbis.com',
          width: 160,
          height: 51,
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Quickstart Tutorial',
                to: '/docs/category/quickstart',
              },
              {
                label: 'API Reference',
                to: '/docs/category/reference',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Averbis',
                href: 'https://averbis.ai',
              },
              {
                label: 'Blog',
                href: 'https://averbis.com/averbis-blog/',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Releases',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/averbis',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Averbis GmbH`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
