import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import styles from './arc-checkbox-group.styles.js';
// import type ArcCheckBox from '../checkbox/ArcCheckBox.js';

/**
 * @slot default - The default slot where radio controls are placed.
 * @slot label - The radio group label. Alternatively, you can use the label prop.
 *
 * @event arc-change - Emitted when a control's checked state changes.
 */
export default class ArcCheckboxGroup extends LitElement {
  /** @internal */
  static tag = 'arc-checkbox-group';

  static styles = styles;

  /** @internal */
  @query('slot:not([name])') defaultSlot: HTMLSlotElement;

  /** The radio group label. Required for proper accessibility. Alternatively, the label slot can be used. */
  @property({ type: String }) label: string;

  /** Lays out the radio buttons horizontally. */
  @property({ type: Boolean }) row: boolean = false;

  /* When tabbing into the fieldset, make sure it lands on the checked radio */
  // handleFocusIn() {
  //   const slottedChildren = this.defaultSlot.assignedElements({
  //     flatten: true,
  //   });
  //   const checkedCheckbox = [...(slottedChildren as ArcCheckBox[])].find(
  //     (el) => el.tagName === 'ARC-CHECKBOX' && el.checked,
  //   );
  //   checkedCheckbox?.focus();
  // }

  protected render() {
    return html`
      <div id="main">
        <label id="label">
          <slot name="label">${this.label}</slot>
        </label>
        <div id="checkboxGroup" role="checkboxGroup">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-checkbox-group': ArcCheckboxGroup;
  }
}
