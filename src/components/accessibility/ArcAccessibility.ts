import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
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

      .label {
        display: flex;
        align-items: center;
        gap: var(--arc-spacing-small);
      }
    `,
  ];

  @query('#drawer') drawer: ArcDrawer;

  /* Indicates whether or not the drawer is open. This can be used instead of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open = false;

  /* Shows the drawer */
  show() {
    if (this.open) {
      return;
    }
    this.open = true;
  }

  /* Hides the drawer */
  hide() {
    if (!this.open) {
      return;
    }
    this.open = false;
  }

  @watch('open', { waitUntilFirstUpdate: true })
  handleOpenChange() {
    this.drawer.open = this.open;
  }

  colourTemplate = () => html`
    <arc-radio-group>
      <div slot='label' class='label'>
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
      <div slot='label' class='label'>
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
        <arc-drawer id='drawer' @arc-hide=${this.hide}>
          <div class='label' slot='label'>
            <arc-icon name='accessibility' size='large'></arc-icon>
            <span>Accessibility Controls (A)</span>
          </div>
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
