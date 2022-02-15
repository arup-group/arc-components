import {css, html, LitElement, nothing} from 'lit';
import {property, query, state} from 'lit/decorators.js';
import {ifDefined} from "lit/directives/if-defined.js";
import {emit} from '../../internal/event.js';
import {watch} from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import {uppercaseFirstLetter, camelCaseToSpaceSeparated, parseObject, stringifyObject} from '../../internal/string.js';
import {getRootValue, setRootValue} from "../../utilities/style-utils.js";
import {
  ACCESSIBILITY_OPTIONS,
  AccessibilityKey,
  AccessibilityOption,
  UserPreference,
  UserPreferences
} from './constants/AccessibilityConstants.js';
import {ARC_EVENTS} from '../../internal/constants/eventConstants.js';
import {FONT_SIZES, DEFAULT_FONTSIZE, FontSize} from "../../internal/constants/styleConstants.js";
import {CONTAINER_THEMES} from "../container/constants/ContainerConstants.js";

import type ArcContainer from "../container/ArcContainer.js";
import type ArcDrawer from '../drawer/ArcDrawer.js';
import '../drawer/arc-drawer.js';
import '../radio-group/arc-radio-group.js';
import '../radio/arc-radio.js';
import '../icon/arc-icon.js';
import '../button/arc-button.js';

declare type RootFontValues = {
  [key in FontSize]: string;
}

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

  /* Core values that are scoped to the :root */
  private _rootFontSizes: RootFontValues = {} as RootFontValues;

  private _availableFonts: FontSize[] = Object.values(FONT_SIZES);

  /* State that stores the user preferences */
  @state() private _userPreferences: UserPreferences = {
    colourMode: this.getColourMode(),
    textSize: FONT_SIZES.medium,
    textDisplay: {
      highLegibilityFonts: false,
      highlightLinks: false,
      plainText: false,
    }
  };

  /* Indicates whether the drawer is open. This can be used instead of the show/hide methods. */
  @property({type: Boolean, reflect: true}) open = false;

  @watch('_userPreferences')
  async handlePreferenceChange() {
    /* Update the preferences */
    this.updatePreferences();

    /* Emit the accessibility-change event */
    emit(this, ARC_EVENTS.accessibilityChange, {
      detail: {
        preferences: this._userPreferences,
      },
      bubbles: true,
      composed: true,
    });
  }

  @watch('open', {waitUntilFirstUpdate: true})
  handleOpenChange() {
    this.drawer.open = this.open;
  }

  connectedCallback() {
    super.connectedCallback();

    /* Store a reference of default ARC :root values */
    this.storeRootFontSizes();

    /* Check for cached preferences in the localStore and update the state. */
    const cachedPreferences = localStorage.getItem(ArcAccessibility.tag);
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

  /* Method used to grab the theme property from the arc-container */
  getColourMode() {
    const arcContainer: ArcContainer | null = document.querySelector('arc-container');
    return arcContainer ? arcContainer.theme : CONTAINER_THEMES.auto;
  }

  /* Store font-sizes from the :root i.e. --arc-font-size-medium. */
  storeRootFontSizes() {
    this._availableFonts.forEach((key: FontSize) => {
      this._rootFontSizes[key] = getRootValue(`--arc-font-size-${key}`)
    });
  }

  /* Restore font-sizes. */
  restoreRootFontSizes() {
    this._availableFonts.forEach((key: FontSize) => {
      setRootValue(`--arc-font-size-${key}`, this._rootFontSizes[key]);
    });
  }

  /* Restore all values to default */
  restoreDefaults() {
    this.restoreRootFontSizes();
    this._userPreferences = {} as UserPreferences;
  }

  /* Update :root font-sizes */
  updateFontSize(fontSize: FontSize) {
    /* First restore root font-sizes */
    this.restoreRootFontSizes();

    /* Make sure that the new value exists in the available FONT_SIZES. */
    if (!(fontSize in FONT_SIZES)) {
      return;
    }

    /*
    Retrieve the index of the default fontSize and the index of the new fontSize.
    The incr value can then be used to retrieve the new value from the FONT_SIZES constant.
    When the incr === 1, medium will become large, large will become x-large etc.
    */
    const rootIndex = this._availableFonts.findIndex(size => size === DEFAULT_FONTSIZE);
    const newFontIndex = this._availableFonts.findIndex(size => size === fontSize);
    const incr = newFontIndex - rootIndex;

    /* Loop through each available FONT_SIZE and overwrite the value */
    this._availableFonts.forEach((size, index) => {
      let newIndex = index + incr;

      /* If the new index is larger than the available options, set the last available option */
      if (newIndex >= this._availableFonts.length) {
        newIndex = this._availableFonts.length - 1;
      }

      /* Grab the value from the new index */
      const newVal = getRootValue(`--arc-font-size-${this._availableFonts[newIndex]}`);

      /* Overwrite the root value with the new value */
      setRootValue(`--arc-font-size-${size}`, newVal);
    })
  }

  /* Update all preferences */
  updatePreferences() {
    /* Update the fontSize */
    this.updateFontSize(this._userPreferences.textSize as FontSize);

    /* TODO: Update other options */

    /* Store the new preferences in the localStore */
    localStorage.setItem(ArcAccessibility.tag, stringifyObject(this._userPreferences));
  }

  handleOptionChange(event: MouseEvent) {
    const radio = event.target as HTMLInputElement;
    const key = radio.name as AccessibilityKey;
    const value = radio.value as UserPreference;

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
              @arc-change=${this.handleOptionChange}
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
          <arc-button slot="footer" @click=${this.restoreDefaults}>Restore defaults</arc-button>
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
