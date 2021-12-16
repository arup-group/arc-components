import { expect } from '@open-wc/testing';

import { ICON_SIZES, ICON_TYPES } from './IconConstants.js';

describe('ButtonConstants', () => {
  describe('sizes', () => {
    expect(ICON_SIZES).to.exist;
    const keys = Object.keys(ICON_SIZES);

    expect(keys.length).to.be.equal(9);
    expect(keys).to.contain('xx-small');
    expect(keys).to.contain('x-small');
    expect(keys).to.contain('small');
    expect(keys).to.contain('medium');
    expect(keys).to.contain('large');
    expect(keys).to.contain('x-large');
    expect(keys).to.contain('xx-large');
    expect(keys).to.contain('xxx-large');
    expect(keys).to.contain('xxxx-large');

  });

  describe('types', () => {
    expect(ICON_TYPES).to.exist;
    const keys = Object.keys(ICON_TYPES);

    expect(keys.length).to.be.greaterThan(0);
    expect(keys).to.contain('arrow-left');
    expect(keys).to.contain('arrow-right');
    expect(keys).to.contain('fire');
    expect(keys).to.contain('menu');
    expect(keys).to.contain('x');
  });
});
