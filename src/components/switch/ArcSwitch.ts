import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { emit } from '../../internal/event.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { ICON_TYPES } from '../icon/constants/IconConstants.js';
import componentStyles from '../../styles/component.styles.js';

/**
 * @slot prefix - The switch's prefix label.
 * @slot suffix - The switch's suffix label.
 *
 * @event arc-change - Emitted when the user checked the switch.
 */
export default class ArcSwitch extends LitElement {
  static tag = 'arc-switch';

  static styles = [
    componentStyles,
    css`
      #main {
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        cursor: pointer;
      }
      #switch {
        flex: 0 0 auto;
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      arc-icon {
        padding: var(--arc-spacing-small);
        border-radius: 50%;
        --icon-color-primary: rgb(var(--arc-grey-060));
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
      /* Label */
      .label {
        line-height: var(--arc-toggle-size);
        user-select: none;
      }
      /* Checked */
      input:checked + arc-icon {
        --icon-color-primary: rgb(var(--arc-color-active));
      }
      /* Hover & Focus */
      :host(:not([disabled])) #switch:hover arc-icon,
      :host(:not([disabled])) input:focus-visible + arc-icon {
        background: rgba(var(--arc-font-color), 10%);
      }
      /* Disabled */
      :host([disabled]) #switch {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `,
  ];

  /** The name used to reference the value of the control. */
  @property({ type: String }) name: string;

  /** The value attribute of the checkbox. */
  @property({ type: String }) value: string;

  /** Draws the component in a disabled state. */
  @property({ type: Boolean }) disabled: boolean = false;

  /** Draws the component in a checked state. */
  @property({ type: Boolean }) checked = false;

  handleClick() {
    if (!this.checked) {
      emit(this, ARC_EVENTS.change);
    }
    this.checked = !this.checked;
  }

  render() {
    return html`
      <label id="main">
        <slot name="prefix" class="label"></slot>
        <span id="switch">
          <input
            type="checkbox"
            @click=${this.handleClick}
            name=${ifDefined(this.name || undefined)}
            .value=${ifDefined(this.value || undefined)}
            ?checked=${live(this.checked)}
            ?disabled=${this.disabled}
            aria-checked=${this.checked}
            aria-disabled=${this.disabled}
          />
          <arc-icon
            name=${this.checked ? ICON_TYPES['switch-checked'] : ICON_TYPES['switch-unchecked']}
            size="xx-large"
            focusable="false"
          >
          </arc-icon>
        </span>
        <slot name="suffix" class="label"></slot>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-switch': ArcSwitch;
  }
}
