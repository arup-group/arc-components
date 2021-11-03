import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import componentStyles from '../../styles/component.styles.js';

import { focusVisibleSelector } from '../../utilities/focus-visible.js';

export default class ArcIconButton extends LitElement {
  static tag = 'arc-icon-button';

  static styles = [
    componentStyles,
    css`
      :host {
        display: inline-block;
      }

      #button {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        background: none;
        border: none;
        border-radius: var(--arc-border-radius-medium);
        font-size: inherit;
        color: rgb(var(--arc-font-color));
        padding: var(--arc-spacing-small);
        cursor: pointer;
        transition: var(--arc-transition-medium) color;
        -webkit-appearance: none;
      }

      /* Disabled */
      :host([disabled]) #button {
        opacity: 0.5;
        cursor: not-allowed;
      }

      /* Hover & Focus */
      :host(:not([disabled])) #button:hover,
      :host(:not([disabled])) #button:focus {
        color: rgb(var(--arc-color-primary));
      }

      /* Mouse-hold */
      #button:active:not(:host[disabled]) {
        background-color: currentColor;
        background-image: linear-gradient(var(--arc-hover-light) 0 0);
      }

      #button:focus {
        outline: none;
      }

      #button${focusVisibleSelector} {
        box-shadow: var(--arc-focus-ring);
      }
    `,
  ];

  @query('#button') button: HTMLButtonElement | HTMLLinkElement;

  @property() name: string;

  @property() href: string;

  @property() target: '_blank' | '_parent' | '_self' | '_top';

  @property() download: string;

  @property() label = '';

  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Simulates a click on the button. */
  click() {
    this.button.click();
  }

  render() {
    const interior = html`
      <arc-icon
        name=${ifDefined(this.name)}
        aria-hidden='true'
      ></arc-icon>
    `;

    return html`
      ${this.href
        ? html`
          <a
            id='button'
            href=${ifDefined(this.href)}
            target=${ifDefined(this.target)}
            download=${ifDefined(this.download)}
            rel=${ifDefined(this.target ? 'noreferrer noopener' : undefined)}
            role='button'
            aria-disabled='${this.disabled ? 'true' : 'false'}'
            aria-label=${this.label}
            tabindex=${this.disabled ? '-1' : '0'}
            >${interior}</a
          >
        `
        : html`
          <button
            id='button'
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
