import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';

import { ArcButton } from './ArcButton.js';
import './arc-button.js';

import { BUTTON_TYPES, BUTTON_SIZES, BUTTON_COLORS } from './constants/ButtonConstants.js';

describe('ArcButton', () => {
  describe('rendering', () => {
    let button: ArcButton;
    beforeEach(async() => {
      button = await fixture(html`<arc-button>Test</arc-button>`);
    })

    it('renders the button with default properties in the dom', () => {
      expect(button).dom.to.equal(`<arc-button type='contained' color='default' size='medium'>Test</arc-button>`);
    });

    it('renders a slot to fill the button / anchor with a label', async () => {
      const buttonTarget = button.shadowRoot!.querySelector('button')!;
      expect(buttonTarget.querySelector('slot')).to.exist;

      // Turn the button into an <a>
      button.href = '/';
      await elementUpdated(button);
      const anchorTarget = button.shadowRoot!.querySelector('a')!;
      expect(anchorTarget.querySelector('slot')).to.exist;
    })

    it('passes the a11y audit', async () => {
      await expect(button).shadowDom.to.be.accessible();
    });

    it('renders the button with different colors, types and sizes', async () => {
      for (const buttonColor of Object.keys(BUTTON_COLORS)) {
        button.color = buttonColor;
        for (const buttonType of Object.keys(BUTTON_TYPES)) {
          button.type = buttonType;
          for (const buttonSize of Object.keys(BUTTON_SIZES)) {
            button.size = buttonSize;

            await elementUpdated(button); // eslint-disable-line no-await-in-loop
            expect(button.color).to.equal(buttonColor);
            expect(button.getAttribute('color')).to.equal(buttonColor);
            expect(button.type).to.equal(buttonType);
            expect(button.getAttribute('type')).to.equal(buttonType);
            expect(button.size).to.equal(buttonSize);
            expect(button.getAttribute('size')).to.equal(buttonSize);

            expect(button).dom.to.equal(`<arc-button type=${buttonType} color=${buttonColor} size=${buttonSize}>Test</arc-button>`)
          }
        }
      }
    })

    describe('states', () => {
      it('renders the button in an active state', async () => {
        expect(button.active).to.be.false;
        expect(button.hasAttribute('active')).to.be.false;

        button.active = true;
        await elementUpdated(button);
        expect(button.active).to.be.true;
        expect(button.hasAttribute('active')).to.be.true;
      })
      it('renders the button in a disabled state', async() => {
        expect(button.disabled).to.be.false;
        expect(button.hasAttribute('disabled')).to.be.false;

        button.disabled = true;
        await elementUpdated(button);
        expect(button.disabled).to.be.true;
        expect(button.hasAttribute('disabled')).to.be.true;
      })
    })
  });
  describe('styles variables', () => {
    it('uses the default styles variables', async () => {
      const button: ArcButton = await fixture(html`<arc-button>Test</arc-button>`);
      const buttonTarget = button.shadowRoot!.getElementById('button')!;
      const buttonStyles = window.getComputedStyle(button);
      const targetStyles = window.getComputedStyle(buttonTarget);

      expect(buttonStyles.getPropertyValue('--min-width').split('')[1]).to.equal('0');
      expect(buttonStyles.getPropertyValue('--btn-color')).to.equal('');
      expect(buttonStyles.getPropertyValue('--btn-background')).to.equal('');

      expect(targetStyles.getPropertyValue('--min-width').split('')[1]).to.equal('0');
      expect(targetStyles.getPropertyValue('--btn-color')).to.equal('');
      expect(targetStyles.getPropertyValue('--btn-background')).to.equal('');
    })
    it('overwrites the width', async () => {
      const button: ArcButton = await fixture(html`<arc-button style='width:200px; --min-width:150px;'>Test</arc-button>`);
      const buttonTarget = button.shadowRoot!.getElementById('button')!;
      const buttonStyles = window.getComputedStyle(button);
      const targetStyles = window.getComputedStyle(buttonTarget);

      expect(buttonStyles.getPropertyValue('width')).to.equal('200px');
      expect(buttonStyles.getPropertyValue('--min-width')).to.equal('150px');

      expect(targetStyles.getPropertyValue('width')).to.equal('200px');
      expect(targetStyles.getPropertyValue('--min-width')).to.equal('150px');
    })
    it('overwrites the styles variables', async () => {
      const button: ArcButton = await fixture(html`<arc-button style='--btn-color:red; --btn-background:green;'>Test</arc-button>`);
      const buttonTarget = button.shadowRoot!.getElementById('button')!;
      const buttonStyles = window.getComputedStyle(button);
      const targetStyles = window.getComputedStyle(buttonTarget);

      expect(buttonStyles.getPropertyValue('--btn-color')).to.equal('red');
      expect(buttonStyles.getPropertyValue('--btn-background')).to.equal('green');

      expect(targetStyles.getPropertyValue('--btn-color')).to.equal('red');
      expect(targetStyles.getPropertyValue('--btn-background')).to.equal('green');
    })
  })
});
