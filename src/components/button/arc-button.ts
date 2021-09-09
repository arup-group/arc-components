import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('arc-button')
export class ArcButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      cursor: pointer;
      width: auto;
      --min-width: 6rem;
      --background-color: rgb(var(--arc-color-default));
    }

    :host *, :host ::before, :host ::after {
      box-sizing: inherit;
    }

    /* Button */
    #button {
      min-height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgb(var(--arc-input-color));
      background-color: var(--background-color);
      border: none;
      border-radius: var(--arc-border-radius-medium);
      box-shadow: var(--arc-box-shadow);
      font-family: var(--arc-font-button);
      font-size: var(--arc-font-size-small);
      font-weight: var(--arc-font-weight-semibold);
      cursor: inherit;
      text-decoration: none;
      user-select: none;
      line-height: normal;
      outline: none;
      padding: 0;
      -webkit-appearance: none;
      white-space: nowrap;
    }

    /* Button - Disabled */
    :host([disabled]) #button {
      color: rgb(var(--arc-input-color)); !important;
      opacity: 0.5;
      box-shadow: none;
      cursor: default;
    }

    /* Main - Colors */
    :host([color='primary']) #button {
      color: rgb(var(--arc-container-color));
      --background-color: rgb(var(--arc-color-primary));
    }
    :host([color='error']) #button {
      --background-color: rgb(var(--arc-color-error));
    }
    :host([color='warning']) #button {
      --background-color: rgb(var(--arc-color-warning));
    }
    :host([color='info']) #button {
      --background-color: rgb(var(--arc-color-info));
    }
    :host([color='success']) #button {
      --background-color: rgb(var(--arc-color-success));
    }

    /* Main - Hover */
    :host(:not([type='tab']):not([type='outlined']):not([disabled])) #button:hover {
      background-image: linear-gradient(var(--arc-hover-dark) 0 0);
    }

    /* Main - Disabled */
    :host(:not([type='outlined']):not([type='tab'])[disabled]) #button {
      background-image: linear-gradient(var(--arc-hover-dark) 0 0);
    }

    /* Tile */
    :host([type='tile']) #button {
      border-radius: 0;
    }

    /* Outlined */
    :host([type='outlined']) #button {
      color: var(--background-color);
      border: var(--arc-border-width) solid currentColor;
      background-color: transparent;
      box-shadow: none;
    }

    /* Outlined - Default */
    :host([type='outlined'][color='default']:not([disabled])) #button {
      color: rgb(var(--arc-font-color));
    }

    /* Outlined - Hover */
    :host([type='outlined']:not([disabled])) #button:hover {
      background-color: currentColor;
      background-image: linear-gradient(var(--arc-hover-light) 0 0);
    }

    /* Outlined - Disabled */
    :host([type='outlined'][disabled]) #button {
      color: rgba(var(--arc-input-color),);
      border-color: rgba(var(--arc-input-color),);
    }

    /* Tab */
    :host([type='tab']) #button {
      color: rgb(var(--arc-tab-color));
      background: none;
      border-radius: 0;
      box-shadow: none;
      min-width: var(--min-width);
    }
    /* Tab - Active */
    :host([type='tab']:not([disabled])[active]) #button {
      border-bottom: solid 2px currentColor;
    }
    /* Tab - Hover */
    :host([type='tab']:not([disabled])) #button:hover {
      background-color: currentColor;
      background-image: linear-gradient(var(--arc-hover-light) 0 0);
    }

    /* Sizes */
    :host([size='small']) #button {height: var(--arc-input-height-small);}

    :host([size='small']) span {padding: 0 var(--arc-spacing-small);}

    :host([size='medium']) #button {height: var(--arc-input-height-medium);}

    :host([size='medium']) span {padding: 0 var(--arc-spacing-medium);}

    :host([size='large']) #button {height: var(--arc-input-height-large);}

    :host([size='large']) span {padding: 0 var(--arc-spacing-large);}
  `;

  /** @type { 'contained' | 'tile' | 'outlined' | 'tab' } */
  @property({ type: String, reflect: true })
  type: string = 'contained';

  /** @type { 'default' | 'primary' | 'error' | 'warning' | 'info' | 'success' } */
  @property({ type: String, reflect: true })
  color: string = 'default';

  /** @type { 'small' | 'medium' | 'large' } */
  @property({type: String, reflect: true })
  size: string = 'medium';

  @property({type: Boolean, reflect: true})
  active: boolean = false;

  @property({type: Boolean, reflect: true})
  disabled: boolean = false;

  @property()
  href = null;

  @query('#button')
  button!: HTMLSpanElement;

  render() {
    return html`
      ${this.href && !this.disabled
        ? html`<a id='button' href='${this.href}' tabindex="-1"><span><slot></slot></span></a>`
        : html`<button id='button' tabindex="-1"><span><slot></slot></span></button>`
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-button': ArcButton
  }
}
