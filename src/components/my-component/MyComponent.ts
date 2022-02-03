import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class MyComponent extends LitElement {
  static tag = 'my-component';

  static styles = [
    css``,
  ];

  @property()
  name: string = '';

  render() {
    return html`
      <div id='main'>${this.name}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-component': MyComponent;
  }
}
