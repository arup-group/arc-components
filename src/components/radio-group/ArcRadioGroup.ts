import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';
import { mobileBreakpoint } from '../../utilities/ui-utils.js';

import type ArcRadio from '../radio/ArcRadio.js';

/**
 * @slot default - The default slot where radio controls are placed.
 * @slot label - The radio group label. Alternatively, you can use the label prop.
 *
 * @event arc-change - Emitted when a control's checked state changes.
 */
export default class ArcRadioGroup extends LitElement {
  static tag = 'arc-radio-group';

  static styles = [
    componentStyles,
    css`
      :host {
        display: inline-flex;
      }

      #radioGroup {
        display: grid;
        position: relative;
        right: var(--arc-spacing-small);
        border: none;
        padding: 0;
        margin: 0;
        min-width: 0;
      }

      /* Medium devices and up */
      @media (min-width: ${mobileBreakpoint}rem) {
        :host([row]) #radioGroup {
          grid-auto-flow: column;
        }
      }
    `,
  ];

  /** @internal */
  @query('slot:not([name])') defaultSlot: HTMLSlotElement;

  /** The radio group label. Required for proper accessibility. Alternatively, the label slot can be used. */
  @property({ type: String }) label: string;

  /** Lays out the radio buttons horizontally */
  @property({ type: Boolean }) row: boolean = false;

  /* When tabbing into the fieldset, make sure it lands on the checked radio */
  handleFocusIn() {
    const slottedChildren = this.defaultSlot.assignedElements({ flatten: true });
    const checkedRadio = [...(slottedChildren as ArcRadio[])].find(el => el.tagName === 'ARC-RADIO' && el.checked);
    checkedRadio?.focus();
  }

  render() {
    return html`
      <div id="main">
        <label id="label">
          <slot name="label">${this.label}</slot>
        </label>
        <div id="radioGroup" role="radiogroup" @focusin=${this.handleFocusIn}>
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-radio-group': ArcRadioGroup;
  }
}
