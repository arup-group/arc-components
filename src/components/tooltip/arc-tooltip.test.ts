import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../internal/slot.js';
import { FLOATING_PLACEMENTS } from '../../internal/constants/placementConstants.js';
import type ArcTooltip from './ArcTooltip.js';
import './arc-tooltip.js';

describe('ArcTooltip', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcTooltip;

    beforeEach(async () => {
      element = await fixture(html`<arc-tooltip></arc-tooltip>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-tooltip></arc-tooltip>`);
    });

    it('renders the element in an open state', async () => {
      const openElement: ArcTooltip = await fixture(html`<arc-tooltip open></arc-tooltip>`);
      expect(openElement.open).to.be.true;
      expect(openElement.hasAttribute('open')).to.be.true;
    });

    it('renders the element in a hoisted state', async () => {
      const hoistedElement: ArcTooltip = await fixture(html` <arc-tooltip hoist></arc-tooltip> `);
      expect(hoistedElement.hoist).to.be.true;
      expect(hoistedElement.hasAttribute('hoist')).to.be.true;
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom placement property', async () => {
      const element: ArcTooltip = await fixture(html`<arc-tooltip placement=${FLOATING_PLACEMENTS.top}></arc-tooltip>`);

      expect(element.placement).to.equal(FLOATING_PLACEMENTS.top);
      expect(element.getAttribute('placement')).to.equal(FLOATING_PLACEMENTS.top);
    });

    it('renders the element with a custom distance property', async () => {
      const element: ArcTooltip = await fixture(html`<arc-tooltip distance="5"></arc-tooltip>`);

      expect(element.distance).to.equal(5);
      expect(element.getAttribute('distance')).to.equal('5');
    });

    it('renders the element with a custom skidding property', async () => {
      const element: ArcTooltip = await fixture(html`<arc-tooltip skidding="5"></arc-tooltip>`);

      expect(element.skidding).to.equal(5);
      expect(element.getAttribute('skidding')).to.equal('5');
    });

    it('renders the element with a custom delay property', async () => {
      const element: ArcTooltip = await fixture(html`<arc-tooltip delay="50ms"></arc-tooltip>`);

      expect(element.delay).to.equal(50);
      expect(element.getAttribute('delay')).to.equal('50ms');
    });

    it('renders the element with a custom trigger property', async () => {
      const element: ArcTooltip = await fixture(html`<arc-tooltip trigger="click"></arc-tooltip>`);

      expect(element.trigger).to.equal('click');
      expect(element.getAttribute('trigger')).to.equal('click');
    });
  });

  /* Test different component states (active, disabled, loading etc.) */
  describe('states', () => {
    let element: ArcTooltip;

    beforeEach(async () => {
      element = await fixture(html`<arc-tooltip></arc-tooltip>`);
    });

    it('renders the component in an open state', async () => {
      expect(element.open).to.be.false;
      expect(element.hasAttribute('open')).to.be.false;

      element.open = true;
      await elementUpdated(element);

      expect(element.open).to.be.true;
      expect(element.hasAttribute('open')).to.be.true;
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
    });
  });

  /* Test specific methods */
  describe('methods', () => {
    let element: ArcTooltip;

    beforeEach(async () => {
      element = await fixture(html`
        <arc-tooltip>
          <span slot="content">This is the tooltip's content</span>
          <span>Something</span>
          <style></style>
        </arc-tooltip>
      `);
    });

    it('should retrieve the correct slotted child', () => {
      expect(element.getTarget()).to.equal(element.children[1]);
    });

    it('throws an error when there are no children', () => {
      /* Remove all children from the tooltip */
      [...element.children].forEach(child => child.remove());

      expect(() => element.getTarget()).to.throw('Invalid tooltip target: no child element was found.');
    });

    it('should retrieve the trigger types', async () => {
      element.trigger = 'click';
      await elementUpdated(element);

      expect(element.hasTrigger('click')).to.be.true;

      element.trigger = 'focus hover';
      await elementUpdated(element);

      expect(element.hasTrigger('click')).to.be.false;
      expect(element.hasTrigger('focus')).to.be.true;
      expect(element.hasTrigger('hover')).to.be.true;
    });
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcTooltip;
    const showHandler: SinonSpy = sinon.spy();
    const afterShowHandler: SinonSpy = sinon.spy();
    const hideHandler: SinonSpy = sinon.spy();
    const afterHideHandler: SinonSpy = sinon.spy();

    beforeEach(async () => {
      element = await fixture(html`<arc-tooltip></arc-tooltip>`);
    });

    afterEach(() => {
      showHandler.resetHistory();
      afterShowHandler.resetHistory();
      hideHandler.resetHistory();
      afterHideHandler.resetHistory();
      element.open = false;
    });

    // it('simulates a click on the button', async () => {
    //   element.addEventListener('click', clickSpy);
    //
    //   element.click();
    //   await waitUntil(() => clickSpy.calledOnce);
    //
    //   expect(clickSpy).to.have.been.calledOnce;
    // });
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcTooltip;

    beforeEach(async () => {
      element = await fixture(html`<arc-tooltip></arc-tooltip>`);
    });

    it('renders default slots to fill the component', () => {
      const target = element.shadowRoot!.getElementById('target')!;
      const positioner = element.shadowRoot!.getElementById('positioner')!;

      /* An empty slot is available */
      expect(hasSlot(target)).to.be.true;

      /* A specific (named) slot is available */
      expect(hasSlot(positioner, 'content')).to.be.true;
    });
  });

  /* Test the css variables that can be overwritten */
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcTooltip = await fixture(html`<arc-tooltip></arc-tooltip>`);
      expect(getPropertyValue(element, '--max-width')).to.equal('20rem');
      expect(getPropertyValue(element, '--arrow-size')).to.equal('4px');
    });

    it('overwrites the css variables', async () => {
      const element: ArcTooltip = await fixture(
        html`<arc-tooltip style="--max-width:20px; --arrow-size:10px"></arc-tooltip>`
      );
      expect(getPropertyValue(element, '--max-width')).to.equal('20px');
      expect(getPropertyValue(element, '--arrow-size')).to.equal('10px');
    });
  });
});
