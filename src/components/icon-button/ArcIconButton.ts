import { css, LitElement, nothing } from 'lit';
import { html, literal } from 'lit/static-html.js';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import componentStyles from '../../styles/component.styles.js';
import { ButtonTarget } from '../button/constants/ButtonConstants.js';
import { IconType } from '../icon/constants/IconConstants.js';
import '../icon/arc-icon.js';
import '../spinner/arc-spinner.js';

/**
 * @slot default - The button's label.
 *
 * @cssproperty --icon-color - Overwrite the color of the icon.
 */
export default class ArcIconButton extends LitElement {
  static tag = 'arc-icon-button';

  static styles = [
    componentStyles,
    css`
      :host {
        display: inline-flex;
        cursor: pointer;
        --icon-color: rgb(var(--arc-font-color));
      }

      #button {
        display: grid;
        align-content: center;
        text-align: center;
        width: 100%;
        min-height: 100%;
        border: none;
        font-family: var(--arc-font-button);
        line-height: inherit;
        text-decoration: none;
        user-select: none;
        white-space: nowrap;
        vertical-align: middle;
        padding: 0;
        cursor: inherit;
        color: var(--icon-color);
        background: none;
        outline: none;
        -webkit-appearance: none;
      }

      #iconWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #icon {
        padding: var(--arc-spacing-small);
        border-radius: 50%;
      }

      #action {
        font-size: var(--arc-font-size-xx-small);
        margin-top: -0.2rem;
      }

      /* Hover & Focus */
      :host(:not([disabled])) #button:hover #icon,
      :host(:not([disabled])) #button:focus-visible #icon {
        background: rgba(var(--arc-font-color), 10%);
      }

      /* Mouse down */
      :host(:not([disabled])) #button:active #icon {
        background: rgba(var(--arc-font-color), 30%);
      }

      /* Active */
      :host(:not([disabled])[active]) #button {
        border-bottom: calc(var(--arc-border-width) * 2) var(--arc-border-style) currentColor;
      }

      /* Disabled */
      :host([disabled]) #button {
        opacity: 0.5;
        cursor: not-allowed;
      }

      /* Loading */
      :host([loading]) #icon {
        visibility: hidden;
      }

      #loader {
        position: absolute;
      }

      /* Prevent click events from firing on slots */
      #iconWrapper,
      #icon,
      #action {
        pointer-events: none;
      }
    `,
  ];

  /** @internal */
  @query('#button') button: HTMLButtonElement | HTMLLinkElement;

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

  handleClick(event: MouseEvent) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  render() {
    const isLink = !!this.href;
    const tag = isLink ? literal`a` : literal`button`;

    /* eslint-disable lit/binding-positions, lit/no-invalid-html */
    return html`
      <${tag}
        id="button"
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
        @click=${this.handleClick}
      >
        <span id="iconWrapper" aria-hidden="true">
          <arc-icon id="icon" part="icon" name=${ifDefined(this.name || undefined)}></arc-icon>
          ${this.loading ? html`<arc-spinner id="loader"></arc-spinner>` : nothing}
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
