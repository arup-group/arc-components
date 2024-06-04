import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  documentation: [
    {
      type: 'category',
      label: 'Documentation',
      items: [
        'introduction',
        'accessibility',
        'user-interfce',
        'color-and-themes',
        'typography',
        'iconography',
        'cli',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/getting-started',
        'guides/iconography',
        'guides/forms',
        'guides/fouc',
        'guides/ssr',
        'guides/playgrounds',
      ],
    },
  ],
};

export default sidebars;
