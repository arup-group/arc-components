import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class ArcNavbar extends LitElement {
  static tag = 'arc-navbar';

  static styles = css`
    :host {
      display: flex;
    }

    #main, #left, #right {
      display: grid;
    }

    #main {
      min-width: 100%;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
    }

    #left {
      grid-auto-flow: column;
      justify-content: flex-start;
    }

    #right {
      grid-auto-flow: column;
      justify-content: flex-end;
    }

    .brand {
      align-self: center;
      margin: 0 var(--arc-spacing-medium) 0 var(--arc-spacing-medium);
    }

    /* Medium devices (tablets, 768px)  */
    @media (max-width: 40em) {
      #tabs {
        display: none;
      }
    }
  `;

  @property({ type: String })
  brand: string = 'Web Components';

  @property({ type: String })
  logo: string = '';

  render() {
    return html`
      <div id='main'>
        <div id='left'>
          ${this.logo ? html`
            <img src='' alt='' class='brand'>
            <span>${this.brand}</span>
          ` : html`
            <span class='brand'>${this.brand}</span>
          `}
        </div>
        <div id='right'>
          <div id='tabs'><slot></slot></div>
          <div class='brand'>ArupLogo</div>
        </div>
      </div>
    `
  }
}
