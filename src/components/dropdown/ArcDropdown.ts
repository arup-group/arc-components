import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { Instance as PopperInstance, createPopper, Placement } from '@popperjs/core';
import { startAnimations, stopAnimations } from '../../internal/animate.js';
import { emit, waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import { getTabbableBoundary } from '../../internal/tabbable.js';
import { setDefaultAnimation, getAnimation } from '../../utilities/animation-registry.js';
import componentStyles from '../../styles/component.styles.js';
import { DROPDOWN_PLACEMENTS } from './constants/DropdownConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

import type ArcMenu from '../menu/ArcMenu.js';
import type ArcMenuItem from '../menu-item/ArcMenuItem.js';

export default class ArcDropdown extends LitElement {
  static tag = 'arc-dropdown';

  static styles = [
    componentStyles,
    css`
      :host {
        display: inline-flex;
        align-items: center;
      }

      #main, #trigger {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }

      #positioner {
        position: absolute;
        z-index: var(--arc-z-index-dropdown);
      }

      #panel {
        max-height: var(--arc-panel-height);
        min-width: var(--arc-panel-width);
        background-color: rgb(var(--arc-container-color));
        box-shadow: var(--arc-box-shadow);
        overflow: auto;
        overscroll-behavior: none;
        pointer-events: none;
      }

      :host([open]) #panel {
        pointer-events: all;
      }

      #positioner[data-popper-placement^='top'] #panel {
        transform-origin: bottom;
      }

      #positioner[data-popper-placement^='bottom'] #panel {
        transform-origin: top;
      }

      #positioner[data-popper-placement^='left'] #panel {
        transform-origin: right;
      }

      #positioner[data-popper-placement^='right'] #panel {
        transform-origin: left;
      }
    `,
  ];

  @query('#trigger') trigger: HTMLElement;

  @query('#triggerSlot') triggerSlot: HTMLSlotElement;

  @query('#panel') panel: HTMLElement;

  @query('#positioner') positioner: HTMLElement;

  private popover: PopperInstance;

  /* The preferred placement of the dropdown panel. */
  @property({ type: String }) placement: Placement = DROPDOWN_PLACEMENTS['bottom-start'];

  /* The distance in pixels from which to offset the panel away from its trigger. */
  @property({ type: Number }) distance: number = 0;

  /* The distance in pixels from which to offset the panel along its trigger. */
  @property({ type: Number }) skidding: number = 0;

  /* Indicates whether or not the dropdown is open. You can use this instead of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open: boolean = false;

  /* Disables the dropdown so the panel will not open. */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /* Enable this option to prevent the panel from being clipped when the component is placed inside a container with overflow: auto|scroll`. */
  @property({ type: Boolean, reflect: true }) hoist: boolean = false;

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.disabled) {
      return;
    }

    this.updateAccessibleTrigger();

    if (this.open) {
      /* Show */
      emit(this, ARC_EVENTS.show);
      document.addEventListener('keydown', this.handleDocumentKeyDown);
      document.addEventListener('mousedown', this.handleDocumentMouseDown);

      await stopAnimations(this);
      this.popover.update();
      this.panel.hidden = false;
      const { keyframes, options } = getAnimation(this, 'dropdown.show');
      await startAnimations(this.panel, keyframes, options);

      emit(this, ARC_EVENTS.afterShow);
    } else {
      /* Hide */
      emit(this, ARC_EVENTS.hide);
      document.removeEventListener('keydown', this.handleDocumentKeyDown);
      document.removeEventListener('mousedown', this.handleDocumentMouseDown);

      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, 'dropdown.hide');
      await startAnimations(this.panel, keyframes, options);
      this.panel.hidden = true;

      emit(this, ARC_EVENTS.afterHide);
    }
  }

  @watch('distance')
  @watch('hoist')
  @watch('placement')
  @watch('skidding')
  handlePopoverOptionsChange() {
    if (this.popover) {
      this.popover.setOptions({
        placement: this.placement,
        strategy: this.hoist ? 'fixed' : 'absolute',
        modifiers: [
          {
            name: 'flip',
            options: {
              boundary: 'viewport',
            },
          },
          {
            name: 'offset',
            options: {
              offset: [this.skidding, this.distance],
            },
          },
        ],
      });
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.handlePanelSelect = this.handlePanelSelect.bind(this);
    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);

    /* Define the accessible trigger after render */
    this.updateComplete.then(() => {
      this.popover = createPopper(this.trigger, this.positioner, {
        placement: this.placement,
        strategy: this.hoist ? 'fixed' : 'absolute',
        modifiers: [
          {
            name: 'flip',
            options: {
              boundary: 'viewport',
            },
          },
          {
            name: 'offset',
            options: {
              offset: [this.skidding, this.distance],
            },
          },
        ],
      });
    });
  }

  firstUpdated() {
    this.panel.hidden = !this.open;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.hide();
    this.popover.destroy();
  }

  focusOnTrigger() {
    const trigger = this.triggerSlot.assignedElements({ flatten: true })[0] as any;
    if (trigger && typeof trigger.focus === 'function') {
      trigger.focus();
    }
  }

  getMenu() {
    const slot = this.panel.querySelector('slot')!;
    return slot.assignedElements({ flatten: true }).filter(el => el.tagName === 'ARC-MENU')[0] as ArcMenu;
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
      /* Tabbing within an open menu should close the dropdown and refocus the trigger */
      if (this.open && document.activeElement?.tagName === 'ARC-MENU-ITEM') {
        event.preventDefault();
        this.hide();
        this.focusOnTrigger();
      }
    }
  }

  /* Close when clicking outside of the containing element */
  handleDocumentMouseDown(event: MouseEvent) {
    const path = event.composedPath() as Array<EventTarget>;
    if (!path.includes(this)) {
      this.hide();
    }
  }

  handleTriggerKeyDown(event: KeyboardEvent) {
    const menu = this.getMenu();
    const menuItems = menu ? ([...menu.querySelectorAll('arc-menu-item')] as ArcMenuItem[]) : [];
    const firstMenuItem = menuItems[0];
    const lastMenuItem = menuItems[menuItems.length - 1];

    /* Close when escape or tab is pressed */
    if (event.key === 'Escape') {
      this.focusOnTrigger();
      this.hide();
      return;
    }

    /*
    When space bar/enter is pressed, show the panel but don't focus on the menu.
    This let's the user press the same
    key again to hide the menu in case they don't want to make a selection.
    */
    if ([' ', 'Enter'].includes(event.key)) {
      event.preventDefault();

      this.handleTriggerClick();

      return;
    }

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
  handleTriggerKeyUp = (event: KeyboardEvent) => {
    if (event.key === ' ') {
      event.preventDefault();
    }
  };

  /* Hide the dropdown when a menu item is selected */
  handlePanelSelect(event: CustomEvent) {
    const target = event.target as HTMLElement;

    if (target.tagName === 'ARC-MENU') {
      this.hide();
      this.focusOnTrigger();
    }
  }

  handleTriggerClick() {
    if (this.open) {
      this.hide();
    } else {
      this.show();
    }
  }

  /* Link the trigger to the dropdown panel with `aria-haspopup` and `aria-expanded`.
  These must be applied to the "accessible trigger" so screen readers will understand them.
  The accessible trigger could be the slotted element, a child of the slotted element, or an element in the slotted element's shadow root.
  For example, the accessible trigger of an <arc-button> is a <button> located inside its shadow root.
  To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
  */
  updateAccessibleTrigger() {
    if (this.trigger) {
      const assignedElements = this.triggerSlot.assignedElements({ flatten: true }) as HTMLElement[];
      const accessibleTrigger = assignedElements.find(el => getTabbableBoundary(el).start);

      if (accessibleTrigger) {
        accessibleTrigger.setAttribute('aria-haspopup', 'true');
        accessibleTrigger.setAttribute('aria-expanded', this.open ? 'true' : 'false');
      }
    }
  }

  /* Shows the dropdown panel. */
  async show() {
    if (this.open) {
      return;
    }

    this.open = true;
    await waitForEvent(this, ARC_EVENTS.afterShow);
  }

  /* Hides the dropdown panel */
  async hide() {
    if (!this.open) {
      return;
    }

    this.open = false;
    await waitForEvent(this, ARC_EVENTS.afterHide);
  }

  render() {
    return html`
      <div id="main">
        <span
          id="trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot id="triggerSlot" name="trigger" @slotchange=${this.updateAccessibleTrigger}></slot>
        </span>

        <!-- Position the panel with a wrapper since the popover makes use of translate. This lets us add animations
        on the panel without interfering with the position. -->
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
  options: { duration: 150, easing: 'ease' },
});

setDefaultAnimation('dropdown.hide', {
  keyframes: [
    { opacity: 1, transform: 'scale(1)' },
    { opacity: 0, transform: 'scale(0.9)' },
  ],
  options: { duration: 150, easing: 'ease' },
});

declare global {
  interface HTMLElementTagNameMap {
    'arc-dropdown': ArcDropdown;
  }
}
