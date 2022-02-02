import { css, html, LitElement } from 'lit';
import { query } from 'lit/decorators.js';
import { waitForEvent } from '../../internal/event.js';
import componentStyles from '../../styles/component.styles.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { CONTAINER_THEMES } from '../container/constants/ContainerConstants.js';
import { ICON_TYPES } from '../icon/constants/IconConstants.js';

import type ArcDrawer from '../drawer/ArcDrawer.js';
import '../drawer/arc-drawer.js';
import '../radio-group/arc-radio-group.js';
import '../radio/arc-radio.js';
import '../icon/arc-icon.js';

export default class ArcAccessibility extends LitElement {
  static tag = 'arc-accessibility';

  static styles = [
    componentStyles,
    css`
      #wrapper {
        display: grid;
        gap: var(--arc-spacing-small);
      }

      .menu-label {
        display: flex;
        align-items: center;
        gap: var(--arc-spacing-small);
      }
    `,
  ];

  @query('#drawer') drawer: ArcDrawer;

  /** Shows the drawer */
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
    <arc-radio-group>
      <div slot='label' class='menu-label'>
        <span>Colour Mode</span>
        <arc-icon name=${ICON_TYPES.bulb}></arc-icon>
      </div>
      ${Object.keys(CONTAINER_THEMES).map(key => html`
        <arc-radio name='theme' value=${key}>${key}</arc-radio>
      `)}
    </arc-radio-group>
  `

  textTemplate = () => html`
    <arc-radio-group>
      <div slot='label' class='menu-label'>
        <span>Text Size</span>
        <arc-icon name=${ICON_TYPES['book-open']}></arc-icon>
      </div>
      <arc-radio name='text-size' value='small'>Small</arc-radio>
      <arc-radio name='text-size' value='medium'>Medium</arc-radio>
      <arc-radio name='text-size' value='large'>Large</arc-radio>
    </arc-radio-group>
  `

  // textDisplayTemplate = () => html`
  //   <div class='menu-label'>
  //     <span>Text Display</span>
  //     <arc-icon name=${ICON_TYPES.eye}></arc-icon>
  //   </div>
  //   <arc-menu>
  //     <arc-menu-item>High Legibility Fonts</arc-menu-item>
  //     <arc-menu-item>Large</arc-menu-item>
  //     <arc-menu-item>Extra Large</arc-menu-item>
  //   </arc-menu>
  // `

  render() {
    return html`
      <div id='main'>
        <arc-drawer id='drawer' label='Accessibility Controls (A)'>
          <div id='wrapper'>
            ${this.colourTemplate()}
            ${this.textTemplate()}
          </div>
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
