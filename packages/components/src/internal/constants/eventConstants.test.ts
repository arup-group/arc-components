import { expect } from '@open-wc/testing';

import { ARC_EVENTS } from './eventConstants.js';

describe('EventConstants', () => {
  it('should have the correct keys', () => {
    expect(ARC_EVENTS).to.exist;
    const keys = Object.keys(ARC_EVENTS);

    expect(keys.length).to.be.greaterThan(0);
    expect(keys).to.contain('accessibilityChange');
    expect(keys).to.contain('afterHide');
    expect(keys).to.contain('afterShow');
    expect(keys).to.contain('auth');
    expect(keys).to.contain('cellClick');
    expect(keys).to.contain('change');
    expect(keys).to.contain('clear');
    expect(keys).to.contain('error');
    expect(keys).to.contain('hide');
    expect(keys).to.contain('initialFocus');
    expect(keys).to.contain('loaded');
    expect(keys).to.contain('requestClose');
    expect(keys).to.contain('rowClick');
    expect(keys).to.contain('select');
    expect(keys).to.contain('showAccessibility');
    expect(keys).to.contain('show');
    expect(keys).to.contain('tableReady');
  });
});
