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
@customElement('ph-icon-castle-turret')
export default class PhIconCastleTurret extends LitElement {
  /** @internal */
  static tag = 'ph-icon-castle-turret';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M200,24H184a16,16,0,0,0-16,16V56H152V40a16,16,0,0,0-16-16H120a16,16,0,0,0-16,16V56H88V40A16,16,0,0,0,72,24H56A16,16,0,0,0,40,40V84.69A15.86,15.86,0,0,0,44.69,96L56,107.31V216a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V107.31L211.31,96A15.86,15.86,0,0,0,216,84.69V40A16,16,0,0,0,200,24ZM144,216H112V152a16,16,0,0,1,32,0ZM200,84.69,188.69,96A15.86,15.86,0,0,0,184,107.31V216H160V152a32,32,0,0,0-64,0v64H72V107.31A15.86,15.86,0,0,0,67.31,96L56,84.69V40H72V56A16,16,0,0,0,88,72h16a16,16,0,0,0,16-16V40h16V56a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V40h16Z"/>`;

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
        ${PhIconCastleTurret.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-castle-turret': PhIconCastleTurret;
  }
}
