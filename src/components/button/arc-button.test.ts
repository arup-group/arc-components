import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';

import { ArcButton } from './ArcButton.js';
import './arc-button.js';

import {BUTTON_TYPES, BUTTON_SIZES, BUTTON_COLORS} from './constants/ButtonConstants.js';

describe('ArcButton', () => {
  describe('rendering', () => {
    let button: ArcButton;
    beforeEach(async() => {
      button = await fixture(html`<arc-button>Test</arc-button>`);
    })

    it('renders a slot to fill the button with a label', () => {
      const buttonTarget = button.shadowRoot!.getElementById('button')!;
      expect(buttonTarget.querySelector('slot')).to.exist;
    })

    it('renders a default button', () => {
      expect(button).dom.to.equal(`<arc-button type='contained' color='default' size='medium'>Test</arc-button>`);
    });

    it('passes the a11y audit', async () => {
      await expect(button).shadowDom.to.be.accessible();
    });

    describe('types', () => {
      it('renders different button types', async () => {
        for (const key of Object.keys(BUTTON_TYPES)) {
          button.type = key;
          await elementUpdated(button); // eslint-disable-line no-await-in-loop
          expect(button.type).to.equal(key);
          expect(button.getAttribute('type')).to.equal(key);
          expect(button).dom.to.equal(`<arc-button type=${key} color='default' size='medium'>Test</arc-button>`)
        }
      })
    })

    describe('colors', () => {
      it('renders different button colors', async () => {
        for (const key of Object.keys(BUTTON_COLORS)) {
          button.color = key;
          await elementUpdated(button); // eslint-disable-line no-await-in-loop
          expect(button.color).to.equal(key);
          expect(button.getAttribute('color')).to.equal(key);
          expect(button).dom.to.equal(`<arc-button type='contained' color=${key} size='medium'>Test</arc-button>`)
        }
      })
    })

    describe('sizes', () => {
      it('renders different button sizes', async () => {
        for (const key of Object.keys(BUTTON_SIZES)) {
          button.size = key;
          await elementUpdated(button); // eslint-disable-line no-await-in-loop
          expect(button.size).to.equal(key);
          expect(button.getAttribute('size')).to.equal(key);
          expect(button).dom.to.equal(`<arc-button type='contained' color='default' size=${key}>Test</arc-button>`)
        }
      })
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
});
