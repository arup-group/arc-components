import { css, html, LitElement, nothing } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';
import { mobileBreakpoint } from "../../utilities/ui-utils.js";
import { watch } from '../../internal/watch.js';

import type ArcButton from '../button/ArcButton.js';
import type ArcIconButton from '../icon-button/ArcIconButton.js';
import '../dropdown/arc-dropdown.js';
import '../menu/arc-menu.js';
import '../menu-item/arc-menu-item.js';
import '../icon-button/arc-icon-button.js';

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
        display: grid;
        grid-auto-flow: column;
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

      /* Medium devices and up */
      @media (min-width: ${mobileBreakpoint}rem) {
        #right > #tabs {
          display: grid;
          grid-auto-flow: column;
          overflow: hidden;
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

  @query('#tabSlot') tabSlot: HTMLSlotElement;

  @state() showDropdown: boolean = false;

  @state() navTabs: (ArcButton | ArcIconButton)[] = [];

  @property({ type: String }) logo: string;

  @property({ type: String, reflect: true }) home: string = '/';

  @property({ type: Number, reflect: true }) tabs: number = 5;

  @property({
    type: Boolean,
    reflect: true,
    converter: (attrValue: string | null) => (attrValue ? attrValue !== 'false' : true),
  })
  arup: boolean = true;

  @watch('tabs', { waitUntilFirstUpdate: true })
  handleTabCountChange() {
    this.updateTemplate();
  }

  handleTabChange(e: any) {
    const nodes = e.target.assignedElements({ flatten: true });

    /* Store a reference to the button and icon-button components for later use */
    this.navTabs = nodes.filter((el: Element) => el.tagName === 'ARC-BUTTON' || el.tagName === 'ARC-ICON-BUTTON');

    this.updateTemplate();
  };

  updateTemplate() {
    this.showDropdown = this.navTabs.length > this.tabs;

    /* Show or hide the button and icon-button components */
    [...this.navTabs].forEach(tab => {
      /* eslint-disable-next-line no-param-reassign */
      tab.style.display = this.showDropdown ? 'none' : 'initial';
    })
  }

  render() {
    /*
    Template that displays all button and icon-button components inside a dropdown menu
    Properties are derived from the button and icon-button components
    */
    const menuInterior = html`
      ${this.navTabs.map(tab => html`
        <arc-menu-item ?disabled='${tab.disabled}' @click='${() => tab.click()}'>
          ${(tab as ArcIconButton).name ? html`
            <arc-icon name='${(tab as ArcIconButton).name}' slot='prefix'></arc-icon>
          ` : nothing}
          ${tab.textContent || (tab as ArcIconButton).label || (tab as ArcIconButton).name || 'Invalid label'}
        </arc-menu-item>
      `)}
    `;

    return html`
      <div id="main">
        <div id="left">
          <a id="logoWrapper" href="${this.home}" rel="noreferrer noopener" role="button" aria-label="tool logo">
            ${this.logo ? html`<img id="tool-logo" src="${this.logo}" alt="tool-logo" />` : nothing}
            <span id="tool-name">
              <slot name="name"></slot>
            </span>
          </a>
        </div>
        <div id="right">
          <div id="tabs">
            <slot id='tabSlot' @slotchange=${this.handleTabChange}></slot>
            ${this.showDropdown ? html`
              <arc-dropdown hoist>
                <arc-icon-button slot='trigger' name='menu'></arc-icon-button>
                <arc-menu>${menuInterior}</arc-menu>
              </arc-dropdown>
            ` : nothing}
          </div>
          ${this.arup ? html`<span id="company-logo">${arupLogo}</span>` : nothing}
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
