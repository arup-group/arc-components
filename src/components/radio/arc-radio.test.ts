import { html } from 'lit';
import { expect, fixture, elementUpdated, waitUntil } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { hasSlot } from '../../internal/slot.js';
import { upEvent, downEvent, leftEvent, rightEvent } from '../../internal/test-utils.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

import type ArcRadioGroup from '../radio-group/ArcRadioGroup.js';
import type ArcRadio from './ArcRadio.js';
import './arc-radio.js';

describe('ArcRadio', () => {
  /* Retrieve the tabindex of a radio button. */
  function getIndex(el: ArcRadio) {
    return el.input.getAttribute('tabindex');
  }

  /* Test the rendering of the component. */
  describe('rendering', () => {
    let element: ArcRadioGroup;
    let radio: ArcRadio;
    beforeEach(async () => {
      element = await fixture(html`
        <arc-radio-group>
          <arc-radio>1</arc-radio>
        </arc-radio-group>
      `);
      radio = element.querySelector('arc-radio')!;
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(radio).dom.to.equal('<arc-radio>1</arc-radio>');
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(radio).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom name, value, disabled and checked property', async () => {
      const element: ArcRadio = await fixture(
        html`<arc-radio name="testName" value="testVal" disabled checked></arc-radio>`
      );
      const input: HTMLInputElement = element.shadowRoot!.querySelector('input')!;

      expect(input.name).to.equal('testName');
      expect(input.getAttribute('name')).to.equal('testName');

      expect(input.value).to.equal('testVal');
      expect(input.getAttribute('value')).to.equal('testVal');

      expect(input.disabled).to.be.true;
      expect(input.hasAttribute('disabled')).to.be.true;

      expect(input.checked).to.be.true;
      expect(input.hasAttribute('checked')).to.be.true;
    });
  });

  /* Test different component states (active, disabled, loading etc.) */
  describe('states', () => {
    let element: ArcRadio;
    let input: HTMLInputElement;

    beforeEach(async () => {
      element = await fixture(html`<arc-radio></arc-radio>`);
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

  /* Test specific methods */
  describe('methods', () => {
    let element: ArcRadioGroup;
    let radioButtons: NodeListOf<ArcRadio>;

    beforeEach(async () => {
      element = await fixture(html`
        <arc-radio-group>
          <arc-radio name="one" disabled>Alpha</arc-radio>
          <arc-radio name="one" checked>Bravo</arc-radio>
          <arc-radio name="one">Charlie</arc-radio>
          <arc-radio name="two">Delta</arc-radio>
        </arc-radio-group>
      `);
      radioButtons = element.querySelectorAll('arc-radio');
    });

    it('handles the checked status of multiple radio buttons', async () => {
      expect(radioButtons[0].checked).to.be.false;
      expect(radioButtons[1].checked).to.be.true;
      expect(radioButtons[2].checked).to.be.false;
      expect(radioButtons[3].checked).to.be.false;

      /* Update the checked state */
      radioButtons[2].checked = true;
      await elementUpdated(radioButtons[2]);

      expect(radioButtons[0].checked).to.be.false;
      expect(radioButtons[1].checked).to.be.false;
      expect(radioButtons[2].checked).to.be.true;
      expect(radioButtons[3].checked).to.be.false;
    });

    it('retrieves radio buttons within the same named group', () => {
      /* By default, disabled radio buttons are included */
      expect(radioButtons[0].getAllRadios().length).to.equal(3);

      /* Exclude disabled radio buttons */
      expect(radioButtons[0].getAllRadios({ includeDisabled: false }).length).to.equal(2);

      /* Only one radio with the name 'two' */
      expect(radioButtons[3].getAllRadios().length).to.equal(1);
    });

    it('retrieves the sibling radio buttons in the radio group', () => {
      expect(radioButtons[0].getSiblingRadios().length).to.equal(2);
    });

    it('makes a selection based on keyboard input within the same named group', () => {
      /* Set focus to the checked radio */
      radioButtons[1].focus();

      /* From 2nd to 3rd as the 1st is disabled */
      radioButtons[1].handleKeyDown(upEvent);
      expect(radioButtons[2].checked).to.be.true;

      /* From 3rd to 2nd */
      radioButtons[2].handleKeyDown(leftEvent);
      expect(radioButtons[1].checked).to.be.true;

      /* From 2nd to 3rd */
      radioButtons[1].handleKeyDown(downEvent);
      expect(radioButtons[2].checked).to.be.true;

      /* From 3rd to 2nd as the 1st is disabled */
      radioButtons[2].handleKeyDown(rightEvent);
      expect(radioButtons[1].checked).to.be.true;
    });

    it('sets the correct tabIndex to the checked (not disabled) radio', async () => {
      const elementTwo: ArcRadioGroup = await fixture(html`
        <arc-radio-group>
          <arc-radio>Alpha</arc-radio>
          <arc-radio checked>Bravo</arc-radio>
          <arc-radio>Charlie</arc-radio>
        </arc-radio-group>
      `);
      const radioButtonsTwo: NodeListOf<ArcRadio> = elementTwo.querySelectorAll('arc-radio');

      expect(getIndex(radioButtonsTwo[0])).to.equal('-1');
      expect(getIndex(radioButtonsTwo[1])).to.equal('0');
      expect(getIndex(radioButtonsTwo[2])).to.equal('-1');
    });

    it('sets the correct tabIndex to the first available (not disabled) radio', async () => {
      const elementTwo: ArcRadioGroup = await fixture(html`
        <arc-radio-group>
          <arc-radio disabled>Alpha</arc-radio>
          <arc-radio checked disabled>Bravo</arc-radio>
          <arc-radio>Charlie</arc-radio>
        </arc-radio-group>
      `);
      const radioButtonsTwo: NodeListOf<ArcRadio> = elementTwo.querySelectorAll('arc-radio');

      expect(getIndex(radioButtonsTwo[0])).to.equal('-1');
      expect(getIndex(radioButtonsTwo[1])).to.equal('-1');
      expect(getIndex(radioButtonsTwo[2])).to.equal('0');
    });

    it('sets the correct tabIndex to the first available radio', async () => {
      const elementTwo: ArcRadioGroup = await fixture(html`
        <arc-radio-group>
          <arc-radio>Alpha</arc-radio>
          <arc-radio>Bravo</arc-radio>
          <arc-radio>Charlie</arc-radio>
        </arc-radio-group>
      `);
      const radioButtonsTwo: NodeListOf<ArcRadio> = elementTwo.querySelectorAll('arc-radio');

      expect(getIndex(radioButtonsTwo[0])).to.equal('0');
      expect(getIndex(radioButtonsTwo[1])).to.equal('-1');
      expect(getIndex(radioButtonsTwo[2])).to.equal('-1');
    });
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcRadio;
    let clickSpy: SinonSpy;
    let changeSpy: SinonSpy;

    beforeEach(async () => {
      element = await fixture(html`<arc-radio></arc-radio>`);
      clickSpy = sinon.spy();
      changeSpy = sinon.spy();
      element.addEventListener('click', clickSpy);
      element.addEventListener(ARC_EVENTS.change, changeSpy);
    });

    afterEach(async () => {
      element.removeEventListener('click', clickSpy);
      element.removeEventListener(ARC_EVENTS.change, changeSpy);
    });

    it('simulates a click on the radio and emits arc-change', async () => {
      element.click();
      await waitUntil(() => clickSpy.calledOnce);
      await waitUntil(() => changeSpy.calledOnce);

      expect(clickSpy).to.have.been.calledOnce;
      expect(changeSpy).to.have.been.calledOnce;
    });

    it('suppresses a click on the radio while in a disabled state', async () => {
      element.disabled = true;
      await elementUpdated(element);

      element.click();
      expect(clickSpy).to.have.not.been.called;
      expect(changeSpy).to.have.not.been.called;
    });

    it('sets and removes focus from the radio', async () => {
      expect(document.activeElement === element).to.be.false;
      element.focus();
      expect(document.activeElement === element).to.be.true;
      element.blur();
      expect(document.activeElement === element).to.be.false;
    });
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcRadio;
    beforeEach(async () => {
      element = await fixture(html`<arc-radio></arc-radio>`);
    });

    it('renders default slots to fill the component', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      /* An empty slot is available */
      expect(hasSlot(main)).to.be.true;
    });
  });
});
