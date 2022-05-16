import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  #wrapper {
    display: grid;
    gap: var(--arc-spacing-small);
  }

  #wrapper .label {
    display: flex;
    align-items: center;
    gap: var(--arc-spacing-small);
  }

  #wrapper .options {
    display: flex;
    flex-wrap: wrap;
    gap: var(--arc-spacing-small);
  }
`;
