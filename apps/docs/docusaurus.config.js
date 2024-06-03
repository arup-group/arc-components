// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ARC',
  tagline: 'Arup Reuable Components',
  url: 'https://arc.arup.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'arup-group',
  projectName: 'arc',
  presets: [
    [
      'classic',
      {
        docs: { sidebarPath: require.resolve('./sidebars.js') },
        theme: {
          customCss: require.resolve(
            '../../dist/packages/components/themes/docusaurus.css',
          ),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'ARC',
      logo: {
        alt: 'ARC Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Documentation',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/arup-grou/arc-components',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
