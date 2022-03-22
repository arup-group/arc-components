import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { expect, fixture } from '@open-wc/testing';
import { HasSlotController, getInnerHTML, getTextContent } from './slot.js';

@customElement('test-component')
class testComponent extends LitElement {
  render() {
    return html`
      <slot id="empty"></slot>
      <slot id="filled" name="one"></slot>
    `;
  }
}

describe('HasSlotController', () => {
  it('has no filled slots', async () => {
    const element: testComponent = await fixture(html`<test-component></test-component>`);
    const hasSlotController = new HasSlotController(element, '[default]', 'one');
    expect(hasSlotController.test('[default]')).to.be.false;
    expect(hasSlotController.test('one')).to.be.false;
  });

  it('has a named slot', async () => {
    const element: testComponent = await fixture(html`
      <test-component>
        <div slot="one">Test</div>
      </test-component>
    `);
    const hasSlotController = new HasSlotController(element, '[default]', 'one');
    expect(hasSlotController.test('[default]')).to.be.false;
    expect(hasSlotController.test('one')).to.be.true;
  });

  it('has a slotted element', async () => {
    const element: testComponent = await fixture(html`
      <test-component>
        <div>Test</div>
      </test-component>
    `);
    const hasSlotController = new HasSlotController(element, '[default]', 'one');
    expect(hasSlotController.test('[default]')).to.be.true;
    expect(hasSlotController.test('one')).to.be.false;
  });

  it('has slotted text', async () => {
    const element: testComponent = await fixture(html`<test-component>Test</test-component>`);
    const hasSlotController = new HasSlotController(element, '[default]', 'one');
    expect(hasSlotController.test('[default]')).to.be.true;
    expect(hasSlotController.test('one')).to.be.false;
  });
});

describe('getSlotContent', async () => {
  let component: testComponent;
  let emptySlot: HTMLSlotElement;
  let filledSlot: HTMLSlotElement;

  beforeEach(async () => {
    component = await fixture(html` <test-component></test-component>`);
    emptySlot = component.shadowRoot!.getElementById('empty')! as HTMLSlotElement;
    filledSlot = component.shadowRoot!.getElementById('filled')! as HTMLSlotElement;
  });

  it('returns an empty string', async () => {
    expect(getInnerHTML(emptySlot)).to.equal('');
    expect(getInnerHTML(filledSlot)).to.equal('');
  });

  it('returns the innerHTML of a text node', async () => {
    component.innerHTML = `Hello World`;
    expect(getInnerHTML(emptySlot)).to.equal(`Hello World`);
  });

  it('returns the innerHTML of an element node', async () => {
    const newEl = Object.assign(document.createElement('div'), {
      slot: 'one',
      innerHTML: 'Hello World',
    });
    component.appendChild(newEl);
    expect(getInnerHTML(filledSlot)).to.equal(`<div slot="one">Hello World</div>`);
  });

  it('returns an empty string', async () => {
    expect(getTextContent(emptySlot)).to.equal('');
    expect(getTextContent(filledSlot)).to.equal('');
  });

  it('returns the textContent of a text node', async () => {
    component.innerHTML = `Hello World`;
    expect(getTextContent(emptySlot)).to.equal(`Hello World`);
  });

  it('returns an empty string when an element node is given', async () => {
    const newEl = Object.assign(document.createElement('div'), {
      slot: 'one',
      innerHTML: 'Hello World',
    });
    component.appendChild(newEl);
    expect(getTextContent(filledSlot)).to.equal('');
  });
});
