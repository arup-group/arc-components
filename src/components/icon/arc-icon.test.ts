import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';

import { ArcIcon } from './ArcIcon.js';
import './arc-icon.js';

import { ICON_SIZES } from './constants/IconConstants.js';
import { getPropertyValue } from '../../utilities/style-utils.js';

describe('ArcIcon', () => {
  // Test the rendering of the component
  describe('rendering', () => {
    let element: ArcIcon;
    beforeEach(async () => {
      element = await fixture(html`<arc-icon></arc-icon>`);
    });

    // Test default properties that reflect to the DOM
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-icon name='fire' size=${ICON_SIZES.medium}></arc-icon>`);
    });

    // Test the accessibility
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  // Test the setters/getters
  describe('setters/getters', () => {
    it('renders the element with a custom name property', async () => {
      const element: ArcIcon = await fixture(html`<arc-icon name="heart"></arc-icon>`);

      expect(element.name).to.equal('heart');
      expect(element.getAttribute('name')).to.equal('heart');
    });
    it('renders the element with a custom size property', async () => {
      const element: ArcIcon = await fixture(html`<arc-icon></arc-icon>`);

      for (const iconSize of Object.keys(ICON_SIZES)) {
        element.size = iconSize;

        await elementUpdated(element); // eslint-disable-line no-await-in-loop
        expect(element.size).to.equal(iconSize);
        expect(element.getAttribute('size')).to.equal(iconSize);
      }
    });
    it('renders the element with a custom rotation property', async () => {
      const element: ArcIcon = await fixture(html`<arc-icon rotation="90"></arc-icon>`);

      expect(element.rotation).to.equal(90);
      expect(element.getAttribute('rotation')).to.equal('90');
    });
  });

  // Test the css variables that can be overwritten
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcIcon = await fixture(html`<arc-icon></arc-icon>`);

      expect(getPropertyValue(element, '--icon-color-primary')).to.equal('');
      expect(getPropertyValue(element, '--icon-color-secondary')).to.equal('currentColor');
    });
    it('overwrites the css variables', async () => {
      const element: ArcIcon = await fixture(
        html`<arc-icon style="--icon-color-primary:red; --icon-color-secondary:green;"></arc-icon>`
      );

      expect(getPropertyValue(element, '--icon-color-primary')).to.equal('red');
      expect(getPropertyValue(element, '--icon-color-secondary')).to.equal('green');
    });
  });
});
