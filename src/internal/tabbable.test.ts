/* eslint-disable lit-a11y/anchor-is-valid */

import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { expect, fixture } from '@open-wc/testing';

import { getTabbableBoundary } from './tabbable.js';

@customElement('tab-test')
class TabTest extends LitElement {
  render() {
    return html`
      <button id='button'>Tabbable</button>
      <span>Not tabbable</span>
      <a id='anchor' href='/'>Tabbable</a>
      <a>Not tabbable</a>
    `
  }
}

@customElement('tab-testtwo')
class TabTestTwo extends LitElement {
  render() {
    return html`<div>Not tabbable</div>`
  }
}

describe('getTabbableBoundary', async () => {
  const element: TabTest = await fixture(html`<tab-test>Not Tabbable</tab-test>`);
  const elementTwo: TabTestTwo = await fixture(html`<tab-testtwo>Not Tabbable</tab-testtwo>`);
  const button = element.shadowRoot?.getElementById('button');
  const anchor = element.shadowRoot?.getElementById('anchor');

  it('should return the first and last tabbable items', () => {
    const boundary = getTabbableBoundary(element)
    const { start, end } = boundary;

    expect(start).to.equal(button);
    expect(end).to.equal(anchor);
  })

  it('should return null for the first and last tabbable items', () => {
    const boundary = getTabbableBoundary(elementTwo);
    const { start, end } = boundary;

    expect(start).to.be.null;
    expect(end).to.be.null;
  })
})
