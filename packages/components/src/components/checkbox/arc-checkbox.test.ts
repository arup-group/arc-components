import { html } from 'lit';
import { expect, fixture, elementUpdated, waitUntil } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { hasSlot } from '../../internal/slot.js';
import { serialize } from '../../utilities/form-utils.js';
// import {
//   upEvent,
//   downEvent,
//   leftEvent,
//   rightEvent,
// } from '../../internal/test-utils.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';


import type ArcCheckBox from './ArcCheckBox.js';
import type ArcButton from '../button/ArcButton.ts';
// import '../checkbox-group/arc-checkbox-group.js';
import './arc-checkbox.js';
import '../button/arc-button.js';

describe('ArcCheckbox', () => {
  /* Test the rendering of the component. */
  describe('rendering', () => {
    let element: ArcCheckBox;
    let checkbox: ArcCheckBox;
    beforeEach(async () => {
      element = await fixture(html`
          <arc-checkbox>1</arc-checkbox>
      `);
      checkbox = element
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(checkbox).dom.to.equal('<arc-checkbox>1</arc-checkbox>');
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(checkbox).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom name, value, disabled and checked property', async () => {
      const element: ArcCheckBox = await fixture(
        html`<arc-checkbox name="testName" value="testVal" disabled checked>
        </arc-checkbox>`,
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

  /* Test different component states (active, disabled, loading etc.) */
  describe('states', () => {
    let element: ArcCheckBox;
    let input: HTMLInputElement;

    beforeEach(async () => {
      element = await fixture(html`<arc-checkbox></arc-checkbox>`);
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
  });

  /* Test specific methods */
  describe('methods', () => {
    let element: ArcCheckBox;
    let checkboxButtons: NodeListOf<ArcCheckBox>;

    beforeEach(async () => {
      element = await fixture(html`
      <div>
          <arc-checkbox name="one" disabled>Alpha</arc-checkbox>
          <arc-checkbox name="two" checked>Bravo</arc-checkbox>
          <arc-checkbox name="three">Charlie</arc-checkbox>
          <arc-checkbox name="four">Delta</arc-checkbox>
        </div>
      `);
      checkboxButtons = element.querySelectorAll('arc-checkbox');
    });

    it('handles the checked status of multiple checkbox buttons', async () => {
      expect(checkboxButtons[0].checked).to.be.false;
      expect(checkboxButtons[1].checked).to.be.true;
      expect(checkboxButtons[2].checked).to.be.false;
      expect(checkboxButtons[3].checked).to.be.false;

      /* Update the checked state */
      checkboxButtons[2].checked = true;
      await elementUpdated(checkboxButtons[2]);

      expect(checkboxButtons[0].checked).to.be.false;
      expect(checkboxButtons[1].checked).to.be.true;
      expect(checkboxButtons[2].checked).to.be.true;
      expect(checkboxButtons[3].checked).to.be.false;
    });

    // it('retrieves checkbox buttons within the same named group', () => {
      /* By default, disabled radio buttons are included */
      // expect(checkboxButtons[0].getAllCheckboxes().length).to.equal(3);

      /* Exclude disabled radio buttons */
    //   expect(
    //     checkboxButtons[0].getAllCheckboxes({ includeDisabled: false }).length,
    //   ).to.equal(2);

    //   /* Only one radio with the name 'two' */
    //   expect(checkboxButtons[3].getAllCheckboxes().length).to.equal(1);
    // });

    // it('retrieves the sibling radio buttons in the Checkbox group', () => {
    //   expect(checkboxButtons[0].getSiblingCheckboxes().length).to.equal(2);
    // });

  //   it('makes a selection based on keyboard input within the same named group', () => {
  //     /* Set focus to the checked radio */
  //     checkboxButtons[1].focus();

  //     /* From 2nd to 3rd as the 1st is disabled */
  //     checkboxButtons[1].handleKeyDown(upEvent);
  //     expect(checkboxButtons[2].checked).to.be.true;

  //     /* From 3rd to 2nd */
  //     checkboxButtons[2].handleKeyDown(leftEvent);
  //     expect(checkboxButtons[1].checked).to.be.true;

  //     /* From 2nd to 3rd */
  //     checkboxButtons[1].handleKeyDown(downEvent);
  //     expect(checkboxButtons[2].checked).to.be.true;

  //     /* From 3rd to 2nd as the 1st is disabled */
  //     checkboxButtons[2].handleKeyDown(rightEvent);
  //     expect(checkboxButtons[1].checked).to.be.true;
  //   });
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcCheckBox;
    let clickSpy: SinonSpy;
    let changeSpy: SinonSpy;

    beforeEach(async () => {
      element = await fixture(html`<arc-checkbox></arc-checkbox>`);
      clickSpy = sinon.spy();
      changeSpy = sinon.spy();
      element.addEventListener('click', clickSpy);
      element.addEventListener(ARC_EVENTS.change, changeSpy);
    });

    afterEach(async () => {
      element.removeEventListener('click', clickSpy);
      element.removeEventListener(ARC_EVENTS.change, changeSpy);
    });

    it('simulates a click on the checkbox and emits arc-change', async () => {
      element.click();
      await waitUntil(() => clickSpy.calledOnce);
      await waitUntil(() => changeSpy.calledOnce);

      expect(clickSpy).to.have.been.calledOnce;
      expect(changeSpy).to.have.been.calledOnce;
    });

    it('suppresses a click on the checkbox while in a disabled state', async () => {
      element.disabled = false;
      await elementUpdated(element);

      element.click();
      expect(clickSpy).to.have.been.called;
      expect(changeSpy).to.have.been.called;
    });

    it('sets and removes focus from the checkbox', async () => {
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
    let firstCheckbox: ArcCheckBox;
    let submitBtn: ArcButton;
    const submitSpy: SinonSpy = sinon.spy();

    beforeEach(async () => {
      form = await fixture(html`
        <form>
            <arc-checkbox name="car" value="audi">Audi</arc-checkbox>
            <arc-checkbox name="car" value="opel" checked>Opel</arc-checkbox>
            <arc-checkbox name="car" value="vw">Volkswagen</arc-checkbox>
          <arc-button submit>Submit</arc-button>
        </form>
      `);
      firstCheckbox = form.querySelector('arc-checkbox') as ArcCheckBox;
      submitBtn = form.querySelector('arc-button')!;
    });

    afterEach(() => {
      submitSpy.resetHistory();
    });

    it('submits the value of the input in a native form element', async () => {
      const formSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        const data = serialize(form);
        expect(data.car).to.equal('opel');
        submitSpy();
      };

      form.addEventListener('submit', formSubmit);
      submitBtn.click();

      await waitUntil(() => submitSpy.calledOnce);
      form.removeEventListener('submit', formSubmit);
    });

    it('prevents submitting the form when the setCustomValidity is defined', async () => {
      firstCheckbox.setCustomValidity('Custom invalid text');
      await elementUpdated(firstCheckbox);

      submitBtn.click();
      expect(submitSpy).to.not.been.calledOnce;
    });
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcCheckBox;
    beforeEach(async () => {
      element = await fixture(html`<arc-checkbox></arc-checkbox>`);
    });

    it('renders default slots to fill the component', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      /* An empty slot is available */
      expect(hasSlot(main)).to.be.true;
    });
  });
});
