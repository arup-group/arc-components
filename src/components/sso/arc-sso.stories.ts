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

const Template: Story<ArgTypes> = ({ clientId, tenantId, redirectUri }: ArgTypes) => html`
  <arc-container
    @arc-auth=${(e: CustomEvent) => {
      const { authenticated, account } = e.detail;
      const content = document.getElementById('myContent');
      content!.innerHTML = `${authenticated ? `Welcome ${account.name}!` : 'You are not logged in.'}`;
    }}>
    <arc-navbar slot='nav'>
      ${clientId ? html`
        ${redirectUri ? html`
          ${tenantId ? html`
            <arc-sso slot='user' client-id="${clientId}" tenant-id="${tenantId}" redirect-uri="${redirectUri}">
              <arc-button slot='login' type='tab' color='success' onClick='this.parentElement.signIn()'>SignIn</arc-button>
              <arc-button slot='logout' type='tab' color='error' onClick='localStorage.clear(); location.reload();'>SignOut</arc-button>
            </arc-sso>
          ` : html`
            <arc-sso slot='user' client-id="${clientId}" redirect-uri="${redirectUri}">
              <arc-button slot='login' type='tab' color='success' onClick='this.parentElement.signIn()'>SignIn</arc-button>
              <arc-button slot='logout' type='tab' color='error' onClick='localStorage.clear(); location.reload();'>SignOut</arc-button>
            </arc-sso>
          `}
        ` : html`
          <arc-button type='tab' disabled>Redirect-uri missing</arc-button>
        `}
      ` : html`
        <arc-button type='tab' disabled>Client-id missing</arc-button>
      `}
    </arc-navbar>
    <div id='myContent'></div>
  </arc-container>
`;

const defaultArgs: ArgTypes = {
  clientId: 'b4a4c03f-4915-42db-aa79-d49a650974c2',
  tenantId: '4ae48b41-0137-4599-8661-fc641fe77bea',
  redirectUri: window.location.hostname === 'localhost' ? 'http://localhost:8000/' : 'https://arc.arup.com/',
  scopes: ''
};

/* TYPES */
export const Default = Template.bind({});

Default.args = { ...defaultArgs };

