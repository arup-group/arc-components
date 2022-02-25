import { expect } from '@open-wc/testing';

import { ARC_EVENTS } from './eventConstants.js';

describe('EventConstants', () => {
  it('should have the correct keys', () => {
    expect(ARC_EVENTS).to.exist;
    const keys = Object.keys(ARC_EVENTS);

    expect(keys.length).to.equal(11);
    expect(keys).to.contain('accessibilityChange');
    expect(keys).to.contain('afterHide');
    expect(keys).to.contain('afterShow');
    expect(keys).to.contain('auth');
    expect(keys).to.contain('change');
    expect(keys).to.contain('hide');
    expect(keys).to.contain('initialFocus');
    expect(keys).to.contain('requestClose');
    expect(keys).to.contain('select');
    expect(keys).to.contain('showAccessibility');
    expect(keys).to.contain('show');
  });

  it('should have the correct values', () => {
    const values = Object.values(ARC_EVENTS);

    expect(values).to.contain('arc-accessibility-change');
    expect(values).to.contain('arc-after-hide');
    expect(values).to.contain('arc-after-show');
    expect(values).to.contain('arc-auth');
    expect(values).to.contain('arc-change');
    expect(values).to.contain('arc-hide');
    expect(values).to.contain('arc-initial-focus');
    expect(values).to.contain('arc-request-close');
    expect(values).to.contain('arc-select');
    expect(values).to.contain('arc-show-accessibility');
    expect(values).to.contain('arc-show');
  });
});
