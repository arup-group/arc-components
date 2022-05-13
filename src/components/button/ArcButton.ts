/* stylelint-disable missing-comma */

import { css, LitElement } from 'lit';
import { html, literal } from 'lit/static-html.js';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { FormController } from '../../internal/form-control.js';
import componentStyles from '../../styles/component.styles.js';
import { INPUT_SIZES, InputSize, THEME_COLORS, ThemeColor } from '../../internal/constants/styleConstants.js';
import { BUTTON_TYPES, ButtonType, ButtonTarget } from './constants/ButtonConstants.js';
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
  static tag = 'arc-button';

  static styles = [
    componentStyles,
    css`
      :host {
        display: inline-block;
        width: auto;
        cursor: pointer;
        --min-width: 0;
      }

      #button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-width: var(--min-width);
        min-height: 100%;
        border: none;
        border-radius: var(--arc-border-radius-medium);
        font-family: var(--arc-font-button);
        font-size: inherit;
        letter-spacing: inherit;
        font-weight: var(--arc-font-weight-semibold);
        text-decoration: none;
        user-select: none;
        white-space: nowrap;
        vertical-align: middle;
        padding: 0;
        cursor: inherit;
        color: var(--btn-color);
        background-color: var(--btn-background);
        gap: var(--arc-spacing-small);
        outline: none;
        -webkit-appearance: none;
      }

      /* Tile */
      :host([type='tile']) #button {
        border-radius: 0;
      }

      /* Tab */
      :host([type='tab']) {
        height: 100%;
      }

      :host([type='tab']) #button {
        background: none;
        border-radius: 0;
      }

      /* Tab - Active */
      :host([type='tab']:not([disabled])[active]) #button {
        border-bottom: calc(var(--arc-border-width) * 2) var(--arc-border-style) currentColor;
      }

      /* Pill */
      :host([type='pill'][size='small']) #button {
        border-radius: var(--arc-input-height-small);
      }

      :host([type='pill'][size='medium']) #button {
        border-radius: var(--arc-input-height-medium);
      }

      :host([type='pill'][size='large']) #button {
        border-radius: var(--arc-input-height-large);
      }

      /* Outlined & Pill(Not primary/secondary) */
      :host([type='outlined']) #button,
      :host([type='pill']:not([color='primary']):not([color='secondary'])) #button {
        border: var(--arc-border-width) var(--arc-border-style) currentColor;
        background-color: transparent;
      }

      /* Default - Hover & Focus */
      :host(:not([type='tab']):not([type='outlined']):not([disabled]):not([loading])) #button:hover,
      :host(:not([type='tab']):not([type='outlined']):not([disabled]):not([loading])) #button:focus-visible {
        background-image: linear-gradient(var(--arc-hover-dark) 0 0);
      }

      /* Tab, Outlined & Pill(Not primary/secondary) - Hover & Focus */
      :host([type='tab']:not([disabled]):not([loading])) #button:hover,
      :host([type='outlined']:not([disabled]):not([loading])) #button:hover,
      :host([type='pill']:not([color='primary']):not([color='secondary']):not([disabled]):not([loading])) #button:hover,
      :host([type='tab']:not([disabled]):not([loading])) #button:focus-visible,
      :host([type='outlined']:not([disabled]):not([loading])) #button:focus-visible,
      :host([type='pill']:not([color='primary']):not([color='secondary']):not([disabled]):not([loading]))
        #button:focus-visible {
        background-color: currentColor;
        background-image: linear-gradient(var(--arc-hover-lighter) 0 0);
      }

      /* Default - Mouse down */
      :host(:not([type='tab']):not([type='outlined']):not([disabled]):not([loading])) #button:active {
        background-image: linear-gradient(var(--arc-hover-darker) 0 0);
      }

      /* Tab, Outlined & Pill (Not primary) - Mouse down */
      :host([type='tab']:not([disabled]):not([loading])) #button:active,
      :host([type='outlined']:not([disabled]):not([loading])) #button:active,
      :host([type='pill']:not([color='primary']):not([color='secondary']):not([disabled]):not([loading]))
        #button:active {
        background-image: linear-gradient(var(--arc-hover-light) 0 0);
      }

      /* Focus outline (same for all button states) */
      :host(:not([disabled]):not([loading])) #button:focus-visible {
        box-shadow: var(--arc-box-shadow-focus) var(--focus-color);
      }

      /* Disabled */
      :host([disabled]) #button {
        opacity: 0.5;
        cursor: not-allowed;
      }

      /* Loading */
      :host([loading]) #prefix,
      :host([loading]) #label,
      :host([loading]) #suffix {
        visibility: hidden;
      }

      #loader {
        position: absolute;
      }

      /* Prevent click events from firing when a user clicks on a slot */
      slot {
        pointer-events: none;
      }
    `,
  ];

  /** @internal */
  @query('#button') button: HTMLButtonElement | HTMLLinkElement;

  /** @internal - Controller used to recognize form controls located inside a shadow root. */
  private readonly formController = new FormController(this);

  /** Set the color of the button. */
  @property({ type: String, reflect: true }) color: ThemeColor = THEME_COLORS.default;

  /** Set the size of the button. */
  @property({ type: String, reflect: true }) size: InputSize = INPUT_SIZES.medium;

  /** Set the type of the button. */
  @property({ type: String, reflect: true }) type: ButtonType = BUTTON_TYPES.pill;

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

  handleClick(event: MouseEvent) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
    }

    /* Submit the surrounding form with the formSubmitController class. */
    if (this.submit) {
      this.formController.submit();
    }
  }

  render() {
    const isLink = !!this.href;
    const tag = isLink ? literal`a` : literal`button`;
    const compStyles = window.getComputedStyle(this);
    const userDefinedColor = () => compStyles.getPropertyValue('--btn-color');
    const userDefinedBackground = () => compStyles.getPropertyValue('--btn-background');

    const getColor = () => {
      switch (this.type) {
        case BUTTON_TYPES.outlined: {
          return this.color === THEME_COLORS.default ? 'rgb(var(--arc-input-color))' : 'var(--btn-background)';
        }
        case BUTTON_TYPES.pill: {
          if (this.color === THEME_COLORS.default) {
            return 'rgb(var(--arc-input-color))';
          }
          if (this.color === THEME_COLORS.primary || this.color === THEME_COLORS.secondary) {
            return 'rgb(var(--arc-container-color))';
          }
          return 'var(--btn-background)';
        }
        case BUTTON_TYPES.tab: {
          return this.color === THEME_COLORS.default ? 'rgb(var(--arc-color-primary))' : 'var(--btn-background)';
        }
        default: {
          return this.color === THEME_COLORS.primary || this.color === THEME_COLORS.secondary
            ? 'rgb(var(--arc-container-color))'
            : 'rgb(var(--arc-input-color))';
        }
      }
    };

    const btnStyles = {
      height: `var(--arc-input-height-${this.size})`,
      padding: `0 var(--arc-spacing-${this.size})`,
      '--btn-color': userDefinedColor().length > 0 ? null : getColor(),
      '--btn-background': userDefinedBackground().length > 0 ? null : `rgb(var(--arc-color-${this.color}))`,
      '--focus-color':
        this.color === THEME_COLORS.default
          ? 'rgba(var(--arc-input-color), 0.4)'
          : `rgba(var(--arc-color-${this.color}), 0.4)`,
    };

    /* eslint-disable lit/binding-positions, lit/no-invalid-html */
    return html`
      <${tag}
        id="button"
        style=${styleMap(btnStyles)}
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
        @click=${this.handleClick}
      >
        <slot id="prefix" name="prefix"></slot>
        <slot id="label"></slot>
        <slot id="suffix" name="suffix"></slot>
        ${this.loading ? html`<arc-spinner id="loader" style="--stroke-color: ${getColor()}"></arc-spinner>` : null}
      </${tag}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-button': ArcButton;
  }
}
