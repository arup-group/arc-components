import { html } from 'lit';
import { elementUpdated, expect, fixture, waitUntil } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../internal/slot.js';

import type ArcIconButton from './ArcIconButton.js';
import './arc-icon-button.js';

describe('ArcIconButton', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcIconButton;
    beforeEach(async () => {
      element = await fixture(html`<arc-icon-button label="Some label"></arc-icon-button>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal("<arc-icon-button label='Some label'></arc-icon-button>");
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
    it('renders the element with a custom name property', async () => {
      const element: ArcIconButton = await fixture(html`<arc-icon-button name="heart"></arc-icon-button>`);

      expect(element.name).to.equal('heart');
      expect(element.getAttribute('name')).to.equal('heart');
    });

    it('renders the element with a custom label property', async () => {
      const element: ArcIconButton = await fixture(html`<arc-icon-button label="Test label"></arc-icon-button>`);
      const buttonTarget = element.shadowRoot!.querySelector('button')!;

      expect(element.label).to.equal('Test label');
      expect(element.getAttribute('label')).to.equal('Test label');

      expect(buttonTarget.getAttribute('aria-label')).to.equal('Test label');
    });

    it('renders the button as an anchor', async () => {
      const element: ArcIconButton = await fixture(
        html`<arc-icon-button href="/" label="Test label">Test</arc-icon-button>`
      );
      const buttonTarget = element.shadowRoot!.getElementById('button')!;

      expect(element.href).to.equal('/');
      expect(element.getAttribute('href')).to.equal('/');

      expect(buttonTarget.tagName).to.equal('A');
      expect(buttonTarget.getAttribute('href')).to.equal('/');
      expect(buttonTarget.getAttribute('aria-label')).to.equal('Test label');
      expect(buttonTarget.hasAttribute('target')).to.be.false;
      expect(buttonTarget.hasAttribute('rel')).to.be.false;
    });

    it('renders the anchor with a target attribute', async () => {
      const element: ArcIconButton = await fixture(
        html`<arc-icon-button href="/" target="_blank">Test</arc-icon-button>`
      );
      const buttonTarget = element.shadowRoot!.getElementById('button')!;

      expect(element.target).to.equal('_blank');
      expect(element.getAttribute('target')).to.equal('_blank');

      expect(buttonTarget.getAttribute('target')).to.equal('_blank');
      expect(buttonTarget.getAttribute('rel')).to.equal('noreferrer noopener');
    });

    it('renders the anchor with a download attribute', async () => {
      const element: ArcIconButton = await fixture(
        html`<arc-icon-button href="/" download="Filename">Test</arc-icon-button>`
      );
      const buttonTarget = element.shadowRoot!.getElementById('button')!;

      expect(element.download).to.equal('Filename');
      expect(element.getAttribute('download')).to.equal('Filename');

      expect(buttonTarget.getAttribute('download')).to.equal('Filename');
    });
  });

  /* Test different component states (active, disabled, loading etc.) */
  describe('states', () => {
    let element: ArcIconButton;

    beforeEach(async () => {
      element = await fixture(html`<arc-icon-button></arc-icon-button>`);
    });

    it('renders the component in an active state', async () => {
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

    it('renders the component in a loading state', async () => {
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
    let element: ArcIconButton;
    let clickSpy: SinonSpy;

    beforeEach(async () => {
      element = await fixture(html`<arc-icon-button></arc-icon-button>`);
      clickSpy = sinon.spy();
      element.addEventListener('click', clickSpy);
    });

    it('simulates a click on the button', async () => {
      element.click();
      await waitUntil(() => clickSpy.calledOnce);
      expect(clickSpy).to.have.been.calledOnce;
    });

    it('suppresses a click on the icon-button while in a disabled state', async () => {
      element.disabled = true;
      await elementUpdated(element);

      element.click();
      expect(clickSpy).to.have.not.been.called;
    });

    it('suppresses a click on the icon-button while in a loading state', async () => {
      element.loading = true;
      await elementUpdated(element);

      element.click();
      expect(clickSpy).to.have.not.been.called;
    });

    it('sets and removes focus from the icon-button', async () => {
      expect(document.activeElement === element).to.be.false;
      element.focus();
      expect(document.activeElement === element).to.be.true;
      element.blur();
      expect(document.activeElement === element).to.be.false;
    });
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcIconButton;
    beforeEach(async () => {
      element = await fixture(html`<arc-icon-button></arc-icon-button>`);
    });

    it('renders a default slots to fill the button with a label', () => {
      const main = element.shadowRoot!.getElementById('button')!;
      expect(hasSlot(main)).to.be.true;
    });
  });

  /* Test the css variables that can be overwritten */
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcIconButton = await fixture(html`<arc-icon-button>Test</arc-icon-button>`);

      expect(getPropertyValue(element, '--icon-color')).to.equal('');
    });

    it('overwrites the css variables', async () => {
      const element: ArcIconButton = await fixture(
        html`<arc-icon-button style="--icon-color: green;">Test</arc-icon-button>`
      );

      expect(getPropertyValue(element, '--icon-color')).to.equal('green');
    });
  });
});
