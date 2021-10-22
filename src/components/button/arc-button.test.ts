import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';
import sinon from 'sinon';

import { ArcButton } from './arc-button.js';
import './arc-button.js';

import { BUTTON_TYPES, BUTTON_SIZES, BUTTON_COLORS } from './constants/ButtonConstants.js';
import { getPropertyValue } from '../../utils/style-utils.js';

describe('ArcButton', () => {
  // Test the rendering of the component
  describe('rendering', () => {
    let element: ArcButton;
    beforeEach(async () => {
      element = await fixture(html`<arc-button>Test</arc-button>`);
    });

    // Test default properties that reflect to the DOM
    it('renders the button with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-button type='${BUTTON_TYPES.contained}' color='${BUTTON_COLORS.default}' size='${BUTTON_SIZES.medium}'>Test</arc-button>`);
    });

    // Test the type of the button
    it('renders the button as a default button', () => {
      const buttonTarget = element.shadowRoot!.querySelector('button')!;
      expect(buttonTarget.getAttribute('type')).to.equal('button');
    })

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
    });

    it('renders the button as a submit button', async () => {
      const element: ArcButton = await fixture(html`<arc-button submit>Submit</arc-button>);`)
      const buttonTarget = element.shadowRoot!.querySelector('button')!;
      expect(buttonTarget.getAttribute('type')).to.equal('submit');
    });

    it('renders the button as an anchor', async () => {
      const element: ArcButton = await fixture(html`<arc-button href='/'>Test</arc-button>`);
      const buttonTarget = element.shadowRoot!.querySelector('button');
      const anchorTarget = element.shadowRoot!.querySelector('a');

      expect(buttonTarget).to.be.null;
      expect(anchorTarget).to.exist;

      expect(anchorTarget!.hasAttribute('target')).to.be.false;
      expect(anchorTarget!.hasAttribute('rel')).to.be.false;

      expect(element.href).to.equal('/');
      expect(element.getAttribute('href')).to.equal('/');
    });

    it('renders the anchor with a target attribute', async () => {
      const element: ArcButton = await fixture(html`<arc-button href='/' target='_blank'>Test</arc-button>`);
      const anchorTarget = element.shadowRoot!.querySelector('a')!;

      expect(anchorTarget.getAttribute('target')).to.equal('_blank');
      expect(anchorTarget.getAttribute('rel')).to.equal('noreferrer noopener');

      expect(element.target).to.equal('_blank');
      expect(element.getAttribute('target')).to.equal('_blank');
    });

    it('renders the anchor with a download attribute', async () => {
      const element: ArcButton = await fixture(html`<arc-button href='/' download='Filename'>Test</arc-button>`);
      const anchorTarget = element.shadowRoot!.querySelector('a')!;

      expect(anchorTarget.getAttribute('download')).to.equal('Filename');

      expect(element.download).to.equal('Filename');
      expect(element.getAttribute('download')).to.equal('Filename');
    });
  });

  // Test different component states (active, disabled, loading etc.)
  describe('states', () => {
    let element: ArcButton;

    beforeEach(async () => {
      element = await fixture(html`<arc-button></arc-button>`);
    });

    it('renders the button in an active state', async () => {
      expect(element.active).to.be.false;
      expect(element.hasAttribute('active')).to.be.false;

      element.active = true;
      await elementUpdated(element);
      expect(element.active).to.be.true;
      expect(element.hasAttribute('active')).to.be.true;
    });

    it('renders the button in a disabled state', async () => {
      const buttonTarget = element.shadowRoot!.querySelector('button');

      expect(buttonTarget!.hasAttribute('disabled')).to.be.false;
      expect(element.disabled).to.be.false;
      expect(element.hasAttribute('disabled')).to.be.false;

      element.disabled = true;
      await elementUpdated(element);

      expect(buttonTarget!.hasAttribute('disabled')).to.be.true;
      expect(element.disabled).to.be.true;
      expect(element.hasAttribute('disabled')).to.be.true;
    });

    it('renders the anchor in a disabled state', async () => {
      element.href = '/';
      await elementUpdated(element);

      const anchorTarget = element.shadowRoot!.querySelector('a');

      expect(anchorTarget!.getAttribute('aria-disabled')).to.equal('false');
      expect(anchorTarget!.getAttribute('tabindex')).to.equal('0');
      expect(element.disabled).to.be.false;
      expect(element.hasAttribute('disabled')).to.be.false;

      element.disabled = true;
      await elementUpdated(element);

      expect(anchorTarget!.getAttribute('aria-disabled')).to.equal('true');
      expect(anchorTarget!.getAttribute('tabindex')).to.equal('-1');
      expect(element.disabled).to.be.true;
      expect(element.hasAttribute('disabled')).to.be.true;
    })

    it('renders the button in a loading state', async () => {
      expect(element.loading).to.be.false;
      expect(element.hasAttribute('loading')).to.be.false;

      element.loading = true;
      await elementUpdated(element);

      expect(element.loading).to.be.true;
      expect(element.hasAttribute('loading')).to.be.true;
    });
  });

  // Test the events (click, focus, blur etc.)
  describe('events', () => {
    let element: ArcButton;
    let clickSpy: any;
    let isClicked: boolean;

    function updateClicked() {
      isClicked = true;
    }

    beforeEach(async () => {
      isClicked = false;
      element = await fixture(html`<arc-button></arc-button>`);
      clickSpy = sinon.spy(element, 'click');
      element.addEventListener('click', updateClicked);
    })

    afterEach(() => {
      element.removeEventListener('click', updateClicked);
    })

    it('simulates a click on the button', async () => {
      element.click();
      expect(clickSpy.callCount).to.equal(1);
      expect(isClicked).to.be.true;
    });

    it('suppresses a click on the button while in a disabled or loading state', async () => {
      element.disabled = true;
      await elementUpdated(element);

      element.click();
      expect(clickSpy.callCount).to.equal(1);
      expect(isClicked).to.be.false;

      element.disabled = false;
      element.loading = true;
      await elementUpdated(element);

      element.click();
      expect(clickSpy.callCount).to.equal(2);
      expect(isClicked).to.be.false;

      element.loading = false;
      await elementUpdated(element);

      element.click();
      expect(clickSpy.callCount).to.equal(3);
      expect(isClicked).to.be.true;
    })
  });

  // Test whether the slots can be filled and that they exist
  describe('slots', () => {
    let element: ArcButton;
    let buttonTarget: HTMLElement;

    beforeEach(async () => {
      element = await fixture(html`<arc-button></arc-button>`);
      buttonTarget = element.shadowRoot!.getElementById('button')!;
    });

    it('renders a slot to fill the button with a label', async () => {
      expect(buttonTarget.querySelector('slot')).to.exist;
    });

    it('renders a slot to fill the button with a prefix', async () => {
      expect(buttonTarget.querySelector('slot[name="prefix"]')).to.exist;
    });

    it('renders a slot to fill the button with a suffix', async () => {
      expect(buttonTarget.querySelector('slot[name="suffix"]')).to.exist;
    });
  });

  // Test the css variables that can be overwritten
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcButton = await fixture(html`
        <arc-button>Test</arc-button>`);

      expect(getPropertyValue(element, '--min-width')).to.equal('0');
      expect(getPropertyValue(element, '--btn-color')).to.equal('');
      expect(getPropertyValue(element, '--btn-background')).to.equal('');
    });
    it('overwrites the css variables', async () => {
      const element: ArcButton = await fixture(html`
        <arc-button style='width: 200px; --min-width: 150px; --btn-color: red; --btn-background: green;'>Test
        </arc-button>`);

      expect(getPropertyValue(element, 'width')).to.equal('200px');
      expect(getPropertyValue(element, '--min-width')).to.equal('150px');
      expect(getPropertyValue(element, '--btn-color')).to.equal('red');
      expect(getPropertyValue(element, '--btn-background')).to.equal('green');
    });
  });
});
