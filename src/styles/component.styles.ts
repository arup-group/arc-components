import { css } from 'lit';
import utilityStyles from './utility.styles.js';

export default css`
  :host {
    position: relative;
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: var(--arc-font-headline);
    font-weight: var(--arc-font-weight-normal);
  }
`;

/* All components import this file, so it's a good place to ensure utility styles are applied to the light DOM. */
const style = document.createElement('style');
style.textContent = utilityStyles.toString();
document.head.append(style);
