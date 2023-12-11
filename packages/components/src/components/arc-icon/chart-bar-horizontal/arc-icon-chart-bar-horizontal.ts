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
import styles from './arc-icon-chart-bar-horizontal.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-chart-bar-horizontal')
export default class ArcIconChartBarHorizontal extends LitElement {
  /** @internal */
  static tag = 'arc-icon-chart-bar-horizontal';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M216,100H172V56a4,4,0,0,0-4-4H44V40a4,4,0,0,0-8,0V216a4,4,0,0,0,8,0V204h92a4,4,0,0,0,4-4V156h76a4,4,0,0,0,4-4V104A4,4,0,0,0,216,100ZM164,60v40H44V60ZM132,196H44V156h88Zm80-48H44V108H212Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M216,98H174V56a6,6,0,0,0-6-6H46V40a6,6,0,0,0-12,0V216a6,6,0,0,0,12,0V206h90a6,6,0,0,0,6-6V158h74a6,6,0,0,0,6-6V104A6,6,0,0,0,216,98ZM162,62V98H46V62ZM130,194H46V158h84Zm80-48H46V110H210Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M216,96H176V56a8,8,0,0,0-8-8H48V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0v-8h88a8,8,0,0,0,8-8V160h72a8,8,0,0,0,8-8V104A8,8,0,0,0,216,96ZM160,64V96H48V64ZM128,192H48V160h80Zm80-48H48V112H208Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M216,92H180V56a12,12,0,0,0-12-12H52V40a12,12,0,0,0-24,0V216a12,12,0,0,0,24,0v-4h84a12,12,0,0,0,12-12V164h68a12,12,0,0,0,12-12V104A12,12,0,0,0,216,92ZM156,68V92H52V68ZM124,188H52V164h72Zm80-48H52V116H204Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M224,112v32a8,8,0,0,1-8,8H48v16h88a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H48v8a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0v8H168a8,8,0,0,1,8,8V80a8,8,0,0,1-8,8H48v16H216A8,8,0,0,1,224,112Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M216,104v48H40V104Z" opacity="0.2"/><path d="M216,96H176V56a8,8,0,0,0-8-8H48V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0v-8h88a8,8,0,0,0,8-8V160h72a8,8,0,0,0,8-8V104A8,8,0,0,0,216,96ZM160,64V96H48V64ZM128,192H48V160h80Zm80-48H48V112H208Z"/>`,
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
        ${ArcIconChartBarHorizontal.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-chart-bar-horizontal': ArcIconChartBarHorizontal;
  }
}
