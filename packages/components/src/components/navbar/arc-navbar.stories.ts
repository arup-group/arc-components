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
  <arc-container>
    <arc-navbar
      slot="nav"
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
      <arc-sso
        slot="user"
        client-id="b4a4c03f-4915-42db-aa79-d49a650974c2"
        tenant-id="4ae48b41-0137-4599-8661-fc641fe77bea"
        redirect-uri=${
          window.location.hostname === 'localhost'
            ? 'http://localhost:9009/'
            : 'https://arc.arup.com/'
        }
      ></arc-sso>
     </arc-container>
 </arc-navbar>
`;

const defaultArgs = {
  arup: true,
  home: '/',
  logo: '/arc-red.svg',
  tabs: 5,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
