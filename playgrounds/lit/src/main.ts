import '@arc-web/components/themes/index.css';

import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@arc-web/components/src/components/container/arc-container';

@customElement('app-root')
export class AppComponent extends LitElement {
  render() {
    return html`<arc-container></arc-container>`;
  }
}
