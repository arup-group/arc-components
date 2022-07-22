import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { setDefaultAnimation, getAnimation, startAnimations, stopAnimations } from '../../internal/animate.js';
import { emit, waitForEvent } from '../../internal/event.js';
import { lockBodyScrolling, unlockBodyScrolling } from '../../internal/scroll.js';
import { uppercaseFirstLetter } from '../../internal/string.js';
import { watch } from '../../internal/watch.js';
import Modal from '../../internal/modal.js';
import { DRAWER_PLACEMENTS, DrawerPlacements } from './constants/DrawerConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { ARC_ANIMATION_OPTIONS } from '../../internal/constants/animationConstants.js';
import { ICON_TYPES } from '../icon/constants/IconConstants.js';
import styles from './arc-drawer.styles.js';
import '../icon-button/arc-icon-button.js';

/**
 * @slot default - The drawer's content.
 * @slot label - The drawer's label.
 * @slot footer - The drawer's footer.
 *
 * @event arc-show - Emitted when the drawer opens.
 * @event arc-after-show - Emitted after the drawer opens and all animations are complete.
 * @event arc-hide - Emitted when the drawer closes.
 * @event arc-after-hide - Emitted after the drawer closes and all animations are complete.
 * @event arc-initial-focus - Emitted when the drawer opens and the panel gains focus. Calling event.preventDefault() will prevent focus and allow you to set it on a different element in the drawer, such as an input or button.
 * @event arc-request-close - Emitted when the user attempts to close the drawer by clicking the close button, clicking the overlay, or pressing the escape key. Calling event.preventDefault() will prevent the drawer from closing. Avoid using this unless closing the drawer will result in destructive behavior such as data loss.
 *
 * @cssproperty --size - The preferred size of the drawer. This will be applied to either the width or height depending on its placement.
 */
export default class ArcDrawer extends LitElement {
  /** @internal */
  static tag = 'arc-drawer';

  static styles = styles;

  /** @internal */
  @query('#main') drawer: HTMLElement;

  /** @internal */
  @query('#panel') panel: HTMLElement;

  /** @internal */
  @query('#overlay') overlay: HTMLElement;

  /** @internal - Reference to the Modal class. */
  private modal: Modal;

  /** @internal - Reference to the HTMLElement slotted to the 'trigger' slot. */
  private originalTrigger: HTMLElement | null;

  /** Indicates whether the drawer is open. This can be used instead of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open: boolean = false;

  /** By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of its parent element, set this prop and add position: relative to the parent. */
  @property({ type: Boolean, reflect: true }) contained: boolean = false;

  /** The direction from which the drawer will open. */
  @property({ type: String, reflect: true }) placement: DrawerPlacements = DRAWER_PLACEMENTS.end;

  /** The drawer label. Required for proper accessibility. Alternatively, the label slot can be used. */
  @property({ type: String }) label: string;

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      /* Show */
      emit(this, ARC_EVENTS.show);
      this.originalTrigger = document.activeElement as HTMLElement;

      /* Lock body scrolling only if the drawer isn't contained */
      if (!this.contained) {
        this.modal.activate();
        lockBodyScrolling(this);
      }

      await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
      this.drawer.hidden = false;

      /* Set initial focus */
      requestAnimationFrame(() => {
        const arcInitialFocus = emit(this, ARC_EVENTS.initialFocus, { cancelable: true });
        if (!arcInitialFocus.defaultPrevented) {
          this.panel.focus({ preventScroll: true });
        }
      });

      const panelAnimation = getAnimation(this, `drawer.show${uppercaseFirstLetter(this.placement)}`);
      const overlayAnimation = getAnimation(this, 'drawer.overlay.show');
      await Promise.all([
        startAnimations(this.panel, panelAnimation.keyframes, panelAnimation.options),
        startAnimations(this.overlay, overlayAnimation.keyframes, overlayAnimation.options),
      ]);

      emit(this, ARC_EVENTS.afterShow);
    } else {
      /* Hide */
      emit(this, ARC_EVENTS.hide);
      this.modal.deactivate();
      unlockBodyScrolling(this);

      await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
      const panelAnimation = getAnimation(this, `drawer.hide${uppercaseFirstLetter(this.placement)}`);
      const overlayAnimation = getAnimation(this, 'drawer.overlay.hide');
      await Promise.all([
        startAnimations(this.panel, panelAnimation.keyframes, panelAnimation.options),
        startAnimations(this.overlay, overlayAnimation.keyframes, overlayAnimation.options),
      ]);

      this.drawer.hidden = true;

      /* Restore focus to the original trigger */
      const trigger = this.originalTrigger;
      if (typeof trigger?.focus === 'function') {
        setTimeout(() => trigger.focus());
      }

      emit(this, ARC_EVENTS.afterHide);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.modal = new Modal(this);
  }

  firstUpdated() {
    this.drawer.hidden = !this.open;

    if (this.open && !this.contained) {
      this.modal.activate();
      lockBodyScrolling(this);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    unlockBodyScrolling(this);
  }

  /* Shows the drawer. */
  show() {
    if (this.open) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, ARC_EVENTS.afterShow);
  }

  /* Hides the drawer. */
  hide() {
    if (!this.open) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, ARC_EVENTS.afterHide);
  }

  private _requestClose() {
    const arcRequestClose = emit(this, ARC_EVENTS.requestClose, { cancelable: true });
    if (arcRequestClose.defaultPrevented) {
      const animation = getAnimation(this, 'drawer.denyClose');
      startAnimations(this.panel, animation.keyframes, animation.options);
      return;
    }

    this.hide();
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.stopPropagation();
      this._requestClose();
    }
  }

  protected render() {
    return html`
      <div
        id="main"
        class=${classMap({
          drawer: true,
          'drawer--contained': this.contained,
          'drawer--top': this.placement === DRAWER_PLACEMENTS.top,
          'drawer--end': this.placement === DRAWER_PLACEMENTS.end,
          'drawer--bottom': this.placement === DRAWER_PLACEMENTS.bottom,
          'drawer--start': this.placement === DRAWER_PLACEMENTS.start,
        })}
        @keydown=${this.handleKeyDown}
      >
        <div id="overlay" @click=${this._requestClose} role="presentation" tabindex="-1"></div>
        <div
          id="panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? 'false' : 'true'}
          aria-label=${ifDefined(this.label || undefined)}
          aria-labelledby="${ifDefined(this.label ? undefined : 'title')}"
          tabindex="0"
        >
          <div id="header">
            <slot id="title" name="label"><span>${this.label}</span></slot>
            <arc-icon-button
              id="toggleClose"
              name=${ICON_TYPES.x}
              label="Close drawer"
              @click=${this._requestClose}
            ></arc-icon-button>
          </div>

          <div id="body">
            <slot></slot>
          </div>

          <footer id="footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
}

/* Top */
setDefaultAnimation('drawer.showTop', {
  keyframes: [
    { opacity: 0, transform: 'translateY(-100%)' },
    { opacity: 1, transform: 'translateY(0)' },
  ],
  options: ARC_ANIMATION_OPTIONS.slow,
});

setDefaultAnimation('drawer.hideTop', {
  keyframes: [
    { opacity: 1, transform: 'translateY(0)' },
    { opacity: 0, transform: 'translateY(-100%)' },
  ],
  options: ARC_ANIMATION_OPTIONS.slow,
});

/* End */
setDefaultAnimation('drawer.showEnd', {
  keyframes: [
    { opacity: 0, transform: 'translateX(100%)' },
    { opacity: 1, transform: 'translateX(0)' },
  ],
  options: ARC_ANIMATION_OPTIONS.slow,
});

setDefaultAnimation('drawer.hideEnd', {
  keyframes: [
    { opacity: 1, transform: 'translateX(0)' },
    { opacity: 0, transform: 'translateX(100%)' },
  ],
  options: ARC_ANIMATION_OPTIONS.slow,
});

/* Bottom */
setDefaultAnimation('drawer.showBottom', {
  keyframes: [
    { opacity: 0, transform: 'translateY(100%)' },
    { opacity: 1, transform: 'translateY(0)' },
  ],
  options: ARC_ANIMATION_OPTIONS.slow,
});

setDefaultAnimation('drawer.hideBottom', {
  keyframes: [
    { opacity: 1, transform: 'translateY(0)' },
    { opacity: 0, transform: 'translateY(100%)' },
  ],
  options: ARC_ANIMATION_OPTIONS.slow,
});

/* Start */
setDefaultAnimation('drawer.showStart', {
  keyframes: [
    { opacity: 0, transform: 'translateX(-100%)' },
    { opacity: 1, transform: 'translateX(0)' },
  ],
  options: ARC_ANIMATION_OPTIONS.slow,
});

setDefaultAnimation('drawer.hideStart', {
  keyframes: [
    { opacity: 1, transform: 'translateX(0)' },
    { opacity: 0, transform: 'translateX(-100%)' },
  ],
  options: ARC_ANIMATION_OPTIONS.slow,
});

/* Deny close */
setDefaultAnimation('drawer.denyClose', {
  keyframes: [{ transform: 'scale(1)' }, { transform: 'scale(1.01)' }, { transform: 'scale(1)' }],
  options: ARC_ANIMATION_OPTIONS.slow,
});

/* Overlay */
setDefaultAnimation('drawer.overlay.show', {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: ARC_ANIMATION_OPTIONS.slow,
});

setDefaultAnimation('drawer.overlay.hide', {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: ARC_ANIMATION_OPTIONS.slow,
});

declare global {
  interface HTMLElementTagNameMap {
    'arc-drawer': ArcDrawer;
  }
}
