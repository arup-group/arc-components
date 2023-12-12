/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  FONT_SIZES,
  FontSize,
} from '../../../internal/constants/styleConstants.js';
import styles from '../../icon/icon.styles.js';

/**
 * @cssproperty --icon-color - Set the color of the icon.
 */
@customElement('ph-icon-chart-line-down')
export default class PhIconChartLineDown extends LitElement {
  /** @internal */
  static tag = 'ph-icon-chart-line-down';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V60.69l56,56,26.34-26.35a8,8,0,0,1,11.32,0L192,148.69V128a8,8,0,0,1,16,0v40a7,7,0,0,1,0,.8c0,.11,0,.21-.05.32s0,.3-.07.46a2.83,2.83,0,0,1-.09.37c0,.13-.06.26-.1.39s-.08.23-.12.35l-.14.39-.15.31c-.06.13-.12.27-.19.4s-.11.18-.16.28l-.24.39-.21.28-.26.35c-.11.14-.24.27-.36.4l-.16.18-.17.15a4.83,4.83,0,0,1-.42.37,3.92,3.92,0,0,1-.32.25l-.3.22-.38.23a2.91,2.91,0,0,1-.3.17l-.37.19-.34.15-.36.13a2.84,2.84,0,0,1-.38.13l-.36.1c-.14,0-.26.07-.4.09l-.42.07-.35.05a7,7,0,0,1-.79,0H160a8,8,0,0,1,0-16h20.69L128,107.31l-26.34,26.35a8,8,0,0,1-11.32,0L40,83.31V200H224A8,8,0,0,1,232,208Z"/>`;

  /** An alternate description to use for accessibility. If omitted, the icon will be ignored by assistive devices. */
  @property({ type: String }) label: string;

  /** Set the size of the icon. */
  @property({ type: String, reflect: true }) size: FontSize = FONT_SIZES.medium;

  /** Set the rotation of the icon. */
  @property({ type: Number }) rotation: 0 | 90 | 180 | 270 = 0;

  protected render() {
    return html`
      <svg
        id="main"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        role=${ifDefined(this.label ? 'img' : undefined)}
        aria-label=${ifDefined(this.label || undefined)}
        aria-hidden=${ifDefined(this.label ? undefined : 'true')}
        style=${styleMap({
          transform: this.rotation ? `rotate(${this.rotation}deg)` : null,
          height: `var(--arc-font-size-${this.size})`,
          width: `var(--arc-font-size-${this.size})`,
        })}
      >
        ${PhIconChartLineDown.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-chart-line-down': PhIconChartLineDown;
  }
}
