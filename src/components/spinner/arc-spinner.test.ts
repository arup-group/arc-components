import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';
import sinon from 'sinon';

import type ArcSpinner from './ArcSpinner.js';
import './arc-spinner.js';

import { getPropertyValue } from '../../utilities/style-utils.js';

describe('ArcSpinner', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcSpinner;
    beforeEach(async () => {
      element = await fixture(html`<arc-spinner></arc-spinner>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-spinner></arc-spinner>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });

    it('should defer updates to screen reader users via aria-live="polite".', async () => {
      /* https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions */
      const svg = element.shadowRoot?.querySelector('svg');
      await expect(svg).have.attribute('aria-busy', 'true');
      await expect(svg).have.attribute('aria-live', 'polite');
    });
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcSpinner;
    let clickSpy: any;
    let isClicked: boolean;

    function updateClicked() {
      isClicked = true;
    }

    beforeEach(async () => {
      isClicked = false;
      element = await fixture(html`<arc-spinner></arc-spinner>`);
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

  /* Test the css variables that can be overwritten */
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcSpinner = await fixture(
        html`<arc-spinner></arc-spinner>`
      );

      expect(getPropertyValue(element, '--track-width')).to.equal('2px');
    });
    it('overwrites the css variables', async () => {
      const element: ArcSpinner = await fixture(
        html`<arc-spinner
          style="--track-width:5px; --stroke-color:red;"
        ></arc-spinner>`
      );

      expect(getPropertyValue(element, '--track-width')).to.equal('5px');
      expect(getPropertyValue(element, '--stroke-color')).to.equal('red');
    });
  });
});
