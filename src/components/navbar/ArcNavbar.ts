import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';

import { arupLogo } from './arup-logo.js';

export default class ArcNavbar extends LitElement {
  static tag = 'arc-navbar';

  static styles = [
    componentStyles,
    css`
      :host {
        height: var(--arc-navbar-height);
        background: rgb(var(--arc-container-color));
        --logo-height: var(--arc-brand-height);
      }

      /* Layout */
      #main,
      #left,
      #right {
        display: flex;
      }

      #main {
        justify-content: space-between;
        height: inherit;
        width: 100%;
        padding: 0 var(--arc-spacing-medium) 0 var(--arc-spacing-medium);
        box-shadow: var(--arc-box-shadow);
        user-select: none;
      }

      /* Left side */
      #left {
        justify-content: flex-start;
        align-items: center;
      }

      #logoWrapper {
        height: 100%;
        display: inline-flex;
        text-decoration: none;
        color: inherit;
      }

      #tool-logo + #tool-name {
        display: none;
        margin-left: var(--arc-spacing-small);
      }

      #tool-name {
        height: 100%;
        align-items: center;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Right side */
      #right {
        justify-content: flex-end;
      }

      #tabs {
        display: none;
      }

      ::slotted(arc-button) {
        border-left: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
        border-right: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      }

      ::slotted(arc-icon-button) {
        margin: 0 var(--arc-spacing-x-small) 0 var(--arc-spacing-x-small);
      }

      /* Logo's */
      #tool-logo {
        height: var(--logo-height);
        width: auto;
      }

      #company-logo > svg {
        height: var(--arc-brand-height);
        width: auto;
      }

      #tool-logo,
      #tool-name {
        align-self: center;
      }

      #company-logo {
        color: rgb(var(--arc-color-primary));
        display: flex;
        align-items: center;
        justify-content: center;
      }

      /* Medium devices (tablets, 48rem and up) */
      @media (min-width: 48rem) {
        #right > #tabs {
          display: grid;
          grid-auto-flow: column;
        }

        #tool-logo + #tool-name {
          display: inline-flex;
        }

        #company-logo {
          padding-left: var(--arc-spacing-medium);
        }
      }
    `,
  ];

  @property({ type: String }) logo: string;

  @property({ type: String, reflect: true }) home: string = '/';

  @property({
    type: Boolean,
    reflect: true,
    converter: (attrValue: string | null) => (attrValue ? attrValue !== 'false' : true),
  })
  arup: boolean = true;

  @property({ type: Number, reflect: true })
  tabs: number = 5;

  handleTabChange = (e: any) => {
    const isButton = (element: any) => element.tagName === 'ARC-BUTTON';

    const nodes = e.target.assignedElements({ flatten: true });
    const arcTabs = nodes.filter(isButton);

    if (arcTabs.length > this.tabs) {
      /* TODO: ARC-12 Put the slotted tabs inside an arc-dropdown component once they exceed the given tab count */
      this.log(`Please limit your tab count to a maximum of ${this.tabs} tabs`);
    }
  };

  // eslint-disable-next-line no-console
  log = (msg: string) => console.log(msg);

  render() {
    return html`
      <div id="main">
        <div id="left">
          <a id="logoWrapper" href="${this.home}" rel="noreferrer noopener" role="button" aria-label="tool logo">
            ${this.logo && html`<img id="tool-logo" src="${this.logo}" alt="tool-logo" />`}
            <span id="tool-name">
              <slot name="name"></slot>
            </span>
          </a>
        </div>
        <div id="right">
          <div id="tabs">
            <slot @slotchange=${this.handleTabChange}></slot>
          </div>
          ${this.arup ? html`<span id="company-logo">${arupLogo}</span>` : null}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-navbar': ArcNavbar;
  }
}
