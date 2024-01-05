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
 *
 * @ssr - True
 */
@customElement('ph-icon-globe-simple')
export default class PhIconGlobeSimple extends LitElement {
  /** @internal */
  static tag = 'ph-icon-globe-simple';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm87.63,96H175.8c-1.41-28.46-10.27-55.47-25.12-77A88.2,88.2,0,0,1,215.63,120ZM128,215.89c-18.73-20.27-30.09-49-31.77-79.89h63.54C158.09,166.87,146.73,195.62,128,215.89ZM96.23,120c1.68-30.87,13-59.62,31.77-79.89,18.73,20.27,30.09,49,31.77,79.89Zm9.09-77C90.47,64.53,81.61,91.54,80.2,120H40.37A88.2,88.2,0,0,1,105.32,43ZM40.37,136H80.2c1.41,28.46,10.27,55.47,25.12,77A88.2,88.2,0,0,1,40.37,136Zm110.31,77c14.85-21.56,23.71-48.57,25.12-77h39.83A88.2,88.2,0,0,1,150.68,213Z"/>`;

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
        ${PhIconGlobeSimple.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-globe-simple': PhIconGlobeSimple;
  }
}
