import { html } from 'lit';
import { elementUpdated, expect, fixture } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../utilities/test-utils.js';

import type ArcBottombar from './ArcBottombar.js';
import './arc-bottombar.js';
import '../icon-button/arc-icon-button.js';

describe('ArcBottombar', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcBottombar;
    beforeEach(async () => {
      element = await fixture(html` <arc-bottombar></arc-bottombar>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-bottombar></arc-bottombar>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the component responsiveness */
  describe('responsiveness', () => {
    let element: ArcBottombar;
    let logSpy: SinonSpy;

    beforeEach(async () => {
      element = await fixture(html`
        <arc-bottombar>
          <arc-icon-button>1</arc-icon-button>
          <arc-icon-button>2</arc-icon-button>
          <arc-icon-button>3</arc-icon-button>
          <arc-icon-button>4</arc-icon-button>
          <arc-icon-button>5</arc-icon-button>
        </arc-bottombar>
      `);
      logSpy = sinon.spy(element, 'log');
    });

    /* TODO: ARC-12 Replace this test once the arc-dropdown functionality is added */
    it('logs "Please limit your tab count to a maximum of 5 tabs"', async () => {
      /* Add a sixth icon-button to trigger the alert */
      element.appendChild(document.createElement('arc-icon-button'));
      await elementUpdated(element);

      expect(logSpy.callCount).to.equal(1);
      expect(logSpy.calledWith('Please limit your tab count to a maximum of 5 tabs')).to.be.true;
    });
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcBottombar;
    beforeEach(async () => {
      element = await fixture(html` <arc-bottombar></arc-bottombar>`);
    });

    it('renders a default slot to fill the bottom bar', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      expect(hasSlot(main)).to.be.true;
    });
  });

  /* Test the css variables that can be overwritten */
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcBottombar = await fixture(html` <arc-bottombar></arc-bottombar>`);

      expect(getPropertyValue(element, 'height')).to.equal('auto');
    });
    it('overwrites the css variables', async () => {
      const element: ArcBottombar = await fixture(html` <arc-bottombar style="height:30px"></arc-bottombar>`);

      expect(getPropertyValue(element, 'height')).to.equal('30px');
    });
  });
});
