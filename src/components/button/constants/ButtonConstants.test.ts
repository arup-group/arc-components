import { expect } from '@open-wc/testing';
import { BUTTON_TYPES } from './ButtonConstants.js';

describe('ButtonConstants', () => {
  it('should contain the correct button types', () => {
    expect(BUTTON_TYPES).to.exist;
    const keys = Object.keys(BUTTON_TYPES);

    expect(keys.length).to.equal(5);
    expect(keys).to.contain('contained');
    expect(keys).to.contain('tile');
    expect(keys).to.contain('outlined');
    expect(keys).to.contain('pill');
    expect(keys).to.contain('tab');
  });
});
