import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { emit } from '../../internal/event.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import componentStyles from '../../styles/component.styles.js';

/**
 * @slot prefix - The switch's prefix label.
 * @slot suffix - The switch's suffix label.
 *
 * @event arc-change - Emitted when the user checked the switch.
 */
export default class ArcSwitch extends LitElement {
  static tag = 'arc-switch';

  static styles = [
    componentStyles,
    css`
      #main {
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        cursor: pointer;
      }
      #switch {
        flex: 0 0 auto;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: inherit;
        padding: var(--arc-spacing-x-small);
      }

      /* Hide the original input. */
      input {
        cursor: inherit;
        opacity: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        z-index: 1;
        border: 3px solid red;
      }
      .thumb {
        position: relative;
        cursor: inherit;
        width: calc(var(--arc-font-size-xxxx-large) * 1.15);
        height: calc(var(--arc-font-size-xxxx-large) / 3);
        background-color: rgb(var(--arc-grey-060));
        border-radius: calc(var(--arc-font-size-xxxx-large) / 6);
      }
      .thumb::after {
        position: absolute;
        left: 0.5px;
        content: '';
        top: 1.3px;
        width: calc(var(--arc-font-size-xxxx-large) / 3.35);
        height: calc(var(--arc-font-size-xxxx-large) / 3.35);
        background-color: rgb(var(--arc-white-000));
        transition: 0.4s;
        border-radius: calc(var(--arc-font-size-xxxx-large) / 6);
      }
      .thumb::after:hover {
        background: red;
      }
      /* Label */
      .label {
        line-height: var(--arc-toggle-size);
        user-select: none;
      }
      /* Checked */
      input:checked ~ .thumb {
        background-color: rgb(var(--arc-color-active));
      }
      input:checked ~ .thumb::after {
        transform: translateX(calc(var(--arc-font-size-xxxx-large) / 4));
      }
      /* Hover & Focus */
      :host(:not([disabled])) #switch:hover .thumb::after,
      :host(:not([disabled])) input:focus-visible + .thumb::after {
        box-shadow: 0 0 3px 10px rgba(var(--arc-font-color), 10%);
      }

      /* Mouse down */
      :host(:not([disabled])) #switch:active .thumb::after {
        box-shadow: 0 0 3px 10px rgba(var(--arc-font-color), 30%);
      }
      /* Disabled */
      :host([disabled]) #switch {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `,
  ];

  /** @internal */
  @query('input[type="checkbox"]') input: HTMLInputElement;

  /** The name used to reference the value of the control. */
  @property({ type: String }) name: string;

  /** The value attribute of the checkbox. */
  @property({ type: String }) value: string;

  /** Draws the component in a disabled state. */
  @property({ type: Boolean }) disabled: boolean = false;

  /** Draws the component in a checked state. */
  @property({ type: Boolean }) checked = false;

  /** The switch label. */
  @property({ type: String }) label: string;

  handleClick() {
    this.checked = !this.checked;
    emit(this, ARC_EVENTS.change);
  }

  /* Simulates a click on the switch. */
  click() {
    this.input.click();
  }

  /* Sets focus on the switch. */
  focus() {
    this.input.focus();
  }

  /* Removes focus from the switch. */
  blur() {
    this.input.blur();
  }

  render() {
    return html`
      <label id="main">
        <span id="switch">
          <input
            type="checkbox"
            role="switch"
            @click=${this.handleClick}
            name=${ifDefined(this.name || undefined)}
            .value=${ifDefined(this.value || undefined)}
            ?checked=${live(this.checked)}
            ?disabled=${this.disabled}
            aria-checked=${this.checked}
            aria-disabled=${this.disabled}
            aria-labelledby=${ifDefined(this.label || 'label')}
          />
          <span class="thumb"></span>
        </span>
        <span id=${ifDefined(this.label || 'label')} class="label"><slot></slot></span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-switch': ArcSwitch;
  }
}
