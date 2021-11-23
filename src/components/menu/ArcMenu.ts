import { css, html, LitElement } from 'lit';
import { query } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';
import { emit } from '../../utilities/event-utils.js';

import type ArcMenuItem from '../menu-item/ArcMenuItem.js';

export default class ArcMenu extends LitElement {
  static tag = 'arc-menu';

  static styles = [componentStyles, css``];

  @query('#menu') menu: HTMLElement;

  @query('slot') defaultSlot: HTMLSlotElement;

  getAllItems(
    options: { includeDisabled: boolean } = { includeDisabled: true }
  ) {
    const { includeDisabled } = options;

    return [...this.defaultSlot.assignedElements({ flatten: true })].filter(
      (el: HTMLElement) => {
        if (el.getAttribute('role') !== 'menuitem') {
          return false;
        }
        return !(!includeDisabled && (el as ArcMenuItem).disabled);
      }
    ) as ArcMenuItem[];
  }

  /**
   * Gets the current menu item, which is the menu item that has `tabindex="0"` within the roving tab index.
   * The menu item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
   */
  getCurrentItem() {
    return this.getAllItems({ includeDisabled: false }).find(
      i => i.getAttribute('tabindex') === '0'
    );
  }

  /**
   * Sets the current menu item to the specified element. This sets `tabindex="0"` on the target element and
   * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a menu item.
   */
  setCurrentItem(item: ArcMenuItem) {
    const items = this.getAllItems({ includeDisabled: false });
    const activeItem = item.disabled ? items[0] : item;

    // Update tab indexes
    items.forEach(i =>
      i.setAttribute('tabindex', i === activeItem ? '0' : '-1')
    );
  }

  handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const item = target.closest('arc-menu-item') as ArcMenuItem;

    if (item && !item.disabled) {
      emit(this, 'arc-select', { detail: { item } });
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    // Make a selection when pressing enter
    if (event.key === 'Enter') {
      const item = this.getCurrentItem();
      event.preventDefault();

      if (item) {
        item.click();
      }
    }

    // Prevent scrolling when space is pressed
    if (event.key === ' ') {
      event.preventDefault();
    }

    // Move the selection when pressing down or up
    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      const items = this.getAllItems({ includeDisabled: false });
      const activeItem = this.getCurrentItem();
      let index = activeItem ? items.indexOf(activeItem) : 0;

      if (items.length) {
        event.preventDefault();

        if (event.key === 'ArrowDown') {
          index++;
        } else if (event.key === 'ArrowUp') {
          index--;
        } else if (event.key === 'Home') {
          index = 0;
        } else if (event.key === 'End') {
          index = items.length - 1;
        }

        if (index < 0) index = 0;
        if (index > items.length - 1) index = items.length - 1;

        this.setCurrentItem(items[index]);
        items[index].focus();
      }
    }
  }

  handleMouseDown(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (target.getAttribute('role') === 'menuitem') {
      this.setCurrentItem(target as ArcMenuItem);
    }
  }

  handleSlotChange() {
    const items = this.getAllItems({ includeDisabled: false });

    // Reset the roving tab index when the slotted items change
    if (items.length) {
      this.setCurrentItem(items[0]);
    }
  }

  render() {
    return html`
      <div
        id="main"
        role="menu"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-menu': ArcMenu;
  }
}
