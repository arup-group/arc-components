import { html, fixture, expect, elementUpdated, waitUntil } from '@open-wc/testing';
import './arc-textfield.js';
import type ArcTextField from './ArcTextField.js';
import sinon, { SinonSpy } from 'sinon';

describe('ArcTextField', () => {
  it('initializes with default properties', async () => {
    const el: ArcTextField = await fixture(
      html`<arc-textfield></arc-textfield>`,
    );
    expect(el.value).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.loading).to.be.false;
    expect(el.size).to.equal('medium');
    expect(el.color).to.equal('default');
    expect(el.focusColor).to.equal('primary');
    expect(el.type).to.equal('standard');
    expect(el.required).to.be.false;
    expect(el.isValid).to.be.true;
  });

  it('updates the value on input', async () => {
    const el: ArcTextField = await fixture(
      html`<arc-textfield></arc-textfield>`,
    );
    const input = el.shadowRoot!.querySelector('input')!;
    input.value = 'test';
    input.dispatchEvent(new Event('input'));

    expect(el.value).to.equal('test');
  });

  // Test color and focusColor property functionality
  it('applies the correct classes based on color and focusColor', async () => {
    const el: ArcTextField = await fixture(
      html`<arc-textfield
        color="primary"
        focusColor="success"
      ></arc-textfield>`,
    );
    // Trigger focus on the element or its internal input if it uses shadow DOM
    const input = el.shadowRoot ? el.shadowRoot.querySelector('input') : el;
    input!.focus();

    await elementUpdated(el);
    const container = el.shadowRoot
      ? el.shadowRoot.querySelector('.input-container')
      : el;
    expect(container!.classList.contains('input-container--primary')).to.be
      .true;

    expect(container!.classList.contains('input-container--focus-success')).to
      .be.true;
  });

  // Test Disabled State
  it('disables the input when the disabled property is true', async () => {
    const el = await fixture(
      html`<arc-textfield .disabled=${true}></arc-textfield>`,
    );
    const input = el.shadowRoot!.querySelector('input');
    expect(input!.disabled).to.be.true;
  });

  // Test Loading State
  it('shows loading indicator when loading property is true', async () => {
    const el = await fixture(
      html`<arc-textfield .loading=${true}></arc-textfield>`,
    );
    const spinner = el.shadowRoot!.querySelector('arc-spinner');
    expect(spinner).to.exist;
  });
  // Test Adornments
  describe('Adornments', () => {
    it('renders start adornment when provided', async () => {
      const el = await fixture(html`
        <arc-textfield
          .adornments=${{ start: html`<span>Start</span>` }}
        ></arc-textfield>
      `);
      const startAdornment = el.shadowRoot!.querySelector('.adornment.start');
      expect(startAdornment).to.exist;
      expect(startAdornment!.textContent).to.include('Start');
    });

    it('renders end adornment when provided', async () => {
      const el = await fixture(html`
        <arc-textfield
          .adornments=${{ end: html`<span>End</span>` }}
        ></arc-textfield>
      `);
      const endAdornment = el.shadowRoot!.querySelector('.adornment.end');
      expect(endAdornment).to.exist;
      expect(endAdornment!.textContent).to.include('End');
    });
  });

  // Test Validation Logic
  describe('Validation', () => {
    it('is invalid when required and empty', async () => {
      const el: ArcTextField = await fixture(
        html`<arc-textfield .required=${true}></arc-textfield>`,
      );
      // Directly manipulate the input to simulate user entering and removing text
      const input = el.shadowRoot!.querySelector('input')!;
      input.value = ''; // Simulate user clearing the input
      input.dispatchEvent(new Event('input')); // Simulate the input event

      await elementUpdated(el);

      const isInvalid = el.isValid !== true;
      expect(isInvalid).to.be.true;

      const helperText = el.shadowRoot!.querySelector('.helper-text--error');
      expect(helperText).to.exist; // Ensure error helper text is rendered
    });

    it('is valid when required and not empty', async () => {
      const el: ArcTextField = await fixture(
        html`<arc-textfield .required=${true}></arc-textfield>`,
      );
      // Simulate user input
      const input = el.shadowRoot!.querySelector('input')!;
      input.value = 'test value'; // Simulate user entering text
      input.dispatchEvent(new Event('input')); // Simulate the input event

      await elementUpdated(el);

      const isValid =
        el.hasAttribute('aria-invalid') &&
        el.getAttribute('aria-invalid') === 'false' &&
        el.isValid === true;
      expect(isValid).to.be.false;

      const helperText = el.shadowRoot!.querySelector('.helper-text--error');
      expect(helperText).to.not.exist; // Ensure no error helper text is rendered
    });
  });

  // Test Form Submission
  describe('Form submission', () => {
    let form: HTMLFormElement;
    let arcTextField: ArcTextField;
    let submitBtn: HTMLButtonElement;
    const submitSpy: SinonSpy = sinon.spy();

    beforeEach(async () => {
      form = await fixture(html`
        <form>
          <arc-textfield name="userInput" value="initialValue"></arc-textfield>
          <button type="submit">Submit</button>
        </form>
      `);
      arcTextField = form.querySelector('arc-textfield')!;
      submitBtn = form.querySelector('button[type="submit"]')!;
    });

    afterEach(() => {
      submitSpy.resetHistory();
    });

    it('submits the value of the input in a native form element', async () => {
      const formSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        const formData = new FormData(form);
        const value = formData.get('userInput');
        expect(value).to.equal('initialValue');
        submitSpy();
      };

      form.addEventListener('submit', formSubmit);
      submitBtn.click();

      await waitUntil(
        () => submitSpy.calledOnce,
        'Submit event should be called once',
      );
      form.removeEventListener('submit', formSubmit);
    });

    it('updates and submits the new value correctly', async () => {
      arcTextField.value = 'newValue';
      await elementUpdated(arcTextField);

      const formSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        const formData = new FormData(form);
        const value = formData.get('userInput');
        expect(value).to.equal('newValue');
        submitSpy();
      };

      form.addEventListener('submit', formSubmit);
      submitBtn.click();

      await waitUntil(
        () => submitSpy.calledOnce,
        'Submit event should be called once with updated value',
      );
      form.removeEventListener('submit', formSubmit);
    });
  });
});
