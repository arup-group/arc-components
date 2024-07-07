import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-root')
export class AppComponent extends LitElement {
  render() {
    return html`


    <arc-container>
      <arc-navbar slot="nav" logo="assets/arc-red.svg">
        <span slot="name">ARC Playground</span>
      </arc-navbar>

      <section id="playground">
      </section>
    </arc-container>`;
  }
}
