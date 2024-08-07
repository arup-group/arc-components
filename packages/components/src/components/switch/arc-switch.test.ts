import { html } from 'lit';
import { expect, fixture, elementUpdated, waitUntil } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { hasSlot } from '../../internal/slot.js';
import { serialize } from '../../utilities/form-utils.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

import type ArcSwitch from './ArcSwitch.js';
import type ArcButton from '../button/ArcButton';
import './arc-switch.js';
import '../button/arc-button.js';

describe('ArcSwitch', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcSwitch;

    beforeEach(async () => {
      element = await fixture(
        html`<arc-switch> This is test switcher </arc-switch>`,
      );
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(
        `<arc-switch>This is test switcher</arc-switch>`,
      );
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
        html`<arc-switch name="testName"></arc-switch>`,
      );
      expect(element.name).to.equal('testName');
      expect(element.getAttribute('name')).to.equal('testName');
    });

    it('renders the element with a custom value property', async () => {
      const element: ArcSwitch = await fixture(
        html`<arc-switch value="testVal"></arc-switch>`,
      );
      expect(element.value).to.equal('testVal');
      expect(element.getAttribute('value')).to.equal('testVal');
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
      expect(element.checked).to.be.false;
      expect(element.hasAttribute('checked')).to.be.false;
      expect(input.getAttribute('aria-checked')).to.equal('false');

      element.checked = true;
      await elementUpdated(element);
      expect(element.checked).to.be.true;
      expect(element.hasAttribute('checked')).to.be.true;
      expect(input.getAttribute('aria-checked')).to.equal('true');
    });

    it('renders the component in a disabled state', async () => {
      expect(element.disabled).to.be.false;
      expect(element.hasAttribute('disabled')).to.be.false;
      expect(input.getAttribute('aria-disabled')).to.equal('false');

      element.disabled = true;
      await elementUpdated(element);
      expect(element.disabled).to.be.true;
      expect(element.hasAttribute('disabled')).to.be.true;
      expect(input.getAttribute('aria-disabled')).to.equal('true');
    });

    it('renders the component in a required state', async () => {
      expect(element.required).to.be.false;
      expect(element.hasAttribute('required')).to.be.false;
      expect(input.hasAttribute('required')).to.be.false;

      element.required = true;
      await elementUpdated(element);
      expect(element.required).to.be.true;
      expect(element.hasAttribute('required')).to.be.true;
      expect(input.hasAttribute('required')).to.be.true;
    });

    it('renders the component in an invalid state', async () => {
      expect(element.invalid).to.be.false;
      expect(element.hasAttribute('invalid')).to.be.false;

      element.invalid = true;
      await elementUpdated(element);
      expect(element.invalid).to.be.true;
      expect(element.hasAttribute('invalid')).to.be.true;
    });
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcSwitch;
    let clickSpy: SinonSpy;
    let changeSpy: SinonSpy;

    beforeEach(async () => {
      element = await fixture(html`<arc-switch></arc-switch>`);
      clickSpy = sinon.spy();
      changeSpy = sinon.spy();
      element.addEventListener('click', clickSpy);
      element.addEventListener(ARC_EVENTS.change, changeSpy);
    });

    afterEach(async () => {
      element.removeEventListener('click', clickSpy);
      element.removeEventListener(ARC_EVENTS.change, changeSpy);
    });

    it('simulates a toggle the switch and emits arc-change', async () => {
      element.click();
      await waitUntil(() => clickSpy.calledOnce);
      await waitUntil(() => changeSpy.calledOnce);

      expect(clickSpy).to.have.been.calledOnce;
      expect(element.checked).to.be.true;
      expect(changeSpy).to.have.been.calledOnce;
    });
    it('simulates a toogle the switch back and elements checked status change', async () => {
      element.checked = true;
      await elementUpdated(element);

      element.click();
      await waitUntil(() => clickSpy.calledOnce);
      await waitUntil(() => changeSpy.calledOnce);

      expect(clickSpy).to.have.been.calledOnce;
      expect(changeSpy).to.have.been.calledOnce;
      expect(element.checked).to.be.false;
    });

    it('suppresses a click on the switch while in a disabled state', async () => {
      element.disabled = true;
      await elementUpdated(element);

      element.click();
      expect(clickSpy).to.have.not.been.called;
      expect(changeSpy).to.have.not.been.called;
    });

    it('sets and removes focus from the switch', async () => {
      expect(document.activeElement === element).to.be.false;
      element.focus();
      expect(document.activeElement === element).to.be.true;
      element.blur();
      expect(document.activeElement === element).to.be.false;
    });
  });

  /* Test form submission */
  describe('form-controls', () => {
    let form: HTMLFormElement;
    let firstSwitch: ArcSwitch;
    let submitBtn: ArcButton;
    let submitSpy: SinonSpy;

    beforeEach(async () => {
      submitSpy = sinon.spy();
      form = await fixture(html`
        <form>
          <arc-switch name="dogs" value="likes_dogs" checked
            >Do you like dogs?</arc-switch
          >
          <arc-switch name="cats" value="likes_cats"
            >Do you like cats?</arc-switch
          >
          <arc-button submit>Submit</arc-button>
        </form>
      `);
      firstSwitch = form.children[0] as ArcSwitch;
      submitBtn = form.querySelector('arc-button')!;
    });

    afterEach(() => {
      submitSpy.resetHistory();
    });

    it('submits the value of the input in a native form element', async () => {
      const formSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        const data = serialize(form);
        expect(data.dogs).to.equal('likes_dogs');
        expect(data.cats).to.be.undefined;
        submitSpy();
      };

      form.addEventListener('submit', formSubmit);
      submitBtn.click();

      await waitUntil(() => submitSpy.calledOnce);
      form.removeEventListener('submit', formSubmit);
    });

    it('prevents submitting the form when the radio is invalid', async () => {
      firstSwitch.checked = false;
      firstSwitch.required = true;
      await elementUpdated(firstSwitch);

      submitBtn.click();
      expect(submitSpy).to.not.been.calledOnce;
    });

    it('prevents submitting the form when the setCustomValidity is defined', async () => {
      firstSwitch.setCustomValidity('Custom invalid text');
      await elementUpdated(firstSwitch);

      submitBtn.click();
      expect(submitSpy).to.not.been.calledOnce;
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
      expect(hasSlot(main)).to.be.true;
    });
  });
});
