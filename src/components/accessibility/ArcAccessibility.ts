import { css, html, LitElement } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { emit } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import { stringifyObject, parseObject } from '../../internal/string.js';
import { CONTAINER_THEMES, ContainerTheme } from '../container/constants/ContainerConstants.js';
import { USER_PREFERENCES, UserPreferences } from './constants/AccessibilityConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
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

  /* The default preferences for the accessibility panel */
  @state() private _userPreferences: UserPreferences = USER_PREFERENCES;

  /* Indicates whether or not the drawer is open. This can be used instead of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open = false;

  @watch('_userPreferences')
  async handlePreferenceChange() {
    const options = {
      detail: {
        preferences: this._userPreferences
      },
      bubbles: true,
      composed: true
    }
    emit(this, ARC_EVENTS.accessibilityChange, options);

    /* Store the new preferences */
    localStorage.setItem('accessibility', stringifyObject(this._userPreferences))
  }

  @watch('open', { waitUntilFirstUpdate: true })
  handleOpenChange() {
    this.drawer.open = this.open;
  }

  connectedCallback() {
    super.connectedCallback();

    /* Check for personal preferences in the localStore. */
    const cachedPreferences = localStorage.getItem('accessibility');

    /* When stored preferences found, update the state. */
    if (cachedPreferences) {
      this._userPreferences = parseObject(cachedPreferences);
    }
  }

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

  /* Update the theme */
  updateTheme(event: MouseEvent) {
    const radio = event.target as HTMLInputElement;
    const { value } = radio;

    /* Make sure that the given option exists */
    if (value in CONTAINER_THEMES) {
      this._userPreferences = {
        ...this._userPreferences,
        colourMode: value as ContainerTheme
      }
    }
  }

  colourTemplate = () => html`
    <arc-radio-group>
      <div slot='label' class='label'>
        <span>Colour Mode</span>
        <arc-icon name=${ICON_TYPES.bulb}></arc-icon>
      </div>
      ${Object.values(CONTAINER_THEMES).map(value => html`
          <arc-radio name='colourMode' value=${value} ?checked=${value === this._userPreferences.colourMode} @arc-change=${this.updateTheme}>${value}</arc-radio>
      `)}
    </arc-radio-group>
  `

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
