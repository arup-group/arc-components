import { css } from 'lit';

export default css`
  .arc-scroll-lock {
    overflow: hidden !important;
  }

  .arc-toast-stack {
    position: fixed;
    top: 0;
    right: 0;
    z-index: var(--arc-z-index-toast);
    width: 28rem;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }

  .arc-toast-stack arc-alert {
    --box-shadow: var(--arc-shadow-large);
    margin: var(--arc-spacing-medium);
  }
`;
