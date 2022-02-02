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

  /* A group of attributes is defined by name. */
  @property({ type: String }) name: string;

  @property({ type: String }) value: string;

  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  @property({ type: Boolean, reflect: true }) checked = false;

  firstUpdated() {
    this.updateComplete.then(() => {
      const radios = this.getAllRadios();
      const checkedRadio = radios.find(radio => radio.checked);

      /* Set the tabindex of all radios to -1 */
      radios.forEach(radio => { radio.input.tabIndex = -1 });

      /* Make sure that at least one radio gets the tabindex of 0 */
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
    /* If the radio gets checked, remove the checked status from sibling radio buttons */
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

    /* Radios must be part of a radio group */
    if (!radioGroup) return [this];

    return [...radioGroup.querySelectorAll('arc-radio')].filter((radio: ArcRadio) => {
      if (radio.name !== this.name) return false;

      /* Are disabled items included? return true, else false */
      return !(!includeDisabled && radio.disabled);

    }) as ArcRadio[];
  }

  getSiblingRadios() {
    return this.getAllRadios().filter(radio => radio !== this) as ArcRadio[];
  }

  handleClick() {
    this.checked = true;
    emit(this, 'arc-change');
  }

  handleKeyDown(event: KeyboardEvent) {
    /* Only allow the following keys to be pressed */
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) return;

    const radios = this.getAllRadios({ includeDisabled: false });
    const incr = ['ArrowUp', 'ArrowLeft'].includes(event.key) ? -1 : 1;
    let index = radios.indexOf(this) + incr;
    if (index < 0) index = radios.length - 1;
    if (index > radios.length - 1) index = 0;

    /* Remove the checked state of all radio buttons */
    this.getAllRadios().forEach(radio => {
      radio.checked = false;
      radio.input.tabIndex = -1;
    });

    /* Set focus on the radio */
    radios[index].focus();
    radios[index].checked = true;
    radios[index].input.tabIndex = 0;

    emit(radios[index], 'arc-change');

    event.preventDefault();
  }

  render() {
    return html`
      <label id="main" @keydown=${this.handleKeyDown}>
        <span id="radio">
          <input
            type="radio"
            name=${ifDefined(this.name)}
            .value=${ifDefined(this.value)}
            ?checked=${live(this.checked)}
            ?disabled=${this.disabled}
            aria-checked=${this.checked}
            aria-disabled=${this.disabled}
            @click=${this.handleClick}
          />
          <arc-icon name=${this.checked ? ICON_TYPES['radio-checked'] : ICON_TYPES['radio-unchecked']} size="large" focusable="false"></arc-icon>
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
