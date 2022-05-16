import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { emit } from '../../internal/event.js';
import { FormController } from '../../internal/form-control.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import styles from './arc-switch.styles.js';

/**
 * @slot default - The checkbox' label.
 *
 * @event arc-change - Emitted when the control's checked state changes.
 */
export default class ArcSwitch extends LitElement {
  static tag = 'arc-switch';

  static styles = styles;

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
            .value=${ifDefined(this.value || undefined)}
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
