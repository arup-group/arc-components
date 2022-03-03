import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import ArcNavbar from './ArcNavbar.js';

export default {
  title: 'Components/ArcNavbar',
  component: ArcNavbar.tag,
} as Meta;

const Template: Story<ArcNavbar> = ({ arup, home, logo, tabs }) => html`
  <arc-navbar
    slot="nav"
    home=${ifDefined(home || undefined)}
    logo=${ifDefined(logo || undefined)}
    tabs=${ifDefined(tabs || undefined)}
    arup="${arup}"
  >
    <span slot="name">Web Components</span>
    <arc-button type="tab">Menu</arc-button>
    <arc-button type="tab">User</arc-button>
    <arc-button type="tab">Map</arc-button>
    <arc-button type="tab">Other</arc-button>
    <arc-button slot="user" type="tab">username@arup.com</arc-button>
  </arc-navbar>
`;

export const Default = Template.bind({});
Default.args = {
  arup: true,
  home: '/',
  logo: `/arc-red.svg`,
  tabs: 5,
};
