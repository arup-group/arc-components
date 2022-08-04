import { expect } from '@open-wc/testing';

import { CONTAINER_THEMES, IGNORE_KEYPRESS } from './ContainerConstants.js';

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

describe('IgnoreKeypress', () => {
  it('should contain form related elements to exclude from document keypress events', () => {
    expect(IGNORE_KEYPRESS).to.exist;
    const keys = Object.keys(IGNORE_KEYPRESS);

    expect(keys.length).to.be.greaterThan(0);
    expect(keys).to.contain('INPUT');
    expect(keys).to.contain('TEXTAREA');
    expect(keys).to.contain('ARC-MENU-ITEM');
    expect(keys).to.contain('ARC-MARKDOWN');
  });
});
