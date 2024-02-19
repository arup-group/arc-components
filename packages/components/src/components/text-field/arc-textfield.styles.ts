import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    .text-field-container {
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .text-field {
      padding: 10px;
      font-size: 16px;
      border: none;
      border-color: rgb(var(--arc-input-color));
      border-radius: 4px;
      height: var(--textfield-size);
      width: calc(var(--textfield-size) * 5);
      outline: none;
      transition:
        background-color 0.3s,
        border-color 0.3s,
        box-shadow 0.3s;
    }

    .helper-text {
      padding-left: 5px;
      font-size: 12px;
      margin-top: 2px;
      margin-bottom: 2px;
      visibility: hidden; /* Hide helper text by default */
    }

    .helper-text--error {
      color: rgb(var(--arc-color-error));
    }

    .text-field--invalid + .helper-text,
    .text-field:not(--invalid) + .helper-text {
      visibility: visible; /* Show helper text when needed */
    }

    /* Text Box Types */
    .text-field--standard {
      border-bottom: 2px solid;
    }

    .text-field--filled {
      background-color: #f5f5f5; /* Light grey background */
      border-bottom: 2px solid;
    }

    .text-field--outlined {
      border: 1px solid;
    }

    /* Size modifiers */
    .text-field--small {
      --textfield-size: var(--arc-input-height-small);
    }
    .text-field--medium {
      --textfield-size: var(--arc-input-height-medium);
    }
    .text-field--large {
      --textfield-size: var(--arc-input-height-large);
    }

    /* Color modifiers */
    .text-field--default {
      border-color: rgb(var(--arc-color-default));
    }
    .text-field--primary {
      border-color: rgb(var(--arc-color-primary));
    }
    .text-field--secondary {
      border-color: rgb(var(--arc-color-secondary));
    }
    .text-field--error {
      border-color: rgb(var(--arc-color-error));
    }
    .text-field--warning {
      border-color: rgb(var(--arc-color-warning));
    }
    .text-field--info {
      border-color: rgb(var(--arc-color-info));
    }
    .text-field--success {
      border-color: rgb(var(--arc-color-success));
    }

    /* Focus and Hover States */
    .text-field--primary:hover {
      border-color: rgba(var(--arc-color-primary), 0.7);
      box-shadow: 0 2px 4px rgba(var(--arc-color-primary), 0.2);
    }

    .text-field--secondary:hover {
      border-color: rgba(var(--arc-color-secondary), 0.7);
      box-shadow: 0 2px 4px rgba(var(--arc-color-secondary), 0.2);
    }

    .text-field--error:hover {
      border-color: rgba(var(--arc-color-error), 0.7);
      box-shadow: 0 2px 4px rgba(var(--arc-color-error), 0.2);
    }

    .text-field--warning:hover {
      border-color: rgba(var(--arc-color-warning), 0.7);
      box-shadow: 0 2px 4px rgba(var(--arc-color-warning), 0.2);
    }

    .text-field--info:hover {
      border-color: rgba(var(--arc-color-info), 0.7);
      box-shadow: 0 2px 4px rgba(var(--arc-color-info), 0.2);
    }

    .text-field--success:hover {
      border-color: rgba(var(--arc-color-success), 0.7);
      box-shadow: 0 2px 4px rgba(var(--arc-color-success), 0.2);
    }

    .text-field--primary:focus {
      border-color: rgba(var(--arc-color-primary), 0.9);
      box-shadow: 0 2px 4px rgba(var(--arc-color-primary), 0.3);
    }

    .text-field--secondary:focus {
      border-color: rgba(var(--arc-color-secondary), 0.9);
      box-shadow: 0 2px 4px rgba(var(--arc-color-secondary), 0.3);
    }

    .text-field--error:focus {
      border-color: rgba(var(--arc-color-error), 0.9);
      box-shadow: 0 2px 4px rgba(var(--arc-color-error), 0.3);
    }

    .text-field--warning:focus {
      border-color: rgba(var(--arc-color-warning), 0.9);
      box-shadow: 0 2px 4px rgba(var(--arc-color-warning), 0.3);
    }

    .text-field--info:focus {
      border-color: rgba(var(--arc-color-info), 0.9);
      box-shadow: 0 2px 4px rgba(var(--arc-color-info), 0.3);
    }

    .text-field--success:focus {
      border-color: rgba(var(--arc-color-success), 0.9);
      box-shadow: 0 2px 4px rgba(var(--arc-color-success), 0.3);
    }

    /* Disabled and loading */
    .text-field--disabled {
      background-color: #f0f0f0;
      color: #a8a8a8;
      border-color: #e5e5e5;
    }

    .text-field--invalid {
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
