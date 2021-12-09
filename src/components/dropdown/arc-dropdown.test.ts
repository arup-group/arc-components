import { html } from 'lit';
import { expect, fixture, elementUpdated, waitUntil} from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { hasSlot } from '../../utilities/dom-utils.js';

import type ArcDropdown from './ArcDropdown.js';
import './arc-dropdown.js';

import { DROPDOWN_PLACEMENTS } from './constants/DropdownConstants.js';

describe('ArcDropdown', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcDropdown;
    beforeEach(async () => {
      element = await fixture(html`
        <arc-dropdown></arc-dropdown>
      `);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-dropdown></arc-dropdown>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom placement, distance and skidding property', async () => {
      const element: ArcDropdown = await fixture(html`<arc-dropdown placement=${DROPDOWN_PLACEMENTS.top} distance='5' skidding='5'></arc-dropdown>`);

      expect(element.placement).to.equal(DROPDOWN_PLACEMENTS.top);
      expect(element.getAttribute('placement')).to.equal(DROPDOWN_PLACEMENTS.top);

      expect(element.distance).to.equal(5);
      expect(element.getAttribute('distance')).to.equal('5');

      expect(element.skidding).to.equal(5);
      expect(element.getAttribute('skidding')).to.equal('5');
    })
  });

  /* Test specific methods */
  // describe('methods', () => {
  //   const element: ArcDropdown = new ArcDropdown();
  //   // Write the tests for the specific method of element here
  // });

  /* Test different component states (active, disabled, loading etc.) */
  describe('states', () => {
    let element: ArcDropdown;

    beforeEach(async () => {
      element = await fixture(html`
        <arc-dropdown></arc-dropdown>
      `);
    });

    it('renders the component in a disabled state', async () => {
      expect(element.disabled).to.be.false;
      expect(element.hasAttribute('disabled')).to.be.false;

      element.disabled = true;
      await elementUpdated(element);

      expect(element.disabled).to.be.true;
      expect(element.hasAttribute('disabled')).to.be.true;
    });

    it('renders the component in a hoist state', async () => {
      expect(element.hoist).to.be.false;
      expect(element.hasAttribute('hoist')).to.be.false;

      element.hoist = true;
      await elementUpdated(element);

      expect(element.hoist).to.be.true;
      expect(element.hasAttribute('hoist')).to.be.true;
    })
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcDropdown;
    let panel: HTMLElement;

    beforeEach(async () => {
      element = await fixture(html`<arc-dropdown></arc-dropdown>`);
      panel = element.shadowRoot?.getElementById('panel') as HTMLElement;
    });

    afterEach(() => {
      element.open = false;
    })

    it('should emit arc-show and arc-after-show when calling show()', async () => {
      const showHandler: SinonSpy = sinon.spy();
      const afterShowHandler: SinonSpy = sinon.spy();

      element.addEventListener('arc-show', showHandler);
      element.addEventListener('arc-after-show', afterShowHandler);
      element.show();

      await waitUntil(() => showHandler.calledOnce);
      await waitUntil(() => afterShowHandler.calledOnce);

      expect(showHandler).to.have.been.calledOnce;
      expect(afterShowHandler).to.have.been.calledOnce;
      expect(panel.hidden).to.be.false;
    });

    it('should emit arc-hide and arc-after-hide when calling hide()', async () => {
      const hideHandler: SinonSpy = sinon.spy();
      const afterHideHandler: SinonSpy = sinon.spy();

      // First open the menu before calling the hide event
      element.open = true;
      await elementUpdated(element);

      element.addEventListener('arc-hide', hideHandler);
      element.addEventListener('arc-after-hide', afterHideHandler);
      element.hide();

      await waitUntil(() => hideHandler.calledOnce);
      await waitUntil(() => afterHideHandler.calledOnce);

      expect(hideHandler).to.have.been.calledOnce;
      expect(afterHideHandler).to.have.been.calledOnce;
      expect(panel.hidden).to.be.true;
    })

    it('should emit arc-show and arc-after-show when setting open = true', async () => {
      const showHandler: SinonSpy = sinon.spy();
      const afterShowHandler: SinonSpy = sinon.spy();

      element.addEventListener('arc-show', showHandler);
      element.addEventListener('arc-after-show', afterShowHandler);
      element.open = true;

      await waitUntil(() => showHandler.calledOnce);
      await waitUntil(() => afterShowHandler.calledOnce);

      expect(showHandler).to.have.been.calledOnce;
      expect(afterShowHandler).to.have.been.calledOnce;
      expect(panel.hidden).to.be.false;
    });

    it('should emit arc-hide and arc-after-hide when setting open = false', async () => {
      const hideHandler: SinonSpy = sinon.spy();
      const afterHideHandler: SinonSpy = sinon.spy();

      // First open the menu before calling the hide event
      element.open = true;
      await elementUpdated(element);

      element.addEventListener('arc-hide', hideHandler);
      element.addEventListener('arc-after-hide', afterHideHandler);
      element.open = false;

      await waitUntil(() => hideHandler.calledOnce);
      await waitUntil(() => afterHideHandler.calledOnce);

      expect(hideHandler).to.have.been.calledOnce;
      expect(afterHideHandler).to.have.been.calledOnce;
      expect(panel.hidden).to.be.true;
    })
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcDropdown;
    beforeEach(async () => {
      element = await fixture(html`<arc-dropdown></arc-dropdown>`);
    });

    it('renders default slots to fill the component', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      /* An empty slot is available */
      expect(hasSlot(main)).to.be.true;

      /* A specific (named) slot is available */
      expect(hasSlot(main, 'trigger')).to.be.true;
    });
  });
});
