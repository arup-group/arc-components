import { html } from 'lit';
import { elementUpdated, expect, fixture, waitUntil } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { hasSlot } from '../../internal/slot.js';

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

    it('renders the menu item as an anchor', async () => {
      const element: ArcMenuItem = await fixture(html`<arc-menu-item href="/">Test</arc-menu-item>`);
      const menuItemTarget = element.shadowRoot!.getElementById('main')!;

      expect(element.href).to.equal('/');
      expect(element.getAttribute('href')).to.equal('/');

      expect(menuItemTarget.tagName).to.equal('A');
      expect(menuItemTarget.getAttribute('href')).to.equal('/');
      expect(menuItemTarget.hasAttribute('target')).to.be.false;
      expect(menuItemTarget.hasAttribute('rel')).to.be.false;
    });

    it('renders the anchor with a target attribute', async () => {
      const element: ArcMenuItem = await fixture(html`<arc-menu-item href="/" target="_blank">Test</arc-menu-item>`);
      const menuItemTarget = element.shadowRoot!.getElementById('main')!;

      expect(element.target).to.equal('_blank');
      expect(element.getAttribute('target')).to.equal('_blank');

      expect(menuItemTarget.getAttribute('target')).to.equal('_blank');
      expect(menuItemTarget.getAttribute('rel')).to.equal('noreferrer noopener');
    });

    it('renders the anchor with a download attribute', async () => {
      const element: ArcMenuItem = await fixture(
        html`<arc-menu-item href="/" download="Filename">Test</arc-menu-item>`
      );
      const menuItemTarget = element.shadowRoot!.getElementById('main')!;

      expect(element.download).to.equal('Filename');
      expect(element.getAttribute('download')).to.equal('Filename');

      expect(menuItemTarget.getAttribute('download')).to.equal('Filename');
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

    it('renders the anchor in a disabled state', async () => {
      element.href = '/';
      await elementUpdated(element);

      const anchorTarget = element.shadowRoot!.getElementById('main');

      expect(element.disabled).to.be.false;
      expect(element.hasAttribute('disabled')).to.be.false;
      expect(element.getAttribute('aria-disabled')).to.equal('false');
      expect(anchorTarget!.getAttribute('tabindex')).to.equal('0');

      element.disabled = true;
      await elementUpdated(element);

      expect(element.disabled).to.be.true;
      expect(element.hasAttribute('disabled')).to.be.true;
      expect(element.getAttribute('aria-disabled')).to.equal('true');
      expect(anchorTarget!.getAttribute('tabindex')).to.equal('-1');
    });
  });

  /* Test the events (click etc.) */
  describe('events', () => {
    let element: ArcMenuItem;
    const clickSpy: SinonSpy = sinon.spy();

    beforeEach(async () => {
      element = await fixture(html`<arc-menu-item></arc-menu-item>`);
      element.addEventListener('click', clickSpy);
    });

    afterEach(() => {
      clickSpy.resetHistory();
    });

    it('simulates a click on the menu item', async () => {
      element.click();
      await waitUntil(() => clickSpy.calledOnce);
      expect(clickSpy).to.have.been.calledOnce;
    });

    it('suppresses a click on the menu item while in a disabled state', async () => {
      element.disabled = true;
      await elementUpdated(element);

      element.click();
      expect(clickSpy).to.have.not.been.called;
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
