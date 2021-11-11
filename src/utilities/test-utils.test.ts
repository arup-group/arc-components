import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';

import { hasSlot } from './test-utils.js';

describe('slotExists', async () => {
  it('has a named slot', async () => {
    const element: HTMLElement = await fixture(html`
      <div>
        <slot name="one"></slot>
      </div>
    `);
    expect(hasSlot(element, 'one')).to.be.true;
  });
  it('has an unnamed slot', async () => {
    const element: HTMLElement = await fixture(html`
      <div>
        <slot></slot>
      </div>
    `);
    expect(hasSlot(element)).to.be.true;
  });
  it('has no slots', async () => {
    const element: HTMLElement = await fixture(html` <div></div> `);
    expect(hasSlot(element)).to.be.false;
  });
});
