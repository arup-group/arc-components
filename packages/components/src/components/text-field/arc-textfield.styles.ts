import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    input {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    input:disabled {
      background-color: #f0f0f0;
      color: #a8a8a8;
    }
    .loading-container {
      position: relative;
    }
    arc-spinner {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  `,
];
