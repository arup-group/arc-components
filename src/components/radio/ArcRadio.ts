import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';

export default class ArcRadio extends LitElement {
  static tag = 'arc-radio';

  static styles = [
    componentStyles,
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
    'arc-radio': ArcRadio;
  }
}
