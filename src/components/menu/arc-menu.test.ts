import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';
import sinon from 'sinon';

import { hasSlot } from '../../utilities/test-utils.js';

import type ArcMenu from './ArcMenu.js';
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
          <arc-menu-item disabled>Menu item 1</arc-menu-item>
          <arc-menu-item>Menu item 2</arc-menu-item>
          <arc-menu-item>Menu item 3</arc-menu-item>
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

    it('retrieves the current item', () => {});

    it('sets the current item', () => {});
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
