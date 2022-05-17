import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    :host {
      display: flex;
      --icon-color-primary: inherit;
      --icon-color-secondary: currentColor;
    }

    #main {
      display: inline-block;
      color: var(--icon-color-primary);
      line-height: 1;
      flex-shrink: 0;
      max-width: initial;
    }

    #main use {
      fill: var(--icon-color-secondary);
      stroke: var(--icon-color-secondary);
      --icon-stroke-linecap-butt: butt;
      stroke-miterlimit: 10;
      stroke-linecap: square;
      stroke-linejoin: miter;
    }
  `,
];
