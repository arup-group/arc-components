import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: flex;
    --icon-color-primary: inherit;
    --icon-color-secondary: currentColor;
  }

  #icon {
    display: inline-block;
    color: var(--icon-color-primary);
    line-height: 1;
    flex-shrink: 0;
    max-width: initial;
  }

  /* Caps/Corners */
  #icon use {
    fill: var(--icon-color-secondary);
    stroke: var(--icon-color-secondary);
    --icon-stroke-linecap-butt: butt;
    stroke-miterlimit: 10;
    stroke-linecap: square;
    stroke-linejoin: miter;
  }

  .stroke-round use {
    --icon-stroke-linecap-butt: round;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;
