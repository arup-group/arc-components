import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    #main {
      display: flex;
      flex-direction: column;
      height: inherit;
      min-height: inherit;
      max-height: inherit;
      position: relative;
    }

    /* Hide the input */
    #input {
      cursor: inherit;
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      margin: 0;
      padding: 0;
      z-index: -1;
    }

    #editor {
      height: 100%;
      min-height: 8rem;
      max-height: inherit;
      overflow: auto;
    }

    #status {
      display: flex;
      align-self: end;
      margin-top: var(--arc-spacing-x-small);
      gap: var(--arc-spacing-normal);
      color: rgb(var(--arc-grey-050));
    }
  `,
];
