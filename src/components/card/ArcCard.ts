import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { HasSlotController } from '../../internal/slot.js';
import { watch } from '../../internal/watch.js';
import {
  getAnimation,
  setDefaultAnimation,
  startAnimations,
  stopAnimations,
  shimKeyframesHeightAuto,
} from '../../internal/animate.js';
import { emit, waitForEvent } from '../../internal/event.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { ARC_ANIMATION_OPTIONS } from '../../internal/constants/animationConstants.js';
import styles from './arc-card.styles.js';

/**
 * @slot default - The card's body.
 * @slot header - The card's header.
 * @slot image - The card's image.
 * @slot footer - The card's footer.
 *
 * @event arc-show - Emitted when the card expands.
 * @event arc-after-show - Emitted after the cards expands and all animations are complete.
 * @event arc-hide - Emitted when the card collapses.
 * @event arc-after-hide - Emitted after the card collapses and all animations are complete.
 */
export default class ArcCard extends LitElement {
  static tag = 'arc-card';

  static styles = styles;

  /** @internal */
  @query('#content') content: HTMLElement;

  /** @internal - Controller that listens to slot changes within the component. */
  private readonly hasSlotController = new HasSlotController(this, 'header', 'image', '[default]', 'footer');

  /** Indicates whether the card is collapsed. This can be used instead of the expand/collapse methods. Ignored when the `header` slot is not filled. */
  @property({ type: Boolean, reflect: true }) collapsed: boolean = false;

  @watch('collapsed', { waitUntilFirstUpdate: true })
  async handleCollapsedChange() {
    if (!this.collapsed) {
      emit(this, ARC_EVENTS.show);
      await stopAnimations(this);
      this.content.hidden = false;

      const cardAnimation = getAnimation(this, 'card.expand');
      await startAnimations(
        this.content,
        shimKeyframesHeightAuto(cardAnimation.keyframes, this.content.scrollHeight),
        cardAnimation.options
      );

      this.content.style.height = 'auto';
      emit(this, ARC_EVENTS.afterShow);
    } else {
      /* Prevent collapsing when there is no header slot. */
      if (!this.hasSlotController.test('header')) {
        return;
      }

      emit(this, ARC_EVENTS.hide);
      await stopAnimations(this);

      const { keyframes, options } = getAnimation(this, 'card.collapse');
      await startAnimations(this.content, shimKeyframesHeightAuto(keyframes, this.content.scrollHeight), options);

      this.content.hidden = true;
      this.content.style.height = 'auto';
      emit(this, ARC_EVENTS.afterHide);
    }
  }

  firstUpdated() {
    if (!this.hasSlotController.test('header')) {
      return;
    }
    this.content.hidden = this.collapsed;
  }

  /* Expand the card. Only when the header slot is filled. */
  async expand() {
    if (!this.collapsed) {
      return undefined;
    }

    this.collapsed = false;
    return waitForEvent(this, ARC_EVENTS.afterShow);
  }

  /* Collapse the card. Only when the header slot is filled. */
  async collapse() {
    if (this.collapsed || !this.hasSlotController.test('header')) {
      return undefined;
    }

    this.collapsed = true;
    return waitForEvent(this, ARC_EVENTS.afterHide);
  }

  render() {
    return html`
      <article
        id="main"
        class=${classMap({
          'card--has-header': this.hasSlotController.test('header'),
          'card--has-image': this.hasSlotController.test('image'),
          'card--has-body': this.hasSlotController.test('[default]'),
          'card--has-footer': this.hasSlotController.test('footer'),
        })}
      >
        <header id="header">
          <slot name="header"></slot>
        </header>
        <div id="content">
          <div id="image">
            <slot name="image"></slot>
          </div>
          <div id="body">
            <slot></slot>
          </div>
          <footer id="footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </article>
    `;
  }
}

setDefaultAnimation('card.expand', {
  keyframes: [
    { height: '0', opacity: '0' },
    { height: 'auto', opacity: '1' },
  ],
  options: ARC_ANIMATION_OPTIONS.slow,
});

setDefaultAnimation('card.collapse', {
  keyframes: [
    { height: 'auto', opacity: '1' },
    { height: '0', opacity: '0' },
  ],
  options: ARC_ANIMATION_OPTIONS.slow,
});

declare global {
  interface HTMLElementTagNameMap {
    'arc-card': ArcCard;
  }
}
