import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { when } from 'lit/directives/when.js';
import { CONTAINER_THEMES } from './constants/ContainerConstants.js';
import type ArcContainer from './ArcContainer.js';
import './arc-container.js';
import '../navbar/arc-navbar.js';
import '../button/arc-button.js';
import '../sidebar/arc-sidebar.js';

export default {
  title: 'Components/ArcContainer',
  component: 'arc-container',
  argTypes: {
    theme: {
      control: 'select',
      options: Object.values(CONTAINER_THEMES),
    },
  },
} as Meta;

const Template: Story<ArcContainer> = ({ theme, fullscreen }) => html`
  <arc-container theme="${theme}" ?fullscreen="${fullscreen}">
    <arc-navbar slot="nav" logo="/arc-red.svg">
      <span slot="name">WebComponents</span>
      <arc-button type="tab">Link 1</arc-button>
      <arc-button type="tab">Link 2</arc-button>
      <arc-button type="tab">Link 3</arc-button>
      <arc-sso
        slot="user"
        client-id="b4a4c03f-4915-42db-aa79-d49a650974c2"
        tenant-id="4ae48b41-0137-4599-8661-fc641fe77bea"
        redirect-uri=${window.location.hostname === 'localhost'
          ? 'http://localhost:9009/'
          : 'https://arc.arup.com/'}
      ></arc-sso>
    </arc-navbar>
    ${when(
      !fullscreen,
      () => html`
        <arc-sidebar slot="side">
          <div></div>
        </arc-sidebar>
      `,
    )}
    <div style="padding: var(--arc-spacing-normal)">
      <p>The default logoutRedirect method does not work within an iframe.</p>
      <p>
        To work around this behaviour, use the 'logout button' below to sign out
        instead.
      </p>

      <arc-button
        style="justify-self: flex-start"
        onClick="localStorage.clear(); location.reload();"
        >Logout</arc-button
      >
    </div>
  </arc-container>
`;

export const Container = Template.bind({});
Container.args = { theme: CONTAINER_THEMES.auto, fullscreen: false };
