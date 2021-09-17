import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export class ArcNavbar extends LitElement {
  static tag = 'arc-navbar';

  static styles = css`
    :host, #main, #brand, #tabs {
      display: flex;
    }
    #main {
      min-width: 100%;
    }
    #tabs {
      flex-basis: 100%;
      flex-direction: row;
    }
    #tabs.right {
      flex-direction: row-reverse;
    }
  `;

  /** @type { 'left' | 'right' } */
  @property({ type: String, reflect: true })
  position: string = 'right';

  render() {
    const classes = {
      right: this.position === 'right',
    };

    return html`
      <div id='main'>
        <div id='brand'></div>
        <div id='tabs' class=${classMap(classes)}><slot></slot></div>
      </div>
    `
  }
}
