import { css, html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import componentStyles from '../../styles/component.styles.js';
import { HasSlotController } from '../../internal/slot.js';
import { emit } from '../../internal/event.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { CHIP_TYPES, ChipType } from './constants/ChipConstants.js';
import { INPUT_SIZES, InputSize } from '../../internal/constants/styleConstants.js';
import '../icon/arc-icon.js';

/**
 * @slot default - The chip's label.
 * @slot prefix - Used to prepend an icon or similar element to the chip.
 * @slot suffix - Used to append an icon or similar element to the chip.
 *
 * @cssproperty --custom-color - A description of the --custom-color property.
 */
export default class ArcChip extends LitElement {
  static tag = 'arc-chip';

  static styles = [
    componentStyles,
    css`
      :host {
        display: inline-block;
      }

      #chip {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        max-width: 100%;
        font-size: var(--arc-font-size-small);
        white-space: nowrap;
        cursor: default;
        padding: 0 var(--arc-spacing-small);
        gap: var(--arc-spacing-small);
        outline: 0;
        text-decoration: none;
        user-select: none;
        vertical-align: middle;
        background-color: rgb(var(--arc-color-default));
        border: none;
      }

      :host([type='outlined']) #chip {
        background-color: transparent;
        border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      }

      :host([clearable]) #chip {
        padding-right: 0;
        gap: 0;
      }

      ::slotted(arc-avatar) {
        --size: inherit;
      }
    `,
  ];

  /** @internal - Controller that listens to slot changes within the component. */
  private readonly hasSlotController = new HasSlotController(this, 'avatar');

  @property({ type: String, reflect: true }) size: InputSize = INPUT_SIZES.small;

  @property({ type: String, reflect: true }) type: ChipType = CHIP_TYPES.filled;

  @property({ type: Boolean, reflect: true }) clearable: boolean = false;

  _handleClear() {
    emit(this, ARC_EVENTS.clear);
  }

  render() {
    const chipStyles = {
      height: `var(--arc-input-height-${this.size})`,
      paddingLeft: this.hasSlotController.test('avatar')
        ? `calc(var(--arc-input-height-${this.size}) * .15)`
        : undefined,
      borderRadius: `var(--arc-input-height-${this.size})`,
      '--size': `calc(var(--arc-input-height-${this.size}) - .5rem)`,
    };

    return html`
      <div id="chip" style=${styleMap(chipStyles)}>
        <slot name="avatar"></slot>
        <slot></slot>
        ${this.clearable
          ? html`
              <arc-icon-button name="close-circle" label="Clear chip" @click=${this._handleClear}></arc-icon-button>
            `
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-chip': ArcChip;
  }
}
