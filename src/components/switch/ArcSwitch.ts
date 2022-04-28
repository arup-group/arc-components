import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { emit } from '../../internal/event.js';
import componentStyles from '../../styles/component.styles.js';
import { FormController } from '../../internal/form-control';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

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
      :host {
        --height: var(--arc-font-size-x-large);
        --width: calc(var(--height) * 2);
        --thumb-size: calc(var(--arc-font-size-x-large) - 4px);
      }

      #main {
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        cursor: pointer;
        gap: var(--arc-spacing-x-small);
      }

      #base {
        flex: 0 0 auto;
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--width);
        height: var(--height);
        background-color: rgb(var(--arc-grey-060));
        border-radius: var(--height);
      }

      input {
        cursor: inherit;
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        z-index: 1;
      }

      #control {
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        justify-content: center;
        position: absolute;
        box-sizing: border-box;
        background-color: transparent;
        outline: 0;
        border: 0;
        margin: 0;
        cursor: inherit;
        user-select: none;
        appearance: none;
        text-decoration: none;
        padding: var(--arc-spacing-small);
        border-radius: 50%;
        transform: translateX(calc((var(--width) - var(--height)) / -2));
      }

      #thumb {
        width: var(--thumb-size);
        height: var(--thumb-size);
        background-color: rgb(var(--arc-grey-000));
        border-radius: 50%;
      }

      #label {
        line-height: var(--arc-font-size-x-large);
        user-select: none;
      }

      /* Checked */
      :host([checked]) #base {
        background-color: rgb(var(--arc-color-info));
      }

      :host([checked]) #control {
        transform: translateX(calc((var(--width) - var(--height)) / 2));
      }

      /* Hover & Focus */
      :host(:not([disabled])) input:hover + #control,
      :host(:not([disabled])) input:focus-visible + #control {
        background: rgba(var(--arc-font-color), 10%);
      }

      /* Mouse down */
      :host(:not([disabled])) input:active + #control {
        background: rgba(var(--arc-font-color), 30%);
      }

      /* Disabled */
      :host([disabled]) #main {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `,
  ];

  /** @internal */
  @query('input[type="checkbox"]') input: HTMLInputElement;

  /** @internal - Controller used to recognize form controls located inside a shadow root. */
  /* @ts-expect-error - Controller used to hook the component to the formData */
  private readonly formController = new FormController(this, {
    value: (control: ArcSwitch) => (control.checked ? control.value : undefined),
  });

  /** The name used to reference the value of the control. */
  @property({ type: String }) name: string;

  /** The value attribute of the checkbox. */
  @property({ type: String }) value: string;

  /** Draws the component in a disabled state. */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /** Draws the component in a checked state. */
  @property({ type: Boolean, reflect: true }) checked: boolean = false;

  /* Simulates a click on the switch. */
  click() {
    this.input.click();
  }

  /* Sets focus on the switch. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /* Removes focus from the switch. */
  blur() {
    this.input.blur();
  }

  handleClick() {
    this.checked = !this.checked;
    emit(this, ARC_EVENTS.change);
  }

  render() {
    return html`
      <label id="main">
        <span id="base">
          <input
            type="checkbox"
            role="switch"
            name=${ifDefined(this.name || undefined)}
            value=${ifDefined(this.value || undefined)}
            .checked=${live(this.checked)}
            .disabled=${this.disabled}
            aria-checked=${this.checked}
            aria-disabled=${this.disabled}
            @click=${this.handleClick}
          />
          <span id="control">
            <span id="thumb"></span>
          </span>
        </span>
        <span id="label"><slot></slot></span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-switch': ArcSwitch;
  }
}
