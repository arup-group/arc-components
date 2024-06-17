import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  documentation: [
    {
      type: 'category',
      label: 'Documentation',
      items: [
        'introduction',
        'accessibility',
        'sustainability',
        'user-interface',
        'color-and-themes',
        'content',
        'typography',
        'iconography',
        'cli',
      ],
    },
    {
      type: 'category',
      label: 'Designer Guides',
      items: ['design-guides/getting-started'],
    },
    {
      type: 'category',
      label: 'Developer Guides',
      items: [
        'dev-guides/getting-started',
        'dev-guides/color-and-themes',
        'dev-guides/accessibility',
        'dev-guides/forms',
        'dev-guides/iconography',
        'dev-guides/ssr',
        'dev-guides/typescript',
        'dev-guides/docusaurus',
      ],
    },
  ],
};

export default sidebars;
