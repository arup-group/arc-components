import { Meta } from "@storybook/web-components";
import { html, TemplateResult } from 'lit';
import ArcNavbar from "./ArcNavbar.js";

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  arup?: boolean;
  home?: string;
  logo?: string;
  tabs?: number;
  height?: string;
  name?: string;
}

export default {
  title: 'Components/ArcNavbar',
  component: `${ArcNavbar.tag}`
} as Meta;

const Template: Story<ArgTypes> = ({ arup, home, logo, name, tabs, height }: ArgTypes) => html`
  <arc-navbar slot="nav" home="${home}" logo="${logo}" arup="${arup}" .tabs=${tabs} style="height: ${height}"
    >${name ? html`<span slot="name">${name}</span>` : null}
    <arc-button type="tab">Menu</arc-button>
    <arc-button type="tab">User</arc-button>
    <arc-button type="tab">Map</arc-button>
    <arc-button type="tab">Other</arc-button>
    <arc-button slot="user" type="tab">username@arup.com</arc-button>
  </arc-navbar>
`;

const defaultArgs: ArgTypes = {
  arup: true,
  home: '/',
  logo: `/arc-red.svg`,
  tabs: 5,
  height: 'var(--arc-navbar-height)',
  name: 'Web Components',
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
