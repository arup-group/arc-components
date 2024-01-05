import { expect } from '@open-wc/testing';

import {
  ACCESSIBILITY_OPTIONS,
  AccessibilityOption,
} from './AccessibilityConstants.js';

describe('AccessibilityOptions', () => {
  it('should contain the basic ARC options', () => {
    expect(ACCESSIBILITY_OPTIONS).to.exist;
    const keys = Object.keys(ACCESSIBILITY_OPTIONS);
    const values = Object.values(ACCESSIBILITY_OPTIONS);

    /* Containing colourAdjustments and contentAdjustments */
    expect(keys.length).to.equal(2);

    /* Each AccessibilityOption requires a name, icon and a set of options */
    values.forEach((value: AccessibilityOption) => {
      expect(value.name).to.exist;
      expect(value.options).to.exist;
    });
  });
});
