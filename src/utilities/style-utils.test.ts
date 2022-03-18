import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';
import { emulateMedia } from '@web/test-runner-commands';
import { getPropertyValue, getRootValue, setRootValue, prefersDark, noFOUC } from './style-utils.js';

describe('getPropertyValue', () => {
  it('returns the correct property value', async () => {
    const element: HTMLElement = await fixture(html`<div style="width:50px;"></div>`);
    expect(getPropertyValue(element, 'width')).to.equal('50px');
  });
  it('returns the correct property value with spaces', async () => {
    const element: HTMLElement = await fixture(html`<div style="width:      50px;"></div>`);
    expect(getPropertyValue(element, 'width')).to.equal('50px');
  });
});

describe('getRootValue / setRootValue', () => {
  const variable = '--arc-custom-property';

  it('sets the correct root value', async () => {
    setRootValue(variable, '2rem');
    expect(getRootValue(variable)).to.equal('2rem');

    setRootValue(variable, '3rem');
    expect(getRootValue(variable)).to.equal('3rem');
  });
});

describe('prefersDark', () => {
  it('validates the prefers-color-scheme: dark state', async () => {
    await emulateMedia({ colorScheme: 'dark' });
    expect(prefersDark()).to.be.true;
    await emulateMedia({ colorScheme: 'light' });
    expect(prefersDark()).to.be.false;
  });
});

describe('noFOUC', () => {
  it('should remove the no-fouc class when the DOM content is being loaded', () => {
    const element = document.documentElement;

    element.className = 'no-fouc';
    expect(element.classList.contains('no-fouc')).to.be.true;

    noFOUC();
    expect(element.classList.contains('no-fouc')).to.be.false;
  });
});
