import { html, TemplateResult } from 'lit';
import '../src/components/container/arc-container.js';
import '../src/components/navbar/arc-navbar.js';
import '../src/components/button/arc-button.js';
import '../src/components/icon-button/arc-icon-button.js';

import { getBasePath } from '../src/utilities/base-path.js';

interface Story<T> {
  (args: T): TemplateResult;

  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  arup: boolean;
  logo: string;
  name: string;
  tabs: number;
  height: string;
}

const Template: Story<ArgTypes> = ({
  arup,
  logo,
  name,
  tabs,
  height,
}: ArgTypes) => html`
  <arc-navbar
    slot="nav"
    home="/"
    logo="${logo}"
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
  logo: `${getBasePath()}/assets/arc-red.svg`,
  name: 'Web Components',
  tabs: 5,
  height: 'var(--arc-navbar-height)',
};
