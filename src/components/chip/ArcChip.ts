import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';
import { THEME_COLORS, ThemeColor } from '../../internal/constants/styleConstants.js';
import { CHIP_SIZES, ChipSize } from './constants/ChipConstants.js';

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
        --custom-color: rgb(var(--arc-red-050));
      }
      #main {
        color: var(--custom-color);
      }
      #main.active {
        color: rgb(var(--arc-green-050));
      }
    `,
  ];

  @property({ type: String, reflect: true }) color: ThemeColor = THEME_COLORS.default;

  @property({ type: String, reflect: true }) size: ChipSize = CHIP_SIZES.medium;

  /** A description of the property. */
  @property({ type: Boolean, reflect: true }) pulse: boolean = false;

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
