import { expect } from '@open-wc/testing';

import { CONTAINER_THEMES } from './ContainerConstants.js';

describe('ContainerThemes', () => {
  it('should contain the basic Arc themes', () => {
    expect(CONTAINER_THEMES).to.exist;
    const keys = Object.keys(CONTAINER_THEMES);

    expect(keys.length).to.equal(3);
    expect(keys).to.contain('auto');
    expect(keys).to.contain('dark');
    expect(keys).to.contain('light');
  });
});
