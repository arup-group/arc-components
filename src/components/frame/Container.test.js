import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import './Container.js';

import { themeConstants } from './Constants/ThemeConstants.js';

describe('Container', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html` <arc-container></arc-container>`);
  });

  it('renders a main container', () => {
    const main = element.shadowRoot.getElementById('main');
    expect(main).to.exist;
  });
  it('render a nav, side, content and bottom slot', () => {
    const main = element.shadowRoot.getElementById('main');
    expect(main.childElementCount).to.be.greaterThan(0);
    expect(main.hasChildNodes()).to.be.true;

    expect(main.querySelector('slot[name="nav"]')).to.exist;
    expect(main.querySelector('slot[name="side"]')).to.exist;
    expect(main.querySelector('slot[name="content"]')).to.exist;
    expect(main.querySelector('slot[name="bottom"]')).to.exist;
  });
  it('sets a fixed theme and the respective classname', () => {
    element.setAttribute('theme', 'dark');

    expect(element.getAttribute('theme')).to.be.equal('dark');
    expect(element.classList.contains(themeConstants.dark)).to.be.true;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
