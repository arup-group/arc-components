import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';
import {
  matchArcVariable,
  getRootVariables,
  getRootColors,
  getNamedRootVariables,
  getRootValue,
  setRootValue,
  getPropertyValue,
  noFOUC,
} from './style-utils.js';

describe('matchArcVariable', () => {
  it('should match an ARC specific variable with one preceding string', () => {
    expect(matchArcVariable('--arc-something')).to.exist;
    expect(matchArcVariable('--arc-something')!.length).to.equal(1);
  });

  it('should match an ARC specific variable with many preceding strings', () => {
    expect(matchArcVariable('--arc-something-else')).to.exist;
    expect(matchArcVariable('--arc-something-else')!.length).to.equal(1);
  });

  it('should not match a fault ARC variable', () => {
    expect(matchArcVariable('--arc')).to.be.null;
  });

  it('should not match a `non-ARC` variable', () => {
    expect(matchArcVariable('--external-css-variable')).to.be.null;
  });
});

describe('rootVariables', () => {
  /* Cleanup any added sheets */
  afterEach(() => {
    const sheet = document.querySelector('style');
    if (!sheet) return;
    sheet.remove();
  });

  it('returns an empty array when there is no styling added to the document', () => {
    expect(getRootVariables()).to.exist;
    expect(getRootVariables().length).to.equal(0);
  });

  it('returns an empty array when style rules are added that are not added to the :root', () => {
    const sheet = document.createElement('style');
    sheet.innerHTML = `
      .className {
        color: red;
      }
    `;
    document.body.appendChild(sheet);

    expect(getRootVariables()).to.exist;
    expect(getRootVariables().length).to.equal(0);
  });

  it('should retrieve an array of all ARC :root variables within the index.css file', () => {
    const sheet = document.createElement('style');
    sheet.innerHTML = `
      :root {
        --arc-white-000: 255, 255, 255;
        --arc-font-size-xx-small: 0.625rem;
        --arc-panel-width: 8rem;
        --external-css-variable: 1px;
      }
    `;
    document.body.appendChild(sheet);

    expect(getRootVariables()).to.exist;
    expect(getRootVariables().length).to.equal(3);
    expect(getRootVariables()[0]).to.equal('--arc-white-000');
  });

  it('should return an array of all available colors in rgb format', () => {
    const sheet = document.createElement('style');
    sheet.innerHTML = `
      :root {
        --arc-white-000: 255, 255, 255;
        --arc-blue-000: 219, 242, 255;
        --arc-green-000: 228, 253, 227;
        --arc-grey-000: 250, 250, 250;
        --arc-orange-000: 255, 237, 219;
        --arc-pink-000: 255, 240, 249;
        --arc-purple-000: 249, 233, 252;
        --arc-red-000: 255, 238, 239;
        --arc-teal-000: 214, 255, 245;
        --arc-yellow-000: 255, 252, 219;
      }
    `;
    document.body.appendChild(sheet);

    expect(getRootColors()).to.exist;
    expect(getRootColors().length).to.equal(10);
    expect(getRootColors()[0]).to.equal('rgb(var(--arc-white-000))');
  });

  it('should return an empty array when no colors can be found in the index.css', () => {
    const sheet = document.createElement('style');
    sheet.innerHTML = `
      :root {
        --arc-faultyColor: 0 0 0;
      }
    `;
    document.body.appendChild(sheet);

    expect(getRootColors()).to.exist;
    expect(getRootColors().length).to.equal(0);
  });

  describe('getNamedRootVariables', () => {
    beforeEach(() => {
      const sheet = document.createElement('style');
      sheet.innerHTML = `
      :root {
        --arc-font-size-xx-small: 0.625rem;
        --arc-font-size-x-small: 0.75rem;
        --arc-font-size-small: 0.875rem;
        --arc-font-size-medium: 1rem;
        --arc-font-size-large: 1.25rem;
        --arc-font-size-x-large: 1.5rem;
        --arc-font-size-xx-large: 2.25rem;
        --arc-font-size-xxx-large: 3rem;
        --arc-font-size-xxxx-large: 4.5rem;

        --arc-font-weight-light: 300;
        --arc-font-weight-normal: 400;
        --arc-font-weight-semibold: 500;
        --arc-font-weight-bold: 700;

        --arc-line-height-dense: 1.4;
        --arc-line-height-normal: 1.8;
        --arc-line-height-loose: 2.2;

        --arc-letter-spacing-dense: -0.015rem;
        --arc-letter-spacing-normal: normal;
        --arc-letter-spacing-loose: 0.075rem;

        --arc-spacing-x-small: 0.5rem;
        --arc-spacing-small: 0.75rem;
        --arc-spacing-normal: 1rem;
        --arc-spacing-medium: 1.5rem;
        --arc-spacing-large: 1.75rem;
        --arc-spacing-banner: 6rem;
      }
    `;
      document.body.appendChild(sheet);
    });

    it('should return an array of all available font sizes', () => {
      expect(getNamedRootVariables('font-size')).to.exist;
      expect(getNamedRootVariables('font-size').length).to.equal(9);
      expect(getNamedRootVariables('font-size')[0]).to.equal(
        '--arc-font-size-xx-small',
      );
    });

    it('should return an array of all available font weights', () => {
      expect(getNamedRootVariables('font-weight')).to.exist;
      expect(getNamedRootVariables('font-weight').length).to.equal(4);
      expect(getNamedRootVariables('font-weight')[0]).to.equal(
        '--arc-font-weight-light',
      );
    });

    it('should return an array of all available line heights', () => {
      expect(getNamedRootVariables('line-height')).to.exist;
      expect(getNamedRootVariables('line-height').length).to.equal(3);
      expect(getNamedRootVariables('line-height')[0]).to.equal(
        '--arc-line-height-dense',
      );
    });

    it('should return an array of all available letter spacings', () => {
      expect(getNamedRootVariables('letter-spacing')).to.exist;
      expect(getNamedRootVariables('letter-spacing').length).to.equal(3);
      expect(getNamedRootVariables('letter-spacing')[0]).to.equal(
        '--arc-letter-spacing-dense',
      );
    });

    it('should return an array of all available spacings', () => {
      expect(getNamedRootVariables('spacing')).to.exist;
      expect(getNamedRootVariables('spacing').length).to.equal(6);
      expect(getNamedRootVariables('spacing')[0]).to.equal(
        '--arc-spacing-x-small',
      );
    });
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

describe('getPropertyValue', () => {
  it('returns the correct property value', async () => {
    const element: HTMLElement = await fixture(
      html`<div style="width:50px;"></div>`,
    );
    expect(getPropertyValue(element, 'width')).to.equal('50px');
  });
  it('returns the correct property value with spaces', async () => {
    const element: HTMLElement = await fixture(
      html`<div style="width:      50px;"></div>`,
    );
    expect(getPropertyValue(element, 'width')).to.equal('50px');
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
