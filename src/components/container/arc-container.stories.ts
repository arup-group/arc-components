import { html, TemplateResult } from 'lit';
import './arc-container.js';

export default {
  title: 'Containers',
  component: 'arc-container',
  argTypes: {
    theme: {
      type: { required: false },
      description: 'Set the theme for the container',
      defaultValue: { summary: 'auto' },
      control: { type: 'select' },
      options: ['auto', 'dark', 'light'],
      table: {
        type: { summary: 'string' },
        category: 'Properties',
      },
    },
    nav: {
      type: { required: false },
      description: 'The container navbar',
      control: { type: null },
      table: {
        category: 'Slots',
      },
    },
    side: {
      type: { required: false },
      description: 'The container sidebar',
      control: { type: null },
      table: {
        category: 'Slots',
      },
    },
    content: {
      type: { required: false },
      description: 'The container content section',
      control: { type: null },
      table: {
        category: 'Slots',
      },
    },
    bottom: {
      type: { required: false },
      description: 'The container bottombar',
      control: { type: null },
      table: {
        category: 'Slots',
      },
    },
    height: {
      name: '--navbar-height',
      type: { required: false },
      description: 'Set the base height of the navbar',
      defaultValue: { summary: '3.5rem' },
      table: {
        category: 'CSS Custom Properties',
      },
    },
    width: {
      name: '--sidebar-width',
      type: { required: false },
      description: 'Set the base width of the sidebar',
      defaultValue: { summary: '23rem' },
      table: {
        category: 'CSS Custom Properties',
      },
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  theme: string;
  height: string;
  width: string;
}

const Template: Story<ArgTypes> = ({ theme, height, width }: ArgTypes) => html`
  <arc-container
    .theme=${theme}
    style="--navbar-height:${height}; --sidebar-width:${width}"
  >
    <arc-navbar slot="nav">NAVBAR</arc-navbar>
    <arc-sidebar slot="side">SIDEBAR</arc-sidebar>
    <arc-content slot="content">CONTENT</arc-content>
  </arc-container>
`;

export const ArcContainer = Template.bind({});
ArcContainer.args = {
  theme: 'auto',
  height: '3.5rem',
  width: '23rem',
};
