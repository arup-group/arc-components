import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
  size,
  Placement,
} from '@floating-ui/dom';
import {
  setDefaultAnimation,
  getAnimation,
  startAnimations,
  stopAnimations,
} from '../../internal/animate.js';
import { emit, waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import { getTabbableBoundary } from '../../internal/tabbable.js';
import { FLOATING_PLACEMENTS } from '../../internal/constants/placementConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { ARC_ANIMATION_OPTIONS } from '../../internal/constants/animationConstants.js';
import styles from './arc-dropdown.styles.js';
import type ArcMenu from '../menu/ArcMenu.js';
import type ArcMenuItem from '../menu-item/ArcMenuItem.js';

/**
 * @slot default - The dropdown content.
 * @slot trigger - The dropdown trigger, usually an `<arc-button>` element.
 *
 * @event arc-show - Emitted when the dropdown opens.
 * @event arc-after-show - Emitted after the dropdown opens and all animations are complete.
 * @event arc-hide - Emitted when the dropdown closes.
 * @event arc-after-hide - Emitted after the dropdown closes and all animations are complete.
 */
export default class ArcDropdown extends LitElement {
  /** @internal */
  static tag = 'arc-dropdown';

  static styles = styles;

  /** @internal */
  @query('#trigger') trigger: HTMLElement;

  /** @internal */
  @query('#triggerSlot') triggerSlot: HTMLSlotElement;

  /** @internal */
  @query('#positioner') positioner: HTMLElement;

  /** @internal */
  @query('#panel') panel: HTMLElement;

  /** @internal */
  private _positionerCleanup: ReturnType<typeof autoUpdate> | undefined;

  /** The preferred placement of the dropdown panel. */
  @property({ type: String }) placement: Placement =
    FLOATING_PLACEMENTS['bottom-start'];

  /** The dropdown will close when the user interacts outside of this element (e.g. clicking). */
  @property({ attribute: false }) containingElement?: HTMLElement;

  /** The distance in pixels from which to offset the panel away from its trigger. */
  @property({ type: Number }) distance: number = 0;

  /** The distance in pixels from which to offset the panel along its trigger. */
  @property({ type: Number }) skidding: number = 0;

  /** Indicates whether the dropdown is open. This can be used instead of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open: boolean = false;

  /** Disables the dropdown so the panel will not open. */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /** Enable this option to prevent the panel from being clipped when the component is placed inside a container with overflow: auto|hidden|scroll. */
  @property({ type: Boolean, reflect: true }) hoist: boolean = false;

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.disabled) {
      return;
    }

    this._updateAccessibleTrigger();

    if (this.open) {
      /* Show */
      emit(this, ARC_EVENTS.show);
      this.addOpenListeners();

      await stopAnimations(this);
      this.startPositioner();
      this.panel.hidden = false;
      const { keyframes, options } = getAnimation(this, 'dropdown.show');
      await startAnimations(this.panel, keyframes, options);

      emit(this, ARC_EVENTS.afterShow);
    } else {
      /* Hide */
      emit(this, ARC_EVENTS.hide);
      this.removeOpenListeners();

      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, 'dropdown.hide');
      await startAnimations(this.panel, keyframes, options);
      this.panel.hidden = true;
      this.stopPositioner();

      emit(this, ARC_EVENTS.afterHide);
    }
  }

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
    this.handlePanelSelect = this.handlePanelSelect.bind(this);
    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);

    if (!this.containingElement) {
      this.containingElement = this;
    }
  }

  async firstUpdated() {
    this.panel.hidden = !this.open;

    /* If the dropdown is visible on init, update its position. */
    if (this.open) {
      await this.updateComplete;
      this.addOpenListeners();
      this.startPositioner();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeOpenListeners();
    this.hide();
    this.stopPositioner();
  }

  private startPositioner() {
    this.stopPositioner();
    this.updatePositioner();
    this._positionerCleanup = autoUpdate(
      this.trigger,
      this.positioner,
      this.updatePositioner.bind(this)
    );
  }

  private updatePositioner() {
    if (!this.open || !this.trigger || !this.positioner) {
      return;
    }

    computePosition(this.trigger, this.positioner, {
      placement: this.placement,
      middleware: [
        offset({ mainAxis: this.distance, crossAxis: this.skidding }),
        flip(),
        shift(),
        size({
          apply: ({ width, height }) => {
            /* Ensure the panel stays within the viewport when we have lots of menu items */
            Object.assign(this.panel.style, {
              maxWidth: `${width}px`,
              maxHeight: `${height}px`,
            });
          },
          padding: 8,
        }),
      ],
      strategy: this.hoist ? 'fixed' : 'absolute',
    }).then(({ x, y, placement }) => {
      this.positioner.setAttribute('data-placement', placement);

      Object.assign(this.positioner.style, {
        position: this.hoist ? 'fixed' : 'absolute',
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }

  private stopPositioner() {
    if (this._positionerCleanup) {
      this._positionerCleanup();
      this._positionerCleanup = undefined;
      this.positioner.removeAttribute('data-placement');
    }
  }

  /* Link the trigger to the dropdown panel with `aria-haspopup` and `aria-expanded`.
  These must be applied to the "accessible trigger" so screen readers will understand them.
  The accessible trigger could be the slotted element, a child of the slotted element, or an element in the slotted element's shadow root.
  For example, the accessible trigger of an <arc-button> is a <button> located inside its shadow root.
  To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
  */
  private _updateAccessibleTrigger() {
    if (this.trigger) {
      const assignedElements = this.triggerSlot.assignedElements({
        flatten: true,
      }) as HTMLElement[];
      const accessibleTrigger = assignedElements.find(
        (el) => getTabbableBoundary(el).start
      );

      if (accessibleTrigger) {
        accessibleTrigger.setAttribute('aria-haspopup', 'true');
        accessibleTrigger.setAttribute(
          'aria-expanded',
          this.open ? 'true' : 'false'
        );
      }
    }
  }

  addOpenListeners() {
    document.addEventListener('keydown', this.handleDocumentKeyDown);
    document.addEventListener('mousedown', this.handleDocumentMouseDown);
  }

  removeOpenListeners() {
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
    document.removeEventListener('mousedown', this.handleDocumentMouseDown);
  }

  /* Shows the dropdown. */
  show() {
    if (this.open) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, ARC_EVENTS.afterShow);
  }

  /* Hides the dropdown. */
  hide() {
    if (!this.open) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, ARC_EVENTS.afterHide);
  }

  getMenu() {
    const slot = this.panel.querySelector('slot')!;
    return slot
      .assignedElements({ flatten: true })
      .filter((el) => el.tagName === 'ARC-MENU')[0] as ArcMenu;
  }

  focusOnTrigger() {
    const trigger = this.triggerSlot.assignedElements({ flatten: true })[0] as
      | HTMLElement
      | undefined;
    if (trigger && typeof trigger.focus === 'function') {
      trigger.focus();
    }
  }

  handleDocumentKeyDown(event: KeyboardEvent) {
    /* Close when escape is pressed */
    if (event.key === 'Escape') {
      this.hide();
      this.focusOnTrigger();
      return;
    }

    /* Handle tabbing */
    if (event.key === 'Tab') {
      const activeElement =
        this.containingElement?.getRootNode() instanceof ShadowRoot
          ? document.activeElement?.shadowRoot?.activeElement
          : document.activeElement;

      /* Tabbing within an open menu should close the dropdown and refocus the trigger */
      if (this.open && activeElement?.tagName === 'ARC-MENU-ITEM') {
        event.preventDefault();
        this.hide();
        this.focusOnTrigger();
      }
    }
  }

  /* Close when clicking outside the containing element */
  handleDocumentMouseDown(event: MouseEvent) {
    const path = event.composedPath() as Array<EventTarget>;
    if (this.containingElement && !path.includes(this.containingElement)) {
      this.hide();
    }
  }

  /* Actions when the trigger has focus */
  handleTriggerKeyDown(event: KeyboardEvent) {
    /* Close when escape or tab is pressed */
    if (event.key === 'Escape') {
      this.focusOnTrigger();
      this.hide();
      return;
    }

    /*
    When space bar/enter is pressed, show the panel but don't focus on the menu.
    This lets the user press the same key again to hide the menu in case they don't want to make a selection.
    */
    if ([' ', 'Enter'].includes(event.key)) {
      event.preventDefault();
      this.handleTriggerClick();
      return;
    }

    const menu = this.getMenu();
    const menuItems = menu
      ? ([...menu.querySelectorAll('arc-menu-item')] as ArcMenuItem[])
      : [];
    const firstMenuItem = menuItems[0];
    const lastMenuItem = menuItems[menuItems.length - 1];

    /*
    When up/down is pressed, we make the assumption that the user is familiar with the menu and plans to make a
    selection. Rather than toggle the panel, we focus on the menu (if one exists) and activate the first item for
    faster navigation.
    */
    if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();

      /* Show the menu if it's not already open */
      if (!this.open) {
        this.show();
      }

      /* Focus on a menu item */
      if (event.key === 'ArrowDown' && firstMenuItem) {
        menu.setCurrentItem(firstMenuItem);
        firstMenuItem.focus();
        return;
      }

      if (event.key === 'ArrowUp' && lastMenuItem) {
        menu.setCurrentItem(lastMenuItem);
        lastMenuItem.focus();
        return;
      }
    }

    /* Other keys bring focus to the menu and initiate type-to-select behavior */
    const ignoredKeys = ['Tab', 'Shift', 'Meta', 'Ctrl', 'Alt'];
    if (this.open && menu && !ignoredKeys.includes(event.key)) {
      menu.typeToSelect(event.key);
    }
  }

  /* Prevent space from triggering a click event in Firefox */
  handleTriggerKeyUp(event: KeyboardEvent) {
    if (event.key === ' ') {
      event.preventDefault();
    }
  }

  handleTriggerClick() {
    if (this.open) {
      this.hide();
    } else {
      this.show();
    }
  }

  /* Hide the dropdown when a menu item is selected */
  handlePanelSelect(event: CustomEvent) {
    const target = event.target as HTMLElement;

    if (target.tagName === 'ARC-MENU') {
      this.hide();
      this.focusOnTrigger();
    }
  }

  protected render() {
    return html`
      <div
        id="main"
        class=${classMap({
          dropdown: true,
          'dropdown--open': this.open,
        })}
      >
        <span
          id="trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot
            id="triggerSlot"
            name="trigger"
            @slotchange=${this._updateAccessibleTrigger}
          ></slot>
        </span>

        <div id="positioner">
          <div
            id="panel"
            role="menu"
            aria-hidden=${this.open ? 'false' : 'true'}
            aria-labelledby="main"
            @arc-select=${this.handlePanelSelect}
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}

setDefaultAnimation('dropdown.show', {
  keyframes: [
    { opacity: 0, transform: 'scale(0.9)' },
    { opacity: 1, transform: 'scale(1)' },
  ],
  options: ARC_ANIMATION_OPTIONS.fast,
});

setDefaultAnimation('dropdown.hide', {
  keyframes: [
    { opacity: 1, transform: 'scale(1)' },
    { opacity: 0, transform: 'scale(0.9)' },
  ],
  options: ARC_ANIMATION_OPTIONS.fast,
});

declare global {
  interface HTMLElementTagNameMap {
    'arc-dropdown': ArcDropdown;
  }
}
