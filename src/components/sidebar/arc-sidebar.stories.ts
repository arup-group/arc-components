import { html, TemplateResult } from 'lit';
import '../container/arc-container.js';
import './arc-sidebar.js';

export default {
  title: 'Sidebar',
  component: 'arc-sidebar',
  argTypes: {
    default: {
      name: '(default)',
      type: { required: false },
      description: 'The sidebar\'s content',
      control: { type: null },
      table: {
        category: 'Slots',
      },
    },
    gap: {
      name: '--gap-distance',
      type: { required: false },
      description: 'Set the distance between sidebar elements',
      defaultValue: { summary: 'var(--arc-spacing-normal)' },
      control: { type: 'text' },
      table: {
        category: 'CSS Parts',
      },
    },
    width: {
      name: 'width',
      type: { required: false },
      description: 'Set the width of the sidebar',
      defaultValue: { summary: 'clamp(15rem, 30%, var(--arc-sidebar-width))' },
      control: { type: 'text' },
      table: {
        category: 'CSS Parts',
      },
    }
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  gap: string;
  width: string;
}

const Template: Story<ArgTypes> = ({ gap, width }: ArgTypes) => html`
  <arc-sidebar slot='side' style='--gap-distance:${gap}; width: ${width}'>
    <div>Some content</div>
    <div>Some more content</div>
    <div>
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </div>
  </arc-sidebar>
`;

export const ArcSidebar = Template.bind({});
ArcSidebar.args = {
  gap: 'var(--arc-spacing-normal)',
  width: 'clamp(15rem, 30%, var(--arc-sidebar-width))',
};

