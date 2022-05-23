import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { arrow, autoUpdate, computePosition, flip, offset, shift, Placement } from '@floating-ui/dom';
import {
  setDefaultAnimation,
  getAnimation,
  startAnimations,
  stopAnimations,
  parseDuration,
} from '../../internal/animate.js';
import { emit, waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import { FLOATING_PLACEMENTS } from '../../internal/constants/placementConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { ARC_ANIMATION_OPTIONS } from '../../internal/constants/animationConstants.js';
import styles from './arc-tooltip.styles.js';

/**
 * @slot default - The tooltip's target element. Only the first element will be used as the target.
 * @slot content - The tooltip's content. Alternatively, you can use the content prop.
 *
 * @event arc-show - Emitted when the tooltip begins to show.
 * @event arc-after-show - Emitted after the tooltip has shown and all animations are complete.
 * @event arc-hide - Emitted when the tooltip begins to hide.
 * @event arc-after-hide - Emitted after the tooltip has hidden and all animations are complete.
 *
 * @cssproperty --max-width - Set the max width of the tooltip.
 * @cssproperty --arrow-size - Overwrite the size of the arrow.
 */
export default class ArcTooltip extends LitElement {
  static tag = 'arc-tooltip';

  static styles = styles;

  /** @internal */
  @query('#positioner') positioner: HTMLElement;

  /** @internal */
  @query('#tooltip') tooltip: HTMLElement;

  /** @internal */
  @query('#arrow') arrow: HTMLElement;

  /** @internal */
  private target: HTMLElement;

  /** @internal */
  private hoverTimeout: number;

  /** @internal */
  private positionerCleanup: ReturnType<typeof autoUpdate> | undefined;

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

  /** Set the delay before showing the tooltip. */
  @property({ type: Number }) delay: number = 150;

  /**
   * Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
   * options can be passed by separating them with a space. When manual is used, the tooltip must be activated
   * programmatically.
   */
  @property({ type: String }) trigger: string = 'hover focus';

  /** Indicates whether the tooltip is open. This can be used instead of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open: boolean = false;

  /** Disables the tooltip so the tooltip will not be displayed. */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /** Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with overflow: auto|hidden|scroll. */
  @property({ type: Boolean, reflect: true }) hoist: boolean = false;

  @watch('open', { waitUntilFirstUpdate: true })
  async handlePropChange() {
    if (this.disabled) {
      return;
    }

    if (this.open) {
      /* Show */
      emit(this, ARC_EVENTS.show);

      await stopAnimations(this);
      this.startPositioner();
      this.tooltip.hidden = false;
      const { keyframes, options } = getAnimation(this, 'tooltip.show');
      await startAnimations(this.tooltip, keyframes, options);

      emit(this, ARC_EVENTS.afterShow);
    } else {
      /* Hide */
      emit(this, ARC_EVENTS.hide);

      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, 'tooltip.hide');
      await startAnimations(this.tooltip, keyframes, options);
      this.tooltip.hidden = true;
      this.stopPositioner();

      emit(this, ARC_EVENTS.afterHide);
    }
  }

  @watch('content')
  @watch('distance')
  @watch('hoist')
  @watch('placement')
  @watch('skidding')
  handlePopoverOptionsChange() {
    this.updatePositioner();
  }

  @watch('disabled')
  handleDisabledChange() {
    if (this.disabled && this.open) {
      this.hide();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);

    this.updateComplete.then(() => {
      this.addEventListener('blur', this.handleBlur, true);
      this.addEventListener('focus', this.handleFocus, true);
      this.addEventListener('click', this.handleClick);
      this.addEventListener('keydown', this.handleKeyDown);
      this.addEventListener('mouseover', this.handleMouseOver);
      this.addEventListener('mouseout', this.handleMouseOut);
      this.target = this.getTarget();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('blur', this.handleBlur, true);
    this.removeEventListener('focus', this.handleFocus, true);
    this.removeEventListener('click', this.handleClick);
    this.removeEventListener('keydown', this.handleKeyDown);
    this.removeEventListener('mouseover', this.handleMouseOver);
    this.removeEventListener('mouseout', this.handleMouseOut);
    this.stopPositioner();
  }

  async firstUpdated() {
    this.tooltip.hidden = !this.open;

    // If the dropdown is visible on init, update its position
    if (this.open) {
      await this.updateComplete;
      this.startPositioner();
    }
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

  getTarget() {
    /* Get the first child that isn't a <style> or content slot */
    const target = [...this.children].find(
      el => el.tagName.toLowerCase() !== 'style' && el.getAttribute('slot') !== 'content'
    );

    if (!target) {
      throw new Error('Invalid tooltip target: no child element was found.');
    }

    return target as HTMLElement;
  }

  handleBlur() {
    if (this.hasTrigger('focus')) {
      this.hide();
    }
  }

  handleClick() {
    if (this.hasTrigger('click')) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }
  }

  handleFocus() {
    if (this.hasTrigger('focus')) {
      this.show();
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    // Pressing escape when the target element has focus should dismiss the tooltip
    if (this.open && event.key === 'Escape') {
      event.stopPropagation();
      this.hide();
    }
  }

  handleMouseOver() {
    if (this.hasTrigger('hover')) {
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = window.setTimeout(this.show, parseDuration(this.delay));
    }
  }

  handleMouseOut() {
    if (this.hasTrigger('hover')) {
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = window.setTimeout(this.hide, 0);
    }
  }

  hasTrigger(triggerType: string) {
    const triggers = this.trigger.split(' ');
    return triggers.includes(triggerType);
  }

  private startPositioner() {
    this.stopPositioner();
    this.updatePositioner();
    this.positionerCleanup = autoUpdate(this.target, this.positioner, this.updatePositioner.bind(this));
  }

  private updatePositioner() {
    if (!this.open || !this.target || !this.positioner) {
      return;
    }

    computePosition(this.target, this.positioner, {
      placement: this.placement,
      middleware: [
        offset({ mainAxis: this.distance, crossAxis: this.skidding }),
        flip(),
        shift(),
        arrow({
          element: this.arrow,
          padding: 10, // min distance from the edge
        }),
      ],
      strategy: this.hoist ? 'fixed' : 'absolute',
    }).then(({ x, y, middlewareData, placement }) => {
      const arrowX = middlewareData.arrow!.x;
      const arrowY = middlewareData.arrow!.y;
      const staticSide = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[placement.split('-')[0]]!;

      this.positioner.setAttribute('data-placement', placement);

      Object.assign(this.positioner.style, {
        position: this.hoist ? 'fixed' : 'absolute',
        left: `${x}px`,
        top: `${y}px`,
      });

      Object.assign(this.arrow.style, {
        left: typeof arrowX === 'number' ? `${arrowX}px` : '',
        top: typeof arrowY === 'number' ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [staticSide]: 'calc(var(--arrow-size) * -1)',
      });
    });
  }

  private stopPositioner() {
    if (this.positionerCleanup) {
      this.positionerCleanup();
      this.positionerCleanup = undefined;
      this.positioner.removeAttribute('data-placement');
    }
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
