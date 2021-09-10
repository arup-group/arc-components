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
      --min-width: 0;
    }

    :host *, :host ::before, :host ::after {
      box-sizing: inherit;
    }

    #button {
      min-height: 100%;
      min-width: var(--min-width);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--btn-color);
      background-color: var(--btn-background);
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

    /* Sizes */
    :host([size='small']) #button {height: var(--arc-input-height-small);}

    :host([size='small']) span {padding: 0 var(--arc-spacing-small);}

    :host([size='medium']) #button {height: var(--arc-input-height-medium);}

    :host([size='medium']) span {padding: 0 var(--arc-spacing-medium);}

    :host([size='large']) #button {height: var(--arc-input-height-large);}

    :host([size='large']) span {padding: 0 var(--arc-spacing-large);}

    /* Radius */
    :host([type='tile']) #button {border-radius: 0;}

    :host([type='pill'][size='small']) #button {border-radius: var(--arc-input-height-small);}

    :host([type='pill'][size='medium']) #button {border-radius: var(--arc-input-height-medium);}

    :host([type='pill'][size='large']) #button {border-radius: var(--arc-input-height-large);}

    /* Outlined */
    :host([type='outlined']) #button {
      border: var(--arc-border-width) solid currentColor;
      background-color: transparent;
      box-shadow: none;
    }

    /* Outlined - Hover */
    :host([type='outlined']:not([disabled])) #button:hover {
      background-color: currentColor;
      background-image: linear-gradient(var(--arc-hover-light) 0 0);
    }

    /* Tab */
    :host([type='tab']) #button {
      background: none;
      border-radius: 0;
      box-shadow: none;
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

  /** @type { 'contained' | 'tile' | 'outlined' | 'pill' | 'tab' } */
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
    const compStyles = window.getComputedStyle(this);
    const userDefinedColor = () => compStyles.getPropertyValue('--btn-color');
    const userDefinedBackground = () => compStyles.getPropertyValue('--btn-background');

    const getColor = () => {
      switch (this.type) {
        case 'outlined': {
          return this.color === 'default'
            ? 'rgb(var(--arc-font-color))'
            : 'var(--btn-background)';
        }
        case 'tab': {
          return this.color === 'default'
            ? 'rgb(var(--arc-color-primary))'
            : 'var(--btn-background)';
        }
        default: {
          return this.color === 'primary' || this.color === 'secondary'
            ? 'rgb(var(--arc-container-color))'
            : 'rgb(var(--arc-input-color))'
        }
      }
    }

    const styles = {
      '--btn-color': userDefinedColor().length > 0 ? null : getColor(),
      '--btn-background': userDefinedBackground().length > 0 ? null : `rgb(var(--arc-color-${this.color}))`
    };

    return html`
      ${this.href && !this.disabled
        ? html`<a id='button' style=${styleMap(styles)} href='${this.href}' rel='noreferrer noopener' tabindex='-1'><span><slot></slot></span></a>`
        : html`<button id='button' style=${styleMap(styles)} tabindex='-1'><span><slot></slot></span></button>`
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-button': ArcButton
  }
}
