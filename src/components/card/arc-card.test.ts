import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';
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
      const testImageURL = 'https://via.placeholder.com/600.png/09f/fff'

      const element: ArcCard  = await fixture(html`<arc-card image-alt="${testAltText}" image-url="${testImageURL}"></arc-card>`);
      const cardImage = element.shadowRoot!.querySelector('#card-image')!;
      

      expect(element.imageAlt).to.equal(testAltText);
      expect(element.imageUrl).to.equal(testImageURL);
      expect(cardImage.getAttribute('src')).to.equal(testImageURL);
      expect(cardImage.getAttribute('alt')).to.equal(testAltText);
    });
   
  });

    /* Test whether the slots can be filled and that they exist */
    describe('slots', () => {
      let element: ArcCard;
      beforeEach(async () => {
        element = await fixture(html`<arc-card></arc-cardr>`);
      });
  
      it('renders default slots to fill the container', () => {
        const main = element.shadowRoot!.getElementById('card')!;
  
        expect(hasSlot(main)).to.be.true; /* Default content slot */
        expect(hasSlot(main, 'heading')).to.be.true;
        expect(hasSlot(main, 'actions')).to.be.true;
      });
    });

    /* Test the css variables that can be overwritten */
    describe('css variables', () => {
      it('uses the default css variables', async () => {
        const element: ArcCard = await fixture(html`<arc-card></arc-card>`);
  
        expect(getPropertyValue(element, '--header-padding')).to.equal('1.2rem');
        expect(getPropertyValue(element, '--arc-card-height')).to.equal('25rem');
        expect(getPropertyValue(element, '--arc-card-width')).to.equal('20rem');
      });
      
      it('overwrites the css variables', async () => {
        const element: ArcCard = await fixture(html`<arc-card style="--arc-card-width:30rem"></arc-card>`);
  
        expect(getPropertyValue(element, '--arc-card-width')).to.equal('30rem');
      });
    });

});
