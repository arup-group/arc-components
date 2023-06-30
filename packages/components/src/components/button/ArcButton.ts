import { LitElement } from 'lit';
import { html, literal } from 'lit/static-html.js';
import { property, query } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { FormController } from '../../internal/form-control.js';
import { INPUT_SIZES, InputSize, THEME_COLORS, ThemeColor } from '../../internal/constants/styleConstants.js';
import { BUTTON_TYPES, ButtonType, ButtonTarget } from './constants/ButtonConstants.js';
import styles from './arc-button.styles.js';
import '../spinner/arc-spinner.js';

/**
 * @slot default - The button's label.
 * @slot prefix - Used to prepend an icon or similar element to the button.
 * @slot suffix - Used to append an icon or similar element to the button.
 *
 * @cssproperty --min-width - Set the min width of the button.
 * @cssproperty --btn-color - Overwrite the font color of the button.
 * @cssproperty --btn-background - Overwrite the background color of the button.
 */
export default class ArcButton extends LitElement {
  /** @internal */
  static tag = 'arc-button';

  static styles = styles;

  /** @internal */
  @query('#main') button: HTMLButtonElement | HTMLLinkElement;

  /** @internal - Controller used to recognize form controls located inside a shadow root. */
  private readonly formController = new FormController(this);

  /** Set the color of the button. */
  @property({ type: String, reflect: true }) color: ThemeColor = THEME_COLORS.primary;

  /** Set the size of the button. */
  @property({ type: String, reflect: true }) size: InputSize = INPUT_SIZES.medium;

  /** Set the type of the button. */
  @property({ type: String, reflect: true }) type: ButtonType = BUTTON_TYPES.filled;

  /** An optional name for the button. Ignored when `href` is set. */
  @property({ type: String }) name: string;

  /** An optional value for the button. Ignored when `href` is set. */
  @property({ type: String }) value: string;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property({ type: String }) href: string;

  /** Tells the browser where to open the link. Only used when `href` is set. */
  @property({ type: String }) target: ButtonTarget;

  /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
  @property({ type: String }) download: string;

  /** Draws the button in an active state. */
  @property({ type: Boolean, reflect: true }) active: boolean = false;

  /** Draws the button in a disabled state. */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /** Draws the button in a loading state. */
  @property({ type: Boolean, reflect: true }) loading: boolean = false;

  /** Indicates if activating the button should submit the form. Ignored when href is set. */
  @property({ type: Boolean, reflect: true }) submit: boolean = false;

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
      return;
    }

    /* Submit the surrounding form with the formSubmitController class. */
    if (this.submit) {
      this.formController.submit();
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
          'button--small': this.size === INPUT_SIZES.small,
          'button--medium': this.size === INPUT_SIZES.medium,
          'button--large': this.size === INPUT_SIZES.large,
          'button--default': this.color === THEME_COLORS.default,
          'button--primary': this.color === THEME_COLORS.primary,
          'button--secondary': this.color === THEME_COLORS.secondary,
          'button--error': this.color === THEME_COLORS.error,
          'button--warning': this.color === THEME_COLORS.warning,
          'button--info': this.color === THEME_COLORS.info,
          'button--success': this.color === THEME_COLORS.success,
          'button--filled': this.type === BUTTON_TYPES.filled,
          'button--outlined': this.type === BUTTON_TYPES.outlined,
          'button--tab': this.type === BUTTON_TYPES.tab,
          'button--active': this.active,
          'button--disabled': this.disabled,
          'button--loading': this.loading,
        })}
        ?disabled=${ifDefined(isLink ? undefined : this.disabled)}
        type=${this.submit ? 'submit' : 'button'}
        name=${ifDefined(isLink ? undefined : this.name)}
        value=${ifDefined(isLink ? undefined : this.value)}
        href=${ifDefined(this.href || undefined)}
        target=${ifDefined(this.target || undefined)}
        download=${ifDefined(this.download || undefined)}
        rel=${ifDefined(this.target ? 'noreferrer noopener' : undefined)}
        role="button"
        aria-disabled=${this.disabled ? 'true' : 'false'}
        tabindex=${this.disabled ? '-1' : '0'}
        @click=${this._handleClick}
      >
        <slot id="prefix" name="prefix"></slot>
        <slot id="label"></slot>
        <slot id="suffix" name="suffix"></slot>
        ${when(this.loading, () => html`<arc-spinner id="loader"></arc-spinner>`)}
      </${tag}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-button': ArcButton;
  }
}
