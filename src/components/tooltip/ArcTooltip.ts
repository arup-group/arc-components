import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { Placement } from '@floating-ui/dom';
import { setDefaultAnimation } from '../../internal/animate.js';
import { emit, waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import { FLOATING_PLACEMENTS } from '../../internal/constants/placementConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { ARC_ANIMATION_OPTIONS } from '../../internal/constants/animationConstants.js';
import styles from './arc-tooltip.styles.js';

/**
 * @slot - The tooltip's target element. Only the first element will be used as the target.
 * @slot content - The tooltip's content. Alternatively, you can use the content prop.
 *
 * @event arc-show - Emitted when the tooltip begins to show.
 * @event arc-after-show - Emitted after the tooltip has shown and all animations are complete.
 * @event arc-hide - Emitted when the tooltip begins to hide.
 * @event arc-after-hide - Emitted after the tooltip has hidden and all animations are complete.
 */
export default class ArcTooltip extends LitElement {
  static tag = 'arc-tooltip';

  static styles = styles;

  /** The tooltip's content. Alternatively, you can use the content slot. */
  @property({ type: String }) content: string;

  /**
   * The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
   * inside the viewport.
   */
  @property({ type: String }) placement: Placement = FLOATING_PLACEMENTS.top;

  /** The distance in pixels from which to offset the tooltip away from its target. */
  @property({ type: Number }) distance: number = 10;

  /** The distance in pixels from which to offset the tooltip along its target. */
  @property({ type: Number }) skidding: number = 0;

  /** Indicates whether the tooltip is open. This can be used instead of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open: boolean = false;

  /** Disables the tooltip so the tooltip will not be displayed. */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /** Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with overflow: auto|hidden|scroll. */
  @property({ type: Boolean, reflect: true }) hoist: boolean = false;

  @watch('open')
  handlePropChange() {
    emit(this, 'arc-event-name');
  }

  /* Shows the tooltip. */
  async show() {
    if (this.open) {
      return;
    }

    this.open = true;
    await waitForEvent(this, ARC_EVENTS.afterShow);
  }

  /* Hides the tooltip. */
  async hide() {
    if (!this.open) {
      return;
    }

    this.open = false;
    await waitForEvent(this, ARC_EVENTS.afterHide);
  }

  protected render() {
    return html`
      <div id="target" aria-describedby="tooltip">
        <slot></slot>
      </div>

      <div id="positioner">
        <div
          id="tooltip"
          class=${classMap({
            tooltip: true,
            'tooltip--open': this.open,
          })}
          role="tooltip"
          aria-hidden=${this.open ? 'false' : 'true'}
        >
          <div id="arrow"></div>
          <div id="content" aria-live=${this.open ? 'polite' : 'off'}>
            <slot name="content">${this.content}</slot>
          </div>
        </div>
      </div>
    `;
  }
}

setDefaultAnimation('tooltip.show', {
  keyframes: [
    { opacity: 0, transform: 'scale(0.9)' },
    { opacity: 1, transform: 'scale(1)' },
  ],
  options: ARC_ANIMATION_OPTIONS.fast,
});

setDefaultAnimation('tooltip.hide', {
  keyframes: [
    { opacity: 1, transform: 'scale(1)' },
    { opacity: 0, transform: 'scale(0.9)' },
  ],
  options: ARC_ANIMATION_OPTIONS.fast,
});

declare global {
  interface HTMLElementTagNameMap {
    'arc-tooltip': ArcTooltip;
  }
}
