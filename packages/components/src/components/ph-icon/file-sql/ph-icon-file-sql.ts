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
@customElement('ph-icon-file-sql')
export default class PhIconFileSql extends LitElement {
  /** @internal */
  static tag = 'ph-icon-file-sql';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M48,120a8,8,0,0,0,8-8V40h88V88a8,8,0,0,0,8,8h48v16a8,8,0,0,0,16,0V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72A8,8,0,0,0,48,120ZM160,51.31,188.69,80H160ZM228,208a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v48h20A8,8,0,0,1,228,208ZM91.82,196.31a20.82,20.82,0,0,1-9.19,15.23C77.44,215,71,216,65.14,216A60.72,60.72,0,0,1,50,214a8,8,0,0,1,4.3-15.41c4.38,1.2,14.95,2.7,19.55-.36.89-.59,1.83-1.52,2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.55,20.55,0,0,1,9-14.95c11.84-8,30.72-3.31,32.83-2.76a8,8,0,0,1-4.08,15.48c-4.49-1.17-15.22-2.56-19.82.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.08,1.12,1.9,2.31,1.49,6.44,2.68,10.45,3.84C77.5,174.17,94.06,179,91.82,196.31Zm71,3.23A39.05,39.05,0,0,0,168,180c0-19.85-14.35-36-32-36s-32,16.15-32,36,14.35,36,32,36a29.18,29.18,0,0,0,15.9-4.78l2.44,2.44a8,8,0,0,0,11.31-11.32ZM136,200c-8.82,0-16-9-16-20s7.18-20,16-20,16,9,16,20a24.41,24.41,0,0,1-1.18,7.51l-1.17-1.17a8,8,0,1,0-11.31,11.32l1.68,1.67A12.93,12.93,0,0,1,136,200Z"/>`;

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
        ${PhIconFileSql.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-file-sql': PhIconFileSql;
  }
}
