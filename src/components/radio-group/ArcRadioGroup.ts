import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';

import type ArcRadio from '../radio/ArcRadio.js';

export default class ArcRadioGroup extends LitElement {
  static tag = 'arc-radio-group';

  static styles = [
    componentStyles,
    css`
      :host {
        display: inline-flex;
      }

      #main {
        display: grid;
        border: none;
        padding: 0;
        margin: 0;
        min-width: 0;
      }

      #main:focus {
        outline: none;
      }

      :host([row]) #main {
        grid-auto-flow: column;
      }

      #label {
        position: absolute;
        width: 0;
        height: 0;
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        overflow: hidden;
        white-space: nowrap;
      }
    `,
  ];

  @query('slot') defaultSlot: HTMLSlotElement;

  /* The radio group label. Required for proper accessibility. Alternatively, you can use the label slot. */
  @property({ type: String }) label: string = '';

  /* Lays out the radio buttons horizontally */
  @property({ type: Boolean }) row: boolean = false;

  /* When tabbing into the fieldset, make sure it lands on the checked radio */
  handleFocusIn() {
    requestAnimationFrame(() => {
      const checkedRadio = [...this.defaultSlot.assignedElements({ flatten: true }) as ArcRadio[]].find(el =>
        el.tagName === 'ARC-RADIO' && el.checked
      );
      checkedRadio?.focus();
    });
  }

  render() {
    return html`
      <div id='main' role="radiogroup" @focusin=${this.handleFocusIn}>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-radio-group': ArcRadioGroup;
  }
}
