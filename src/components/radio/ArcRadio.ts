import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { watch } from '../../internal/watch.js';
import { emit } from '../../internal/event.js';
import { FormController } from '../../internal/form-control.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import styles from './arc-radio.styles.js';

/**
 * @slot default - The radio's label.
 *
 * @event arc-change - Emitted when the control's checked state changes.
 */
export default class ArcRadio extends LitElement {
  /** @internal */
  static tag = 'arc-radio';

  static styles = styles;

  /** @internal */
  @query('input[type="radio"]') input: HTMLInputElement;

  /** @internal - Controller used to recognize form controls located inside a shadow root. */
  /* @ts-expect-error - Controller used to hook the component to the formData */
  private readonly formController = new FormController(this, {
    value: (control: ArcRadio) => (control.checked ? control.value : undefined),
  });

  /** The name used to reference the value of the control. */
  @property({ type: String }) name: string;

  /** The value attribute of the radio. */
  @property({ type: String }) value: string;

  /** Draws the component in a disabled state. */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /** Draws the component in a checked state. */
  @property({ type: Boolean, reflect: true }) checked: boolean = false;

  firstUpdated() {
    this.updateComplete.then(() => {
      const radios = this.getAllRadios();
      const checkedRadio = radios.find(radio => radio.checked);

      /* Set the tabindex of all radios to -1. */
      radios.forEach(radio => {
        radio.input.tabIndex = -1;
      });

      /* Make sure that at least one radio gets the tabindex of 0. */
      if (checkedRadio && !checkedRadio.disabled) {
        checkedRadio.input.tabIndex = 0;
      } else if (radios.length > 0) {
        const enabledRadios = this.getAllRadios({ includeDisabled: false });
        enabledRadios[0].input.tabIndex = 0;
      }
    });
  }

  @watch('checked', { waitUntilFirstUpdate: true })
  handleCheckedChange() {
    /* If the radio gets checked, remove the checked status from sibling radio buttons. */
    if (this.checked) {
      this.input.tabIndex = 0;

      this.getSiblingRadios().forEach(radio => {
        radio.input.tabIndex = -1;
        radio.checked = false;
      });
    }
  }

  getAllRadios(options: { includeDisabled: boolean } = { includeDisabled: true }) {
    const radioGroup = this.closest('arc-radio-group');
    const { includeDisabled } = options;

    /* Radios must be part of a radio group. */
    if (!radioGroup) return [this];

    return [...radioGroup.querySelectorAll('arc-radio')].filter((radio: ArcRadio) => {
      if (radio.name !== this.name) return false;

      /* Are disabled items included? return true, else false. */
      return !(!includeDisabled && radio.disabled);
    }) as ArcRadio[];
  }

  getSiblingRadios() {
    return this.getAllRadios().filter(radio => radio !== this) as ArcRadio[];
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

  handleClick() {
    if (!this.checked) {
      this.checked = true;
      emit(this, ARC_EVENTS.change);
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    /* Move the selection when pressing down, up, left or right. */
    if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      const radios = this.getAllRadios({ includeDisabled: false });
      const incr = ['ArrowUp', 'ArrowLeft'].includes(event.key) ? -1 : 1;
      let index = radios.indexOf(this) + incr;
      if (index < 0) index = radios.length - 1;
      if (index > radios.length - 1) index = 0;

      /* Remove the checked state of all radio buttons. */
      this.getAllRadios().forEach(radio => {
        radio.checked = false;
        radio.input.tabIndex = -1;
      });

      /* Set focus on the radio. */
      radios[index].input.focus();
      radios[index].checked = true;
      radios[index].input.tabIndex = 0;

      emit(radios[index], ARC_EVENTS.change);

      event.preventDefault();
    }
  }

  protected render() {
    return html`
      <label
        id="main"
        class=${classMap({
          radio: true,
          'radio--checked': this.checked,
          'radio--disabled': this.disabled,
        })}
        @keydown=${this.handleKeyDown}
      >
        <input
          type="radio"
          name=${ifDefined(this.name || undefined)}
          .value=${ifDefined(this.value || undefined)}
          .checked=${live(this.checked)}
          .disabled=${this.disabled}
          aria-checked=${this.checked}
          aria-disabled=${this.disabled}
          @click=${this.handleClick}
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
    'arc-radio': ArcRadio;
  }
}
