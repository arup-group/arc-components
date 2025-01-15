import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    :host {
      display: inline-flex;
      gap: 0px;
      align-itmes: start;
      --btn-color: rgb(var(--arc-input-color));
    }
    .button-group {
      display: grid;
      gap: 0px;
      grid-template-columns: repeat(auto-fill, minmax(var(--min-width), 1fr));
      grid-template-rows: auto;
      grid-auto-flow: row;
      grid-auto-rows: var(--button-size);
      align-items: center;
      justify-content: center;
      width: 100%;
      min-width: var(--min-width);
      height: var(--button-size);
      min-height: 100%;
      border-radius: var(--button-size);
      border: none;
      overflow: hidden;
      font-weight: var(--arc-font-weight-semibold);
      font-family: var(--arc-font-button);
      font-size: inherit;
      user-select: none;
      vertical-align: middle;
      cursor: inherit;
      outline: none;
      -webkit-appearance: none;
    }
    .button-group.button-group--horizontal {
      grid-auto-flow: column;
    }
    .button-group.button-group--vertical {
      grid-auto-flow: row;
      height: auto;
      border-radius: calc(var(--button-size) / 2);
    }
    .button-group--small {
      --button-size: var(--arc-input-height-small);
      --button-spacing: var(--arc-spacing-small);
    }
    .button-group--medium {
      --button-size: var(--arc-input-height-medium);
      --button-spacing: var(--arc-spacing-medium);
    }
    .button-group--large {
      --button-size: var(--arc-input-height-large);
      --button-spacing: var(--arc-spacing-large);
    }
    .button-group.button-group--loading {
      cursor: wait;
    }
    #loader {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      --stroke-color: var(--btn-color);
    }
  `,
];
