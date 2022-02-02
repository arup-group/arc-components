import { css, html, LitElement, nothing } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { emit } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import { mobileBreakpoint } from "../../utilities/ui-utils.js";
import componentStyles from '../../styles/component.styles.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { ICON_TYPES } from '../icon/constants/IconConstants.js';

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
        z-index: 1;
        --logo-height: var(--arc-brand-height);
      }

      /* Layout */
      #main,
      #left,
      #logoWrapper,
      #right,
      #tabs {
        display: grid;
        grid-auto-flow: column;
        overflow: hidden;
      }

      #main {
        height: inherit;
        width: 100%;
        padding: 0 var(--arc-spacing-medium) 0 var(--arc-spacing-medium);
        box-shadow: var(--arc-box-shadow);
        user-select: none;
      }

      /* Left side */
      #left {
        justify-content: flex-start;
      }

      #logoWrapper {
        align-items: center;
        gap: var(--arc-spacing-small);
        text-decoration: none;
        color: inherit;
      }

      #tool-logo {
        height: var(--logo-height);
        width: auto;
      }

      /* Show the tool-name when there is no tool-logo */
      #tool-name {
        display: flex;
        overflow: hidden;
      }

      #tool-name::slotted(*) {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      /* Hide the tool-name when there is a tool-logo */
      #tool-logo + #tool-name {
        display: none;
      }

      /* Right side */
      #right {
        justify-content: flex-end;
        gap: var(--arc-spacing-small);
      }

      #tabSlot {
        display: none;
      }

      ::slotted(arc-button) {
        border-left: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
        border-right: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      }

      ::slotted(arc-icon-button) {
        margin: 0 var(--arc-spacing-x-small) 0 var(--arc-spacing-x-small);
      }

      #accessibility {
        display: none;
      }

      #company-logo {
        color: rgb(var(--arc-color-primary));
        display: flex;
        align-items: center;
      }

      #company-logo > svg {
        height: var(--arc-brand-height);
        width: auto;
      }

      /* Medium devices and up */
      @media (min-width: ${mobileBreakpoint}rem) {
        #tabSlot, #tool-logo + #tool-name, #accessibility {
          display: flex;
        }
      }
    `,
  ];

  @query('#tabSlot') tabSlot: HTMLSlotElement;

  @state() private showDropdown: boolean = false;

  @state() private navTabs: (ArcButton | ArcIconButton)[] = [];

  @property({ type: String, reflect: true }) home: string;

  @property({ type: String }) logo: string;

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

  /* Emit an event to show the accessibility panel */
  emitAccessibility() {
    emit(this, ARC_EVENTS.showAccessibility)
  }

  render() {
    /*
    Template that displays all button and icon-button components inside a dropdown menu
    Properties are derived from the button and icon-button components
    */
    const menuInterior = html`
      ${this.navTabs.map(tab => html`
        <arc-menu-item ?disabled="${tab.disabled}" @click="${() => tab.click()}">
          ${(tab as ArcIconButton).name ? html`
            <arc-icon name="${(tab as ArcIconButton).name}" slot="prefix"></arc-icon>
          ` : nothing}
          ${tab.textContent || (tab as ArcIconButton).label || (tab as ArcIconButton).name || "Invalid label"}
        </arc-menu-item>
      `)}
    `;

    const logoInterior = html`
      ${this.logo ? html`<img id="tool-logo" src="${this.logo}" alt="tool-logo" />` : nothing}
      <slot id="tool-name" name="name"></slot>
    `

    return html`
      <div id="main">
        <div id="left">
          ${this.home ? html`
            <a id="logoWrapper"
               href="${ifDefined(this.home)}"
               rel="noreferrer noopener"
               role="button"
               aria-label="tool logo">
              ${logoInterior}
            </a>
          ` : html`
            <div id="logoWrapper">${logoInterior}</div>
          `}
        </div>
        <div id="right">
          <div id="tabs">
            <slot id="tabSlot" @slotchange=${this.handleTabChange}></slot>
            ${this.showDropdown ? html`
              <arc-dropdown hoist>
                <arc-icon-button slot="trigger" name=${ICON_TYPES.menu}></arc-icon-button>
                <arc-menu>${menuInterior}</arc-menu>
              </arc-dropdown>
            ` : nothing}
            <arc-icon-button
              id='accessibility'
              name=${ICON_TYPES.accessibility}
              label="Accessibility panel"
              @click="${this.emitAccessibility}"
            ></arc-icon-button>
            <slot name="user"></slot>
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
