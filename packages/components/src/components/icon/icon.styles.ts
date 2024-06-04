import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    :host {
      display: inline-flex;
      --icon-color: currentColor;
    }

    #main {
      display: block;
      color: var(--icon-color);
      line-height: 1;
      flex-shrink: 0;
      max-width: initial;
      fill: var(--icon-color);
      stroke: var(--icon-color);
      --icon-stroke-linecap-butt: butt;
      stroke-miterlimit: 10;
      stroke-linecap: square;
      stroke-linejoin: miter;
    }
  `,
];
