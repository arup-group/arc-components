import { expect } from '@open-wc/testing';

import {
  BUTTON_TYPES,
  BUTTON_COLORS,
  BUTTON_SIZES,
} from './ButtonConstants.js';

describe('ButtonConstants', () => {
  describe('types', () => {
    expect(BUTTON_TYPES).to.exist;
    const keys: Array<keyof typeof BUTTON_TYPES> = Object.keys(BUTTON_TYPES);

    expect(keys.length).to.be.equal(5);
    expect(keys).to.contain('contained');
    expect(keys).to.contain('tile');
    expect(keys).to.contain('outlined');
    expect(keys).to.contain('pill');
    expect(keys).to.contain('tab');
  });
  describe('colors', () => {
    expect(BUTTON_COLORS).to.exist;
    const keys: Array<keyof typeof BUTTON_COLORS> = Object.keys(BUTTON_COLORS);

    expect(keys.length).to.be.equal(7);
    expect(keys).to.contain('default');
    expect(keys).to.contain('primary');
    expect(keys).to.contain('secondary');
    expect(keys).to.contain('error');
    expect(keys).to.contain('warning');
    expect(keys).to.contain('info');
    expect(keys).to.contain('success');
  });
  describe('sizes', () => {
    expect(BUTTON_SIZES).to.exist;
    const keys: Array<keyof typeof BUTTON_SIZES> = Object.keys(BUTTON_SIZES);

    expect(keys.length).to.be.equal(3);
    expect(keys).to.contain('small');
    expect(keys).to.contain('medium');
    expect(keys).to.contain('large');
  });
});
