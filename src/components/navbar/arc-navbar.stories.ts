import { html, TemplateResult } from 'lit';

import { getBasePath } from '../../utilities/base-path.js';

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  arup?: boolean;
  logo?: string;
  name?: string;
  tabs?: number;
  height?: string;
}

const Template: Story<ArgTypes> = ({ arup, logo, name, tabs, height }: ArgTypes) => html`
  <arc-navbar slot="nav" home="/" logo="${logo}" arup="${arup}" .tabs=${tabs} style="height: ${height}"
    >${name ? html`<span slot="name">${name}</span>` : null}
    <arc-button type="tab">Menu</arc-button>
    <arc-button type="tab">User</arc-button>
    <arc-button type="tab">Map</arc-button>
    <arc-button type="tab">Other</arc-button>
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
