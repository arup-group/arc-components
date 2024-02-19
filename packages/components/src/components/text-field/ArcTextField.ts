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
  @property({ type: String }) type = TEXT_BOX_TYPES.standard;
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: Boolean }) isValid = true; // Tracks validity of field if required prop enabled
  @property({ type: String }) helperText = '';
  @property({ type: String }) errorText = '';
  @property({ type: Object }) adornments = { start: null, end: null };

  protected render() {
    const inputClasses = classMap({
      'text-field': true,
      'text-field--small': this.size === INPUT_SIZES.small,
      'text-field--medium': this.size === INPUT_SIZES.medium,
      'text-field--large': this.size === INPUT_SIZES.large,
      'text-field--default': this.color === THEME_COLORS.default,
      'text-field--primary': this.color === THEME_COLORS.primary,
      'text-field--secondary': this.color === THEME_COLORS.secondary,
      'text-field--error': this.color === THEME_COLORS.error,
      'text-field--warning': this.color === THEME_COLORS.warning,
      'text-field--info': this.color === THEME_COLORS.info,
      'text-field--success': this.color === THEME_COLORS.success,
      'text-field--disabled': this.disabled,
      'text-field--loading': this.loading,
      'text-field--filled': this.type === TEXT_BOX_TYPES.filled,
      'text-field--outlined': this.type === TEXT_BOX_TYPES.outlined,
      'text-field--standard': this.type === TEXT_BOX_TYPES.standard,
      'text-field--invalid': !this.isValid,
    });

    const helperTextClasses = classMap({
      'helper-text': true,
      'helper-text--error': !this.isValid,
    });

    return html`
      <div class="text-field-container">
          ${this.adornments?.start
            ? html`<div class="adornment start">${this.adornments.start}</div>`
          : null}
          <input
            type="text"
            class=${inputClasses}
            .value=${this.value}
            @input=${this.handleInput}
            ?disabled=${this.disabled}
            placeholder=${this.defaultValue}
            ?required=${this.required}
            .helperText="${this.helperText}"
            .errorText="${this.errorText}"
          />
          ${this.loading ? html`<arc-spinner></arc-spinner>` : null}
          ${this.adornments?.end
            ? html`<div class="adornment end">${this.adornments.end}</div>`
            : null}
          <p class=${helperTextClasses}>
            ${!this.isValid
              ? this.errorText
                ? this.errorText
                : 'Invalid'
              : this.helperText}
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
