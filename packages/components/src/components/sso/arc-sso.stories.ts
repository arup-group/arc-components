import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import type ArcSSO from './ArcSSO.js';
import './arc-sso.js';
import '../button/arc-button.js';

export default {
  title: 'Components/ArcSSO',
  component: 'arc-sso',
} as Meta;

export const Default: StoryFn<ArcSSO> = ({}) => html`
<arc-container>
  <arc-navbar slot="nav">
    <arc-sso
      slot="user"
      clientId="b4a4c03f-4915-42db-aa79-d49a650974c2"
      tenantId="4ae48b41-0137-4599-8661-fc641fe77bea"
      redirectUri:
    window.location.hostname === 'localhost'
      ? 'http://localhost:4200/'
      : 'https://arc.arup.com/',
    ></arc-s
    ></arc-sso>
  </arc-navbar>
</arc-container>
`;

