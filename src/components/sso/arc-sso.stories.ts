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
  <arc-container
    @arc-auth=${(e: CustomEvent) => {
      const { authenticated, account } = e.detail;
      const content = document.getElementById('myContent');
      content!.innerHTML = `${authenticated ? `Welcome ${account.name}!` : 'You are not logged in.'}`;
    }}>
    <arc-navbar slot='nav'>
      <arc-sso
        .client-id="${clientId}"
        .tenant-id="${tenantId}"
        .redirect-uri="${redirectUri}"
        scopes="${scopes}"
      >
        <arc-button slot='login' type='tab' color='success' onClick='this.parentElement.signIn()'>SignIn</arc-button>
        <arc-button slot='logout' type='tab' color='error' onClick='localStorage.clear(); location.reload();'>SignOut</arc-button>
      </arc-sso>
    </arc-navbar>
    <div id='myContent'></div>
  </arc-container>


  <div style='padding: var(--arc-spacing-medium)'>
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

Default.args = { ...defaultArgs };

