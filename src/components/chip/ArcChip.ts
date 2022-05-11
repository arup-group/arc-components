import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';
import { THEME_COLORS, ThemeColor } from '../../internal/constants/styleConstants.js';
import { CHIP_SIZES, CHIP_TYPES, ChipSize, ChipType } from './constants/ChipConstants.js';

/**
 * @slot default - A description of the default slot.
 * @slot something - A description of the something slot.
 *
 * @event arc-event-name - A description of the event.
 *
 * @cssproperty --custom-color - A description of the --custom-color property.
 */
export default class ArcChip extends LitElement {
  static tag = 'arc-chip';

  static styles = [
    componentStyles,
    css`
      :host {
        display: inline-flex;
      }
      #main {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: var(--arc-font-size-x-small);
        line-height: 1;
        border-radius: var(--arc-border-radius-large);
        border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
        white-space: nowrap;
        padding: 3px 6px;
        user-select: none;
        cursor: inherit;
      }
    `,
  ];

  @property({ type: String, reflect: true }) color: ThemeColor = THEME_COLORS.default;

  @property({ type: String, reflect: true }) size: ChipSize = CHIP_SIZES.medium;

  @property({ type: String, reflect: true }) type: ChipType = CHIP_TYPES.filled;

  @property({ type: Boolean, reflect: true }) clearable: boolean = false;

  render() {
    return html`
      <div id="main">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-chip': ArcChip;
  }
}
