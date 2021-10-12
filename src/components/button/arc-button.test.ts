import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';

import { ArcButton } from './ArcButton.js';
import './arc-button.js';

import { BUTTON_TYPES, BUTTON_SIZES, BUTTON_COLORS } from './constants/ButtonConstants.js';
import { getPropertyValue } from '../../utils/style-utils.js';

describe('ArcButton', () => {
  // Test the rendering of the component
  describe('rendering', () => {
    let element: ArcButton;
    beforeEach(async() => {
      element = await fixture(html`<arc-button>Test</arc-button>`);
    });

    // Test default properties that reflect to the DOM
    it('renders the button with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-button type=${BUTTON_TYPES.contained} color=${BUTTON_COLORS.default} size=${BUTTON_SIZES.medium}>Test</arc-button>`);
    });

    // Test the accessibility
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  // Test the setters/getters
  describe('setters/getters', () => {
    it('renders the button with a custom color, type and size property', async () => {
      const element: ArcButton = await fixture(html`<arc-button>Test</arc-button>`);

      for (const buttonColor of Object.keys(BUTTON_COLORS)) {
        element.color = buttonColor;
        for (const buttonType of Object.keys(BUTTON_TYPES)) {
          element.type = buttonType;
          for (const buttonSize of Object.keys(BUTTON_SIZES)) {
            element.size = buttonSize;

            await elementUpdated(element); // eslint-disable-line no-await-in-loop
            expect(element.color).to.equal(buttonColor);
            expect(element.getAttribute('color')).to.equal(buttonColor);
            expect(element.type).to.equal(buttonType);
            expect(element.getAttribute('type')).to.equal(buttonType);
            expect(element.size).to.equal(buttonSize);
            expect(element.getAttribute('size')).to.equal(buttonSize);
          }
        }
      }
    })
  });

  // Test different component states (active, disabled, loading etc.)
  describe('states', () => {
    let element: ArcButton;
    beforeEach(async() => {
      element = await fixture(html`<arc-button></arc-button>`);
    });

    it('renders the button in an active state', async () => {
      expect(element.active).to.be.false;
      expect(element.hasAttribute('active')).to.be.false;

      element.active = true;
      await elementUpdated(element);
      expect(element.active).to.be.true;
      expect(element.hasAttribute('active')).to.be.true;
    })

    it('renders the button in a disabled state', async() => {
      expect(element.disabled).to.be.false;
      expect(element.hasAttribute('disabled')).to.be.false;

      element.disabled = true;
      await elementUpdated(element);
      expect(element.disabled).to.be.true;
      expect(element.hasAttribute('disabled')).to.be.true;
    })
  });

  // Test whether the slots can be filled and that they exist
  describe('slots', () => {
    let element: ArcButton;
    beforeEach(async() => {
      element = await fixture(html`<arc-button></arc-button>`);
    });

    it('renders a slot to fill the button / anchor with a label', async () => {
      const buttonTarget = element.shadowRoot!.querySelector('button')!;
      expect(buttonTarget.querySelector('span > slot')).to.exist;

      // Turn the button into an <a>
      element.href = '/';
      await elementUpdated(element);
      const anchorTarget = element.shadowRoot!.querySelector('a')!;
      expect(anchorTarget.querySelector('span > slot')).to.exist;
    })
  });

  // Test the css variables that can be overwritten
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcButton = await fixture(html`<arc-button>Test</arc-button>`);

      expect(getPropertyValue(element, '--min-width')).to.equal('0');
      expect(getPropertyValue(element, '--btn-color')).to.equal('');
      expect(getPropertyValue(element, '--btn-background')).to.equal('');
    });
    it('overwrites the css variables', async () => {
      const element: ArcButton = await fixture(html`<arc-button style='width: 200px; --min-width: 150px; --btn-color: red; --btn-background: green;'>Test</arc-button>`);

      expect(getPropertyValue(element, 'width')).to.equal('200px');
      expect(getPropertyValue(element, '--min-width')).to.equal('150px');
      expect(getPropertyValue(element, '--btn-color')).to.equal('red');
      expect(getPropertyValue(element, '--btn-background')).to.equal('green');
    });
  });
});
