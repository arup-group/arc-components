import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../spinner/arc-spinner'; // Ensure you have an arc-spinner component for the loading state
import styles from './arc-textfield.styles';
import { TEXT_BOX_TYPES } from './constants/TextFieldConstants';
import {
  THEME_COLORS,
  INPUT_SIZES,
} from '../../internal/constants/styleConstants';
import { FormController } from '../../internal/form-control.js';


export default class ArcTextField extends LitElement {
  /** @internal */
  static tag = 'arc-textfield';

  static styles = styles;

  @property({ type: String, reflect: true }) value = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) loading = false;
  @property({ type: String }) defaultValue = '';
  @property({ type: String }) size = INPUT_SIZES.medium;
  @property({ type: String }) color = THEME_COLORS.default;
  @property({ type: String }) focusColor = THEME_COLORS.primary;
  @property({ type: String }) type = TEXT_BOX_TYPES.standard;
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: Boolean }) isValid = true; // Tracks validity of field if required prop enabled
  @property({ type: String }) helperText = '';
  @property({ type: String }) errorText = '';
  @property({ type: Object }) adornments = { start: null, end: null };

  /** @internal - Controller used to recognize form controls located inside a shadow root. */
  /* @ts-expect-error - Controller used to hook the component to the formData */
  private readonly formController = new FormController(this, {
    value: (control: ArcTextField) =>
      control.value ? control.value : undefined,
  });

  protected render() {
    const fieldContainerClasses = classMap({
      'text-field': true,
      'text-field--disabled': this.disabled,
    });

    const inputContainerClasses = classMap({
      'input-container': true,
      'input-container--small': this.size === INPUT_SIZES.small,
      'input-container--medium': this.size === INPUT_SIZES.medium,
      'input-container--large': this.size === INPUT_SIZES.large,
      [`input-container--${this.color}`]: true,
      [`input-container--focus-${this.focusColor}`]: true,
      'input-container--disabled': this.disabled,
      'input-container--loading': this.loading,
      'input-container--filled': this.type === TEXT_BOX_TYPES.filled,
      'input-container--outlined': this.type === TEXT_BOX_TYPES.outlined,
      'input-container--standard': this.type === TEXT_BOX_TYPES.standard
    });

    const helperTextClasses = classMap({
      'helper-text': true,
      'helper-text--error': !this.isValid,
    });

    return html`
      <div class="text-field-container">
          <div class=${inputContainerClasses}>
            ${
              this.adornments?.start
                ? html`<div class="adornment start">
                    ${this.adornments.start}
                  </div>`
                : null
            }
            <input
              type="text"
              class=${fieldContainerClasses}
              .value=${this.value}
              @input=${this.handleInput}
              ?disabled=${this.disabled}
              placeholder=${this.defaultValue}
              ?required=${this.required}
              .helperText="${this.helperText}"
              .errorText="${this.errorText}"
            />
            ${this.loading ? html`<arc-spinner></arc-spinner>` : null}
            ${
              this.adornments?.end
                ? html`<div class="adornment end">${this.adornments.end}</div>`
                : null
            }
          </div>
          <p class=${helperTextClasses}>
            ${
              !this.isValid
                ? this.errorText
                  ? this.errorText
                  : 'Invalid'
                : this.helperText
            }
          </p>
        </div>
      </div>
    `;
  }

  private checkValidity() {
    if (this.value.length === 0) {
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }

  private handleInput(event: InputEvent) {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    if (this.required) {
      this.checkValidity();
    }
    this.dispatchEvent(
      new CustomEvent('input-change', { detail: { value: this.value } }),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-textfield': ArcTextField;
  }
}
