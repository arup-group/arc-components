import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import ArcSSO from './ArcSSO.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

interface ArgTypes {
  clientId: string;
  tenantId: string;
  redirectUri: string;
  scopes?: string;
}

export default {
  title: 'Components/ArcSSO',
  component: ArcSSO.tag,
  parameters: {
    actions: {
      handles: [ARC_EVENTS.auth],
    },
  },
} as Meta;

const interior = html`
  <arc-button slot="login" type="tab" onClick="this.parentElement.signIn()">SignIn</arc-button>
  <arc-button slot="logout" type="tab" onClick="localStorage.clear(); location.reload();">SignOut</arc-button>
`;

const Template: Story<ArgTypes> = ({ clientId, tenantId, redirectUri }: ArgTypes) => html`
  <arc-container
    @arc-auth=${(e: CustomEvent) => {
      const { authenticated, account } = e.detail;
      const content = document.getElementById('myContent');
      content!.innerHTML = `${authenticated ? `Welcome ${account.name}!` : 'You are not logged in.'}`;
    }}
  >
    <arc-navbar slot="nav">
      ${!clientId
        ? html`<arc-button slot="user" type="tab" disabled>Client-id missing</arc-button>`
        : html`${!redirectUri
            ? html`<arc-button slot="user" type="tab" disabled>Redirect-uri missing</arc-button>`
            : html`<arc-sso
                slot="user"
                client-id=${clientId}
                tenant-id=${ifDefined(tenantId || undefined)}
                redirect-uri=${redirectUri}
                >${interior}</arc-sso
              > `} `}
    </arc-navbar>
    <div id="myContent" style="padding: var(--arc-spacing-medium)"></div>
  </arc-container>
`;

const defaultArgs: ArgTypes = {
  clientId: 'b4a4c03f-4915-42db-aa79-d49a650974c2',
  tenantId: '4ae48b41-0137-4599-8661-fc641fe77bea',
  redirectUri: window.location.hostname === 'localhost' ? 'http://localhost:9009/' : 'https://arc.arup.com/',
  scopes: '',
};

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...defaultArgs };
