import { css, html, LitElement } from 'lit';
// import { property } from 'lit/decorators.js';
// import { isNight } from '../../internal/theme.js';
// import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';

export default class ArcCard extends LitElement {
  static tag = 'arc-card';

  static styles = [
    componentStyles,
    css`
      
    `,
  ];



  render() {
    return html`
      <div>
      hi
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-card': ArcCard;
  }
}
