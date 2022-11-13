import { LitElement } from 'lit';
import { html, literal } from 'lit/static-html.js';
import { property, query } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { FormController } from '../../internal/form-control.js';
import { INPUT_SIZES, InputSize, THEME_COLORS, ThemeColor } from '../../internal/constants/styleConstants.js';
import { BUTTON_TYPES, ButtonType, ButtonTarget } from './constants/ButtonConstants.js';
// @ts-ignore
import styles from './arc-button.styles.css.js';
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
          'arc-button': true,
          'arc-button--size-small': this.size === INPUT_SIZES.small,
          'arc-button--size-medium': this.size === INPUT_SIZES.medium,
          'arc-button--size-large': this.size === INPUT_SIZES.large,
          'arc-button--color-default': this.color === THEME_COLORS.default,
          'arc-button--color-primary': this.color === THEME_COLORS.primary,
          'arc-button--color-secondary': this.color === THEME_COLORS.secondary,
          'arc-button--color-error': this.color === THEME_COLORS.error,
          'arc-button--color-warning': this.color === THEME_COLORS.warning,
          'arc-button--color-info': this.color === THEME_COLORS.info,
          'arc-button--color-success': this.color === THEME_COLORS.success,
          'arc-button--type-filled': this.type === BUTTON_TYPES.filled,
          'arc-button--type-outlined': this.type === BUTTON_TYPES.outlined,
          'arc-button--type-tab': this.type === BUTTON_TYPES.tab,
          'arc-button--active': this.active,
          'arc-button--disabled': this.disabled,
          'arc-button--loading': this.loading,
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
        <slot id="prefix" class="arc-button--prefix" name="prefix"></slot>
        <slot id="label" class="arc-button--label"></slot>
        <slot id="suffix" class="arc-button--suffix" name="suffix"></slot>
        ${when(this.loading, () => html`<arc-spinner id="loader" class="arc-button--loader"></arc-spinner>`)}
      </${tag}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-button': ArcButton;
  }
}
