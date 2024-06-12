import { expect } from '@open-wc/testing';

import { CONTAINER_THEME_PREFERENCES } from './ContainerConstants.js';

describe('ContainerThemes', () => {
  it('should contain the Arc theme preferences', () => {
    expect(CONTAINER_THEME_PREFERENCES).to.exist;
    const keys = Object.keys(CONTAINER_THEME_PREFERENCES);

    expect(keys.length).to.equal(3);
    expect(keys).to.contain('auto');
    expect(keys).to.contain('dark');
    expect(keys).to.contain('light');
  });
});
