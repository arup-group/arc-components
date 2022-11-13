import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { emit } from '../../internal/event.js';
import { FormController } from '../../internal/form-control.js';
import { watch } from '../../internal/watch.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
// @ts-ignore
import componentStyles from '../../styles/component.styles.css.js';
// @ts-ignore
import controlsStyles from '../../styles/control.styles.css.js';
// @ts-ignore
import styles from './arc-switch.styles.css.js';

/**
 * @slot default - The checkbox' label.
 *
 * @event arc-change - Emitted when the control's checked state changes.
 */
export default class ArcSwitch extends LitElement {
  /** @internal */
  static tag = 'arc-switch';

  static styles = [componentStyles, controlsStyles, styles];

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

  /** Makes the switch a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Draws the component in a checked state. */
  @property({ type: Boolean, reflect: true }) checked: boolean = false;

  /** This will be true when the control is in an invalid state. Validity is determined by the `required` prop. */
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
    this.input.checked = this.checked;
    this.invalid = !this.input.checkValidity();
  }

  firstUpdated() {
    this.invalid = !this.input.checkValidity();
  }

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

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }

  /* Handle the click of the switch */
  private _handleClick() {
    this.checked = !this.checked;
    emit(this, ARC_EVENTS.change);
  }

  protected render() {
    return html`
      <label
        id="main"
        class=${classMap({
          switch: true,
          'switch--checked': this.checked,
          'switch--disabled': this.disabled,
        })}
      >
        <span id="base">
          <input
            type="checkbox"
            name=${ifDefined(this.name)}
            .value=${ifDefined(this.value)}
            .checked=${live(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked ? 'true' : 'false'}
            aria-disabled=${this.disabled ? 'true' : 'false'}
            @click=${this._handleClick}
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
