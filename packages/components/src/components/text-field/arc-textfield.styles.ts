import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    .text-field-container {
      display: inline-flex;
      flex-direction: column;
      position: relative;
    }

    .input-container {
      display: flex;
      align-items: center;
      position: relative;
      padding: 10px;
      border: none;
      border-color: rgb(var(--arc-input-color));
      border-radius: 4px 4px 0 0;
      height: var(--textfield-size);
      width: calc(var(--textfield-size) * 5);
      transition:
        background-color 0.3s,
        border-color 0.3s,
        box-shadow 0.3s;
    }

    .adornment {
      display: flex;
      align-items: center;
      flex: 1;
      max-width: 16.666%;
      width: auto;
    }

    .adornment.start {
      margin-right: 8px;
    }

    .adornment.end {
      margin-left: 8px;
    }

    .text-field {
      flex-grow: 2;
      font-size: 16px;
      border: none;
      background-color: transparent;
      outline: none;
      width: 100%;
    }

    .helper-text {
      padding-left: 5px;
      font-size: 12px;
      margin-top: 2px;
      height: 16px;
      margin-bottom: 2px;
      color: rgb(var(--arc-grey-060));
    }

    .helper-text--error {
      color: rgb(var(--arc-color-error));
    }

    /* Text Box Types */
    .input-container--standard {
      border-bottom: 2px solid;
    }

    .input-container--filled {
      background-color: #f5f5f5; /* Light grey background */
      border-bottom: 2px solid;
    }

    .input-container--outlined {
      border: 1px solid;
      border-radius: 4px;
    }

    /* Size modifiers */
    .input-container--small {
      --textfield-size: var(--arc-input-height-small);
    }
    .input-container--medium {
      --textfield-size: var(--arc-input-height-medium);
    }
    .input-container--large {
      --textfield-size: var(--arc-input-height-large);
    }

    /* Color modifiers */
    .input-container--default {
      border-color: rgb(var(--arc-color-default));
    }
    .input-container--primary {
      border-color: rgb(var(--arc-color-primary));
    }
    .input-container--secondary {
      border-color: rgb(var(--arc-color-secondary));
    }
    .input-container--error {
      border-color: rgb(var(--arc-color-error));
    }
    .input-container--warning {
      border-color: rgb(var(--arc-color-warning));
    }
    .input-container--info {
      border-color: rgb(var(--arc-color-info));
    }
    .input-container--success {
      border-color: rgb(var(--arc-color-success));
    }

    /* Focus and Hover States */
    .input-container--default:hover {
      border-color: rgba(var(--arc-color-default), 0.9);
      box-shadow: 0 2px 4px rgba(var(--arc-color-default), 0.9);
    }
    .input-container--primary:hover {
      border-color: rgba(var(--arc-color-primary), 0.7);
      box-shadow: 0 2px 4px rgba(var(--arc-color-primary), 0.2);
    }

    .input-container--secondary:hover {
      border-color: rgba(var(--arc-color-secondary), 0.7);
      box-shadow: 0 2px 4px rgba(var(--arc-color-secondary), 0.2);
    }

    .input-container--error:hover {
      border-color: rgba(var(--arc-color-error), 0.7);
      box-shadow: 0 2px 4px rgba(var(--arc-color-error), 0.2);
    }

    .input-container--warning:hover {
      border-color: rgba(var(--arc-color-warning), 0.7);
      box-shadow: 0 2px 4px rgba(var(--arc-color-warning), 0.2);
    }

    .input-container--info:hover {
      border-color: rgba(var(--arc-color-info), 0.7);
      box-shadow: 0 2px 4px rgba(var(--arc-color-info), 0.2);
    }

    .input-container--success:hover {
      border-color: rgba(var(--arc-color-success), 0.7);
      box-shadow: 0 2px 4px rgba(var(--arc-color-success), 0.2);
    }

    .input-container--default:focus {
      border-color: rgba(var(--arc-color-default), 0.9);
      box-shadow: 0 2px 4px rgba(var(--arc-color-default), 0.3);
    }

    .input-container--primary:focus {
      border-color: rgba(var(--arc-color-primary), 0.9);
      box-shadow: 0 2px 4px rgba(var(--arc-color-primary), 0.3);
    }

    .input-container--secondary:focus {
      border-color: rgba(var(--arc-color-secondary), 0.9);
      box-shadow: 0 2px 4px rgba(var(--arc-color-secondary), 0.3);
    }

    .input-container--error:focus {
      border-color: rgba(var(--arc-color-error), 0.9);
      box-shadow: 0 2px 4px rgba(var(--arc-color-error), 0.3);
    }

    .input-container--warning:focus {
      border-color: rgba(var(--arc-color-warning), 0.9);
      box-shadow: 0 2px 4px rgba(var(--arc-color-warning), 0.3);
    }

    .input-container--info:focus {
      border-color: rgba(var(--arc-color-info), 0.9);
      box-shadow: 0 2px 4px rgba(var(--arc-color-info), 0.3);
    }

    .input-container--success:focus {
      border-color: rgba(var(--arc-color-success), 0.9);
      box-shadow: 0 2px 4px rgba(var(--arc-color-success), 0.3);
    }

    /* Disabled and loading */
    .input-container--disabled {
      background-color: #f0f0f0;
      color: #a8a8a8;
      border-color: #e5e5e5;
    }

    .input-container--invalid {
      border-color: rgba(var(--arc-color-error), 0.9);
      box-shadow: 0 2px 4px rgba(var(--arc-color-error), 0.3);
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
