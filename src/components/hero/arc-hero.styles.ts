import { css } from 'lit';
import { mobileBreakpoint } from '../../internal/preferences.js';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    --content-gap: 5rem;
  }

  .hero {
    height: auto;
    padding: var(--arc-spacing-banner) var(--arc-spacing-medium);
    display: grid;
    align-content: start;
    grid-auto-columns: 1fr;
    gap: var(--content-gap);
  }

  .hero--fullscreen {
    height: 100%;
    align-items: center;
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
    .hero {
      padding: var(--arc-spacing-banner);
      grid-auto-flow: column;
      align-content: normal;
    }
  }
`;
