import { css } from 'lit';
import { mobileBreakpoint } from '../../internal/preferences.js';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    :host {
      display: inline-flex;
    }

    #checkboxGroup {
      display: grid;
      position: relative;
      right: var(--arc-spacing-small);
      border: none;
      padding: 0;
      margin: 0;
      min-width: 0;
    }

    /* Medium devices and up */
    @media (min-width: ${mobileBreakpoint}rem) {
      :host([row]) #checkboxGroup {
        grid-auto-flow: column;
      }
    }
  `,
];
