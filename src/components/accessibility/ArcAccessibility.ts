import {css, html, LitElement, nothing} from 'lit';
import {property, query, state} from 'lit/decorators.js';
import {ifDefined} from "lit/directives/if-defined.js";
import {emit} from '../../internal/event.js';
import {watch} from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import {uppercaseFirstLetter, camelCaseToSpaceSeparated, stringifyObject, parseObject} from '../../internal/string.js';
import {
  ACCESSIBILITY_OPTIONS,
  AccessibilityKey,
  AccessibilityOption,
  UserPreference,
} from './constants/AccessibilityConstants.js';
import {ARC_EVENTS} from '../../internal/constants/eventConstants.js';

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

  /* Class that allows for manipulation of core css values */
  private _cssManipulator: CssManipulator;

  /* The default preferences for the accessibility panel */
  @state() private _userPreferences: { [accessKeys in AccessibilityKey]: UserPreference };

  /* Indicates whether the drawer is open. This can be used instead of the show/hide methods. */
  @property({type: Boolean, reflect: true}) open = false;

  @watch('_userPreferences')
  async handlePreferenceChange() {
    const options = {
      detail: {
        preferences: this._userPreferences,
      },
      bubbles: true,
      composed: true,
    };
    emit(this, ARC_EVENTS.accessibilityChange, options);

    /* Store the new preferences */
    localStorage.setItem('arc-accessibility', stringifyObject(this._userPreferences));
  }

  @watch('open', {waitUntilFirstUpdate: true})
  handleOpenChange() {
    this.drawer.open = this.open;
  }

  connectedCallback() {
    super.connectedCallback();

    /* Hook up the css manipulator */
    this._cssManipulator = new CssManipulator();

    /* Check for personal preferences in the localStore. */
    const cachedPreferences = localStorage.getItem('arc-accessibility');

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

  updatePreference(event: MouseEvent) {
    const radio = event.target as HTMLInputElement;
    const key = radio.name as AccessibilityKey;
    const value = radio.value as UserPreference;

    /* Update ARC css properties */
    if (key === 'textSize') {
      this._cssManipulator.updateTextSize(value);
    }

    if (key === 'textDisplay') {
      this._cssManipulator.updateTextDisplay(value);
    }

    /* Overwrite the object, which will emit the arc-accessibility-change */
    this._userPreferences = {...this._userPreferences, [key]: value};
  }

  optionTemplate = (key: AccessibilityKey, accessibilityOption: AccessibilityOption) => {
    const {icon, values} = accessibilityOption;

    /* When the values are within a string[], they can only be set by a checkbox */
    return Array.isArray(values)
      ? html`
        <arc-radio-group>
          <div slot="label" class="label">
            <span>${camelCaseToSpaceSeparated(key)}</span>
            <arc-icon name=${icon}></arc-icon>
          </div>
          ${values.map(value => html`
            <arc-radio
              name=${key}
              value=${value}
              ?checked=${ifDefined(this._userPreferences ? value === this._userPreferences[key] : false)}
              @arc-change=${this.updatePreference}
            >${uppercaseFirstLetter(value)}
            </arc-radio>
          `)}
        </arc-radio-group>
      ` : nothing;
  };

  render() {
    return html`
      <div id="main">
        <arc-drawer id="drawer" @arc-hide=${this.hide}>
          <div class="label" slot="label">
            <arc-icon name="accessibility" size="large"></arc-icon>
            <span>Accessibility Controls (A)</span>
          </div>
          <div id="wrapper">
            ${Object.keys(ACCESSIBILITY_OPTIONS).map((key: AccessibilityKey) =>
              this.optionTemplate(key, ACCESSIBILITY_OPTIONS[key])
            )}
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