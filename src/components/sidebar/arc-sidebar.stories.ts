import { html, TemplateResult } from 'lit';
import '../container/arc-container.js';
import './arc-sidebar.js';

const arcLogo = new URL('../../../../assets/arc-red.svg', import.meta.url).href;

export default {
  title: 'ArcSidebar',
  component: 'arc-sidebar',
  argTypes: {
    gap: {
      name: '--gap-distance',
      type: { required: false },
      description: 'Set the distance between sidebar elements',
      defaultValue: { summary: 'var(--arc-spacing-normal)' },
      control: { type: 'text' },
      table: {
        category: 'CSS Variables',
      },
    },
    width: {
      name: '--sidebar-width',
      type: { required: false },
      description: 'Set the width of the sidebar',
      defaultValue: { summary: 'clamp(15rem, 30%, var(--arc-sidebar-width))' },
      control: { type: 'text' },
      table: {
        category: 'CSS Variables',
      },
    }
  },
  parameters: {
    actions: {
      handles: ['arc-show', 'arc-hide'],
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  gap: string,
  width: string,
}

const Template: Story<ArgTypes> = ({ gap, width }: ArgTypes) => html`
  <arc-container>
    <arc-navbar slot='nav' .logo='${arcLogo}'></arc-navbar>
    <arc-sidebar slot="side" style='--gap-distance: ${gap}; --sidebar-width: ${width}'>
      <div>Side block 1</div>
      <div>Side block 2</div>
    </arc-sidebar>
  </arc-container>
`;

export const Default = Template.bind({});
Default.args = {
  gap: 'var(--arc-spacing-normal)',
  width: 'clamp(15rem, 30%, var(--arc-sidebar-width))',
};

