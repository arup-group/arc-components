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
import styles from './arc-icon-line-segment.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-line-segment')
export default class ArcIconLineSegment extends LitElement {
  /** @internal */
  static tag = 'arc-icon-line-segment';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M211.81,44.19a28,28,0,0,0-42.23,36.57L80.76,169.58a28,28,0,0,0-36.57,2.63h0a28,28,0,1,0,42.23,3l88.82-88.82a28,28,0,0,0,36.57-42.23Zm-133.67,162a20,20,0,1,1,0-28.28A20,20,0,0,1,78.14,206.15Zm128-128a20,20,0,0,1-28.28,0h0a20,20,0,1,1,28.28,0Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M213.23,42.77A30,30,0,0,0,167,80.54L80.54,167a30.07,30.07,0,0,0-37.77,3.81h0A30,30,0,1,0,89,175.46L175.46,89a30,30,0,0,0,37.77-46.25Zm-136.51,162a18,18,0,1,1,0-25.46A18,18,0,0,1,76.72,204.74Zm128-128a18,18,0,0,1-25.46,0h0a18,18,0,1,1,25.46,0Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M214.64,41.36a32,32,0,0,0-50.2,38.89L80.25,164.44a32.06,32.06,0,0,0-38.89,4.94h0a32,32,0,1,0,50.2,6.37l84.19-84.19a32,32,0,0,0,38.89-50.2Zm-139.33,162a16,16,0,0,1-22.64-22.64h0a16,16,0,0,1,22.63,0h0A16,16,0,0,1,75.31,203.33Zm128-128a16,16,0,1,1,0-22.63A16,16,0,0,1,203.33,75.3Z"/>`],
    [IconWeight.BOLD, svg`<path d="M217.47,38.53a36,36,0,0,0-57.95,41l-80,80a36.07,36.07,0,0,0-41,7h0a36,36,0,1,0,58,9.95l80-80a36,36,0,0,0,41-57.95Zm-145,162a12,12,0,1,1,0-17A12,12,0,0,1,72.48,200.5Zm128-128a12,12,0,0,1-17,0h0a12,12,0,1,1,17,0Z"/>`],
    [IconWeight.FILL, svg`<path d="M214.64,86.62a32.07,32.07,0,0,1-38.89,4.94L91.56,175.75a32,32,0,1,1-50.2-6.37h0a32.06,32.06,0,0,1,38.89-4.94l84.19-84.19a32,32,0,1,1,50.2,6.37Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M81,175A24,24,0,1,1,47,175,24,24,0,0,1,81,175ZM209,47A24,24,0,1,0,209,81,24,24,0,0,0,209,47Z" opacity="0.2"/><path d="M214.64,41.36a32,32,0,0,0-50.2,38.89L80.25,164.44a32.06,32.06,0,0,0-38.89,4.94h0a32,32,0,1,0,50.2,6.37l84.19-84.19a32,32,0,0,0,38.89-50.2Zm-139.33,162a16,16,0,0,1-22.64-22.64h0a16,16,0,0,1,22.63,0h0A16,16,0,0,1,75.31,203.33Zm128-128a16,16,0,1,1,0-22.63A16,16,0,0,1,203.33,75.3Z"/>`],
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
        ${ArcIconLineSegment.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-line-segment": ArcIconLineSegment;
  }
}
