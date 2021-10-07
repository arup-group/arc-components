import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';

import { StyleUtils } from '../../utils/style-utils.js';

import { ArcIcon } from './ArcIcon.js';
import './arc-icon.js';

import { ICON_SIZES } from './constants/IconConstants.js';

describe('ArcIcon', () => {
  // Test the rendering of the component
  describe('rendering', () => {
    let element: ArcIcon;
    beforeEach(async() => {
      element = await fixture(html`<arc-icon></arc-icon>`);
    });

    // Test default properties that reflect to the DOM
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-icon name='fire' size=${ICON_SIZES.medium}></arc-icon>`)
    });

    // Test the accessibility
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  // Test the setters/getters
  describe('setters/getters', () => {
    it('renders the element with a custom name property', async () => {
      const element: ArcIcon = await fixture(html`<arc-icon name='heart'></arc-icon>`);

      expect(element.name).to.equal('heart');
      expect(element.getAttribute('name')).to.equal('heart');
    });
    it('renders the element with a custom size property', async () => {
      const element: ArcIcon = await fixture(html`<arc-icon size='${ICON_SIZES.small}'></arc-icon>`);

      expect(element.size).to.equal(ICON_SIZES.small);
      expect(element.getAttribute('size')).to.equal(ICON_SIZES.small);
    });
    it('renders the element with a custom rotation property', async () => {
      const element: ArcIcon = await fixture(html`<arc-icon rotation='90'></arc-icon>`);

      expect(element.rotation).to.equal(90);
      expect(element.getAttribute('rotation')).to.equal('90');
    });
  });

  // Test different component states (active, disabled, loading etc.)
  describe('states', () => {
    let element: ArcIcon;
    beforeEach(async() => {
      element = await fixture(html`<arc-icon></arc-icon>`);
    });
    it('renders the element in a spinning state', async () => {
      expect(element.spinning).to.be.false;
      expect(element.hasAttribute('spinning')).to.be.false;

      element.spinning = true;
      await elementUpdated(element);
      expect(element.spinning).to.be.true;
      expect(element.hasAttribute('spinning')).to.be.true;
    })
  });

  // Test the css variables that can be overwritten
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcIcon = await fixture(html`<arc-icon></arc-icon>`);

      expect(StyleUtils.getPropertyValue(element, '--icon-color-primary')).to.equal('');
      expect(StyleUtils.getPropertyValue(element, '--icon-color-secondary')).to.equal('currentColor');

    });
    it('overwrites the css variables', async () => {
      const element: ArcIcon = await fixture(html`<arc-icon style='--icon-color-primary:red; --icon-color-secondary:green;'></arc-icon>`);

      expect(StyleUtils.getPropertyValue(element, '--icon-color-primary')).to.equal('red');
      expect(StyleUtils.getPropertyValue(element, '--icon-color-secondary')).to.equal('green');
    })
  });
})
