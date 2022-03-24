import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { startAnimations, stopAnimations } from '../../internal/animate.js';
import { emit, waitForEvent } from '../../internal/event.js';
import { lockBodyScrolling, unlockBodyScrolling } from '../../internal/scroll.js';
import { uppercaseFirstLetter } from '../../internal/string.js';
import { watch } from '../../internal/watch.js';
import { setDefaultAnimation, getAnimation } from '../../utilities/animation-registry.js';
import Modal from '../../internal/modal.js';
import componentStyles from '../../styles/component.styles.js';
import { DRAWER_PLACEMENTS, DrawerPlacements } from './constants/DrawerConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { ARC_ANIMATION_OPTIONS } from '../../internal/constants/animationConstants.js';
import { ICON_TYPES } from '../icon/constants/IconConstants.js';

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
  static tag = 'arc-drawer';

  static styles = [
    componentStyles,
    css`
      :host {
        --size: 25rem;
        display: contents;
      }

      #main {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
        z-index: var(--arc-z-index-drawer);
      }

      /* Contained */
      :host([contained]) #main {
        position: absolute;
        z-index: initial;
      }

      #panel {
        position: absolute;
        display: flex;
        flex-direction: column;
        z-index: 2;
        max-width: 100%;
        max-height: 100%;
        background-color: rgb(var(--arc-container-color));
        transition: var(--arc-transition-medium) transform;
        overflow: auto;
        pointer-events: all;
      }

      #panel:focus {
        outline: none;
      }

      /* Top */
      :host([placement='top']) #panel {
        top: 0;
        right: auto;
        bottom: auto;
        left: 0;
        width: 100%;
        height: var(--size);
      }

      /* End */
      :host([placement='end']) #panel {
        top: 0;
        right: 0;
        bottom: auto;
        left: auto;
        width: var(--size);
        height: 100%;
      }

      /* Bottom */
      :host([placement='bottom']) #panel {
        top: auto;
        right: auto;
        bottom: 0;
        left: 0;
        width: 100%;
        height: var(--size);
      }

      /* Start */
      :host([placement='start']) #panel {
        top: 0;
        right: auto;
        bottom: auto;
        left: 0;
        width: var(--size);
        height: 100%;
      }

      #header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--arc-spacing-small);
        padding-left: var(--arc-spacing-medium);
        user-select: none;
      }

      #header span {
        font-size: var(--arc-font-size-large);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      #body {
        flex: 1 1 auto;
        padding: var(--arc-spacing-medium);
        padding-top: var(--arc-spacing-normal);
        border-top: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      #footer {
        text-align: right;
        padding: var(--arc-spacing-medium);
      }

      #overlay {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: var(--arc-overlay-gradient);
        pointer-events: all;
      }

      :host([contained]) #overlay {
        position: absolute;
      }
    `,
  ];

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

      const arcInitialFocus = emit(this, ARC_EVENTS.initialFocus, { cancelable: true });
      if (!arcInitialFocus.defaultPrevented) {
        this.panel.focus({ preventScroll: true });
      }

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
      if (trigger && typeof trigger.focus === 'function') {
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
  async show() {
    if (this.open) {
      return;
    }

    this.open = true;
    await waitForEvent(this, ARC_EVENTS.afterShow);
  }

  /* Hides the drawer. */
  async hide() {
    if (!this.open) {
      return;
    }

    this.open = false;
    await waitForEvent(this, ARC_EVENTS.afterHide);
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

  render() {
    return html`
      <div id="main" @keydown=${this.handleKeyDown}>
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
