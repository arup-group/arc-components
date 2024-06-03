import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { watch } from '../../internal/watch.js';
import { emit } from '../../internal/event.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import styles from './arc-checkbox.styles.js';

/**
 * @slot default - The radio's label.
 *
 * @event arc-change - Emitted when the control's checked state changes.
 */
export default class ArcCheckbox extends LitElement {
  static tag = 'arc-checkbox';
  static styles = styles;

  @query('input[type="checkbox"]') private input: HTMLInputElement;

  /** The name used to reference the value of the control. */
  @property({ type: String }) public name: string;

  /** The value attribute of the radio. */
  @property({ type: String }) public value: string;

  /** Draws the component in a disabled state. */
  @property({ type: Boolean, reflect: true }) public disabled: boolean = false;

  /** Draws the component in a checked state. */
  @property({ type: Boolean, reflect: true }) public checked: boolean = false;

  /**
   * This will be true when the control is in an invalid state. Validity in radios is determined by the message provided
   * by the `setCustomValidity` method.
   */
  @property({ type: Boolean, reflect: true }) public invalid = false;

  /* Enable/disable the editor when the disabled property changes */
  @watch('disabled', { waitUntilFirstUpdate: true })
  public handleDisabledChange(): void {
    /* Disabled form controls are always valid, so we need to recheck validity when the state changes */
    this.input.disabled = this.disabled;
    this.invalid = !this.input.checkValidity();
  }

  @watch('checked', { waitUntilFirstUpdate: true })
  public handleCheckedChange(): void {
    if (this.value == undefined) {
      this.value = !!this.checked ? 'on' : 'off';
    }
  }

  /* Simulates a click on the checkbox. */
  public click(): void {
    this.input.click();
  }

  /* Sets focus on the checkbox. */
  public focus(options?: FocusOptions): void {
    this.input.focus(options);
  }

  /* Removes focus from the checkbox. */
  public blur(): void {
    this.input.blur();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  public reportValidity(): boolean {
    return this.input.reportValidity();
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  public setCustomValidity(message: string): void {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }

  /* Handle the click of the checkbox */
  private handleClick(): void {
    if (!this.checked) {
      this.checked = true;
      emit(this, ARC_EVENTS.change);
    } else {
      this.checked = false;
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
          @click=${this.handleClick}
        />
        <span id="control">
          <span id="icon">
            <svg
              width="42"
              height="42"
              class="bg"
              focusable="false"
              aria-hidden="true"
              viewBox="9 10 24 24"
              data-testid="CheckboxButtonUncheckedIcon"
            >
              <path
                d="M28.5 12.1875H13.5C13.1519 12.1875 12.8181 12.3258 12.5719 12.5719C12.3258 12.8181 12.1875 13.1519 12.1875 13.5V28.5C12.1875 28.8481 12.3258 29.1819 12.5719 29.4281C12.8181 29.6742 13.1519 29.8125 13.5 29.8125H28.5C28.8481 29.8125 29.1819 29.6742 29.4281 29.4281C29.6742 29.1819 29.8125 28.8481 29.8125 28.5V13.5C29.8125 13.1519 29.6742 12.8181 29.4281 12.5719C29.1819 12.3258 28.8481 12.1875 28.5 12.1875ZM28.6875 28.5C28.6875 28.5497 28.6677 28.5974 28.6326 28.6326C28.5974 28.6677 28.5497 28.6875 28.5 28.6875H13.5C13.4503 28.6875 13.4026 28.6677 13.3674 28.6326C13.3323 28.5974 13.3125 28.5497 13.3125 28.5V13.5C13.3125 13.4503 13.3323 13.4026 13.3674 13.3674C13.4026 13.3323 13.4503 13.3125 13.5 13.3125H28.5C28.5497 13.3125 28.5974 13.3323 28.6326 13.3674C28.6677 13.4026 28.6875 13.4503 28.6875 13.5V28.5Z"
                fill="black"
                fill-opacity="0.6"
              />
            </svg>
            <svg
              width="42"
              height="42"
              class="fill"
              focusable="false"
              aria-hidden="true"
              viewBox="9 10 24 24"
              data-testid="CheckboxButtonCheckedIcon"
            >
              <path
                d="M28.5 12H13.5C13.1022 12 12.7206 12.158 12.4393 12.4393C12.158 12.7206 12 13.1022 12 13.5V28.5C12 28.8978 12.158 29.2794 12.4393 29.5607C12.7206 29.842 13.1022 30 13.5 30H28.5C28.8978 30 29.2794 29.842 29.5607 29.5607C29.842 29.2794 30 28.8978 30 28.5V13.5C30 13.1022 29.842 12.7206 29.5607 12.4393C29.2794 12.158 28.8978 12 28.5 12ZM25.2806 19.2806L20.0306 24.5306C19.961 24.6004 19.8783 24.6557 19.7872 24.6934C19.6962 24.7312 19.5986 24.7506 19.5 24.7506C19.4014 24.7506 19.3038 24.7312 19.2128 24.6934C19.1217 24.6557 19.039 24.6004 18.9694 24.5306L16.7194 22.2806C16.5786 22.1399 16.4996 21.949 16.4996 21.75C16.4996 21.551 16.5786 21.3601 16.7194 21.2194C16.8601 21.0786 17.051 20.9996 17.25 20.9996C17.449 20.9996 17.6399 21.0786 17.7806 21.2194L19.5 22.9397L24.2194 18.2194C24.2891 18.1497 24.3718 18.0944 24.4628 18.0567C24.5539 18.019 24.6515 17.9996 24.75 17.9996C24.8485 17.9996 24.9461 18.019 25.0372 18.0567C25.1282 18.0944 25.2109 18.1497 25.2806 18.2194C25.3503 18.2891 25.4056 18.3718 25.4433 18.4628C25.481 18.5539 25.5004 18.6515 25.5004 18.75C25.5004 18.8485 25.481 18.9461 25.4433 19.0372C25.4056 19.1282 25.3503 19.2109 25.2806 19.2806Z"
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
    'arc-checkbox': ArcCheckbox;
  }
}
