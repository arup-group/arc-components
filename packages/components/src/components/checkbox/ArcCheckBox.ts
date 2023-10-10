import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { watch } from '../../internal/watch.js';
import { emit } from '../../internal/event.js';
import { FormController } from '../../internal/form-control.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import styles from './arc-checkbox.styles.js';

/**
 * @slot default - The radio's label.
 *
 * @event arc-change - Emitted when the control's checked state changes.
 */
export default class ArcCheckBox extends LitElement {
  /** @internal */
  static tag = 'arc-checkbox';

  static styles = styles;

  /** @internal */
  @query('input[type="checkbox"]') input: HTMLInputElement;

  /** @internal - Controller used to recognize form controls located inside a shadow root. */
  /* @ts-expect-error - Controller used to hook the component to the formData */
  private readonly formController = new FormController(this, {
    value: (control: ArcCheckBox) => (control.checked ? control.value : undefined),
  });

  /** The name used to reference the value of the control. */
  @property({ type: String }) name: string;

  /** The value attribute of the radio. */
  @property({ type: String }) value: string;

  /** Draws the component in a disabled state. */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /** Draws the component in a checked state. */
  @property({ type: Boolean, reflect: true }) checked: boolean = false;

  /**
   * This will be true when the control is in an invalid state. Validity in radios is determined by the message provided
   * by the `setCustomValidity` method.
   */
  @property({ type: Boolean, reflect: true }) invalid = false;


  /* Enable/disable the editor when the disabled property changes */
  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    /* Disabled form controls are always valid, so we need to recheck validity when the state changes */
    this.input.disabled = this.disabled;
    this.invalid = !this.input.checkValidity();
  }

  @watch('checked', { waitUntilFirstUpdate: true })
  handleCheckedChange() {
    if (this.value == undefined) {
      this.value = !!this.checked? "on": "off"; 
    }
  }


  /* Simulates a click on the radio. */
  click() {
    this.input.click();
  }

  /* Sets focus on the radio. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /* Removes focus from the radio. */
  blur() {
    this.input.blur();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }

  /* Handle the click of the radio */
  private _handleClick() {
    if (!this.checked) {
      this.checked = true;
      emit(this, ARC_EVENTS.change);
    }
    else{
    this.checked = false
    emit(this, ARC_EVENTS.change);
    }
  }

  protected render() {
    return html`
      <label
        id="main"
        class=${classMap({
          checkbox: true,
          'checkbox--checked': this.checked,
          'checkbox--disabled': this.disabled,
        })}
      >
        <input
          type="checkbox"
          name=${ifDefined(this.name || undefined)}
          .value=${ifDefined(this.value || undefined)}
          .checked=${live(this.checked)}
          .disabled=${this.disabled}
          aria-checked=${this.checked ? 'true' : 'false'}
          aria-disabled=${this.disabled ? 'true' : 'false'}
          @click=${this._handleClick}
        />
        <span id="control">
          <span id="icon">
            <svg
              class="bg"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="RadioButtonUncheckedIcon"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
              ></path>
            </svg>
            <svg
              class="fill"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="RadioButtonCheckedIcon"
            >
              <path
                d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
              ></path>
            </svg>
          </span>
        </span>
        <span id="label"><slot></slot></span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-checkbox': ArcCheckBox;
  }
}
