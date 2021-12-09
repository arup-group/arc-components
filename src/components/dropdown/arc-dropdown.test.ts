import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';
import sinon from 'sinon';
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
        <arc-dropdown>
          <arc-button slot='trigger'>Toggle</arc-button>
          <arc-menu>
            <arc-menu-item>Item 1</arc-menu-item>
            <arc-menu-item>Item 2</arc-menu-item>
            <arc-menu-item>Item 3</arc-menu-item>
          </arc-menu>
        </arc-dropdown>
      `);
    });

    it('renders the component in an open state', async () => {
      const panel = element.shadowRoot?.getElementById('panel') as HTMLElement;

      element.addEventListener('arc-after-show', () => {
        console.log('I do something after I am visible');
        expect(panel.hidden).to.be.false;
      })

      expect(element.open).to.be.false;
      expect(element.hasAttribute('open')).to.be.false;
      expect(panel.hidden).to.be.true;

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
    })
  });

  /* Test the events (click, focus, blur etc.) */
  // describe('events', () => {
  //   let element: ArcDropdown;
  //   let clickSpy: any;
  //   let isClicked: boolean;
  //
  //   function updateClicked() {
  //     isClicked = true;
  //   }
  //
  //   beforeEach(async () => {
  //     isClicked = false;
  //     element = await fixture(html`<arc-dropdown></arc-dropdown>`);
  //     clickSpy = sinon.spy(element, 'click');
  //     element.addEventListener('click', updateClicked);
  //   })
  //
  //   afterEach(() => {
  //     element.removeEventListener('click', updateClicked);
  //   })
  //
  //   it('simulates a click on the button', async () => {
  //     element.click();
  //     expect(clickSpy.callCount).to.equal(1);
  //     expect(isClicked).to.be.true;
  //   });
  // });

  /* Test whether the slots can be filled and that they exist */
  // describe('slots', () => {
  //   let element: ArcDropdown;
  //   beforeEach(async () => {
  //     element = await fixture(html`<arc-dropdown></arc-dropdown>`);
  //   });
  //
  //   it('renders default slots to fill the component', () => {
  //     const main = element.shadowRoot!.getElementById('main')!;
  //
  //     /* An empty slot is available */
  //     expect(hasSlot(main)).to.be.true;
  //
  //     /* A specific (named) slot is available */
  //     expect(hasSlot(main, 'trigger')).to.be.true;
  //   });
  // });
});
