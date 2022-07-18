import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    :host {
      --custom-color: rgb(var(--arc-red-050));
    }
    #main {
      color: var(--custom-color);
    }
    #main.active {
      color: rgb(var(--arc-green-050));
    }
  `,
];
