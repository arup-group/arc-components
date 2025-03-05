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
        'status',
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
        'dev-guides/typescript',
        {
          type: 'category',
          label: 'Frameworks and Libraries',
          items: [
            'dev-guides/frameworks/angular',
            'dev-guides/frameworks/react',
            'dev-guides/frameworks/vue',
            'dev-guides/frameworks/svelte-kit',
          ],
        },
        {
          type: 'category',
          label: 'Serevr Side Rendering',
          items: ['dev-guides/ssr'],
        },
        'dev-guides/docusaurus',
      ],
    },
  ],
};

export default sidebars;
