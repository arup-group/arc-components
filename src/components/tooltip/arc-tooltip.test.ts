import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../internal/slot.js';
import {
  addShowListeners,
  addHideListeners,
  clearShowHideListeners,
  waitForShow,
  waitForHide,
  showCalledOnce,
  hideCalledOnce,
  escEvent,
} from '../../internal/test-utils.js';
import { FLOATING_PLACEMENTS } from '../../internal/constants/placementConstants.js';
import type ArcTooltip from './ArcTooltip.js';
import './arc-tooltip.js';

describe('ArcTooltip', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcTooltip;

    beforeEach(async () => {
      element = await fixture(html`
        <arc-tooltip>
          <span>My span</span>
        </arc-tooltip>
      `);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-tooltip><span>My span</span></arc-tooltip>`);
    });

    it('renders the element in an open state', async () => {
      const openElement: ArcTooltip = await fixture(html`<arc-tooltip open><span>My span</span></arc-tooltip>`);
      expect(openElement.open).to.be.true;
      expect(openElement.hasAttribute('open')).to.be.true;
    });

    it('renders the element in a hoisted state', async () => {
      const hoistedElement: ArcTooltip = await fixture(html` <arc-tooltip hoist><span>My span</span></arc-tooltip> `);
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
    it('renders the element with a custom content property', async () => {
      const element: ArcTooltip = await fixture(
        html`<arc-tooltip content="My tooltip"><span>My span</span></arc-tooltip>`
      );

      expect(element.content).to.equal('My tooltip');
      expect(element.getAttribute('content')).to.equal('My tooltip');
    });

    it('renders the element with a custom placement property', async () => {
      const element: ArcTooltip = await fixture(
        html`<arc-tooltip placement=${FLOATING_PLACEMENTS.top}><span>My span</span></arc-tooltip>`
      );

      expect(element.placement).to.equal(FLOATING_PLACEMENTS.top);
      expect(element.getAttribute('placement')).to.equal(FLOATING_PLACEMENTS.top);
    });

    it('renders the element with a custom distance property', async () => {
      const element: ArcTooltip = await fixture(html`<arc-tooltip distance="5"><span>My span</span></arc-tooltip>`);

      expect(element.distance).to.equal(5);
      expect(element.getAttribute('distance')).to.equal('5');
    });

    it('renders the element with a custom skidding property', async () => {
      const element: ArcTooltip = await fixture(html`<arc-tooltip skidding="5"><span>My span</span></arc-tooltip>`);

      expect(element.skidding).to.equal(5);
      expect(element.getAttribute('skidding')).to.equal('5');
    });

    it('renders the element with a custom delay property', async () => {
      const element: ArcTooltip = await fixture(html`<arc-tooltip delay="50ms"><span>My span</span></arc-tooltip>`);

      expect(element.delay).to.equal(50);
      expect(element.getAttribute('delay')).to.equal('50ms');
    });

    it('renders the element with a custom trigger property', async () => {
      const element: ArcTooltip = await fixture(html`<arc-tooltip trigger="click"><span>My span</span></arc-tooltip>`);

      expect(element.trigger).to.equal('click');
      expect(element.getAttribute('trigger')).to.equal('click');
    });
  });

  /* Test different component states (active, disabled, loading etc.) */
  describe('states', () => {
    let element: ArcTooltip;

    beforeEach(async () => {
      element = await fixture(html`<arc-tooltip><span>My span</span></arc-tooltip>`);
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

    it('hides the component when the disabled state is set', async () => {
      element.open = true;
      await elementUpdated(element);

      element.disabled = true;
      await elementUpdated(element);

      expect(element.open).to.be.false;
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
    let tooltip: HTMLElement;
    let isOpen: Function;

    beforeEach(async () => {
      element = await fixture(html`<arc-tooltip trigger="click hover focus"><span>My span</span></arc-tooltip>`);
      tooltip = element.shadowRoot!.getElementById('tooltip')!;
      isOpen = () => tooltip?.getAttribute('aria-hidden') === 'false' && element.open === true;
    });

    afterEach(() => {
      clearShowHideListeners(element);
      element.open = false;
    });

    it('should emit arc-show and arc-after-show when calling show()', async () => {
      addShowListeners(element);
      await element.show();
      expect(showCalledOnce()).to.be.true;
      expect(isOpen()).to.be.true;
    });

    it('should emit arc-hide and arc-after-hide when calling hide()', async () => {
      await element.show();
      addHideListeners(element);
      await element.hide();
      expect(hideCalledOnce()).to.be.true;
      expect(isOpen()).to.be.false;
    });

    it('should emit arc-show and arc-after-show when setting open = true', async () => {
      addShowListeners(element);
      element.open = true;
      await waitForShow();
      expect(showCalledOnce()).to.be.true;
      expect(isOpen()).to.be.true;
    });

    it('should emit arc-hide and arc-after-hide when setting open = false', async () => {
      await element.show();
      addHideListeners(element);
      element.open = false;
      await waitForHide();
      expect(hideCalledOnce()).to.be.true;
      expect(isOpen()).to.be.false;
    });

    it('should prevent emitting the arc-show and arc-after-show when the tooltip is already open', async () => {
      addShowListeners(element);
      await element.show();
      await element.show();
      expect(showCalledOnce()).to.be.true;
    });

    it('should prevent emitting the arc-hide and arc-after-hide when the tooltip is not open', async () => {
      addHideListeners(element);
      await element.hide();
      expect(hideCalledOnce()).to.be.false;
    });

    it('should prevent the tooltip to be displayed when the dropdown is disabled', async () => {
      element.disabled = true;
      await elementUpdated(element);

      addShowListeners(element);
      element.open = true;
      expect(showCalledOnce()).to.be.false;
      expect(isOpen()).to.be.false;
    });

    it('closes the tooltip when escape is pressed', async () => {
      await element.show();
      addHideListeners(element);
      element.handleKeyDown(escEvent);
      await waitForHide();
      expect(hideCalledOnce()).to.be.true;
      expect(isOpen()).to.be.false;
    });

    it('shows the tooltip on click', async () => {});

    it('shows the tooltip on hover', async () => {});

    it('shows the tooltip on focus', async () => {});
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcTooltip;

    beforeEach(async () => {
      element = await fixture(html`<arc-tooltip><span>My span</span></arc-tooltip>`);
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
      const element: ArcTooltip = await fixture(html`<arc-tooltip><span>My span</span></arc-tooltip>`);
      expect(getPropertyValue(element, '--max-width')).to.equal('20rem');
      expect(getPropertyValue(element, '--arrow-size')).to.equal('4px');
    });

    it('overwrites the css variables', async () => {
      const element: ArcTooltip = await fixture(
        html`<arc-tooltip style="--max-width:20px; --arrow-size:10px"><span>My span</span></arc-tooltip>`
      );
      expect(getPropertyValue(element, '--max-width')).to.equal('20px');
      expect(getPropertyValue(element, '--arrow-size')).to.equal('10px');
    });
  });
});
