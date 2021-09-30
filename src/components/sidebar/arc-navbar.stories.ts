import { html, TemplateResult } from 'lit';
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
    distance: {
      name: 'width',
      type: { required: false },
      description: 'Set the height of the gap',
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
  <arc-navbar style='--gap-distance:${gap}; width: ${width}'>
    <span slot='name'>Sub Branding</span>
    <arc-button type='tab'>Link 1</arc-button>
    <arc-button type='tab'>Link 2</arc-button>
    <arc-button type='tab'>Link 3</arc-button>
  </arc-navbar>
`;

export const ArcNavbar = Template.bind({});
ArcNavbar.args = {
  gap: 'var(--arc-spacing-normal)',
  width: 'clamp(15rem, 30%, var(--arc-sidebar-width))',
};

