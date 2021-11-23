import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';

export default class ArcMenu extends LitElement {
  static tag = 'arc-menu';

  static styles = [componentStyles, css``];

  @property()
  name: string = 'Hi';

  render() {
    return html` <main id="main">${this.name}</main> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-menu': ArcMenu;
  }
}
