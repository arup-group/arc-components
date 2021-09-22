import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// const companyLight = new URL('../../../../assets/arup-light.svg', import.meta.url).href;
const companyRed = new URL('../../../../assets/arup-red.svg', import.meta.url).href;

export class ArcNavbar extends LitElement {
  static tag = 'arc-navbar';

  static styles = css`
    :host {
      display: flex;
    }

    /* Layout */
    #main, #left, #right, #tabs {
      display: grid;
      grid-auto-flow: column;
    }

    #main {
      width: 100%;
      padding: 0 var(--arc-spacing-medium) 0 var(--arc-spacing-medium)
    }

    #left {
      justify-content: flex-start;
    }

    #left > img + span {
      margin-left: var(--arc-spacing-small);
    }

    #left > span {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    #right {
      justify-content: flex-end;
    }

    /* Navigation tabs */
    #tabs {
      margin-right: var(--arc-spacing-medium);
    }

    ::slotted(arc-button) {
      border-left: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
    }

    ::slotted(arc-button:last-child) {
      border-right: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
    }

    /* Images */
    img {
      height: var(--arc-brand-height);
    }

    .center {
      align-self: center;
    }

    /* Medium devices */
    @media (max-width: 48em) {
      #tabs {
        display: none;
      }
    }

    /* Small devices */
    @media (max-width: 40em) {
      #left > img + span {
        display: none;
      }
    }
  `;

  @property({ type: String })
  logo: string = '';

  render() {
    return html`
      <div id='main'>
        <div id='left'>
          ${this.logo && html`<img src=${this.logo} alt='tool-logo' class='center'>`}
          <span class='center'><slot name='brand'></slot></span>
        </div>
        <div id='right'>
          <div id='tabs'><slot></slot></div>
          <img src=${companyRed} alt='company-logo' class='center'>
        </div>
      </div>
    `
  }
}
