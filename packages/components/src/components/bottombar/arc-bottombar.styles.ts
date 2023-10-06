import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    :host {
      height: 4.5rem;
      background-color: rgb(var(--arc-background-color));
    }

    #main {
      height: inherit;
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
    }
  `,
];
