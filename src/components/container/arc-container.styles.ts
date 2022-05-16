import { css } from 'lit';
import { mobileBreakpoint } from '../../internal/preferences.js';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  #main {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: rgb(var(--arc-background-color));
    color: rgb(var(--arc-font-color));
  }

  #container {
    flex: 1 1 100%;
    display: flex;
    overflow: hidden;
    gap: 0;
    padding: 0;
  }

  ::slotted(arc-sidebar) {
    display: none;
  }

  #content {
    flex: 1 1 100%;
    overflow: hidden;
    background: rgb(var(--arc-container-color));
  }

  arc-bottombar,
  ::slotted(arc-bottombar) {
    display: block;
  }

  /* Medium devices and up */
  @media (min-width: ${mobileBreakpoint}rem) {
    #container:not(.fullscreen) {
      gap: var(--arc-spacing-normal);
      padding: var(--arc-spacing-normal) var(--arc-spacing-medium);
    }

    ::slotted(arc-sidebar) {
      display: block;
    }

    arc-bottombar,
    ::slotted(arc-bottombar) {
      display: none;
    }
  }
`;
