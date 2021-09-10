import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

@customElement('arc-button')
export class ArcButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      cursor: pointer;
      width: auto;
      --min-width: 6rem;
    }

    :host *, :host ::before, :host ::after {
      box-sizing: inherit;
    }

    #button {
      min-height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgb(var(--arc-input-color));
      background-color: var(--btn-color-palette);
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

    /* Disabled */
    :host([disabled]) #button {
      opacity: 0.5;
      box-shadow: none;
      cursor: default;
    }

    /* Hover */
    :host(:not([type='tab']):not([type='outlined']):not([disabled])) #button:hover {
      background-image: linear-gradient(var(--arc-hover-dark) 0 0);
    }

    /* Color overwrites */
    :host([color='primary']) #button,
    :host([color='secondary']) #button {
      color: rgb(var(--arc-container-color));
    }

    /* Sizes */
    :host([size='small']) #button {height: var(--arc-input-height-small);}

    :host([size='small']) span {padding: 0 var(--arc-spacing-small);}

    :host([size='medium']) #button {height: var(--arc-input-height-medium);}

    :host([size='medium']) span {padding: 0 var(--arc-spacing-medium);}

    :host([size='large']) #button {height: var(--arc-input-height-large);}

    :host([size='large']) span {padding: 0 var(--arc-spacing-large);}

    /* Tile */
    :host([type='tile']) #button {
      border-radius: 0;
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

    /* Outlined */
    :host([type='outlined']) #button {
      color: var(--btn-color-palette);
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
  `;

  /** @type { 'contained' | 'tile' | 'outlined' | 'tab' } */
  @property({ type: String, reflect: true })
  type: string = 'contained';

  /** @type { 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' } */
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
    const styles = { '--btn-color-palette': `rgb(var(--arc-color-${this.color}))` };

    return html`
      ${this.href && !this.disabled
        ? html`<a id='button' style=${styleMap(styles)} href='${this.href}' tabindex="-1"><span><slot></slot></span></a>`
        : html`<button id='button' style=${styleMap(styles)} tabindex="-1"><span><slot></slot></span></button>`
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-button': ArcButton
  }
}
