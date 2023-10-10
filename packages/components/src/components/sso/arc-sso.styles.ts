import { css } from 'lit';
import { mobileBreakpoint } from '../../internal/preferences.js';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    :host,
    #main {
      display: inline-flex;
    }

    #desktopTrigger {
      display: none;
    }

    arc-avatar {
      --size: 1.5rem;
      cursor: pointer;
    }

    /* Medium devices and up. */
    @media (min-width: ${mobileBreakpoint}rem) {
      #mobileTrigger {
        display: none;
      }

      #desktopTrigger {
        display: initial;
        --btn-color: rgb(var(--arc-font-color));
      }
    }
  `,
];
