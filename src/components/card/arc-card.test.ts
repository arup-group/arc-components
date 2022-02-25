import { html } from 'lit';
import { elementUpdated, expect, fixture } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../utilities/dom-utils.js';

import type ArcCard from './ArcCard.js';
import './arc-card.js';
import '../button/arc-button.js';

describe('ArcCard ', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcCard ;
    beforeEach(async () => {
      element = await fixture(html`<arc-card></arc-card>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-card imagealt="" imageurl=""></arc-card>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

   /* Test the setters/getters */
   describe('setters/getters', () => {
    it('renders the arc-card with background image and alt text', async () => {

      const testAltText = 'Test Alt Text';
      const testImageURL = 'TestURL'

      const element: ArcCard  = await fixture(html`<arc-card imagealt="${testAltText}" imageurl="${testImageURL}"></arc-card>`);
      const cardImage = element.shadowRoot!.querySelector('#card-image')!;
      

      expect(element.imageAlt).to.equal(testAltText);
      expect(element.imageUrl).to.equal(testImageURL);
      expect(cardImage.getAttribute('src')).to.equal(testImageURL);
      expect(cardImage.getAttribute('alt')).to.equal(testAltText);
    });

   
  });


});
