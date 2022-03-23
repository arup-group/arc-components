import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import type ArcSSO from './ArcSSO.js';
import './arc-sso.js';
import '../button/arc-button.js';

export default {
  title: 'Components/ArcSSO',
  component: 'arc-sso',
  parameters: {
    actions: {
      handles: [ARC_EVENTS.auth],
    },
  },
} as Meta;

const Template: Story<ArcSSO> = ({ clientId, tenantId, redirectUri }) => html`
  <arc-sso
    slot="user"
    client-id=${ifDefined(clientId || undefined)}
    tenant-id=${ifDefined(tenantId || undefined)}
    redirect-uri=${ifDefined(redirectUri || undefined)}
  >
    <arc-button slot="login" type="tab" onClick="this.parentElement.signIn()">SignIn</arc-button>
    <arc-button slot="logout" type="tab" onClick="localStorage.clear(); location.reload();">SignOut</arc-button>
  </arc-sso>
`;

export const Default = Template.bind({});
Default.args = {
  clientId: 'b4a4c03f-4915-42db-aa79-d49a650974c2',
  tenantId: '4ae48b41-0137-4599-8661-fc641fe77bea',
  redirectUri: window.location.hostname === 'localhost' ? 'http://localhost:9009/' : 'https://arc.arup.com/',
  scopes: '',
};
