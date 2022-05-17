/* eslint-disable max-classes-per-file */

import { html, LitElement } from 'lit';
import { property, query, customElement } from 'lit/decorators.js';
import { expect, fixture, elementUpdated } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { FormController } from './form-control.js';
import type ArcButton from '../components/button/ArcButton.js';
import '../components/button/arc-button.js';

@customElement('input-test')
class InputControlTest extends LitElement {
  formController = new FormController(this);

  @property() name: string;

  @property() value: string;

  @query('#testInput') input: HTMLInputElement;

  reportValidity() {
    return this.input.reportValidity();
  }

  protected render() {
    return html`<input id="testInput" type="text" name=${this.name} .value=${this.value} required />`;
  }
}

@customElement('select-test')
class SelectControlTest extends LitElement {
  formController = new FormController(this);

  @property() name: string;

  @property() value: string[] = [];

  @query('#testSelect') select: HTMLInputElement;

  connectedCallback() {
    super.connectedCallback();
    this.value = ['val1', 'val2'];
  }

  reportValidity() {
    return this.select.reportValidity();
  }

  protected render() {
    return html`
      <select id="testSelect" name=${this.name} multiple required>
        <option value="val1" selected>Val1</option>
        <option value="val2" selected>Val2</option>
        <option value="val3">Val3</option>
        <option value="val4">Val4</option>
      </select>
    `;
  }
}

describe('FormController', () => {
  describe('Single value', () => {
    let element: HTMLFormElement;
    let inputControl: InputControlTest;
    let button: ArcButton;
    let shadowInput: HTMLInputElement;
    let submitSpy: SinonSpy;
    let formDataSpy: SinonSpy;

    beforeEach(async () => {
      element = await fixture(html`
        <form>
          <input-test name="test_input" value="some value"></input-test>
          <arc-button submit></arc-button>
        </form>
      `);
      inputControl = element.querySelector('input-test')!;
      button = element.querySelector('arc-button')!;
      shadowInput = inputControl.shadowRoot?.querySelector('input')!;
      submitSpy = sinon.spy();
      formDataSpy = sinon.spy();
    });

    it('should submit the form with values from within the ShadowDOM', async () => {
      /* Prevent default form behaviour and create the FormData object. */
      element.addEventListener('submit', e => {
        e.preventDefault();
        new FormData(element); // eslint-disable-line no-new
      });

      /* When the FormData object is created, it should contain the input field from within the web-component. */
      element.addEventListener('formdata', e => {
        const data = [...e.formData.values()];
        expect(data.length).to.equal(1);
        expect(data[0]).to.equal(shadowInput.value);
      });

      button.click();
    });

    it('should stop propagation when the form is invalid', async () => {
      element.addEventListener('submit', submitSpy);
      element.addEventListener('formdata', formDataSpy);

      /* Remove the value from the input to make it invalid */
      inputControl.value = '';
      await elementUpdated(inputControl);

      button.click();
      expect(submitSpy).to.have.not.been.calledOnce;
      expect(formDataSpy).to.have.not.been.calledOnce;
    });
  });

  describe('Array of values', () => {
    let element: HTMLFormElement;
    let selectControl: SelectControlTest;
    let button: ArcButton;

    beforeEach(async () => {
      element = await fixture(html`
        <form>
          <select-test name="test_select"></select-test>
          <arc-button submit></arc-button>
        </form>
      `);
      selectControl = element.querySelector('select-test')!;
      button = element.querySelector('arc-button')!;
    });

    it('should submit the form with an array of values from within the ShadowDOM', async () => {
      /* Prevent default form behaviour and create the FormData object. */
      element.addEventListener('submit', e => {
        e.preventDefault();
        new FormData(element); // eslint-disable-line no-new
      });

      /* When the FormData object is created, it should contain the values from within the web-component. */
      element.addEventListener('formdata', e => {
        const data = [...e.formData.values()];
        expect(data.length).to.equal(2);
        expect(data[0]).to.equal(selectControl.value[0]);
        expect(data[1]).to.equal(selectControl.value[1]);
      });

      button.click();
    });
  });
});
