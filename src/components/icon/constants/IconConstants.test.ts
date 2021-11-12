import { expect } from '@open-wc/testing';

import { DEFAULT_PATH, ICON_SIZES, ICON_TYPES } from './IconConstants.js';

describe('ButtonConstants', () => {
  describe('sizes', () => {
    expect(ICON_SIZES).to.exist;
    const keys: Array<keyof typeof ICON_SIZES> = Object.keys(ICON_SIZES);

    expect(keys.length).to.be.greaterThan(0);
    expect(keys).to.contain('small');
    expect(keys).to.contain('medium');
    expect(keys).to.contain('large');
  });

  describe('types', () => {
    expect(ICON_TYPES).to.exist;
    const keys: Array<keyof typeof ICON_TYPES> = Object.keys(ICON_TYPES);

    expect(keys.length).to.be.greaterThan(0);
  });

  describe('path', () => {
    expect(DEFAULT_PATH).to.exist;
    expect(DEFAULT_PATH.includes('/assets/icons.svg')).to.be.true;
  });
});
