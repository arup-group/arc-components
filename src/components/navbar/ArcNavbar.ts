import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { componentStyles } from '../../styles/component.styles.js';

import { arupLogo } from './arup-logo.js';

export class ArcNavbar extends LitElement {
  static tag = 'arc-navbar';

  static styles = [
    componentStyles,
    css`
      :host {
        height: var(--arc-navbar-height);
        background: rgb(var(--arc-container-color));
      }

      /* Layout */
      #main,
      #left,
      #right {
        display: grid;
        grid-auto-flow: column;
      }

      #main {
        height: inherit;
        width: 100%;
        padding: 0 var(--arc-spacing-medium) 0 var(--arc-spacing-medium);
        box-shadow: var(--arc-box-shadow);
      }

      /* Left side */
      #left {
        justify-content: flex-start;
      }

      #tool-logo + #tool-name {
        display: none;
        margin-left: var(--arc-spacing-small);
      }

      #tool-name {
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Right side */
      #right {
        justify-content: flex-end;
        color: rgb(var(--arc-color-primary));
      }

      #right > #tabs {
        display: none;
      }

      ::slotted(arc-button) {
        border-left: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      }

      ::slotted(arc-button:last-child) {
        border-right: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      }

      /* Logo's */
      #tool-logo,
      #company-logo {
        height: var(--arc-brand-height);
        width: auto;
      }

      #tool-logo,
      #company-logo,
      #tool-name {
        align-self: center;
      }

      /* Medium devices (tablets, 48rem and up) */
      @media (min-width: 48rem) {
        #right > #tabs {
          display: grid;
          grid-auto-flow: column;
        }

        #company-logo {
          margin-left: var(--arc-spacing-medium);
        }

        #tool-logo + #tool-name {
          display: block;
        }
      }
    `,
  ];

  @property({ type: String })
  logo: string = '';

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

    const childNodes = e.target.assignedElements({ flatten: true });
    const arcTabs = childNodes.filter(isButton);

    if (arcTabs.length > this.tabs) {
      // TODO: ARC-12 Put the slotted tabs inside an arc-dropdown component once they exceed the given tab count
    }
  };

  render() {
    return html`
      <main id="main">
        <div id="left">
          ${this.logo && html`<img id="tool-logo" src="${this.logo}" alt="tool-logo" />`}
          <div id="tool-name"><slot name="name"></slot></div>
        </div>
        <div id="right">
          <div id="tabs">
            <slot @slotchange=${this.handleTabChange}></slot>
          </div>
          ${this.arup ? html`${arupLogo}` : html``}
        </div>
      </main>
    `;
  }
}
