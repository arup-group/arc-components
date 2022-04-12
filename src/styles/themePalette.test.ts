import { expect } from '@open-wc/testing';
import { themePalette, MUIPalette, MUIBackground } from './themePalette.js';

describe('ThemePalette', () => {
  it('should contain the basic ARC themes', () => {
    expect(themePalette).to.exist;
    const keys = Object.keys(themePalette);
    const values = Object.values(themePalette);

    /* Contains all the palette states */
    expect(keys.length).to.equal(7);

    /* Validate the MUI palette and background values */
    values.forEach((value: MUIPalette | MUIBackground) => {
      if (value !== themePalette.background) {
        expect((value as MUIPalette).main).to.exist;
      } else {
        expect((value as MUIBackground).default).to.exist;
        expect((value as MUIBackground).paper).to.exist;
      }
    });
  });
});
