import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { prefersDark } from '../../internal/preferences.js';
import { isNight } from '../../internal/theme.js';
import { watch } from '../../internal/watch.js';
import { CONTAINER_THEMES, ContainerTheme } from './constants/ContainerConstants.js';
import { ICON_TYPES } from '../icon/constants/IconConstants.js';
import styles from './arc-container.styles.js';
import type ArcAccessibility from '../accessibility/ArcAccessibility.js';
import '../accessibility/arc-accessibility.js';
import '../bottombar/arc-bottombar.js';
import '../icon-button/arc-icon-button.js';

/**
 * @slot default - The container's content.
 * @slot nav - The container's navbar.
 * @slot side - The container's sidebar.
 * @slot bottom - The container's bottom bar.
 */
export default class ArcContainer extends LitElement {
  /** @internal */
  static tag = 'arc-container';

  static styles = styles;

  /** @internal */
  @query('#main') container: HTMLElement;

  /** @internal */
  @query('#accessibility') accessibility: ArcAccessibility;

  /** @internal - Reference to the preferred theme set by the app. */
  private _appPreferredTheme: ContainerTheme;

  /** Set the starting theme for the container. Once loaded, the built-in accessibility will be responsible for this property. */
  @property({ type: String, reflect: true }) theme: ContainerTheme = CONTAINER_THEMES.auto;

  /** Set the container to fullscreen mode. This hides the padding, margin and gap values. */
  @property({ type: Boolean }) fullscreen: boolean = false;

  @watch('theme')
  handleThemeChange() {
    /* If the given theme is auto or if the given theme does not exist in the CONTAINER_THEMES */
    if (CONTAINER_THEMES[this.theme] === CONTAINER_THEMES.auto || !(this.theme in CONTAINER_THEMES)) {
      this.theme = this.getTheme();
    }
  }

  /* Listen to keyboard input on the page */
  connectedCallback() {
    super.connectedCallback();

    /* Store a reference of the app-defined theme */
    if (this.theme in CONTAINER_THEMES) {
      this._appPreferredTheme = this.theme;
    }
  }

  /* Retrieve the theme based on the time of day or on the OS setting */
  getTheme(date?: Date) {
    return isNight(date) || prefersDark() ? CONTAINER_THEMES.dark : CONTAINER_THEMES.light;
  }

  /* Update the theme when the @arc-accessibility-change event emits */
  handleAccessibilityChange(event: CustomEvent) {
    const { preferences } = event.detail;
    const { theme }: { theme: ContainerTheme } = preferences;

    /* Make sure that the new theme exists in the available CONTAINER_THEMES. */
    if (!!theme && theme in CONTAINER_THEMES) {
      this.theme = theme;
      return;
    }

    /* When the preferences are reset, restore the appPreferredTheme instead */
    this.theme = this._appPreferredTheme;
  }

  /* Trigger the show event of the arc-accessibility component */
  showAccessibility() {
    this.accessibility.open = true;
  }

  protected render() {
    return html`
      <div id="main">
        <slot id="nav" name="nav" @arc-show-accessibility=${this.showAccessibility}></slot>
        <div
          id="container"
          class=${classMap({
            container: true,
            'container--fullscreen': this.fullscreen,
          })}
        >
          <slot name="side"></slot>
          <div id="content">
            <slot></slot>
          </div>
        </div>
        <slot
          name="accessibility"
          @arc-accessibility-change=${this.handleAccessibilityChange}>
            <arc-accessibility
            id="accessibility"
            @arc-accessibility-change=${this.handleAccessibilityChange}>
            </arc-accessibility>
        </slot>
        <slot name="bottom">
          <arc-bottombar>
            <arc-icon-button name=${ICON_TYPES.home} href="/" label="Return home">Home</arc-icon-button>
            <arc-icon-button
              name=${ICON_TYPES.accessibility}
              label="Accessibility panel"
              @click=${this.showAccessibility}
              >Accessibility
            </arc-icon-button>
          </arc-bottombar>
        </slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-container': ArcContainer;
  }
}
