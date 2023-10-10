import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    #wrapper {
      display: grid;
      gap: var(--arc-spacing-small);
    }

    .label {
      display: flex;
      align-items: center;
      gap: var(--arc-spacing-small);
    }

    #wrapper .options {
      display: flex;
      flex-wrap: wrap;
      gap: var(--arc-spacing-small);
    }
  `,
];
