import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { HasSlotController } from '../../internal/slot.js';
import { emit } from '../../internal/event.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { CHIP_TYPES, ChipType } from './constants/ChipConstants.js';
import { INPUT_SIZES, InputSize } from '../../internal/constants/styleConstants.js';
import styles from './arc-chip.styles.js';
import '../icon/arc-icon.js';

/**
 * @slot default - The chip's label.
 * @slot avatar - Used to prepend an avatar element to the chip.
 */
export default class ArcChip extends LitElement {
  /** @internal */
  static tag = 'arc-chip';

  static styles = styles;

  /** @internal - Controller that listens to slot changes within the component. */
  private readonly hasSlotController = new HasSlotController(this, 'avatar');

  @property({ type: String, reflect: true }) size: InputSize = INPUT_SIZES.small;

  @property({ type: String, reflect: true }) type: ChipType = CHIP_TYPES.filled;

  @property({ type: Boolean, reflect: true }) clearable: boolean = false;

  _handleClear() {
    emit(this, ARC_EVENTS.clear);
  }

  protected render() {
    return html`
      <div
        id="main"
        class=${classMap({
          chip: true,
          'chip--small': this.size === INPUT_SIZES.small,
          'chip--medium': this.size === INPUT_SIZES.medium,
          'chip--large': this.size === INPUT_SIZES.large,
          'chip--outlined': this.type === CHIP_TYPES.outlined,
          'chip--has-avatar': this.hasSlotController.test('avatar'),
          'chip--clearable': this.clearable,
        })}
      >
        <slot name="avatar"></slot>
        <span>
          <slot></slot>
          ${when(
            this.clearable,
            () =>
              html`<arc-icon-button
                name="close-circle"
                label="Clear chip"
                @click=${this._handleClear}
              ></arc-icon-button>`
          )}
        </span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-chip': ArcChip;
  }
}
