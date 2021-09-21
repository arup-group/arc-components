import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class ArcNavbar extends LitElement {
  static tag = 'arc-navbar';

  static styles = css`
    :host, #main, .brand, #tabs {
      display: flex;
    }
    #main {
      min-width: 100%;
    }
    .brand {
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

  @property({ type: String })
  brand: string = 'Arup';

  @property({ type: String })
  logo: string = '';

  render() {
    return html`
      <div id='main'>
        ${this.position === 'left' ? html`
          <div class='brand'>ArupLogo</div>
          <div class='brand' style='margin-left: 0;'>My brand</div>
          <div id='tabs'><slot></slot></div>
        ` : html`
          <div class='brand'>My brand</div>
          <div id='tabs'><slot></slot></div>
          <div class='brand'>ArupLogo</div>
        `}
      </div>
    `
  }
}
