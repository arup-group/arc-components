import { html, TemplateResult } from 'lit';
import '../../src/components/container/arc-container.js';
import '../../src/components/navbar/arc-navbar.js';
import '../../src/components/button/arc-button.js';

const arcLogo = new URL('../assets/arc-red.svg', import.meta.url).href;

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
  arup: boolean,
  logo: string,
  subBranding: string,
  tabs: number,
  height: string,
}

const Template: Story<ArgTypes> = ({ arup, logo, subBranding, tabs, height }: ArgTypes) => html`
  <arc-navbar slot='nav' style='height: ${height}' arup='${arup}' logo='${logo}' tabs='${tabs}'>
    <span slot='name'>${subBranding}</span>
    <arc-button type='tab'>Link 1</arc-button>
    <arc-button type='tab'>Link 2</arc-button>
    <arc-button type='tab'>Link 3</arc-button>
  </arc-navbar>
`;

export const Default = Template.bind({});
Default.args = {
  arup: true,
  logo: arcLogo,
  subBranding: 'Web Components',
  tabs: 5,
  height: 'var(--arc-navbar-height)',
};

