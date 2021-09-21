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
    #brand {
      align-items: center;
      margin: 0 var(--arc-spacing-medium) 0 var(--arc-spacing-medium);
    }
    #tabs {
      margin-left: auto;
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
        <div id='brand'>My brand</div>
        <div id='tabs'>
          <slot></slot>
        </div>
      </div>
    `
  }
}
