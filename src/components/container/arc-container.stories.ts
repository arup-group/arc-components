import { html, TemplateResult } from 'lit';
import './arc-container.js';
import '../navbar/arc-navbar.js';
import '../button/arc-button.js';

export default {
  title: 'Container',
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
    bottomHeight: {
      name: '--bottom-height',
      type: { required: false },
      description: 'Set the height of the default bottom bar',
      defaultValue: { summary: '3.5rem' },
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
  theme: string;
  bottomHeight: string;
}

const Template: Story<ArgTypes> = ({ theme, bottomHeight }: ArgTypes) => html`
  <arc-container
    .theme=${theme}
    style="--bottom-height:${bottomHeight}"
  >
    <arc-navbar slot='nav' logo='http://localhost:8000/assets/arc-red.svg'>
      <span slot='name'>WebComponents</span>
      <arc-button type='tab'>Link 1</arc-button>
      <arc-button type='tab'>Link 2</arc-button>
      <arc-button type='tab'>Link 3</arc-button>
    </arc-navbar>
    <arc-sidebar slot="side" style='width: 23rem;'>SIDEBAR</arc-sidebar>
    <arc-content slot="content">CONTENT</arc-content>
  </arc-container>
`;

export const ArcContainer = Template.bind({});
ArcContainer.args = {
  theme: 'auto',
  bottomHeight: '3.5rem',
};
