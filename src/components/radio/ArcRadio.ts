import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { watch } from '../../internal/watch.js';
import { emit } from '../../internal/event.js';
import { FormController } from '../../internal/form-control.js';
import componentStyles from '../../styles/component.styles.js';
import { ICON_TYPES } from '../icon/constants/IconConstants.js';
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

      /* Radio button */
      #radio {
        flex: 0 0 auto;
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      arc-icon {
        padding: var(--arc-spacing-small);
        border-radius: 50%;
      }

      /* Label */
      #label {
        line-height: var(--arc-toggle-size);
        user-select: none;
      }

      /* Hover & Focus */
      :host(:not([disabled])) #radio:hover arc-icon,
      :host(:not([disabled])) input:focus-visible + arc-icon {
        background: rgba(var(--arc-font-color), 10%);
      }

      /* Mouse down */
      :host(:not([disabled])) #radio:active arc-icon {
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
  @property({ type: Boolean }) disabled: boolean = false;

  /** Draws the component in a checked state. */
  @property({ type: Boolean }) checked = false;

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
        <span id="radio">
          <input
            type="radio"
            name=${ifDefined(this.name || undefined)}
            .value=${ifDefined(this.value || undefined)}
            ?checked=${live(this.checked)}
            ?disabled=${this.disabled}
            aria-checked=${this.checked}
            aria-disabled=${this.disabled}
            @click=${this.handleClick}
          />
          <arc-icon
            name=${this.checked ? ICON_TYPES['radio-checked'] : ICON_TYPES['radio-unchecked']}
            size="large"
            focusable="false"
          ></arc-icon>
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
