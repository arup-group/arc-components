import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';

import { hasSlot } from './dom-utils.js';

describe('hasSlot', () => {
  it('has no filled slots', async () => {
    const element: HTMLElement = await fixture(html`
      <div>
        <div slot="randomSlot"></div>
      </div>
    `);
    expect(hasSlot(element)).to.be.false;
    expect(hasSlot(element, 'something')).to.be.false;
  });

  it('has a named slot', async () => {
    const element: HTMLElement = await fixture(html`
      <div>
        <div slot="one">Test</div>
      </div>
    `);
    expect(hasSlot(element, 'one')).to.be.true;
  });

  it('has slotted text', async () => {
    const element: HTMLElement = await fixture(html`<div>Test</div>`);
    expect(hasSlot(element)).to.be.true;
  });

  it('has a slotted element', async () => {
    const element: HTMLElement = await fixture(html`
      <div>
        <div>Test</div>
      </div>
    `);
    expect(hasSlot(element)).to.be.true;
  });
});

/* TODO: getInnerHTML */
/* TODO: getTextContent */
