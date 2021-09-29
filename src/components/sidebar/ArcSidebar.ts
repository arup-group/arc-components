import { css, html, LitElement } from 'lit';
import { componentStyles } from '../styles/component.styles.js';

export class ArcSidebar extends LitElement {
  static tag = 'arc-sidebar';

  static styles = [
    componentStyles,
    css`
      :host {
        --width: 23rem;
      }

      /* Layout */
      #main {
        height: 100%;
        width: var(--width);
      }

      ::slotted(*) {
        background: rgb(var(--arc-container-color));
      }
    `
  ]

  render() {
    return html`
      <main id='main'>
        <slot></slot>
      </main>
    `
  }
}
