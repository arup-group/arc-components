import { html, TemplateResult } from 'lit';

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  clientId: string,
  tenantId: string,
  redirectUri: string,
  scopes?: string
}

const Template: Story<ArgTypes> = ({ clientId, tenantId, redirectUri, scopes }: ArgTypes) => html`
  <div style='padding: var(--arc-spacing-medium)'>
    ${clientId && !tenantId ? html`
      <arc-sso
        client-id="${clientId}"
        scopes="${scopes}"
        redirect-uri="${redirectUri}"
      ></arc-sso>
    ` : (clientId && tenantId ? html`
      <arc-sso
        client-id="${clientId}"
        tenant-id="${tenantId}"
        redirect-uri="${redirectUri}"
        scopes="${scopes}"
      ></arc-sso>
    ` : html`
      <p>Client-id missing</p>
    `)}
    <p>Pressing the Logout button will throw an error because the Canvas is displayed within an iFrame.</p>
    <p>Refresh the page or navigate elsewhere and return here, to log back in.</p>
  </div>
`;

const CustomTemplate: Story<ArgTypes> = ({ clientId, tenantId, redirectUri, scopes }: ArgTypes) => html`
  <div style='padding: var(--arc-spacing-medium)'>
    ${clientId && !tenantId ? html`
      <arc-sso
        client-id="${clientId}"
        scopes="${scopes}"
        redirect-uri="${redirectUri}"
      >
        <arc-button slot='login' type='outlined' color='success' onClick='this.parentElement.signIn()'>Custom signIn button</arc-button>
        <arc-button slot='logout' type='outlined' color='error' onClick='this.parentElement.signOut()'>Custom signOut button</arc-button>
      </arc-sso>
    ` : (clientId && tenantId ? html`
      <arc-sso
        client-id="${clientId}"
        tenant-id="${tenantId}"
        redirect-uri="${redirectUri}"
        scopes="${scopes}"
      >
        <arc-button slot='login' type='outlined' color='success' onClick='this.parentElement.signIn()'>Custom signIn button</arc-button>
        <arc-button slot='logout' type='outlined' color='error' onClick='this.parentElement.signOut()'>Custom signOut button</arc-button>
      </arc-sso>
    ` : html`
      <p>Client-id missing</p>
    `)}
    <p>Pressing the Logout button will throw an error because the Canvas is displayed within an iFrame.</p>
    <p>Refresh the page or navigate elsewhere and return here, to log back in.</p>
  </div>
`;

const defaultArgs: ArgTypes = {
  clientId: 'b4a4c03f-4915-42db-aa79-d49a650974c2',
  tenantId: '4ae48b41-0137-4599-8661-fc641fe77bea',
  redirectUri: window.location.hostname === 'localhost' ? 'http://localhost:8000/' : 'https://arc.arup.com/',
  scopes: ''
};

/* TYPES */
export const Default = Template.bind({});
export const Custom = CustomTemplate.bind({});

Default.args = { ...defaultArgs };
Custom.args = { ...defaultArgs };

