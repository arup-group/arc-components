import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { watch } from '../../internal/watch.js';
import {
  CONTAINER_THEME_PREFERENCES,
  ContainerThemePreference,
} from './constants/ContainerConstants.js';
import type ArcAccessibility from '../accessibility/ArcAccessibility.js';
import styles from './arc-container.styles.js';
import '../navbar/arc-navbar.js';
import '../accessibility/arc-accessibility.js';
import '../bottombar/arc-bottombar.js';

/**
 * @slot default - The container's content.
 * @slot nav - The container's navbar.
 * @slot accessibility - The accessibility drawer.
 * @slot side - The container's sidebar.
 * @slot bottom - The container's bottom bar.
 * @slot banner - The container's banner.
 *
 * @cssproperty --arc-banner-background - Set the background color of the banner.
 * @cssproperty --arc-banner-color - Set the font color of the banner.
 *
 * @ssr - True
 */
export default class ArcContainer extends LitElement {
  /** @internal */
  static tag = 'arc-container';

  /** @internal */
  static styles = styles;

  /** @internal */
  @query('#main') container: HTMLElement;

  /** @internal */
  @query('#accessibility') accessibility: ArcAccessibility;

  /** @internal - Reference to the preferred theme set by the app. */
  private _appPreferredTheme: ContainerThemePreference;

  /** Set the starting theme for the container. Once loaded, the built-in accessibility will be responsible for this property. */
  @property({ type: String, reflect: true }) theme: ContainerThemePreference =
    CONTAINER_THEME_PREFERENCES.auto;

  /** Set the container to fullscreen mode. This hides the padding, margin and gap values. */
  @property({ type: Boolean }) fullscreen: boolean = false;

  /** Set the banner text. This enables the sticky banner to be rendered above the container. */
  @property() banner: string | boolean = false;

  @watch('theme')
  handleThemeChange() {
    /* If the provided theme is not valid, force auto theme */
    if (!(this.theme in CONTAINER_THEME_PREFERENCES)) {
      this.theme = CONTAINER_THEME_PREFERENCES.auto;
    }
  }

  /* Listen to keyboard input on the page */
  connectedCallback() {
    super.connectedCallback();

    /* If the app provided theme is not valid, force auto theme */
    if (!(this.theme in CONTAINER_THEME_PREFERENCES)) {
      this.theme = CONTAINER_THEME_PREFERENCES.auto;
    }
    /* Store a reference of the app-defined theme */
    this._appPreferredTheme = this.theme;
  }

  /* Update the theme when the @arc-accessibility-change event emits */
  handleAccessibilityChange(event: CustomEvent) {
    const { preferences } = event.detail;
    const { theme }: { theme: ContainerThemePreference } = preferences;
    /* Make sure that the new theme is valid */
    if (!!theme && theme in CONTAINER_THEME_PREFERENCES) {
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
    const banner = html`
      <div class="banner">
        ${when(
          typeof this.banner === 'string',
          () => html`<span>${this.banner}</span>`,
          () => html`<slot name="banner"></slot>`,
        )}
      </div>
    `;

    return html`
      ${when(this.banner, () => banner)}
      <div id="main">
        <slot
          id="nav"
          name="nav"
          @arc-show-accessibility=${this.showAccessibility}
        >
          <arc-navbar
            @arc-show-accessibility=${this.showAccessibility}
          ></arc-navbar>
        </slot>
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
          @arc-accessibility-change=${this.handleAccessibilityChange}
        >
          <arc-accessibility
            id="accessibility"
            @arc-accessibility-change=${this.handleAccessibilityChange}
          ></arc-accessibility>
        </slot>
        <slot name="bottom">
          <arc-bottombar
            @arc-show-accessibility=${this.showAccessibility}
          ></arc-bottombar>
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
