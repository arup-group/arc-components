import { css, html, LitElement } from 'lit';
import { query } from 'lit/decorators.js';
import { waitForEvent } from '../../internal/event.js';
import componentStyles from '../../styles/component.styles.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { CONTAINER_THEMES } from '../container/constants/ContainerConstants.js';
import { ICON_TYPES } from '../icon/constants/IconConstants.js';

import type ArcDrawer from '../drawer/ArcDrawer.js';
import '../drawer/arc-drawer.js';
import '../icon/arc-icon.js';

export default class ArcAccessibility extends LitElement {
  static tag = 'arc-accessibility';

  static styles = [
    componentStyles,
    css`
      .menu-label {
        display: flex;
        align-items: center;
        gap: var(--arc-spacing-small);
      }
    `,
  ];

  @query('#drawer') drawer: ArcDrawer;

  /** Shows the drawer. */
  async show() {
    if (this.drawer.open) {
      return;
    }

    this.drawer.open = true;
    await waitForEvent(this, ARC_EVENTS.afterShow);
  }

  /** Hides the drawer */
  async hide() {
    if (!this.drawer.open) {
      return;
    }

    this.drawer.open = false;
    await waitForEvent(this, ARC_EVENTS.afterHide);
  }

  colourTemplate = () => html`
    <div class='menu-label'>
      <span>Colour Mode</span>
      <arc-icon name=${ICON_TYPES.bulb}></arc-icon>
    </div>
    ${Object.keys(CONTAINER_THEMES).map(key => html`
      <arc-menu-item>${key}</arc-menu-item>
    `)}
  `

  textTemplate = () => html`
    <div class='menu-label'>
      <span>Text Size</span>
      <arc-icon name=${ICON_TYPES['book-open']}></arc-icon>
    </div>
    <arc-menu-item>Regular</arc-menu-item>
    <arc-menu-item>Large</arc-menu-item>
    <arc-menu-item>Extra Large</arc-menu-item>
  `

  textDisplayTemplate = () => html`
    <div class='menu-label'>
      <span>Text Display</span>
      <arc-icon name=${ICON_TYPES.eye}></arc-icon>
    </div>
    <arc-menu-item>High Legibility Fonts</arc-menu-item>
    <arc-menu-item>Large</arc-menu-item>
    <arc-menu-item>Extra Large</arc-menu-item>
  `

  render() {
    return html`
      <div id='main'>
        <arc-drawer id='drawer' label='Accessibility Controls (A)'>
          <arc-menu>
            ${this.colourTemplate()}
            ${this.textTemplate()}
            ${this.textDisplayTemplate()}
          </arc-menu>
        </arc-drawer>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-accessibility': ArcAccessibility;
  }
}
