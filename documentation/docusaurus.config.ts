import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ARC',
  tagline: '(ARC) Arup Reuable Components',
  favicon: 'icons/favicon_152.ico',
  organizationName: 'arup-group',
  projectName: 'arc-components',
  url: 'https://arc.arup.com',
  baseUrl: '/',
  staticDirectories: ['../assets'],
  presets: [
    [
      'classic',
      {
        docs: { sidebarPath: require.resolve('./sidebars.ts') },
        theme: {
          customCss: require.resolve(
            '../dist/packages/components/themes/docusaurus.css',
          ),
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: 'ARC Logo',
        src: 'img/favicon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'documentation',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/arup-group/arc-components',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
