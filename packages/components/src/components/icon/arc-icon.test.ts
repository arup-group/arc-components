import { html } from 'lit';
import { elementUpdated, expect, fixture } from '@open-wc/testing';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { ICON_TYPES } from './constants/IconConstants.js';
import { FONT_SIZES } from '../../internal/constants/styleConstants.js';

import type ArcIcon from './ArcIcon.js';
import './arc-icon.js';

describe('ArcIcon', () => {
  /* Test the rendering of the component. */
  describe('rendering', () => {
    let element: ArcIcon;
    beforeEach(async () => {
      element = await fixture(html`<arc-icon></arc-icon>`);
    });

    /* Test default properties that reflect to the DOM. */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(
        `<arc-icon name='${ICON_TYPES.fire}' size='${FONT_SIZES.medium}'></arc-icon>`,
      );
    });

    /* Test the accessibility. */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters. */
  describe('setters/getters', () => {
    it('renders the element with a custom name property', async () => {
      const element: ArcIcon = await fixture(
        html`<arc-icon name="heart"></arc-icon>`,
      );

      expect(element.name).to.equal('heart');
      expect(element.getAttribute('name')).to.equal('heart');
    });

    it('renders the element with a custom label property', async () => {
      const element: ArcIcon = await fixture(
        html`<arc-icon label="heart"></arc-icon>`,
      );
      const svg = element.shadowRoot?.getElementById('main')!;

      expect(element.label).to.equal('heart');
      expect(element.getAttribute('label')).to.equal('heart');
      expect(svg.getAttribute('role')).to.equal('img');
      expect(svg.getAttribute('aria-label')).to.equal('heart');
      expect(svg.getAttribute('aria-hidden')).to.be.null;
    });

    it('renders the element with a custom size property', async () => {
      const element: ArcIcon = await fixture(html`<arc-icon></arc-icon>`);

      for (const iconSize of Object.values(FONT_SIZES)) {
        element.size = iconSize;

        await elementUpdated(element);
        expect(element.size).to.equal(iconSize);
        expect(element.getAttribute('size')).to.equal(iconSize);
      }
    });

    it('renders the element with a custom rotation property', async () => {
      const element: ArcIcon = await fixture(
        html`<arc-icon rotation="90"></arc-icon>`,
      );

      expect(element.rotation).to.equal(90);
      expect(element.getAttribute('rotation')).to.equal('90');
    });
  });

  /* Test the css variables that can be overwritten. */
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcIcon = await fixture(html`<arc-icon></arc-icon>`);

      expect(getPropertyValue(element, '--icon-color-primary')).to.equal('');
      expect(getPropertyValue(element, '--icon-color-secondary')).to.equal(
        'currentColor',
      );
    });

    it('overwrites the css variables', async () => {
      const element: ArcIcon = await fixture(
        html`<arc-icon
          style="--icon-color-primary:red; --icon-color-secondary:green;"
        ></arc-icon>`,
      );

      expect(getPropertyValue(element, '--icon-color-primary')).to.equal('red');
      expect(getPropertyValue(element, '--icon-color-secondary')).to.equal(
        'green',
      );
    });
  });
});
