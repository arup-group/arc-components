import { css, html, LitElement } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import componentStyles from '../../styles/component.styles.js';
import { hasSlot } from '../../utilities/dom-utils.js';

import { focusVisibleSelector } from '../../utilities/focus-visible.js';

export default class ArcIconButton extends LitElement {
  static tag = 'arc-icon-button';

  static styles = [
    componentStyles,
    css`
      :host {
        display: inline-flex;
        width: auto;
        cursor: pointer;
        --min-width: 0;
      }
      
      #button {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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

      /* Active */
      :host(:not([disabled])) #button:active #icon {
        background-image: linear-gradient(var(--arc-hover-light) 0 0);
      }

      /* Disabled */
      :host([disabled]) #button {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `,
  ];

  @query('#button') button: HTMLButtonElement | HTMLLinkElement;

  @state() private hasLabel = false;

  @property() name: string;

  @property() href: string;

  @property() target: '_blank' | '_parent' | '_self' | '_top';

  @property() download: string;

  @property() label = '';

  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.handleSlotChange();
  }

  handleSlotChange() {
    this.hasLabel = hasSlot(this);
  }

  render() {
    const interior = html`
      <arc-icon id='icon' name=${ifDefined(this.name)} aria-hidden='true'></arc-icon>
      ${this.hasLabel ? html`<span id='action'><slot @slotchange=${this.handleSlotChange}></slot></span>` : null}
    `;

    return html`
      ${this.href
        ? html`
          <a
            id='button'
            part='base'
            href=${ifDefined(this.href)}
            target=${ifDefined(this.target)}
            download=${ifDefined(this.download)}
            rel=${ifDefined(this.target ? 'noreferrer noopener' : undefined)}
            role='button'
            aria-disabled='${this.disabled ? 'true' : 'false'}'
            aria-label=${this.label}
            tabindex=${this.disabled ? '-1' : '0'}
            >${interior}
          </a>
        `
        : html`
          <button
            id='button'
            part='base'
            ?disabled=${this.disabled}
            type='button'
            aria-label=${this.label}
          >
            ${interior}
          </button>
        `
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-button': ArcIconButton;
  }
}
