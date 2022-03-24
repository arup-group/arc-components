import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type ArcNavbar from './ArcNavbar.js';
import './arc-navbar.js';
import '../button/arc-button.js';

export default {
  title: 'Components/ArcNavbar',
  component: 'arc-navbar',
} as Meta;

const Template: Story<ArcNavbar> = ({ arup, home, logo, tabs }) => html`
  <arc-navbar
    home=${ifDefined(home || undefined)}
    logo=${ifDefined(logo || undefined)}
    tabs=${ifDefined(tabs || undefined)}
    arup=${arup}
  >
    <span slot="name">Web Components</span>
    <arc-button type="tab">Menu</arc-button>
    <arc-button type="tab">User</arc-button>
    <arc-button type="tab">Map</arc-button>
    <arc-button type="tab">Other</arc-button>
    <arc-button slot="user" type="tab">username@arup.com</arc-button>
  </arc-navbar>
`;
const HeightTemplate: Story<ArcNavbar> = () =>
  html` <arc-navbar logo="/arc-red.svg" style="height: 5rem;"></arc-navbar> `;

const defaultArgs = {
  arup: true,
  home: '/',
  logo: `/arc-red.svg`,
  tabs: 5,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const CustomHeight = HeightTemplate.bind({});
