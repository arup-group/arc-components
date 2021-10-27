import { html, TemplateResult } from 'lit';
import '../container/arc-container.js';
import './arc-navbar.js';
import '../button/arc-button.js';

export default {
  title: 'ArcNavbar',
  component: 'arc-navbar',
  argTypes: {
    arup: {
      type: { required: false },
      description: 'Show/hide the Arup logo',
      defaultValue: { summary: 'true' },
      control: { type: 'boolean' },
    },
    logo: {
      type: { required: false },
      description: 'The url for the logo of the application',
      defaultValue: { summary: 'undefined' },
      control: { type: 'text' },
    },
    tabs: {
      type: { required: false },
      description: 'The amount of tabs allowed before collapsing into a dropdown',
      defaultValue: { summary: 5 },
      control: { type: 'number' },
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  arup: boolean;
  subBranding: string;
  tabs: number;
  height: string;
}

const Template: Story<ArgTypes> = ({ arup, subBranding, tabs, height }: ArgTypes) => html`
  <arc-navbar slot="nav" style="height: ${height}" arup="${arup}" tabs="${tabs}">
    <span slot="name">${subBranding}</span>
    <arc-button type="tab">Link 1</arc-button>
    <arc-button type="tab">Link 2</arc-button>
    <arc-button type="tab">Link 3</arc-button>
  </arc-navbar>
`;

export const Default = Template.bind({});
Default.args = {
  arup: true,
  subBranding: 'Web Components',
  tabs: 5,
  height: 'var(--arc-navbar-height)',
};
