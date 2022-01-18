import { html } from 'lit';
import { expect, fixture} from '@open-wc/testing';

import { lockBodyScrolling, unlockBodyScrolling } from './scroll.js';

describe('scroll', () => {
  let elementOne: HTMLElement;
  let elementTwo: HTMLElement;

  beforeEach(async () => {
    elementOne = await fixture(html`<div>Test element</div>`);
    elementTwo = await fixture(html`<div>Test element two</div>`);
  });

  afterEach(() => {
    unlockBodyScrolling(elementOne);
    unlockBodyScrolling(elementTwo);
  })

  it('should lock the body from scrolling', async () => {
    expect(document.body.classList.contains('arc-scroll-lock')).to.be.false;
    await lockBodyScrolling(elementOne);
    expect(document.body.classList.contains('arc-scroll-lock')).to.be.true;
  });

  it('should unlock the body from scrolling', async() => {
    await lockBodyScrolling(elementOne);
    expect(document.body.classList.contains('arc-scroll-lock')).to.be.true;
    await unlockBodyScrolling(elementOne);
    expect(document.body.classList.contains('arc-scroll-lock')).to.be.false;
  });

  it('should unlock when the set of stored locked elements equals 0', async () => {
    /* Add two elements to the set */
    await lockBodyScrolling(elementOne);
    await lockBodyScrolling(elementTwo);

    /* The body is being locked */
    expect(document.body.classList.contains('arc-scroll-lock')).to.be.true;

    /* Remove only one element from the set */
    await unlockBodyScrolling(elementOne);
    expect(document.body.classList.contains('arc-scroll-lock')).to.be.true;

    /* Remove the last element from the set, which should unlock the body */
    await unlockBodyScrolling(elementTwo);
    expect(document.body.classList.contains('arc-scroll-lock')).to.be.false;
  });
})
