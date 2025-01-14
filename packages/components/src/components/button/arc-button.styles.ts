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
      --btn-background: rgb(var(--arc-color-default));
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
    .button--group-outlined,
    .button--group-outlined-menu,
    .button--outlined {
      border: var(--arc-border-style) var(--arc-border-width);
      background: none;
    }
    .button--tab {
      background: none;
      border-radius: 0;
    }
    .button--tab.button--active {
      border-bottom: calc(var(--arc-border-width) * 2) var(--arc-border-style)
        currentColor;
    }
    .button--group-filled,
    .button--group-filled-menu {
      border-radius: 0;
    }
    .button--group-filled.button--active,
    .button--group-filled-menu.button--active {
      background-image: linear-gradient(var(--arc-hover-darker) 0 0);
    }
    .button--group-outlined,
    .button--group-outlined-menu {
      border-radius: 0;
    }
    :host(:first-child) .button--group-outlined {
      border-top-left-radius: var(--button-size);
      border-bottom-left-radius: var(--button-size);
    }
    :host([column]:first-child) .button--group-outlined {
      border-top-left-radius: calc(var(--button-size) / 2);
      border-bottom-left-radius: 0;
      border-top-right-radius: calc(var(--button-size) / 2);
    }
    :host(:not([column]):not(:first-child):not(:last-child))
      .button--group-outlined {
      border-left: none;
    }
    :host([column]:not(:first-child):not(:last-child)) .button--group-outlined {
      border-top: none;
    }
    :host(:last-child) .button--group-outlined {
      border-top-right-radius: var(--button-size);
      border-bottom-right-radius: var(--button-size);
    }
    :host([column]:last-child) .button--group-outlined {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-top-left-radius: calc(var(--button-size) / 2);
      border-bottom-left-radius: calc(var(--button-size) / 2);
    }
    :host(:not([column])) .button--group-outlined-menu {
      border-left: none;
      border-top-right-radius: var(--button-size);
      border-bottom-right-radius: var(--button-size);
    }
    :host([column]) .button--group-outlined-menu {
      border-top: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: calc(var(--button-size) / 2);
      border-top-left-radius: 0;
      border-bottom-left-radius: calc(var(--button-size) / 2);
    }

    .button--group-outlined.button--active,
    .button--group-outlined-menu.button--active {
      background-image: linear-gradient(var(--arc-hover-darker) 0 0);
    }
    /* host has column attribute */
    :host([column]) {
      height: auto;
      width: 100%;
    }
    :host([column]) .button--group-outlined {
      border-radius: 0;
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
    .button--group-filled.button--default,
    .button--group-filled-menu.button--default,
    .button--filled.button--default {
      --focus-color: rgba(var(--arc-input-color), 0.4);
    }
    .button--group-filled.button--primary,
    .button--group-filled-menu.button--primary,
    .button--filled.button--primary {
      --btn-color: rgb(var(--arc-container-color));
      --btn-background: rgb(var(--arc-color-primary));
      --focus-color: rgba(var(--arc-color-primary), 0.4);
    }
    .button--group-outlined.button--primary,
    .button--group-outlined-menu.button--primary,
    .button--outlined.button--primary {
      --btn-color: rgb(var(--arc-color-primary));
    }
    .button--group-filled.button--secondary,
    .button--group-filled-menu.button--secondary,
    .button--filled.button--secondary {
      --btn-color: rgb(var(--arc-container-color));
      --btn-background: rgb(var(--arc-color-secondary));
      --focus-color: rgba(var(--arc-color-secondary), 0.4);
    }
    .button--group-outlined.button--secondary,
    .button--group-outlined-menu.button--secondary,
    .button--outlined.button--secondary {
      --btn-color: rgb(var(--arc-color-secondary));
    }
    .button--group-filled.button--error,
    .button--group-filled-menu.button--error,
    .button--filled.button--error {
      --btn-background: rgb(var(--arc-color-error));
      --focus-color: rgba(var(--arc-color-error), 0.4);
    }
    .button--group-outlined.button--error,
    .button--group-outlined-menu.button--error,
    .button--outlined.button--error {
      --btn-color: rgb(var(--arc-color-error));
    }
    .button--group-filled.button--warning,
    .button--group-filled-menu.button--warning,
    .button--filled.button--warning {
      --btn-background: rgb(var(--arc-color-warning));
      --focus-color: rgba(var(--arc-color-warning), 0.4);
    }
    .button--group-outlined.button--warning,
    .button--group-outlined-menu.button--warning,
    .button--outlined.button--warning {
      --btn-color: rgb(var(--arc-color-warning));
    }
    .button--group-filled.button--info,
    .button--group-filled-menu.button--info,
    .button--filled.button--info {
      --btn-background: rgb(var(--arc-color-info));
      --focus-color: rgba(var(--arc-color-info), 0.4);
    }
    .button--group-outlined.button--info,
    .button--group-outlined-menu.button--info,
    .button--outlined.button--info {
      --btn-color: rgb(var(--arc-color-info));
    }
    .button--group-filled.button--success,
    .button--group-filled-menu.button--success,
    .button--filled.button--success {
      --btn-background: rgb(var(--arc-color-success));
      --focus-color: rgba(var(--arc-color-success), 0.4);
    }
    .button--group-outlined.button--success,
    .button--group-outlined-menu.button--success,
    .button--outlined.button--success {
      --btn-color: rgb(var(--arc-color-success));
    }

    /* Hover, Focus & Mouse down */
    .button--filled:hover:not(.button--disabled):not(.button--loading),
    .button--filled:focus-visible:not(.button--disabled):not(.button--loading),
    .button--group-filled:hover:not(.button--disabled):not(.button--loading),
    .button--group-filled-menu:hover:not(.button--disabled):not(
        .button--loading
      ),
    .button--group-filled:focus-visible:not(.button--disabled):not(
        .button--loading
      ) {
      background-image: linear-gradient(var(--arc-hover-dark) 0 0);
    }
    .button--filled:active:not(.button--disabled):not(.button--loading),
    .button--group-filled:active:not(.button--disabled):not(.button--loading),
    .button--group-filled-menu:active:not(.button--disabled):not(
        .button--loading
      ) {
      background-image: linear-gradient(var(--arc-hover-darker) 0 0);
    }
    .button--tab:hover:not(.button--disabled),
    .button--tab:focus-visible:not(.button--disabled),
    .button--group-outlined:hover:not(.button--disabled),
    .button--group-outlined:focus-visible:not(.button--disabled),
    .button--group-outlined-menu:hover:not(.button--disabled),
    .button--group-outlined-menu:focus-visible:not(.button--disabled),
    .button--outlined:hover:not(.button--disabled),
    .button--outlined:focus-visible:not(.button--disabled) {
      background-color: currentColor;
      background-image: linear-gradient(var(--arc-hover-lighter) 0 0);
    }
    .button--tab:active:not(.button--disabled):not(.button--loading),
    .button--group-outlined:active:not(.button--disabled):not(.button--loading),
    .button--group-outlined-menu:active:not(.button--disabled):not(
        .button--loading
      ),
    .button--outlined:active:not(.button--disabled):not(.button--loading) {
      background-image: linear-gradient(var(--arc-hover-light) 0 0);
    }
    .button-filled:focus-visible:not(.button--disabled) {
      box-shadow: var(--arc-box-shadow-focus) var(--focus-color);
    }

    /* Disabled */
    .button--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    #loader {
      position: absolute;
      --stroke-color: var(--btn-color);
    }

    /* Loading */
    .button--loading {
      cursor: wait;
    }
    :host(:not(:last-child)) .button--group-outlined.button--loading {
      border-right: none;
    }

    /* Prefix, Label, Suffix */
    .button--loading #prefix,
    .button--loading #label,
    .button--loading #suffix {
      visibility: hidden;
    }
    slot {
      pointer-events: none;
    }
  `,
];
