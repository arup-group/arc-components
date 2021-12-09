import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';
import sinon from 'sinon';

import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../utilities/dom-utils.js';

import { DROPDOWN_PLACEMENTS } from './constants/DropdownConstants.js';

import type ArcDropdown from './ArcDropdown.js';
import './arc-dropdown.js';

describe('ArcDropdown', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcDropdown;
    beforeEach(async () => {
      element = await fixture(html`<arc-dropdown></arc-dropdown>`);
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
    it('renders the element with a custom placement property', async () => {
      const element: ArcDropdown = await fixture(html`<arc-dropdown .placement=${DROPDOWN_PLACEMENTS.top}></arc-dropdown>`);

      expect(element.placement).to.equal(DROPDOWN_PLACEMENTS.top);
      expect(element.getAttribute('placement')).to.equal(DROPDOWN_PLACEMENTS.top);
    })
  });

  /* Test specific methods */
  describe('methods', () => {
    const element: ArcDropdown = new ArcDropdown();
    // Write the tests for the specific method of element here
  });

  /* Test the component responsiveness */
  describe('responsiveness', () => {});

  /* Test different component states (active, disabled, loading etc.) */
  describe('states', () => {
    let element: ArcDropdown;

    beforeEach(async () => {
      element = await fixture(html`<arc-dropdown></arc-dropdown>`);
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
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcDropdown;
    let clickSpy: any;
    let isClicked: boolean;

    function updateClicked() {
      isClicked = true;
    }

    beforeEach(async () => {
      isClicked = false;
      element = await fixture(html`<arc-dropdown></arc-dropdown>`);
      clickSpy = sinon.spy(element, 'click');
      element.addEventListener('click', updateClicked);
    })

    afterEach(() => {
      element.removeEventListener('click', updateClicked);
    })

    it('simulates a click on the button', async () => {
      element.click();
      expect(clickSpy.callCount).to.equal(1);
      expect(isClicked).to.be.true;
    });
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
      expect(hasSlot(main, 'testSlotOne')).to.be.true;
      expect(hasSlot(main, 'testSlotTwo')).to.be.true;
    });
  });

  /* Test the css variables that can be overwritten */
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcDropdown = await fixture(html`<arc-dropdown></arc-dropdown>`);

      expect(getPropertyValue(element, '--custom-value')).to.equal('');
    });
    it('overwrites the css variables', async () => {
      const element: ArcDropdown = await fixture(html`<arc-dropdown style='--custom-value:5px'></arc-dropdown>`);

      expect(getPropertyValue(element, '--custom-value')).to.equal('5px');
    });
  });
});
