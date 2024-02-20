import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { when } from 'lit/directives/when.js';
import { CONTAINER_THEMES } from './constants/ContainerConstants.js';
import type ArcContainer from './ArcContainer.js';
import './arc-container.js';
import '../navbar/arc-navbar.js';
import '../button/arc-button.js';
import '../sidebar/arc-sidebar.js';
type S = Story<ArcContainer>;

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

export const Default: S = ({ theme, fullscreen }) => html`
  <arc-container theme="${theme}" ?fullscreen="${fullscreen}">
    <arc-navbar slot="nav" logo="/arc-red.svg">
      <span slot="name">WebComponents</span>
      <arc-button type="tab">Link 1</arc-button>
      <arc-button type="tab">Link 2</arc-button>
      <arc-button type="tab">Link 3</arc-button>
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

Default.args = { theme: CONTAINER_THEMES.auto, fullscreen: false };

export const Fullscreen: S = Default.bind({});

export const ListenToAccessiblityChanges: S = Default.bind({});
