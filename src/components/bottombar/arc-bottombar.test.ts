import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../utilities/test-utils.js';

import type ArcBottombar from './ArcBottombar.js';
import './arc-bottombar.js';
import '../icon-button/arc-icon-button.js';

describe('ArcBottombar', () => {
  // Test the rendering of the component
  describe('rendering', () => {
    let element: ArcBottombar;
    beforeEach(async () => {
      element = await fixture(html`<arc-bottombar></arc-bottombar>`);
    });

    // Test default properties that reflect to the DOM
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-bottombar></arc-bottombar>`);
    });

    // Test the accessibility
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  // Test whether the slots can be filled and that they exist
  describe('slots', () => {
    let element: ArcBottombar;
    beforeEach(async () => {
      element = await fixture(html`<arc-bottombar></arc-bottombar>`);
    });

    it('renders a default slot to fill the bottom bar', () => {
      expect(hasSlot(element)).to.be.true;
    });
  });

  // Test the css variables that can be overwritten
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcBottombar = await fixture(
        html`<arc-bottombar></arc-bottombar>`
      );

      expect(getPropertyValue(element, 'height')).to.equal('auto');
    });
    it('overwrites the css variables', async () => {
      const element: ArcBottombar = await fixture(
        html`<arc-bottombar style="height:30px"></arc-bottombar>`
      );

      expect(getPropertyValue(element, 'height')).to.equal('30px');
    });
  });
});
