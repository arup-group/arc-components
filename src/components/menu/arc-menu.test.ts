import { html } from 'lit';
import { elementUpdated, expect, fixture } from '@open-wc/testing';
import sinon from 'sinon';

import { hasSlot } from '../../utilities/test-utils.js';

import type ArcMenu from './ArcMenu.js';
import type ArcMenuItem from '../menu-item/ArcMenuItem.js';
import './arc-menu.js';
import '../menu-item/arc-menu-item.js';

describe('ArcMenu', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcMenu;
    beforeEach(async () => {
      element = await fixture(html`
        <arc-menu>
          <arc-menu-item>Menu item</arc-menu-item>
        </arc-menu>
      `);
    });

    /* Test the accessibility */
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
          <div>Not a menu item</div>
        </arc-menu>
      `);
    });

    it('retrieves menu items', () => {
      /* By default, disabled menu items are included */
      expect(element.getAllItems().length).to.equal(3);

      /* Exclude disabled items */
      expect(element.getAllItems({ includeDisabled: false }).length).to.equal(
        2
      );
    });

    it('retrieves the current menu item', () => {
      const firstActiveMenuItem = element.children[1];
      expect(element.getCurrentItem()).to.equal(firstActiveMenuItem);
    });

    it('sets the current menu item', () => {
      const selectedItem = element.children[2];

      /*
      The setCurrentItem method sets a tabindex of [0] to the given (not disabled) item
      it sets a tabindex of [-1] on all other items that have a role="menuitem" property
      */
      element.setCurrentItem(selectedItem as ArcMenuItem);

      [...element.getAllItems({ includeDisabled: false })].forEach(item => {
        if (item === selectedItem) {
          expect(item.getAttribute('tabindex')).to.equal('0');
        } else {
          expect(item.getAttribute('tabindex')).to.equal('-1');
        }
      });
    });

    it('retrieves a menu item based on a keyboard input', async () => {
      const selectedItem = element.children[1];

      /* Provide the input of the letter C which should trigger the third item in the menu */
      element.typeToSelect('C');
      await elementUpdated(selectedItem);

      /* The selectedItem loses focus, thus getting a tabindex of -1 */
      expect(selectedItem.getAttribute('tabindex')).to.equal('-1');

      /* Provide the input of the letter B after an interval which should then trigger the second item in the menu */
      setTimeout(async () => {
        element.typeToSelect('B');
        await elementUpdated(selectedItem);

        /* The selectedItem gains focus, thus getting a tabindex of 0 */
        expect(selectedItem.getAttribute('tabindex')).to.equal('0');
      }, 1000);
    });
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcMenu;
    let clickSpy: any;
    let isClicked: boolean;

    function updateClicked() {
      isClicked = true;
    }

    beforeEach(async () => {
      isClicked = false;
      element = await fixture(html`<arc-menu></arc-menu>`);
      clickSpy = sinon.spy(element, 'click');
      element.addEventListener('click', updateClicked);
    });

    afterEach(() => {
      element.removeEventListener('click', updateClicked);
    });

    it('simulates a click on the button', async () => {
      element.click();
      expect(clickSpy.callCount).to.equal(1);
      expect(isClicked).to.be.true;
    });
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcMenu;
    beforeEach(async () => {
      element = await fixture(html` <arc-menu></arc-menu> `);
    });

    it('renders default slots to fill the component', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      /* An empty slot is available to fill the menu with menu-items */
      expect(hasSlot(main)).to.be.true;
    });
  });
});
