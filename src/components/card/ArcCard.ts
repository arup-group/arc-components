import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import componentStyles from '../../styles/component.styles.js';
import { HasSlotController } from '../../internal/slot.js';
import { watch } from '../../internal/watch.js';
import { startAnimations, stopAnimations, shimKeyframesHeightAuto } from '../../internal/animate.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry.js';
import { emit, waitForEvent } from '../../internal/event.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { ARC_ANIMATION_OPTIONS } from '../../internal/constants/animationConstants.js';

/**
 * @slot default - The card's content.
 * @slot heading - The card's heading.
 * @slot actions - The card's actions.
 *
 * @event arc-show - Emitted when the card expands.
 * @event arc-after-show - Emitted after the cards expands and all animations are complete.
 * @event arc-hide - Emitted when the card collapses.
 * @event arc-after-hide - Emitted after the card collapses and all animations are complete.
 *
 * @cssproperty width - Set the width of the card.
 */
export default class ArcCard extends LitElement {
  static tag = 'arc-card';

  static styles = [
    componentStyles,
    css`
      :host {
        display: inline-block;
        width: auto;
      }

      #main {
        display: grid;
        overflow: hidden;
        background-color: rgb(var(--arc-container-color));
        box-shadow: var(--arc-box-shadow);
        transition: var(--arc-transition-medium) transform;
      }

      #header,
      #body,
      #footer {
        padding: var(--arc-spacing-normal);
      }

      #image {
        overflow: hidden;
      }

      #image ::slotted(img) {
        display: block;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        object-fit: cover;
      }

      /* Hide elements when they are not slotted or when the card is collapsed */
      #main:not(.card--has-header) #header,
      #main:not(.card--has-image) #image,
      #main:not(.card--has-body) #body,
      #main:not(.card--has-footer) #footer {
        display: none;
      }

      #header ::slotted(*),
      #footer ::slotted(*) {
        display: grid;
        align-items: center;
        grid-auto-flow: column;
        gap: var(--arc-spacing-small);
      }

      #header ::slotted(*) {
        justify-content: space-between;
      }

      #footer ::slotted(*) {
        justify-content: end;
      }
    `,
  ];

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

      const { keyframes, options } = getAnimation(this, 'card.expand');
      await startAnimations(this.content, shimKeyframesHeightAuto(keyframes, this.content.scrollHeight), options);

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
      return;
    }

    this.collapsed = false;
    return waitForEvent(this, ARC_EVENTS.afterShow);
  }

  /* Collapse the card. Only when the header slot is filled. */
  async collapse() {
    if (this.collapsed || !this.hasSlotController.test('header')) {
      return;
    }

    this.collapsed = true;
    return waitForEvent(this, ARC_EVENTS.afterHide);
  }

  render() {
    return html`
      <article
        id="main"
        role="article"
        class=${classMap({
          'card--has-header': this.hasSlotController.test('header'),
          'card--has-image': this.hasSlotController.test('image'),
          'card--has-body': this.hasSlotController.test('[default]'),
          'card--has-footer': this.hasSlotController.test('footer'),
          collapsed: this.collapsed,
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
