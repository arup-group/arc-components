import { css, html, LitElement } from 'lit';
import { query } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';
import { waitForEvent } from '../../internal/event.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

import type ArcDrawer from '../drawer/ArcDrawer.js';
import '../drawer/arc-drawer.js';

export default class ArcAccessibility extends LitElement {
  static tag = 'arc-accessibility';

  static styles = [
    componentStyles,
    css``,
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

  render() {
    return html`
      <div id='main'>
        <arc-drawer id='drawer' label='Accessibility Controls (A)'>
          <div>Colour Mode</div>
          <div>Text Size</div>
          <div>Text Display Options</div>
          <div>Keyboard Navigation Guide</div>
          <div>Screen Reader Compatibility Guide</div>
          <div>Arup Accessibility Statement</div>
          <div>Support & Contact</div>
          <div>Restore all defaults</div>
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
