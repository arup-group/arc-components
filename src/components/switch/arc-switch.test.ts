import { html } from 'lit';
import { expect, fixture, elementUpdated, waitUntil } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { hasSlot } from '../../internal/slot.js';
import type ArcSwitch from './ArcSwitch.js';
import './arc-switch.js';

describe('ArcSwitch', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcSwitch;

    beforeEach(async () => {
      element = await fixture(html`<arc-switch>
        <span slot="suffix">This is test switcher</span>
      </arc-switch>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      /* Test default properties that reflect to the DOM */
      expect(element).dom.to.equal(`<arc-switch><span slot="suffix">This is test switcher</span></arc-switch>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom name property', async () => {
      const element: ArcSwitch = await fixture(
        html`<arc-switch name="testName" value="testVal" disabled checked></arc-switch>`
      );

      expect(element.name).to.equal('testName');
      expect(element.getAttribute('name')).to.equal('testName');

      expect(element.value).to.equal('testVal');
      expect(element.getAttribute('value')).to.equal('testVal');

      expect(element.disabled).to.be.true;
      expect(element.hasAttribute('disabled')).to.be.true;

      expect(element.checked).to.be.true;
      expect(element.hasAttribute('checked')).to.be.true;
    });
  });
  /* Test different component states (checked, disabled, etc.) */
  describe('states', () => {
    let element: ArcSwitch;
    let input: HTMLInputElement;

    beforeEach(async () => {
      element = await fixture(html`<arc-switch></arc-switch>`);
      input = element.shadowRoot!.querySelector('input')!;
    });

    it('renders the component in a checked state', async () => {
      expect(input.checked).to.be.false;
      expect(input.hasAttribute('checked')).to.be.false;
      expect(input.getAttribute('aria-checked')).to.equal('false');

      element.checked = true;
      await elementUpdated(element);
      expect(input.checked).to.be.true;
      expect(input.hasAttribute('checked')).to.be.true;
      expect(input.getAttribute('aria-checked')).to.equal('true');
    });

    it('renders the component in a disabled state', async () => {
      expect(input.disabled).to.be.false;
      expect(input.hasAttribute('disabled')).to.be.false;
      expect(input.getAttribute('aria-disabled')).to.equal('false');

      element.disabled = true;
      await elementUpdated(element);
      expect(input.disabled).to.be.true;
      expect(input.hasAttribute('disabled')).to.be.true;
      expect(input.getAttribute('aria-disabled')).to.equal('true');
    });
  });
  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcSwitch;
    let sliderElement: HTMLElement;
    let checkbox: HTMLElement;
    let clickSpy: SinonSpy;
    let changeSpy: SinonSpy;

    beforeEach(async () => {
      element = await fixture(html`<arc-switch></arc-switch>`);
      sliderElement = element.shadowRoot!.getElementById('switch');
      checkbox = sliderElement.querySelector('input');
      clickSpy = sinon.spy();
      changeSpy = sinon.spy();
      checkbox.addEventListener('click', clickSpy);
      element.addEventListener(ARC_EVENTS.change, changeSpy);
    });

    afterEach(async () => {
      checkbox.removeEventListener('click', clickSpy);
      element.removeEventListener(ARC_EVENTS.change, changeSpy);
    });

    it('simulates a toggle the switch and emits arc-change', async () => {
      checkbox.click();
      await waitUntil(() => clickSpy.calledOnce);
      await waitUntil(() => changeSpy.calledOnce);

      expect(clickSpy).to.have.been.calledOnce;
      expect(element.checked).to.be.true;
      expect(changeSpy).to.have.been.calledOnce;
    });
    it('simulates a toogle the switch back and elements checked status change', async () => {
      element.checked = true;
      await elementUpdated(element);

      checkbox.click();
      await waitUntil(() => clickSpy.calledOnce);

      expect(clickSpy).to.have.been.calledOnce;
      expect(element.checked).to.be.false;
      expect(changeSpy).to.have.not.been.called;
    });

    it('suppresses a click on the switch while in a disabled state', async () => {
      element.disabled = true;
      await elementUpdated(element);

      checkbox.click();
      expect(clickSpy).to.have.not.been.called;
      expect(changeSpy).to.have.not.been.called;
    });
  });
  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcSwitch;
    beforeEach(async () => {
      element = await fixture(html`<arc-switch></arc-switch>`);
    });

    it('renders default slots to fill the component', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      /* An specific slot is available */
      expect(hasSlot(main, 'prefix')).to.be.true;
      expect(hasSlot(main, 'suffix')).to.be.true;
    });
  });
});
