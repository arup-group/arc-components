import {FONT_SIZES, FontSize} from "./constants/fontConstants.js";

export default class StyleUpdater {
  fontString = '--arc-font-size-';

  coreValues: { [key in FontSize]: string } = {
    'xx-small': '',
    'x-small': '',
    'small': '',
    'medium': '',
    'large': '',
    'x-large': '',
    'xx-large': '',
    'xxx-large': '',
    'xxxx-large': '',
  };

  constructor() {
    /* Retrieve the core font-sizes from the :root */
    Object.keys(FONT_SIZES).forEach((key: FontSize) => {
      this.coreValues[key] = this.getRootValue(`${this.fontString}${key}`)
    });
  }

  /* Retrieves the computed value of an ARC :root property */
  getRootValue(property: string) {
    const root = document.querySelector(':root')!;
    const computedStyles = getComputedStyle(root);
    return computedStyles.getPropertyValue(property).trim();
  }

  /* Update a :root property of ARC */
  updateRootValue(variable: string, newVal: string) {
    /* Ignore overwriting a css variable when the value dit not change */
    if (this.getRootValue(variable) === newVal) { return}

    const root = document.querySelector(':root')! as HTMLElement;
    root.style.setProperty(variable, newVal);
  }

  changeFontSize(fontSize: FontSize) {
    /* Restore previous values */
    Object.keys(this.coreValues).forEach((key: FontSize) => {
      this.updateRootValue(`${this.fontString}${key}`, this.coreValues[key]);
    })

    const availableSizes = Object.keys(FONT_SIZES);
    const availableLength = availableSizes.length;
    let incr: number;

    /* Set an increment value */
    switch(fontSize) {
      case FONT_SIZES.large:
        incr = 1;
        break;
      case FONT_SIZES["x-large"]:
        incr = 2;
        break;
      default:
        incr = 0;
    }

    /* Loop through each available FONT_SIZE and overwrite the value */
    availableSizes.forEach((size, index) => {
      /* Define a new index based on the selected font-size */
      let newIndex = index + incr;

      /* If the new index is larger than the available options, set the last available option */
      if (newIndex >= availableLength) {
        newIndex = Object.values(FONT_SIZES).length - 1;
      }

      /* Grab the value from the new index */
      const newVal = this.getRootValue(`${this.fontString}${availableSizes[newIndex]}`);

      /* Overwrite the root value with the new value */
      this.updateRootValue(`${this.fontString}${size}`, newVal);
    })
  }
}
