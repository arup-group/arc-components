import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { emit } from '../../internal/event.js';
import componentStyles from '../../styles/component.styles.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { FormController } from '../../internal/form-control';

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

      /* Hide the original input. */
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

      #switch {
        display: inline-flex;
        width: 58px;
        height: 38px;
        overflow: hidden;
        padding: 12px;
        box-sizing: border-box;
        position: relative;
        flex-shrink: 0;
        z-index: 0;
        vertical-align: middle;
      }

      #base {
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        background-color: transparent;
        outline: 0px;
        border: 0px;
        margin: 0px;
        cursor: pointer;
        user-select: none;
        vertical-align: middle;
        appearance: none;
        text-decoration: none;
        padding: 9px;
        border-radius: 50%;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 1;
        color: rgb(224, 224, 224);
        transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }

      #track {
        height: 100%;
        width: 100%;
        border-radius: 7px;
        z-index: -1;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        background-color: rgb(255, 255, 255);
        opacity: 0.3;
      }

      #thumb {
        box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px,
          rgb(0 0 0 / 12%) 0px 1px 3px 0px;
        background-color: currentcolor;
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }

      #label {
        line-height: var(--arc-toggle-size);
        user-select: none;
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
        <span id="switch">
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
            <span id="thumb"></span>
          </span>
          <span id="track"></span>
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
