import { css } from 'lit';

export default css`
  :root {
    /* Colors */
    --arc-white-000: 255, 255, 255;
    --arc-grey-000: 250, 250, 250;
    --arc-grey-010: 239, 239, 239;
    --arc-grey-020: 219, 219, 219;
    --arc-grey-030: 190, 190, 190;
    --arc-grey-040: 170, 170, 170;
    --arc-grey-050: 155, 155, 155;
    --arc-grey-060: 118, 118, 118;
    --arc-grey-070: 87, 87, 87;
    --arc-grey-080: 66, 66, 66;
    --arc-grey-090: 53, 53, 53;
    --arc-grey-100: 28, 28, 28;
    --arc-black-100: 0, 0, 0;
    --arc-red-000: 255, 224, 224;
    --arc-red-010: 255, 208, 208;
    --arc-red-020: 255, 182, 182;
    --arc-red-030: 255, 148, 148;
    --arc-red-040: 255, 154, 154;
    --arc-red-050: 239, 79, 79;
    --arc-red-060: 230, 30, 40;
    --arc-red-070: 204, 10, 10;
    --arc-red-080: 166, 6, 6;
    --arc-red-090: 133, 1, 1;
    --arc-red-100: 83, 0, 0;
    --arc-orange-000: 255, 224, 198;
    --arc-orange-010: 255, 210, 128;
    --arc-orange-020: 254, 197, 155;
    --arc-orange-030: 255, 173, 119;
    --arc-orange-040: 249, 144, 82;
    --arc-orange-050: 250, 115, 51;
    --arc-orange-060: 240, 80, 35;
    --arc-orange-070: 225, 76, 34;
    --arc-orange-080: 189, 74, 42;
    --arc-orange-090: 154, 60, 33;
    --arc-orange-100: 117, 43, 22;
    --arc-yellow-000: 254, 255, 153;
    --arc-yellow-010: 254, 247, 64;
    --arc-yellow-020: 255, 237, 29;
    --arc-yellow-030: 255, 224, 17;
    --arc-yellow-040: 255, 211, 19;
    --arc-yellow-050: 255, 195, 23;
    --arc-yellow-060: 255, 176, 25;
    --arc-yellow-070: 250, 155, 30;
    --arc-yellow-080: 213, 142, 16;
    --arc-yellow-090: 174, 112, 7;
    --arc-yellow-100: 133, 104, 0;
    --arc-green-000: 226, 255, 217;
    --arc-green-010: 208, 255, 197;
    --arc-green-020: 186, 255, 185;
    --arc-green-030: 135, 251, 128;
    --arc-green-040: 39, 235, 86;
    --arc-green-050: 47, 195, 89;
    --arc-green-060: 40, 175, 115;
    --arc-green-070: 36, 153, 75;
    --arc-green-080: 17, 130, 45;
    --arc-green-090: 5, 105, 55;
    --arc-green-100: 0, 80, 35;
    --arc-blue-000: 226, 241, 255;
    --arc-blue-010: 173, 229, 247;
    --arc-blue-020: 124, 212, 242;
    --arc-blue-030: 78, 192, 235;
    --arc-blue-040: 40, 170, 225;
    --arc-blue-050: 32, 146, 211;
    --arc-blue-060: 30, 117, 195;
    --arc-blue-070: 41, 98, 178;
    --arc-blue-080: 33, 72, 168;
    --arc-blue-090: 28, 47, 129;
    --arc-blue-100: 25, 40, 102;
    --arc-purple-000: 240, 220, 255;
    --arc-purple-010: 230, 192, 255;
    --arc-purple-020: 222, 167, 255;
    --arc-purple-030: 210, 133, 255;
    --arc-purple-040: 203, 113, 255;
    --arc-purple-050: 185, 65, 255;
    --arc-purple-060: 158, 0, 255;
    --arc-purple-070: 130, 17, 216;
    --arc-purple-080: 102, 31, 178;
    --arc-purple-090: 84, 44, 188;
    --arc-purple-100: 65, 33, 94;
    --arc-pink-000: 255, 215, 239;
    --arc-pink-010: 252, 175, 219;
    --arc-pink-020: 248, 151, 204;
    --arc-pink-030: 255, 121, 192;
    --arc-pink-040: 246, 95, 172;
    --arc-pink-050: 226, 69, 149;
    --arc-pink-060: 210, 45, 125;
    --arc-pink-070: 171, 27, 102;
    --arc-pink-080: 145, 89, 99;
    --arc-pink-090: 119, 28, 81;
    --arc-pink-100: 110, 23, 78;

    /* Family */
    --arc-font-headline: 'Times New Roman';
    --arc-font-body: 'Roboto Light';
    --arc-font-button: 'Roboto', 'sans-serif';

    /* Size */
    --arc-font-size-xx-small: 0.625rem;
    --arc-font-size-x-small: 0.75rem;
    --arc-font-size-small: 0.875rem;
    --arc-font-size-medium: 1rem;
    --arc-font-size-large: 1.25rem;
    --arc-font-size-x-large: 1.5rem;
    --arc-font-size-xx-large: 2.25rem;
    --arc-font-size-xxx-large: 3rem;
    --arc-font-size-xxxx-large: 4.5rem;

    /* Weight */
    --arc-font-weight-light: 300;
    --arc-font-weight-normal: 400;
    --arc-font-weight-semibold: 500;
    --arc-font-weight-bold: 700;

    /* Line Height */
    --arc-line-height-dense: 1.4;
    --arc-line-height-normal: 1.8;
    --arc-line-height-loose: 2.2;

    /* Letter Spacing */
    --arc-letter-spacing-dense: -0.015rem;
    --arc-letter-spacing-normal: normal;
    --arc-letter-spacing-loose: 0.075rem;

    /* Input height */
    --arc-input-height-small: 1.875rem;
    --arc-input-height-medium: 2rem;
    --arc-input-height-large: 3.125rem;

    /* Box shadow */
    --arc-input-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12);

    /* Focus rings */
    --arc-focus-ring-width: 3px;
    --arc-focus-ring-alpha: 40%;

    /* Layout elements */
    --arc-navbar-height: 3.5rem;
    --arc-sidebar-width: 23rem;
    --arc-bottom-height: var(--arc-navbar-height);

    /* Padding / Margins */
    --arc-spacing-small: 0.75rem;
    --arc-spacing-normal: 1rem;
    --arc-spacing-medium: 1.5rem;
    --arc-spacing-large: 1.75rem;

    /* Borders */
    --arc-border-width: 1px;
    --arc-border-style: solid;
    --arc-border-radius-small: 0.125rem;
    --arc-border-radius-medium: 0.25rem;
    --arc-border-radius-large: 0.5rem;
    --arc-border-radius-x-large: 1rem;

    /* Box shadow */
    --arc-box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.14);

    /* Transition */
    --arc-transition-x-slow: 1000ms;
    --arc-transition-slow: 500ms;
    --arc-transition-medium: 250ms;
    --arc-transition-fast: 150ms;
    --arc-transition-x-fast: 50ms;

    /* Branding */
    --arc-brand-height: 1.25rem;
  }

  body {
    margin: 0;
    font-family: var(--arc-font-body);
    font-size: var(--arc-font-size-medium);
    font-weight: var(--arc-font-weight-normal);
    letter-spacing: var(--arc-letter-spacing-normal);
    line-height: var(--arc-line-height-normal);
  }
`;