import { html } from 'lit';
import { elementUpdated, expect, fixture } from '@open-wc/testing';
import { hasSlot } from '../../utilities/dom-utils.js';

import type ArcMenuItem from './ArcMenuItem.js';
import './arc-menu-item.js';

describe('ArcMenuItem', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcMenuItem;

    /* Wrap the menu-item inside of a menu,
    menubar or group for accessibility purposes */
    beforeEach(async () => {
      element = await fixture(html`
        <div role="menu">
          <arc-menu-item>Item</arc-menu-item>
        </div>
      `);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`
        <div role='menu'>
          <arc-menu-item aria-disabled="false" role="menuitem">Item</arc-menu-item>
        </div>
      `);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom value property', async () => {
      const element: ArcMenuItem = await fixture(html`<arc-menu-item value="testProp"></arc-menu-item>`);

      expect(element.value).to.equal('testProp');
      expect(element.getAttribute('value')).to.equal('testProp');
    });
  });

  /* Test different component states (active, disabled, loading etc.) */
  describe('states', () => {
    let element: ArcMenuItem;

    beforeEach(async () => {
      element = await fixture(html`<arc-menu-item></arc-menu-item>`);
    });

    it('renders the component in a disabled state', async () => {
      expect(element.disabled).to.be.false;
      expect(element.hasAttribute('disabled')).to.be.false;
      expect(element.getAttribute('aria-disabled')).to.equal('false');

      element.disabled = true;
      await elementUpdated(element);
      expect(element.disabled).to.be.true;
      expect(element.hasAttribute('disabled')).to.be.true;
      expect(element.getAttribute('aria-disabled')).to.equal('true');
    });
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcMenuItem;
    beforeEach(async () => {
      element = await fixture(html`<arc-menu-item></arc-menu-item>`);
    });

    it('renders default slots to fill the component', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      /* An empty slot is available */
      expect(hasSlot(main)).to.be.true;

      /* A specific (named) slot is available */
      expect(hasSlot(main, 'prefix')).to.be.true;
      expect(hasSlot(main, 'suffix')).to.be.true;
    });
  });
});
