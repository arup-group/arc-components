import { css } from 'lit';

export default css`
  /* This ensures that the body and the content within the arc-container are locked for scrolling while an overlay is active */
  .arc-scroll-lock, .arc-scroll-lock arc-container > *:not([slot='nav']):not([slot='side']):not([slot='bottom']) {
    overflow: hidden !important;
  }
`;
