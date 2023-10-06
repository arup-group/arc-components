import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-root')
export class App extends LitElement {
  render() {
    return html`<arc-container>
      <arc-navbar slot="nav" logo="assets/arc-red.svg" tabs="0">
        <span slot="name">ARC Playground</span>

        <arc-icon-button label="Home" name="home"></arc-icon-button>
        <arc-icon-button label="Settings" name="settings"></arc-icon-button>

        <arc-sso
          slot="user"
          client-id="b4a4c03f-4915-42db-aa79-d49a650974c2"
          tenant-id="4ae48b41-0137-4599-8661-fc641fe77bea"
        ></arc-sso>
      </arc-navbar>

      <section id="playground"></section>
    </arc-container>`;
  }
}

const foo = '';
