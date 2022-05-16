import { css } from 'lit';
import { mobileBreakpoint } from '../../internal/preferences.js';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    --content-gap: 5rem;
  }

  #main {
    padding: var(--arc-spacing-banner) var(--arc-spacing-medium);
    display: grid;
    align-content: start;
    grid-auto-columns: 1fr;
    gap: var(--content-gap);
  }

  #title,
  #content {
    font-size: var(--arc-font-size-xxxx-large);
    word-break: break-word;
    margin: 0;
  }

  #content {
    padding: 0;
    font-size: var(--arc-font-size-x-large);
  }

  @media (min-width: ${mobileBreakpoint}rem) {
    #main {
      padding: var(--arc-spacing-banner);
      grid-auto-flow: column;
      align-content: normal;
    }
  }
`;
