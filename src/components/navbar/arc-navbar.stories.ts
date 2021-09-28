import { html, TemplateResult } from 'lit';
import './arc-navbar.js';
import '../button/arc-button.js';

export default {
  title: 'Navbar',
  component: 'arc-navbar',
  argTypes: {
    arup: {
      type: { required: false },
      description: 'Show/hide the Arup logo',
      defaultValue: { summary: 'true' },
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        category: 'Properties',
      }
    },
    logo: {
      type: { required: false },
      description: 'The url for the logo of the application',
      defaultValue: { summary: 'undefined' },
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        category: 'Properties',
      },
    },
    tabs: {
      type: { required: false },
      description: 'The amount of tabs allowed before collapsing into a dropdown',
      defaultValue: { summary: 5 },
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        category: 'Properties',
      },
    },
    appName: {
      name: 'name',
      type: { required: false },
      description: 'The navbar\'s sub-branding',
      control: { type: null },
      table: {
        category: 'Slots',
      },
    },
    default: {
      name: '(default)',
      type: { required: false },
      description: 'The navbar\'s content',
      control: { type: null },
      table: {
        category: 'Slots',
      },
    },
    height: {
      name: '--height',
      type: { required: false },
      description: 'Set the height of navbar',
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
  arup: boolean;
  logo: string;
  tabs: number;
  height: string;
}

const Template: Story<ArgTypes> = ({ arup, logo, tabs, height }: ArgTypes) => html`
  <arc-navbar style='--height: ${height}' arup='${arup}' logo='${logo}' tabs='${tabs}'>
    <span slot='name'>Sub Branding</span>
    <arc-button type='tab'>Link 1</arc-button>
    <arc-button type='tab'>Link 2</arc-button>
    <arc-button type='tab'>Link 3</arc-button>
  </arc-navbar>
`;

export const ArcNavbar = Template.bind({});
ArcNavbar.args = {
  arup: true,
  logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg',
  tabs: 5,
  height: '3.5rem',
};

