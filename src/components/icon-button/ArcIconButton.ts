import { css, html, LitElement } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import componentStyles from '../../styles/component.styles.js';
import { hasSlot } from '../../utilities/dom-utils.js';

import '../icon/arc-icon.js';
import '../spinner/arc-spinner.js';

export default class ArcIconButton extends LitElement {
  static tag = 'arc-icon-button';

  static styles = [
    componentStyles,
    css`
      :host {
        display: inline-block;
        cursor: pointer;
        --icon-color: rgb(var(--arc-font-color));
      }

      #iconWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100%;
        border: none;
        font-family: var(--arc-font-button);
        font-size: inherit;
        font-weight: var(--arc-font-weight-semibold);
        line-height: normal;
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

      #icon {
        padding: var(--arc-spacing-small);
        border-radius: 50%;
      }

      #action {
        font-size: var(--arc-font-size-xx-small);
        margin-top: -0.2rem;
      }

      /* Hover */
      :host(:not([disabled])) #button:hover #icon {
        background-color: currentColor;
        background-image: linear-gradient(var(--arc-hover-lighter) 0 0);
      }

      /* Focus & Mouse down */
      :host(:not([disabled])) #button:active #icon,
      :host(:not([disabled])) #button:focus-visible #icon {
        background-color: currentColor;
        background-image: linear-gradient(var(--arc-hover-light) 0 0);
      }

      /* Active */
      :host(:not([disabled])[active]) #button {
        border-bottom: calc(var(--arc-border-width) * 2) var(--arc-border-style)
          currentColor;
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

  @query('#button') button: HTMLButtonElement | HTMLLinkElement;

  @state() private hasLabel = false;

  @property() name: string;

  @property() target: '_blank' | '_parent' | '_self' | '_top';

  @property() href: string;

  @property() download: string;

  /**
   * A description that gets read by screen readers and other assistive devices. For optimal accessibility, you should
   * always include a label that describes what the icon button does.
   */
  @property() label = '';

  @property({ type: Boolean, reflect: true }) active = false;

  @property({ type: Boolean, reflect: true }) disabled = false;

  @property({ type: Boolean, reflect: true }) loading = false;

  connectedCallback() {
    super.connectedCallback();
    this.handleSlotChange();
  }

  /** Simulates a click on the button. */
  click() {
    this.button.click();
  }

  handleClick(event: MouseEvent) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  handleSlotChange() {
    this.hasLabel = hasSlot(this);
  }

  render() {
    const btnStyles = {
      padding: this.hasLabel ? '0 0 var(--arc-spacing-small) 0' : null,
    };

    const interior = html`
      <span id="iconWrapper" aria-hidden="true">
        <arc-icon id="icon" part="icon" name=${ifDefined(this.name)}></arc-icon>
        ${this.loading ? html`<arc-spinner id="loader"></arc-spinner>` : null}
      </span>
      ${this.hasLabel
        ? html`<span id="action"
            ><slot @slotchange=${this.handleSlotChange}></slot
          ></span>`
        : null}
    `;

    return this.href
      ? html`
          <a
            id="button"
            style=${styleMap(btnStyles)}
            href=${ifDefined(this.href)}
            target=${ifDefined(this.target)}
            download=${ifDefined(this.download)}
            rel=${ifDefined(this.target ? 'noreferrer noopener' : undefined)}
            role="button"
            aria-disabled=${this.disabled ? 'true' : 'false'}
            aria-label=${this.label}
            tabindex=${this.disabled ? '-1' : '0'}
            @click=${this.handleClick}
            >${interior}
          </a>
        `
      : html`
          <button
            id="button"
            style=${styleMap(btnStyles)}
            ?disabled=${this.disabled}
            type="button"
            aria-label=${this.label}
            @click=${this.handleClick}
          >
            ${interior}
          </button>
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-button': ArcIconButton;
  }
}