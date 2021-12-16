import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';
import { mobileBreakpoint } from "../../utilities/ui-utils.js";

import type ArcMenu from '../menu/ArcMenu.js';
import type ArcMenuItem from '../menu-item/ArcMenuItem.js';
import type ArcButton from '../button/ArcButton.js';
import type ArcIconButton from '../icon-button/ArcIconButton.js';

import '../dropdown/arc-dropdown.js';
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

  @query('#tabs > slot') tabSlot: HTMLSlotElement;

  @query('#burgerMenu') menu: ArcMenu;

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

  retrieveMenuProps = (el: ArcButton | ArcIconButton) => {
    const { textContent, target, href, download, disabled } = el;

    return {
      name: (el as ArcIconButton).name,
      label: (el as ArcIconButton).label,
      textContent: textContent,
      target: target,
      href: href,
      download: download,
      disabled: disabled
    }
  }

  createMenuItem(el: ArcButton | ArcIconButton) {
    const props = this.retrieveMenuProps(el);
    const value = props.textContent || props.label || props.name || 'Unknown value';

    console.log(props);

    /* Remove the tab from the slot */
    return Object.assign(document.createElement('arc-menu-item'), {
      innerHTML: html`
<!--        /*TODO: Continue from here*/-->
<!--        $-{props.}->
      `,
      value,
      disabled: props.disabled
    });
  }

  getAllTabs() {
    const children = this.tabSlot.assignedElements({ flatten: true });
    return [...children].filter((el: HTMLElement) => el.tagName === 'ARC-BUTTON' || el.tagName === 'ARC-ICON-BUTTON');
  }

  handleTabChange = () => {
    const tabs = this.getAllTabs();

    /* If the tab count is exceeded, create a dropdown burger menu */
    if (tabs.length > this.tabs) {
      [...tabs].forEach(tab => {
        /* Remove the original tab from the navbar */
        tab.remove();

        /* Create an equivalent menu-item for each button or icon-button */
        const menuItem: ArcMenuItem = this.createMenuItem(tab as ArcButton | ArcIconButton);
        this.menu.appendChild(menuItem);
      })

      /* Show the burger menu */
      this.menu.hidden = false;
    }
  };

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
            <arc-dropdown id='burgerMenu' hidden hoist>
              <arc-icon-button name='menu' slot='trigger'></arc-icon-button>
            </arc-dropdown>
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
