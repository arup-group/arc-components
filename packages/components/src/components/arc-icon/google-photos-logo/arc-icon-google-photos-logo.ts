/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { IconStyle as IconWeight } from '@phosphor-icons/core';
import {
  FONT_SIZES,
  FontSize,
} from '../../../internal/constants/styleConstants.js';
import styles from './arc-icon-google-photos-logo.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-google-photos-logo')
export default class ArcIconGooglePhotosLogo extends LitElement {
  /** @internal */
  static tag = 'arc-icon-google-photos-logo';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M232,124H185.68A68,68,0,0,0,128,20a4,4,0,0,0-4,4V70.32A68,68,0,0,0,20,128a4,4,0,0,0,4,4H70.32A68,68,0,0,0,128,236a4,4,0,0,0,4-4V185.68A68,68,0,0,0,236,128,4,4,0,0,0,232,124ZM188,88a59.28,59.28,0,0,1-12,36H132V28.13A60.08,60.08,0,0,1,188,88ZM88,68a59.28,59.28,0,0,1,36,12v44H28.13A60.08,60.08,0,0,1,88,68ZM68,168a59.28,59.28,0,0,1,12-36h44v95.87A60.08,60.08,0,0,1,68,168Zm100,20a59.28,59.28,0,0,1-36-12V132h95.87A60.08,60.08,0,0,1,168,188Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M232,122H189.18A70,70,0,0,0,128,18a6,6,0,0,0-6,6V66.82A70,70,0,0,0,18,128a6,6,0,0,0,6,6H66.82A70,70,0,0,0,128,238a6,6,0,0,0,6-6V189.18A70,70,0,0,0,238,128,6,6,0,0,0,232,122ZM186,88a57.3,57.3,0,0,1-11,34H134V30.31A58.08,58.08,0,0,1,186,88ZM88,70a57.3,57.3,0,0,1,34,11v41H30.31A58.08,58.08,0,0,1,88,70ZM70,168a57.3,57.3,0,0,1,11-34h41v91.69A58.08,58.08,0,0,1,70,168Zm98,18a57.3,57.3,0,0,1-34-11V134h91.69A58.08,58.08,0,0,1,168,186Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M232,120H192.49A72,72,0,0,0,128,16a8,8,0,0,0-8,8V63.51A72,72,0,0,0,16,128a8,8,0,0,0,8,8H63.51A72,72,0,0,0,128,240a8,8,0,0,0,8-8V192.49A72,72,0,0,0,240,128,8,8,0,0,0,232,120ZM184,88A55.31,55.31,0,0,1,174,120H136V32.57A56.09,56.09,0,0,1,184,88ZM88,72a55.31,55.31,0,0,1,32,10v38H32.57A56.09,56.09,0,0,1,88,72ZM72,168a55.31,55.31,0,0,1,10-32h38v87.43A56.09,56.09,0,0,1,72,168Zm96,16A55.31,55.31,0,0,1,136,174V136h87.43A56.09,56.09,0,0,1,168,184Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M232,116H198.64A76,76,0,0,0,128,12a12,12,0,0,0-12,12V57.36A76,76,0,0,0,12,128a12,12,0,0,0,12,12H57.36A76,76,0,0,0,128,244a12,12,0,0,0,12-12V198.64A76,76,0,0,0,244,128,12,12,0,0,0,232,116ZM180,88a51.38,51.38,0,0,1-8.18,28H140V37.4A52.09,52.09,0,0,1,180,88ZM88,76a51.38,51.38,0,0,1,28,8.18V116H37.4A52.09,52.09,0,0,1,88,76ZM76,168a51.38,51.38,0,0,1,8.18-28H116v78.6A52.09,52.09,0,0,1,76,168Zm92,12a51.38,51.38,0,0,1-28-8.18V140h78.6A52.09,52.09,0,0,1,168,180Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M232,120H192.49A72,72,0,0,0,128,16a8,8,0,0,0-8,8V63.51A72,72,0,0,0,16,128a8,8,0,0,0,8,8H63.51A72,72,0,0,0,128,240a8,8,0,0,0,8-8V192.49A72,72,0,0,0,240,128,8,8,0,0,0,232,120ZM88,72a55.31,55.31,0,0,1,32,10v38H32.57A56.09,56.09,0,0,1,88,72Zm80,112A55.31,55.31,0,0,1,136,174V136h87.43A56.09,56.09,0,0,1,168,184Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M192,88a63.69,63.69,0,0,1-14,40H128V24A64,64,0,0,1,192,88ZM64,168a64,64,0,0,0,64,64V128H78A63.69,63.69,0,0,0,64,168Z" opacity="0.2"/><path d="M232,120H192.49A72,72,0,0,0,128,16a8,8,0,0,0-8,8V63.51A72,72,0,0,0,16,128a8,8,0,0,0,8,8H63.51A72,72,0,0,0,128,240a8,8,0,0,0,8-8V192.49A72,72,0,0,0,240,128,8,8,0,0,0,232,120ZM120,223.43A56.09,56.09,0,0,1,72,168a55.31,55.31,0,0,1,10-32h38ZM120,120H32.57A56.09,56.09,0,0,1,88,72a55.31,55.31,0,0,1,32,10Zm16-87.43A56.09,56.09,0,0,1,184,88,55.31,55.31,0,0,1,174,120H136ZM168,184A55.31,55.31,0,0,1,136,174V136h87.43A56.09,56.09,0,0,1,168,184Z"/>`,
    ],
  ]);

  /** The weight of the icon. */
  @property({ type: String })
  weight: IconWeight = IconWeight.REGULAR;

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
        ${ArcIconGooglePhotosLogo.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-google-photos-logo': ArcIconGooglePhotosLogo;
  }
}
