import { expect } from '@open-wc/testing';

import { ACCESSIBILITY_OPTIONS, AccessibilityKey } from './AccessibilityConstants.js';

describe('AccessibilityOptions', () => {
  it('should contain the basic ARC options', () => {
    expect(ACCESSIBILITY_OPTIONS).to.exist;
    const keys = Object.keys(ACCESSIBILITY_OPTIONS);

    expect(keys.length).to.equal(3);
    keys.forEach((key: AccessibilityKey) => {
      expect(Object.keys(ACCESSIBILITY_OPTIONS[key])).to.contain('icon');
      expect(Object.keys(ACCESSIBILITY_OPTIONS[key])).to.contain('values');
    });
  });
});
