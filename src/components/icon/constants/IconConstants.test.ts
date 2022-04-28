import { expect } from '@open-wc/testing';
import { ICON_TYPES } from './IconConstants.js';

describe('IconConstants', () => {
  it('should have a default set of icons available', () => {
    expect(ICON_TYPES).to.exist;
    const keys = Object.keys(ICON_TYPES);

    expect(keys.length).to.be.greaterThan(0);
    expect(keys).to.contain('menu'); // Used in the navbar
    expect(keys).to.contain('accessibility'); // Used in the navbar
    expect(keys).to.contain('arrow-left'); // Used in the sidebar
    expect(keys).to.contain('arrow-right'); // Used in the sidebar
    expect(keys).to.contain('close'); // Used in the accessibility panel
    expect(keys).to.contain('bulb'); // Used in the accessibility panel
    expect(keys).to.contain('book-open'); // Used in the accessibility panel
    expect(keys).to.contain('fire'); // Used as default icon
  });

  it('should not contain any duplicate icons', () => {
    const keys = Object.keys(ICON_TYPES);
    const duplicates = keys.filter(key => key.slice(-1) === '1');

    /* There is one icon that is called volume-1 (which is allowed) */
    expect(duplicates.length).to.equal(1);
  });
});
