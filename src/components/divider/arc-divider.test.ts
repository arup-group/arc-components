import { html } from 'lit';
import { elementUpdated, expect, fixture } from '@open-wc/testing';

import type ArcDivider from './ArcDivider.js';
import './arc-divider.js';

import { DIVIDER_TYPES } from './constants/DividerConstants.js';

describe('ArcDivider', () => {
  // Test the rendering of the component
  describe('rendering', () => {
    let element: ArcDivider;
    beforeEach(async () => {
      element = await fixture(html`<arc-divider></arc-divider>`);
    });

    // Test default properties that reflect to the DOM
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-divider type='solid'></arc-divider>`);
    });

    // Test the accessibility
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  // Test the setters/getters
  describe('setters/getters', () => {
    it('renders the element with a custom type property', async () => {
      const element: ArcDivider = await fixture(
        html`<arc-divider></arc-divider>`
      );

      for (const dividerType of Object.keys(DIVIDER_TYPES)) {
        element.type = dividerType;

        await elementUpdated(element); // eslint-disable-line no-await-in-loop
        expect(element.type).to.equal(dividerType);
        expect(element.getAttribute('type')).to.equal(dividerType);
      }
    });
  });

  // Test the css variables that can be overwritten
  // TODO: Add the below test when custom css variables are added to the web-component
  // describe('css variables', () => {
  //   it('uses the default css variables', async () => {
  //       const element: ArcDivider = await fixture(html`<arc-divider></arc-divider>`);
  //
  //       // Optional: Use the style utility instead
  //       const computedStyles = window.getComputedStyle(element);
  //       expect(computedStyles.getPropertyValue('propertyValue')).to.equal('propertyValue');
  //   });
  //   it('overwrites the css variables', async () => {
  //       const element: ArcDivider = await fixture(html`<arc-divider style='--customCssVariable:customValue'></arc-divider>`);
  //
  //       // Optional: Use the style utility instead
  //       const computedStyles = window.getComputedStyle(element);
  //       expect(computedStyles.getPropertyValue('--customCssVariable')).to.equal('customValue');
  //   })
  // });
});
