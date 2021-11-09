import { css, html, LitElement } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import componentStyles from '../../styles/component.styles.js';
import { hasSlot } from '../../utilities/dom-utils.js';
import { focusVisibleSelector } from '../../utilities/focus-visible.js';

import '../spinner/arc-spinner.js';

export default class ArcIconButton extends LitElement {
  static tag = 'arc-icon-button';

  static styles = [
    componentStyles,
    css`
      :host {
        display: inline-block;
        width: auto;
        cursor: pointer;
        --min-width: 0;
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
        min-width: var(--min-width);
        min-height: 100%;
        border: none;
        font-family: var(--arc-font-button);
        font-size: var(--arc-font-size-small);
        font-weight: var(--arc-font-weight-semibold);
        line-height: normal;
        text-decoration: none;
        user-select: none;
        white-space: nowrap;
        vertical-align: middle;
        padding: 0;
        cursor: inherit;
        color: inherit;
        background: none;
        outline: none;
        -webkit-appearance: none;
      }
      
      #icon {
        padding: var(--arc-spacing-small);
        border-radius: 50%;
      }

      #action {
        margin-top: -.2rem;
        padding-bottom: var(--arc-spacing-small);
        font-size: var(--arc-font-size-xx-small);
      }

      /* Hover & Focus */
      :host(:not([disabled])) #button:hover #icon,
      :host(:not([disabled])) #button${focusVisibleSelector} #icon {
        background-color: currentColor;
        background-image: linear-gradient(var(--arc-hover-lighter) 0 0);
      }

      /* Mouse down */
      :host(:not([disabled])) #button:active #icon {
        background-image: linear-gradient(var(--arc-hover-light) 0 0);
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
      
      #iconWrapper, #icon, #action {
        pointer-events:none
      }
    `,
  ];

  @query('#button') button: HTMLButtonElement | HTMLLinkElement;

  @state() private hasLabel = false;

  @property() name: string;

  @property() target: '_blank' | '_parent' | '_self' | '_top';

  @property() href: string;

  @property() download: string;

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
    const interior = html`
      <span id='iconWrapper'>
        <arc-icon id='icon' name=${ifDefined(this.name)} aria-hidden='true'></arc-icon>
        ${this.loading ? html`<arc-spinner id="loader"></arc-spinner>` : null}
      </span>
      ${this.hasLabel ? html`<span id='action'><slot @slotchange=${this.handleSlotChange}></slot></span>` : null}
    `;

    return this.href
      ? html`
        <a
          id='button'
          href=${ifDefined(this.href)}
          target=${ifDefined(this.target)}
          download=${ifDefined(this.download)}
          rel=${ifDefined(this.target ? 'noreferrer noopener' : undefined)}
          role='button'
          aria-disabled=${this.disabled ? 'true' : 'false'}
          aria-label=${this.label}
          @click=${this.handleClick}
          >${interior}
        </a>
      `
      : html`
        <button
          id='button'
          ?disabled=${this.disabled}
          type='button'
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
