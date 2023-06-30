import { html } from 'lit';
import { expect, fixture, oneEvent } from '@open-wc/testing';
import { hasSlot } from '../../internal/slot.js';
import { homeEvent, endEvent, enterEvent, spaceEvent, upEvent, downEvent } from '../../internal/test-utils.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

import type ArcMenu from './ArcMenu.js';
import type ArcMenuItem from '../menu-item/ArcMenuItem.js';
import './arc-menu.js';
import '../menu-item/arc-menu-item.js';

describe('ArcMenu', () => {
  /* Retrieve the tabindex of a menu item. */
  function getIndex(el: ArcMenuItem) {
    return el.getAttribute('tabindex');
  }

  /* Test the rendering of the component. */
  describe('rendering', () => {
    let element: ArcMenu;
    beforeEach(async () => {
      element = await fixture(html`
        <arc-menu>
          <arc-menu-item>Menu item</arc-menu-item>
        </arc-menu>
      `);
    });

    /* Test the accessibility. */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test specific methods */
  describe('methods', () => {
    let element: ArcMenu;

    beforeEach(async () => {
      element = await fixture(html`
        <arc-menu>
          <arc-menu-item disabled>Alpha</arc-menu-item>
          <arc-menu-item>Bravo</arc-menu-item>
          <arc-menu-item>Charlie</arc-menu-item>
          <arc-menu-item>ABCharlie</arc-menu-item>
          <div>Not a menu item</div>
        </arc-menu>
      `);
    });

    it('retrieves menu items', () => {
      /* By default, disabled menu items are included */
      expect(element.getAllItems().length).to.equal(4);

      /* Exclude disabled items */
      expect(element.getAllItems({ includeDisabled: false }).length).to.equal(3);
    });

    it('retrieves the current menu item', () => {
      const firstActiveMenuItem = element.children[1];
      expect(element.getCurrentItem()).to.equal(firstActiveMenuItem);
    });

    it('sets the current menu item', () => {
      const allActiveItems: ArcMenuItem[] = element.getAllItems({
        includeDisabled: false,
      });

      /* Set focus to a specific menu item */
      const selectedItem = element.children[2] as ArcMenuItem;
      element.setCurrentItem(selectedItem);

      [...allActiveItems].forEach(item => {
        if (item === selectedItem) {
          expect(getIndex(item)).to.equal('0');
        } else {
          expect(getIndex(item)).to.equal('-1');
        }
      });
    });

    it('sets the first (not disabled) menu item when clicking on a disabled menu item', () => {
      const allItems: ArcMenuItem[] = element.getAllItems();
      const allActiveItems: ArcMenuItem[] = element.getAllItems({
        includeDisabled: false,
      });
      const disabledItem = element.children[0] as ArcMenuItem;
      element.setCurrentItem(disabledItem);

      /* Selecting a disabled menu-item should active the first (not disabled) menu item */
      [...allItems].forEach(item => {
        if (item === disabledItem) {
          expect(item.hasAttribute('tabindex')).to.be.false;
        } else if (item === allActiveItems[0]) {
          expect(getIndex(item)).to.equal('0');
        } else {
          expect(getIndex(item)).to.equal('-1');
        }
      });
    });

    it('retrieves a menu item based on keyboard input', async () => {
      const allActiveItems: ArcMenuItem[] = element.getAllItems({
        includeDisabled: false,
      });

      /* Method to await the built-in typeToSelectTimeout */
      function typeToSelectTimeout() {
        return new Promise(resolve => setTimeout(resolve, 750));
      }

      element.typeToSelect('C');
      expect(getIndex(allActiveItems[0])).to.equal('-1');
      expect(element.getCurrentItem()).to.equal(allActiveItems[1]);

      await typeToSelectTimeout();

      element.typeToSelect('B');
      expect(getIndex(allActiveItems[0])).to.equal('0');
      expect(element.getCurrentItem()).to.equal(allActiveItems[0]);

      await typeToSelectTimeout();

      /* Provide multiple characters at once to trigger a specific menu item */
      element.typeToSelect('ABC');
      expect(getIndex(allActiveItems[2])).to.equal('0');
      expect(element.getCurrentItem()).to.equal(allActiveItems[2]);
    });
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcMenu;
    let menuItem: ArcMenuItem;

    beforeEach(async () => {
      element = await fixture(html`
        <arc-menu>
          <arc-menu-item value="item_one">Item one</arc-menu-item>
          <arc-menu-item value="item_two">Item two</arc-menu-item>
          <arc-menu-item value="item_three" disabled>Item three</arc-menu-item>
          <arc-menu-item value="item_four"> Item four</arc-menu-item>
        </arc-menu>
      `);
      menuItem = element.children[0] as ArcMenuItem;
    });

    it('triggers the arc-select event', async () => {
      const clickEvent = () => menuItem.click();
      setTimeout(clickEvent);
      const { detail } = await oneEvent(element, 'arc-select');
      expect(detail.item).to.equal(menuItem);
    });

    it('selects (clicks) a menu item with the Enter key', async () => {
      const fireEvent = () => element.handleKeyDown(enterEvent);
      setTimeout(fireEvent);
      const { detail } = await oneEvent(element, 'arc-select');
      expect(detail.item).to.equal(menuItem);
    });

    /*
    Test that nothing happens when the space is being pressed.
    This ensures that the typeToSelect method also works on items that contain spaces.
    */
    it('prevents default behaviour when the space is pressed', async () => {
      const selectedItem = element.children[0] as ArcMenuItem;
      const fireEvent = () => element.handleKeyDown(spaceEvent);
      let eventFired: boolean = false;

      function updateEvent() {
        eventFired = true;
      }

      /* Add a listener to the arc-select event */
      element.addEventListener(ARC_EVENTS.select, updateEvent);

      /* By default the first (not disabled) item has a tabindex of 0 */
      expect(getIndex(selectedItem)).to.equal('0');

      /* Fire the keyboard event, this should prevent making a selection */
      setTimeout(fireEvent);
      expect(eventFired).to.be.false;
      expect(getIndex(selectedItem)).to.equal('0');

      /* Remove the listener on the arc-select event */
      element.removeEventListener(ARC_EVENTS.select, updateEvent);
    });

    it('moves the selection down or up', () => {
      const firstChild = element.children[0] as ArcMenuItem;
      const secondChild = element.children[1] as ArcMenuItem;
      const lastChild = element.children[3] as ArcMenuItem;

      /* By default the first (not disabled) item has a tabindex of 0 */
      expect(getIndex(firstChild)).to.equal('0');

      element.handleKeyDown(downEvent);

      /* The second (not disabled) item gets the focus */
      expect(getIndex(firstChild)).to.equal('-1');
      expect(getIndex(secondChild)).to.equal('0');

      element.handleKeyDown(upEvent);

      /* The second (not disabled) item gets the focus */
      expect(getIndex(firstChild)).to.equal('0');
      expect(getIndex(secondChild)).to.equal('-1');

      element.handleKeyDown(endEvent);

      /* The last (not disabled) items gets the focus */
      expect(getIndex(firstChild)).to.equal('-1');
      expect(getIndex(lastChild)).to.equal('0');

      element.handleKeyDown(downEvent);

      /* The last (not disabled) item keeps focus as there are no menu items to go to */
      expect(getIndex(lastChild)).to.equal('0');

      element.handleKeyDown(homeEvent);

      /* The first (not disabled) item gets the focus */
      expect(getIndex(firstChild)).to.equal('0');
      expect(getIndex(lastChild)).to.equal('-1');

      element.handleKeyDown(upEvent);

      /* The first (not disabled) item keeps focus as there are no menu items to go to */
      expect(getIndex(firstChild)).to.equal('0');
    });

    it('does not move the selection down or up when all menu items are disabled', async () => {
      const tempElement: ArcMenu = await fixture(html`
        <arc-menu>
          <arc-menu-item value="item_one" disabled>Item one</arc-menu-item>
          <arc-menu-item value="item_two" disabled>Item three</arc-menu-item>
        </arc-menu>
      `);
      const menuItems = tempElement.children;

      tempElement.handleKeyDown(downEvent);

      [...menuItems].forEach(item => {
        expect(getIndex(item as ArcMenuItem)).to.equal(null);
      });
    });
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcMenu;
    beforeEach(async () => {
      element = await fixture(html`<arc-menu></arc-menu>`);
    });

    it('renders default slots to fill the component', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      /* An empty slot is available to fill the menu with menu-items */
      expect(hasSlot(main)).to.be.true;
    });
  });
});
