import { expect } from "@open-wc/testing";

import { DIVIDER_TYPES } from './DividerConstants.js';

describe('DividerConstants', () => {
  describe('types', () => {
    expect(DIVIDER_TYPES).to.exist;
    const keys: Array<keyof typeof DIVIDER_TYPES> = Object.keys(DIVIDER_TYPES);

    expect(keys.length).to.be.equal(3);
    expect(keys).to.contain('dotted');
    expect(keys).to.contain('dashed');
    expect(keys).to.contain('solid');
  })
})
