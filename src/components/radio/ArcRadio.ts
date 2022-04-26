import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { watch } from '../../internal/watch.js';
import { emit } from '../../internal/event.js';
import { FormController } from '../../internal/form-control.js';
import componentStyles from '../../styles/component.styles.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

/**
 * @slot default - The radio's label.
 *
 * @event arc-change - Emitted when the control's checked state changes.
 */
export default class ArcRadio extends LitElement {
  static tag = 'arc-radio';

  static styles = [
    componentStyles,
    css`
      #main {
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        cursor: pointer;
      }

      input {
        position: absolute;
        opacity: 0;
        padding: 0;
        margin: 0;
        pointer-events: none;
      }

      #radio {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: var(--arc-spacing-x-small);
        border-radius: 50%;
      }

      #control {
        display: inline-flex;
        position: relative;
      }

      #radioIcon {
        display: inline-flex;
        width: var(--arc-toggle-size);
        height: var(--arc-toggle-size);
      }

      #radioIcon svg {
        width: 100%;
        height: 100%;
      }

      #thumb {
        width: calc(var(--arc-toggle-size) + 4px);
        height: calc(var(--arc-toggle-size) + 4px);
        background-color: rgb(var(--arc-grey-000));
        box-shadow: var(--arc-box-shadow);
        border-radius: 50%;
        transform: translateX(calc((var(--width) - var(--height)) / -2));
      }

      #label {
        line-height: var(--arc-toggle-size);
        user-select: none;
      }

      /* Checked */
      :host([checked]) #radioIcon svg {
        color: rgb(var(--arc-color-info));
      }

      /* Hover & Focus */
      :host(:not([disabled])) #radio:hover,
      :host(:not([disabled])) input:focus-visible + #radio {
        background: rgba(var(--arc-font-color), 10%);
      }

      /* Mouse down */
      :host(:not([disabled])) #radio:active {
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

  render() {
    return html`
      <label id="main" @keydown=${this.handleKeyDown}>
        <input
          type="radio"
          role="radio"
          name=${ifDefined(this.name || undefined)}
          value=${ifDefined(this.value || undefined)}
          .checked=${live(this.checked)}
          .disabled=${this.disabled}
          aria-checked=${this.checked}
          aria-disabled=${this.disabled}
          @click=${this.handleClick}
        />
        <span id="radio">
          <span id="control">
            <span id="radioIcon">
              ${this.checked
                ? html` <svg viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                      fill="currentColor"
                      stroke="none"
                    />
                    <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" fill="currentColor" stroke="none" />
                  </svg>`
                : html` <svg viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                      fill="currentColor"
                      stroke="none"
                      class="nc-icon-wrapper"
                    />
                  </svg>`}
            </span>
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
