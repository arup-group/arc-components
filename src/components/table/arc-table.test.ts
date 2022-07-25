import { html } from 'lit';
import { expect, fixture, elementUpdated, waitUntil } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../internal/slot.js';

import type ArcTable from './ArcTable.js';
import './arc-table.js';

describe('ArcTable', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcTable;

    beforeEach(async () => {
      element = await fixture(html`<arc-table></arc-table>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-table></arc-table>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom height property', async () => {
      const element: ArcTable = await fixture(html`<arc-table height="200px"></arc-table>`);

      expect(element.height).to.equal('200px');
      expect(element.getAttribute('height')).to.equal('200px');
    });

    it('renders the element with a custom language property', async () => {
      const language = {
        search: {
          placeholder: 'Search...',
        },
      };
      const element: ArcTable = await fixture(html`<arc-table .language=${language}></arc-table>`);
      // @ts-ignore
      const { placeholder } = element.language.search;
      expect(placeholder).to.equal(language.search.placeholder);
    });

    it('renders the element with a custom pagination-limit property', async () => {
      const element: ArcTable = await fixture(html`<arc-table pagination-limit="10"></arc-table>`);

      expect(element.paginationLimit).to.equal(10);
      expect(element.getAttribute('pagination-limit')).to.equal('10');
    });
  });

  /* Test different component states (active, disabled, loading etc.) */
  describe('states', () => {
    let element: ArcTable;

    beforeEach(async () => {
      element = await fixture(html`<arc-table></arc-table>`);
    });

    it('renders the component in a fixed-header state', async () => {
      expect(element.fixedHeader).to.be.false;
      expect(element.hasAttribute('fixed-header')).to.be.false;

      element.fixedHeader = true;
      await elementUpdated(element);

      expect(element.fixedHeader).to.be.true;
      expect(element.hasAttribute('fixed-header')).to.be.true;
    });

    it('renders the component in a state that shows pagination', async () => {
      expect(element.pagination).to.be.false;
      expect(element.hasAttribute('pagination')).to.be.false;

      element.pagination = true;
      await elementUpdated(element);

      expect(element.pagination).to.be.true;
      expect(element.hasAttribute('pagination')).to.be.true;
    });

    it('renders the component in a state that shows the paginationSummary', async () => {
      /* The component reads the default value from the pagination property */
      expect(element.paginationSummary).to.be.equal(element.pagination);
      expect(element.paginationSummary).to.be.false;
      expect(element.hasAttribute('pagination-summary')).to.be.false;

      element.paginationSummary = true;
      await elementUpdated(element);

      expect(element.paginationSummary).to.be.true;
      expect(element.hasAttribute('pagination-summary')).to.be.true;
    });

    it('renders the component in a resizable state', async () => {
      expect(element.resizable).to.be.false;
      expect(element.hasAttribute('resizable')).to.be.false;

      element.resizable = true;
      await elementUpdated(element);

      expect(element.resizable).to.be.true;
      expect(element.hasAttribute('resizable')).to.be.true;
    });

    it('renders the component in a sortable state', async () => {
      expect(element.sort).to.be.false;
      expect(element.hasAttribute('sort')).to.be.false;

      element.sort = true;
      await elementUpdated(element);

      expect(element.sort).to.be.true;
      expect(element.hasAttribute('sort')).to.be.true;
    });

    it('renders the component in a search state', async () => {
      expect(element.search).to.be.false;
      expect(element.hasAttribute('search')).to.be.false;

      element.search = true;
      await elementUpdated(element);

      expect(element.search).to.be.true;
      expect(element.hasAttribute('search')).to.be.true;
    });
  });

  /* Test specific methods */
  describe('methods', () => {
    /* Write the tests for specific methods here */
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcTable;
    const clickSpy: SinonSpy = sinon.spy();

    beforeEach(async () => {
      element = await fixture(html`<arc-table></arc-table>`);
    });

    afterEach(async () => {
      clickSpy.resetHistory();
    });

    it('simulates a click on the button', async () => {
      element.addEventListener('click', clickSpy);

      element.click();
      await waitUntil(() => clickSpy.calledOnce);

      expect(clickSpy).to.have.been.calledOnce;
    });
  });

  /* Test the component responsiveness */
  describe('responsiveness', () => {
    /* Write tests for responsiveness here */
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcTable;

    beforeEach(async () => {
      element = await fixture(html`<arc-table></arc-table>`);
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
      const element: ArcTable = await fixture(html`<arc-table></arc-table>`);
      expect(getPropertyValue(element, '--custom-color')).to.equal('green');
    });

    it('overwrites the css variables', async () => {
      const element: ArcTable = await fixture(html`<arc-table style="--custom-color:red"></arc-table>`);
      expect(getPropertyValue(element, '--custom-color')).to.equal('red');
    });
  });
});
