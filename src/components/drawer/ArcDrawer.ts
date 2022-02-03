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
import { ICON_TYPES } from '../icon/constants/IconConstants.js';

import '../icon-button/arc-icon-button.js';

let id = 0;

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

  @query('#main') drawer: HTMLElement;

  @query('#panel') panel: HTMLElement;

  @query('#overlay') overlay: HTMLElement;

  private componentId = `drawer-${++id}`;

  private modal: Modal;

  private originalTrigger: HTMLElement | null;

  /* Indicates whether or not the drawer is open. You can use this instead of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open = false;

  /*
  Setting this property will allow the drawer to slide out of the parent element.
  The parent element will require `position: relative` for this to work.
  */
  @property({ type: Boolean, reflect: true }) contained = false;

  /* The direction from which the drawer will open */
  @property({ reflect: true }) placement: DrawerPlacements = DRAWER_PLACEMENTS.end;

  /* The drawer label. Alternatively, the label slot can be used. */
  @property({ type: String }) label: string;

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

  /* Hides the drawer */
  async hide() {
    if (!this.open) {
      return;
    }

    this.open = false;
    await waitForEvent(this, ARC_EVENTS.afterHide);
  }

  private requestClose() {
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
      this.requestClose();
    }
  }

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
        startAnimations(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
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
        startAnimations(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
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

  render() {
    return html`
      <div id='main' @keydown=${this.handleKeyDown}>
        <div id='overlay' @click=${this.requestClose} role="presentation" tabindex='-1'></div>
        <div id='panel'
             role='dialog'
             aria-modal='true'
             aria-hidden=${this.open ? 'false' : 'true'}
             aria-label=${ifDefined(this.label)}
             aria-labelledby=${ifDefined(`${this.componentId}-title`)}
             tabindex='0'
        >
          <div id="header">
            <slot name="label"><span>${this.label}</span></slot>
            <arc-icon-button
              id="toggleClose"
              name=${ICON_TYPES.x}
              label="Close drawer"
              @click=${this.requestClose}
            ></arc-icon-button>
          </div>

          <div id='body'>
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
    { opacity: 1, transform: 'translateY(0)' }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('drawer.hideTop', {
  keyframes: [
    { opacity: 1, transform: 'translateY(0)' },
    { opacity: 0, transform: 'translateY(-100%)' }
  ],
  options: { duration: 250, easing: 'ease' }
});

/* End */
setDefaultAnimation('drawer.showEnd', {
  keyframes: [
    { opacity: 0, transform: 'translateX(100%)' },
    { opacity: 1, transform: 'translateX(0)' }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('drawer.hideEnd', {
  keyframes: [
    { opacity: 1, transform: 'translateX(0)' },
    { opacity: 0, transform: 'translateX(100%)' }
  ],
  options: { duration: 250, easing: 'ease' }
});

/* Bottom */
setDefaultAnimation('drawer.showBottom', {
  keyframes: [
    { opacity: 0, transform: 'translateY(100%)' },
    { opacity: 1, transform: 'translateY(0)' }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('drawer.hideBottom', {
  keyframes: [
    { opacity: 1, transform: 'translateY(0)' },
    { opacity: 0, transform: 'translateY(100%)' }
  ],
  options: { duration: 250, easing: 'ease' }
});

/* Start */
setDefaultAnimation('drawer.showStart', {
  keyframes: [
    { opacity: 0, transform: 'translateX(-100%)' },
    { opacity: 1, transform: 'translateX(0)' }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('drawer.hideStart', {
  keyframes: [
    { opacity: 1, transform: 'translateX(0)' },
    { opacity: 0, transform: 'translateX(-100%)' }
  ],
  options: { duration: 250, easing: 'ease' }
});

/* Deny close */
setDefaultAnimation('drawer.denyClose', {
  keyframes: [{ transform: 'scale(1)' }, { transform: 'scale(1.01)' }, { transform: 'scale(1)' }],
  options: { duration: 250 }
});

/* Overlay */
setDefaultAnimation('drawer.overlay.show', {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});

setDefaultAnimation('drawer.overlay.hide', {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});

declare global {
  interface HTMLElementTagNameMap {
    'arc-drawer': ArcDrawer;
  }
}
