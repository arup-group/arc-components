import { expect } from '@open-wc/testing';

import { CONTAINER_THEMES } from './ContainerConstants.js';

describe('ContainerThemes', () => {
  it('should contain the basic Arc themes', () => {
    expect(CONTAINER_THEMES).to.exist;
    const keys: Array<keyof typeof CONTAINER_THEMES> = Object.keys(CONTAINER_THEMES);

    expect(keys.length).to.be.greaterThan(0);
    expect(keys).to.contain('auto');
    expect(keys).to.contain('dark');
    expect(keys).to.contain('light');
  });
  it('should have no difference in key-value naming', () => {
    Object.entries(CONTAINER_THEMES).forEach(entry => {
      const [key, value] = entry;
      expect(key).to.equal(value);
    });
  });
});
