import { html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { when } from 'lit/directives/when.js';
import { emit } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import {
  stringToSpaceSeparated,
  stringToHyphenSeparated,
  parseObject,
  stringifyObject,
  uppercaseFirstLetter,
} from '../../internal/string.js';
import { getRootValue, setRootValue } from '../../utilities/style-utils.js';
import {
  ACCESSIBILITY_OPTIONS,
  AccessibilityOption,
  ColourPreference,
  ContentPreference,
} from './constants/AccessibilityConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { FONT_SIZES, FONT_SPACING, FontSize, FontSpacing } from '../../internal/constants/styleConstants.js';
import { CONTAINER_THEMES, ContainerTheme } from '../container/constants/ContainerConstants.js';
import styles from './arc-accessibility.styles.js';
import type ArcContainer from '../container/ArcContainer.js';
import '../drawer/arc-drawer.js';
import '../radio-group/arc-radio-group.js';
import '../radio/arc-radio.js';
import '../icon/arc-icon.js';
import '../button/arc-button.js';

export declare type UserPreferences =
  | {
      [key in ColourPreference]: ContainerTheme;
    }
  | {
      [key in ContentPreference]: FontSize | FontSpacing | boolean;
    };

/**
 * @event arc-accessibility-change - Emitted when the user preferences change.
 */
export default class ArcAccessibility extends LitElement {
  static tag = 'arc-accessibility';

  static styles = styles;

  /** @internal - Reference to css variables that are scoped to :root. */
  private _rootCssVariables: { [key: string]: string } = {};

  /** @internal - Fallback preferences. */
  private _defaultPreferences: UserPreferences = {
    theme: this.getTheme(),
    fontSize: FONT_SIZES.medium,
    lineHeight: FONT_SPACING.normal,
    letterSpacing: FONT_SPACING.normal,
    highLegibilityFonts: false,
    highlightLinks: false,
    plainText: false,
  };

  /** @internal - Available root values. */
  private _availableRootValues: any = {
    fontSize: Object.values(FONT_SIZES),
    lineHeight: Object.values(FONT_SPACING),
    letterSpacing: Object.values(FONT_SPACING),
  };

  /** @internal - State that stores the user preferences. */
  @state() private _userPreferences: UserPreferences = this._defaultPreferences;

  /** Indicates whether the drawer is open. This can be used instead of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open: boolean = false;

  @watch('_userPreferences')
  async handlePreferenceChange() {
    /* Store the new preferences in the localStore */
    localStorage.setItem(ArcAccessibility.tag, stringifyObject(this._userPreferences));

    /* Update the :root values */
    Object.keys(this._userPreferences).forEach((key: keyof UserPreferences) =>
      this.updateRootValue(key, this._userPreferences[key])
    );

    emit(this, ARC_EVENTS.accessibilityChange, {
      detail: {
        preferences: this._userPreferences,
      },
    });
  }

  connectedCallback() {
    super.connectedCallback();

    /* Store a reference of default :root values */
    Object.keys(this._defaultPreferences).forEach((key: keyof UserPreferences) => this.storeRootValues(key));

    /* Check for cached preferences in the localStore and update the state. */
    const cachedPreferences = localStorage.getItem(ArcAccessibility.tag);
    if (cachedPreferences) {
      /* Update the state of the user preferences */
      this._userPreferences = parseObject(cachedPreferences);
    }
  }

  /* Shows the drawer */
  show() {
    if (!this.open) {
      this.open = true;
    }
  }

  /* Hides the drawer */
  hide() {
    if (this.open) {
      this.open = false;
    }
  }

  /* Method used to grab the theme property from the arc-container */
  getTheme() {
    const arcContainer: ArcContainer | null = document.querySelector('arc-container');
    return arcContainer ? arcContainer.theme : CONTAINER_THEMES.auto;
  }

  /* Store :root css values i.e. --arc-font-size, --arc-letter-spacing etc. */
  storeRootValues(key: keyof UserPreferences) {
    /* Make sure that the given key has available :root values associated with it */
    if (!(key in this._availableRootValues)) return;

    /* Store a local copy of each :root css variable */
    this._availableRootValues[key].forEach((value: FontSize | FontSpacing) => {
      const variable = `--arc-${stringToHyphenSeparated(key)}-${value}`;
      this._rootCssVariables[variable] = getRootValue(variable);
    });
  }

  /* Restore :root css values i.e. --arc-font-size, --arc-letter-spacing etc. */
  restoreRootValues(key: keyof UserPreferences) {
    /* Make sure that the given key has available :root values associated with it */
    if (!(key in this._availableRootValues)) return;

    /* Restore a :root css variable with the local copy */
    this._availableRootValues[key].forEach((value: any) => {
      const variable = `--arc-${stringToHyphenSeparated(key)}-${value}`;
      setRootValue(variable, this._rootCssVariables[variable]);
    });
  }

  /* Update an array of :root values */
  updateRootValue(key: keyof UserPreferences, newValue: any) {
    /* Make sure that the provided key is a UserPreference */
    if (!(key in this._defaultPreferences)) throw new Error('The provided key is not a valid UserPreference');

    /*
    Make sure that the provided key has available :root values associated with it in the index.css.
    The `theme` property does not need to overwrite any :root values.
    */
    if (!(key in this._availableRootValues)) return;

    /* Restore :root values of the given key */
    this.restoreRootValues(key);

    /*
    Retrieve the index of the default value and the index of the new value.
    The incr value can then be used to retrieve the new value from the array of FontSizes or FontSpacings.
    When the incr === 1, medium will become large, large will become x-large etc.
    When the incr === 0, all values will be set to default.
    */
    const options: FontSize[] | FontSpacing[] = this._availableRootValues[key];
    const rootIndex = options.findIndex(option => option === this._defaultPreferences[key]);
    const newFontIndex = options.findIndex(option => option === newValue);

    /* Make sure that the given newValue exists in the availableRootValues */
    if (newFontIndex < 0) throw new Error('The provided value does not exist as an available root value');

    const incr = newFontIndex - rootIndex;

    /* Loop through each available FONT_SIZE or FONT_SPACING and overwrite the value */
    options.forEach((value, index) => {
      let newIndex = index + incr;

      /* If the new index is larger than the available options, set the last available option */
      if (newIndex >= options.length) newIndex = options.length - 1;

      /* Set the css variable to look for */
      const oldVar = `--arc-${stringToHyphenSeparated(key)}-${value}`;
      const newVar = `--arc-${stringToHyphenSeparated(key)}-${options[newIndex]}`;

      /* Overwrite the :root value with the new value */
      setRootValue(oldVar, getRootValue(newVar));
    });
  }

  /* Restore all default root values */
  restoreRootDefaults() {
    /* Restore default values */
    Object.keys(this._defaultPreferences).forEach((key: keyof UserPreferences) => this.restoreRootValues(key));

    /* Update the state of the user preferences */
    this._userPreferences = this._defaultPreferences;
  }

  /* Method used to update a preference */
  handleOptionChange(event: MouseEvent) {
    const radio = event.target as HTMLInputElement;
    const key = radio.name as keyof UserPreferences;
    const value = radio.value as any;

    /* Update the state of the user preferences */
    this._userPreferences = { ...this._userPreferences, [key]: value };
  }

  radioTemplate(key: keyof UserPreferences, values: ContainerTheme[] | FontSize[]) {
    return html`
      <arc-radio-group id=${key}>
        <span slot="label">${stringToSpaceSeparated(key)}</span>
        ${map(
          values,
          value => html`
            <arc-radio
              name=${key}
              value=${value}
              ?checked=${value === this._userPreferences[key]}
              @arc-change=${this.handleOptionChange}
              >${uppercaseFirstLetter(value)}
            </arc-radio>
          `
        )}
      </arc-radio-group>
    `;
  }

  booleanTemplate() {
    return html`${nothing}`;
  }

  render() {
    return html`
      <div id="main">
        <arc-drawer id="drawer" @arc-hide=${this.hide} ?open=${this.open}>
          <div class="label" slot="label">
            <arc-icon name="accessibility" size="large"></arc-icon>
            <span>Accessibility Controls (A)</span>
          </div>
          <div id="wrapper">
            ${map(
              ACCESSIBILITY_OPTIONS,
              (item: AccessibilityOption) => html`
                <div class="label">
                  <span>${stringToSpaceSeparated(item.name)}</span>
                  <arc-icon name=${item.icon}></arc-icon>
                </div>
                <div class="options">
                  ${map(Object.entries(item.options), (option: [keyof UserPreferences, any]) => {
                    const [userPreference, value] = option as [keyof UserPreferences, any];

                    return html`${when(
                      Array.isArray(value),
                      () => this.radioTemplate(userPreference, value),
                      () => this.booleanTemplate()
                    )}`;
                  })}
                </div>
              `
            )}
          </div>
          <arc-button type="tab" slot="footer" @click=${this.restoreRootDefaults}>Restore defaults</arc-button>
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
