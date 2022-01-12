import { html } from 'lit';
import { expect, fixture} from '@open-wc/testing';

import { lockBodyScrolling, unlockBodyScrolling } from './scroll.js';

describe('scroll', async () => {
  const htmlElement: HTMLElement = await fixture(html` <div>Test element</div>`);
  const htmlElementTwo: HTMLElement = await fixture(html` <div>Test element two</div>`);

  afterEach(() => {
    document.body.classList.remove('arc-scroll-lock');
  })

  it('should lock the body from scrolling', () => {
    expect(document.body.classList.contains('arc-scroll-lock')).to.be.false;
    lockBodyScrolling(htmlElement);
    expect(document.body.classList.contains('arc-scroll-lock')).to.be.true;
  });

  it('should unlock the body from scrolling', () => {
    lockBodyScrolling(htmlElement);
    expect(document.body.classList.contains('arc-scroll-lock')).to.be.true;
    unlockBodyScrolling(htmlElement);
    expect(document.body.classList.contains('arc-scroll-lock')).to.be.false;
  });

  it('should unlock when the set of stored locked elements equals 0', () => {
    /* Add two elements to the set */
    lockBodyScrolling(htmlElement);
    lockBodyScrolling(htmlElementTwo);

    /* The body is being locked */
    expect(document.body.classList.contains('arc-scroll-lock')).to.be.true;

    /* Remove only one element from the set */
    unlockBodyScrolling(htmlElement);
    expect(document.body.classList.contains('arc-scroll-lock')).to.be.true;

    /* Remove the last element from the set, which should unlock the body */
    unlockBodyScrolling(htmlElementTwo);
    expect(document.body.classList.contains('arc-scroll-lock')).to.be.false;
  });
})
