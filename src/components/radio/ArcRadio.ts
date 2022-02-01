import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';

let id = 0;

export default class ArcRadio extends LitElement {
  static tag = 'arc-radio';

  static styles = [
    componentStyles,
    css``,
  ];

  private inputId = `radio-${++id}`;

  private labelId = `radio-label-${id}`;

  @state() private hasFocus: boolean = false;

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
