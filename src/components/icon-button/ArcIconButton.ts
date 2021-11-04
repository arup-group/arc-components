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
        background: none;
        border: none;
        border-radius: 0;
        font-size: inherit;
        color: rgb(var(--arc-font-color));
        padding: var(--arc-spacing-small);
        cursor: pointer;
        transition: var(--arc-transition-medium) color;
        -webkit-appearance: none;
      }

      #action {
        font-size: var(--arc-font-size-xx-small);
      }

      /* Hover & Focus */
      #button:hover:not(:host([disabled])),
      #button${focusVisibleSelector}:not(:host([disabled])) {
        background-color: currentColor;
        background-image: linear-gradient(var(--arc-hover-lighter) 0 0);
      }

      /* Active */
      #button:active:not(:host([disabled])) {
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

  @property() name: string;

  @property() href: string;

  @property() target: '_blank' | '_parent' | '_self' | '_top';

  @property() download: string;

  @property() label = '';

  @property({ type: Boolean, reflect: true }) disabled = false;

  render() {
    const interior = html`
      <arc-icon name=${ifDefined(this.name)} aria-hidden='true'></arc-icon>
      <slot id='action'></slot>
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
            >${interior}</a
          >
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
