import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    :host {
      display: inline-block;
      position: relative;
      width: auto;
      cursor: pointer;
      --min-width: 0;
      --btn-color: rgb(var(--arc-input-color));
      --btn-background: initial;
    }

    :host([type='tab']) {
      height: 100%;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-width: var(--min-width);
      height: var(--button-size);
      min-height: 100%;
      border: none;
      border-radius: var(--button-size);
      font-weight: var(--arc-font-weight-semibold);
      font-family: var(--arc-font-button);
      font-size: inherit;
      letter-spacing: inherit;
      text-decoration: none;
      user-select: none;
      white-space: nowrap;
      vertical-align: middle;
      padding: 0 var(--button-spacing);
      cursor: inherit;
      color: var(--btn-color);
      background-color: var(--btn-background);
      gap: var(--arc-spacing-small);
      outline: none;
      -webkit-appearance: none;
    }

    /* Types */
    .button--outlined {
      border: var(--arc-border-style) var(--arc-border-width);
      background: none;
    }

    .button--tab {
      background: none;
      border-radius: 0;
    }
    .button--tab.button--active {
      border-bottom: calc(var(--arc-border-width) * 2) var(--arc-border-style) currentColor;
    }

    /* Sizes */
    .button--small {
      --button-size: var(--arc-input-height-small);
      --button-spacing: var(--arc-spacing-small);
    }

    .button--medium {
      --button-size: var(--arc-input-height-medium);
      --button-spacing: var(--arc-spacing-medium);
    }

    .button--large {
      --button-size: var(--arc-input-height-large);
      --button-spacing: var(--arc-spacing-large);
    }

    /* Colors */
    .button--filled.button--default {
      --btn-background: rgb(var(--arc-color-default));
      --focus-color: rgba(var(--arc-input-color), 0.4);
    }

    .button--filled.button--primary {
      --btn-color: rgb(var(--arc-container-color));
      --btn-background: rgb(var(--arc-color-primary));
      --focus-color: rgba(var(--arc-color-primary), 0.4);
    }
    .button--outlined.button--primary {
      --btn-color: rgb(var(--arc-color-primary));
    }

    .button--filled.button--secondary {
      --btn-color: rgb(var(--arc-container-color));
      --btn-background: rgb(var(--arc-color-secondary));
      --focus-color: rgba(var(--arc-color-secondary), 0.4);
    }
    .button--outlined.button--secondary {
      --btn-color: rgb(var(--arc-color-secondary));
    }

    .button--filled.button--error {
      --btn-background: rgb(var(--arc-color-error));
      --focus-color: rgba(var(--arc-color-error), 0.4);
    }
    .button--outlined.button--error {
      --btn-color: rgb(var(--arc-color-error));
    }

    .button--filled.button--warning {
      --btn-background: rgb(var(--arc-color-warning));
      --focus-color: rgba(var(--arc-color-warning), 0.4);
    }
    .button--outlined.button--warning {
      --btn-color: rgb(var(--arc-color-warning));
    }

    .button--filled.button--info {
      --btn-background: rgb(var(--arc-color-info));
      --focus-color: rgba(var(--arc-color-info), 0.4);
    }
    .button--outlined.button--info {
      --btn-color: rgb(var(--arc-color-info));
    }

    .button--filled.button--success {
      --btn-background: rgb(var(--arc-color-success));
      --focus-color: rgba(var(--arc-color-success), 0.4);
    }
    .button--outlined.button--success {
      --btn-color: rgb(var(--arc-color-success));
    }

    /* Default - Hover, Focus & Mouse down */
    .button--filled:hover:not(.button--disabled):not(.button--loading),
    .button--filled:focus-visible:not(.button--disabled):not(.button--loading) {
      background-image: linear-gradient(var(--arc-hover-dark) 0 0);
    }
    .button--filled:active:not(.button--disabled):not(.button--loading) {
      background-image: linear-gradient(var(--arc-hover-darker) 0 0);
    }

    /* Tab & Outlined - Hover, Focus & Mouse down */
    .button--tab:hover:not(.button--disabled),
    .button--tab:focus-visible:not(.button--disabled),
    .button--outlined:hover:not(.button--disabled),
    .button--outlined:focus-visible:not(.button--disabled) {
      background-color: currentColor;
      background-image: linear-gradient(var(--arc-hover-lighter) 0 0);
    }
    .button--tab:active:not(.button--disabled):not(.button--loading),
    .button--outlined:active:not(.button--disabled):not(.button--loading) {
      background-image: linear-gradient(var(--arc-hover-light) 0 0);
    }

    /* Focus outline (same for all button states) */
    .button:focus-visible:not(.button--disabled) {
      box-shadow: var(--arc-box-shadow-focus) var(--focus-color);
    }

    /* Disabled */
    .button--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Loading */
    .button--loading {
      cursor: wait;
    }

    .button--loading #prefix,
    .button--loading #label,
    .button--loading #suffix {
      visibility: hidden;
    }

    #loader {
      position: absolute;
      --stroke-color: var(--btn-color);
    }

    /* Prevent click events from firing when a user clicks on a slot */
    slot {
      pointer-events: none;
    }
  `,
];
