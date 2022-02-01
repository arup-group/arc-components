import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { watch } from '../../internal/watch.js';
import { emit } from '../../internal/event.js';
import componentStyles from '../../styles/component.styles.js';
import { ICON_TYPES } from '../icon/constants/IconConstants.js';

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

      /* Hide the original input */
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

  @query('input[type="radio"]') input: HTMLInputElement;

  @property({ type: String }) name: string;

  @property({ type: String }) value: string;

  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  @property({ type: Boolean, reflect: true }) checked = false;

  firstUpdated() {
    this.updateComplete.then(() => {
      const radios = this.getAllRadios();
      const checkedRadio = radios.find(radio => radio.checked);
      radios.forEach(radio => radio.input.setAttribute('tabindex', '-1'));

      if (checkedRadio) {
        checkedRadio.input.setAttribute('tabindex', '0');
      } else if (radios.length > 0) {
        radios[0].input.setAttribute('tabindex', '0');
      }
    });
  }

  @watch('checked', { waitUntilFirstUpdate: true })
  handleCheckedChange() {
    /* If the radio gets checked, remove the checked status from sibling radio buttons */
    if (this.checked) {
      this.input.tabIndex = 0;

      this.getSiblingRadios().forEach(radio => {
        radio.input.setAttribute('tabindex', '-1');
        radio.removeAttribute('checked')
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

  getAllRadios() {
    const radioGroup = this.closest('arc-radio-group');

    /* Radios must be part of a radio group */
    if (!radioGroup) {
      return [this];
    }

    return [...radioGroup.querySelectorAll('arc-radio')].filter((radio: this) => radio.name === this.name) as this[];
  }

  getSiblingRadios() {
    return this.getAllRadios().filter(radio => radio !== this) as this[];
  }

  handleClick() {
    this.checked = true;
    emit(this, 'arc-change');
  }

  handleKeyDown(event: KeyboardEvent) {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      const radios = this.getAllRadios().filter(radio => !radio.disabled);
      const incr = ['ArrowUp', 'ArrowLeft'].includes(event.key) ? -1 : 1;
      let index = radios.indexOf(this) + incr;
      if (index < 0) index = radios.length - 1;
      if (index > radios.length - 1) index = 0;

      /* Remove the checked state of all radio buttons */
      this.getAllRadios().forEach(radio => {
        radio.removeAttribute('checked');
        radio.input.setAttribute('tabindex', '-1');
      });

      radios[index].focus();
      radios[index].checked = true;
      radios[index].input.setAttribute('tabindex', '0');

      emit(radios[index], 'arc-change');

      event.preventDefault();
    }
  }

  render() {
    this.setAttribute('role', 'radio');
    this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');

    return html`
      <label id="main" @keydown=${this.handleKeyDown}>
        <span id="radio">
          <input
            type="radio"
            name=${ifDefined(this.name)}
            .value=${ifDefined(this.value)}
            ?checked=${live(this.checked)}
            ?disabled=${this.disabled}
            aria-hidden="true"
            @click=${this.handleClick}
          />
          ${this.checked ? html`
            <arc-icon name=${ICON_TYPES['radio-checked']} size="large" focusable="false"></arc-icon>
          ` : html`
            <arc-icon name=${ICON_TYPES['radio-unchecked']} size="large" focusable="false"></arc-icon>
          `}
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
