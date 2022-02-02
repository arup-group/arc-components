import { html } from 'lit';
import { expect, fixture, elementUpdated, waitUntil } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { hasSlot } from '../../utilities/dom-utils.js';

import type ArcRadioGroup from '../radio-group/ArcRadioGroup.js';
import type ArcRadio from './ArcRadio.js';
import './arc-radio.js';

describe('ArcRadio', () => {
  /* Retrieve the tabindex of a radio button */
  function getIndex(el: ArcRadio) {
    return el.input.getAttribute('tabindex');
  }

  /* Test the rendering of the component */
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
      expect(radio).dom.to.equal(`<arc-radio>1</arc-radio>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(radio).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom name, value, disabled and checked property', async () => {
      const element: ArcRadio = await fixture(html`<arc-radio name='testName' value='testVal' disabled checked></arc-radio>`);
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
            <arc-radio disabled>Alpha</arc-radio>
            <arc-radio checked>Bravo</arc-radio>
            <arc-radio>Charlie</arc-radio>
          </arc-radio-group>
        `);
      radioButtons = element.querySelectorAll('arc-radio');
    });

    it('handles the checked status of multiple radio buttons', async () => {
      expect(radioButtons[0].checked).to.be.false;
      expect(radioButtons[1].checked).to.be.true;
      expect(radioButtons[2].checked).to.be.false;

      /* Update the checked state */
      radioButtons[2].checked = true;
      await elementUpdated(radioButtons[2]);

      expect(radioButtons[0].checked).to.be.false;
      expect(radioButtons[1].checked).to.be.false;
      expect(radioButtons[2].checked).to.be.true;
    });

    it('retrieves radio buttons', () => {
      /* By default, disabled radio buttons are included */
      expect(radioButtons[0].getAllRadios().length).to.equal(3);

      /* Exclude disabled radio buttons */
      expect(radioButtons[0].getAllRadios({ includeDisabled: false }).length).to.equal(2);
    });

    it('retrieves the sibling radio buttons in the radio group', () => {
      expect(radioButtons[0].getSiblingRadios().length).to.equal(2);
    });

    it('makes a selection based on keyboard input', async () => {

    });

    it('sets the correct tabIndex to the checked (not disabled) radio', async () => {
      const elementTwo: ArcRadioGroup = await fixture(html`
        <arc-radio-group>
          <arc-radio>Alpha</arc-radio>
          <arc-radio checked>Bravo</arc-radio>
          <arc-radio>Charlie</arc-radio>
        </arc-radio-group>
      `)
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
        `)
      const radioButtonsTwo: NodeListOf<ArcRadio> = elementTwo.querySelectorAll('arc-radio');

      expect(getIndex(radioButtonsTwo[0])).to.equal('-1');
      expect(getIndex(radioButtonsTwo[1])).to.equal('-1');
      expect(getIndex(radioButtonsTwo[2])).to.equal('0');
    })

    it('sets the correct tabIndex to the first available radio', async () => {
      const elementTwo: ArcRadioGroup = await fixture(html`
          <arc-radio-group>
            <arc-radio>Alpha</arc-radio>
            <arc-radio>Bravo</arc-radio>
            <arc-radio>Charlie</arc-radio>
          </arc-radio-group>
        `)
      const radioButtonsTwo: NodeListOf<ArcRadio> = elementTwo.querySelectorAll('arc-radio');

      expect(getIndex(radioButtonsTwo[0])).to.equal('0');
      expect(getIndex(radioButtonsTwo[1])).to.equal('-1');
      expect(getIndex(radioButtonsTwo[2])).to.equal('-1');
    })
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcRadio;
    const clickSpy: SinonSpy = sinon.spy();

    beforeEach(async () => {
      element = await fixture(html`<arc-radio></arc-radio>`);
    });

    afterEach(async () => {
      clickSpy.resetHistory();
    });

    it('simulates a click on the radio', async () => {
      element.addEventListener('click', clickSpy);

      element.click();
      await waitUntil(() => clickSpy.calledOnce);

      expect(clickSpy).to.have.been.calledOnce;
    });

    it('suppresses a click on the radio while in a disabled state', async () => {
      element.disabled = true;
      await elementUpdated(element);

      element.click();
      expect(clickSpy).to.have.not.been.called;
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
