import { LitElement } from 'lit';
import { html, literal } from 'lit/static-html.js';
import { property, query } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { ButtonTarget } from '../button/constants/ButtonConstants.js';
import { IconType } from '../icon/constants/IconConstants.js';
// @ts-ignore
import componentStyles from '../../styles/component.styles.css.js';
// @ts-ignore
import styles from './arc-icon-button.styles.css.js';
import '../icon/arc-icon.js';
import '../spinner/arc-spinner.js';

/**
 * @slot default - The button's label.
 *
 * @cssproperty --icon-color - Overwrite the color of the icon.
 */
export default class ArcIconButton extends LitElement {
  /** @internal */
  static tag = 'arc-icon-button';

  static styles = [componentStyles, styles];

  /** @internal */
  @query('#main') button: HTMLButtonElement | HTMLLinkElement;

  /** The name of the icon to draw. */
  @property({ type: String }) name: IconType;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property({ type: String }) href: string;

  /** Tells the browser where to open the link. Only used when `href` is set. */
  @property({ type: String }) target: ButtonTarget;

  /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
  @property({ type: String }) download: string;

  /** A description that gets read by screen readers and other assistive devices. For optimal accessibility, you should always include a label that describes what the icon button does. */
  @property({ type: String }) label: string = '';

  /** Draws the button in an active state. */
  @property({ type: Boolean, reflect: true }) active: boolean = false;

  /** Draws the button in a disabled state. */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /** Draws the button in a loading state. */
  @property({ type: Boolean, reflect: true }) loading: boolean = false;

  /* Simulates a click on the button. */
  click() {
    this.button.click();
  }

  /* Sets focus on the button. */
  focus(options?: FocusOptions) {
    this.button.focus(options);
  }

  /* Removes focus from the button. */
  blur() {
    this.button.blur();
  }

  /* Handle the click of the button */
  private _handleClick(event: MouseEvent) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  protected render() {
    const isLink = !!this.href;
    const tag = isLink ? literal`a` : literal`button`;

    /* eslint-disable lit/binding-positions, lit/no-invalid-html */
    return html`
      <${tag}
        id="main"
        class=${classMap({
          button: true,
          'button--active': this.active,
          'button--disabled': this.disabled,
          'button--loading': this.loading,
        })}
        ?disabled=${ifDefined(isLink ? undefined : this.disabled)}
        type="button"
        href=${ifDefined(this.href || undefined)}
        target=${ifDefined(this.target || undefined)}
        download=${ifDefined(this.download || undefined)}
        rel=${ifDefined(this.target ? 'noreferrer noopener' : undefined)}
        role="button"
        aria-disabled=${this.disabled ? 'true' : 'false'}
        aria-label=${this.label}
        tabindex=${this.disabled ? '-1' : '0'}
        @click=${this._handleClick}
      >
        <span id="iconWrapper" aria-hidden="true">
          <arc-icon id="icon" part="icon" name=${ifDefined(this.name || undefined)}></arc-icon>
          ${when(this.loading, () => html`<arc-spinner id="loader"></arc-spinner>`)}
        </span>
        <span id="action"><slot></slot></span>
      </${tag}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-button': ArcIconButton;
  }
}
