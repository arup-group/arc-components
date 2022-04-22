import { html } from 'lit';
import { expect, fixture, elementUpdated, waitUntil } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../internal/slot.js';
import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_TYPES } from './constants/ButtonConstants.js';

import type ArcButton from './ArcButton.js';
import './arc-button.js';

describe('ArcButton', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcButton;
    beforeEach(async () => {
      element = await fixture(html`<arc-button>Test</arc-button>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the button with default properties in the dom', () => {
      expect(element).dom.to.equal(
        `<arc-button type='${BUTTON_TYPES.pill}' color='${BUTTON_COLORS.default}' size='${BUTTON_SIZES.medium}'>Test</arc-button>`
      );
    });

    /* Test the type of the button */
    it('renders the button as a default button', () => {
      const buttonTarget = element.shadowRoot!.getElementById('button')!;
      expect(buttonTarget.getAttribute('type')).to.equal('button');
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the button with a custom color, type and size property', async () => {
      const element: ArcButton = await fixture(html`<arc-button>Test</arc-button>`);

      for (const buttonColor of Object.values(BUTTON_COLORS)) {
        element.color = buttonColor;
        for (const buttonType of Object.values(BUTTON_TYPES)) {
          element.type = buttonType;
          for (const buttonSize of Object.values(BUTTON_SIZES)) {
            element.size = buttonSize;

            await elementUpdated(element);
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

    it('renders the button with a custom name and value property', async () => {
      const element: ArcButton = await fixture(html`<arc-button name="button" value="one">Test</arc-button>`);

      expect(element.name).to.equal('button');
      expect(element.getAttribute('name')).to.equal('button');

      expect(element.value).to.equal('one');
      expect(element.getAttribute('value')).to.equal('one');
    });

    it('renders the button as an anchor', async () => {
      const element: ArcButton = await fixture(html`<arc-button href="/">Test</arc-button>`);
      const buttonTarget = element.shadowRoot!.getElementById('button')!;

      expect(element.href).to.equal('/');
      expect(element.getAttribute('href')).to.equal('/');

      expect(buttonTarget.tagName).to.equal('A');
      expect(buttonTarget.getAttribute('href')).to.equal('/');
      expect(buttonTarget.hasAttribute('target')).to.be.false;
      expect(buttonTarget.hasAttribute('rel')).to.be.false;
    });

    it('renders the anchor with a target attribute', async () => {
      const element: ArcButton = await fixture(html`<arc-button href="/" target="_blank">Test</arc-button>`);
      const buttonTarget = element.shadowRoot!.getElementById('button')!;

      expect(element.target).to.equal('_blank');
      expect(element.getAttribute('target')).to.equal('_blank');

      expect(buttonTarget.getAttribute('target')).to.equal('_blank');
      expect(buttonTarget.getAttribute('rel')).to.equal('noreferrer noopener');
    });

    it('renders the anchor with a download attribute', async () => {
      const element: ArcButton = await fixture(html`<arc-button href="/" download="Filename">Test</arc-button>`);
      const buttonTarget = element.shadowRoot!.getElementById('button')!;

      expect(element.download).to.equal('Filename');
      expect(element.getAttribute('download')).to.equal('Filename');

      expect(buttonTarget.getAttribute('download')).to.equal('Filename');
    });

    it('renders the button as a submit button', async () => {
      const element: ArcButton = await fixture(html`<arc-button submit>Submit</arc-button>);`);
      const buttonTarget = element.shadowRoot!.getElementById('button')!;
      expect(buttonTarget.getAttribute('type')).to.equal('submit');
    });
  });

  /* Test different component states (active, disabled, loading etc.) */
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
      const buttonTarget = element.shadowRoot!.getElementById('button');

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

      const anchorTarget = element.shadowRoot!.getElementById('button');

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
    });

    it('renders the button in a loading state', async () => {
      expect(element.loading).to.be.false;
      expect(element.hasAttribute('loading')).to.be.false;

      element.loading = true;
      await elementUpdated(element);

      expect(element.loading).to.be.true;
      expect(element.hasAttribute('loading')).to.be.true;
    });
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcButton;
    let clickSpy: SinonSpy = sinon.spy();

    beforeEach(async () => {
      element = await fixture(html`<arc-button></arc-button>`);
      element.addEventListener('click', clickSpy);
    });

    afterEach(() => {
      clickSpy.resetHistory();
    });

    it('simulates a click on the button', async () => {
      element.click();
      await waitUntil(() => clickSpy.calledOnce);
      expect(clickSpy).to.have.been.calledOnce;
    });

    it('suppresses a click on the button while in a disabled state', async () => {
      element.disabled = true;
      await elementUpdated(element);

      element.click();
      expect(clickSpy).to.have.not.been.called;
    });

    it('suppresses a click on the button while in a loading state', async () => {
      element.loading = true;
      await elementUpdated(element);

      element.click();
      expect(clickSpy).to.have.not.been.called;
    });

    it('sets and removes focus from the button', async () => {
      expect(document.activeElement === element).to.be.false;
      element.focus();
      expect(document.activeElement === element).to.be.true;
      element.blur();
      expect(document.activeElement === element).to.be.false;
    });
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcButton;
    let buttonTarget: HTMLElement;

    beforeEach(async () => {
      element = await fixture(html`<arc-button></arc-button>`);
      buttonTarget = element.shadowRoot!.getElementById('button')!;
    });

    it('renders a slot to fill the button with a label', async () => {
      expect(hasSlot(buttonTarget)).to.be.true;
    });

    it('renders a slot to fill the button with a prefix', async () => {
      expect(hasSlot(buttonTarget, 'prefix')).to.be.true;
    });

    it('renders a slot to fill the button with a suffix', async () => {
      expect(hasSlot(buttonTarget, 'suffix')).to.be.true;
    });
  });

  /* Test the css variables that can be overwritten */
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcButton = await fixture(html`<arc-button>Test</arc-button>`);

      expect(getPropertyValue(element, '--min-width')).to.equal('0');
      expect(getPropertyValue(element, '--btn-color')).to.equal('');
      expect(getPropertyValue(element, '--btn-background')).to.equal('');
    });
    it('overwrites the css variables', async () => {
      const element: ArcButton = await fixture(html`<arc-button
        style="width: 200px; --min-width: 150px; --btn-color: red; --btn-background: green;"
        >Test
      </arc-button>`);

      expect(getPropertyValue(element, 'width')).to.equal('200px');
      expect(getPropertyValue(element, '--min-width')).to.equal('150px');
      expect(getPropertyValue(element, '--btn-color')).to.equal('red');
      expect(getPropertyValue(element, '--btn-background')).to.equal('green');
    });
  });
});
