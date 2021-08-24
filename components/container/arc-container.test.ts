import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';

import { ArcContainer } from './ArcContainer.js';
import './arc-container.js';

import { CONTAINER_THEMES } from './constants/ContainerConstants.js';

describe('ArcContainer', () => {
  let element: ArcContainer;
  beforeEach(async () => {
    element = await fixture(html` <arc-container></arc-container>`);
  });

  it('renders a main container', () => {
    const main = element.shadowRoot!.getElementById('main')!;
    expect(main).to.exist;
  });
  it('render a nav, side, content and bottom slot', () => {
    const main = element.shadowRoot!.getElementById('main')!;
    expect(main.childElementCount).to.be.greaterThan(0);
    expect(main.hasChildNodes()).to.be.true;

    expect(main.querySelector('slot[name="nav"]')).to.exist;
    expect(main.querySelector('slot[name="side"]')).to.exist;
    expect(main.querySelector('slot[name="content"]')).to.exist;
    expect(main.querySelector('slot[name="bottom"]')).to.exist;
  });
  // TODO: Fix checking for the lifecycle methods
  it('handles a fixed theme', () => {
    Object.keys(CONTAINER_THEMES).forEach(key => {
      element.setAttribute('theme', key);
      expect(element.getAttribute('theme')).to.be.equal(key);
    });
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
