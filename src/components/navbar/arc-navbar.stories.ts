import { html, TemplateResult } from 'lit';
import '../container/arc-container.js';
import './arc-navbar.js';
import '../button/arc-button.js';
import '../icon-button/arc-icon-button.js';

import { getBasePath } from '../../utilities/base-path.js';

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
      description:
        'The amount of tabs allowed before collapsing into a dropdown',
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
  name: string;
  tabs: number;
  height: string;
}

const Template: Story<ArgTypes> = ({
  arup,
  name,
  tabs,
  height,
}: ArgTypes) => html`
  <arc-navbar
    slot="nav"
    logo="${getBasePath()}/assets/arc-red.svg"
    style="height: ${height}"
    arup="${arup}"
    tabs="${tabs}"
    >${name ? html`<span slot="name">${name}</span>` : null}
    <arc-icon-button name="home" label="Back to home"></arc-icon-button>
    <arc-icon-button name="settings" label="Change settings"></arc-icon-button>
    <arc-button type="tab">username@arup.com</arc-button>
  </arc-navbar>
`;

export const Default = Template.bind({});
Default.args = {
  arup: true,
  name: 'Web Components',
  tabs: 5,
  height: 'var(--arc-navbar-height)',
};
