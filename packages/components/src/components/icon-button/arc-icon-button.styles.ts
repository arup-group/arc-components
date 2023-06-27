import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    :host {
      display: inline-flex;
      cursor: pointer;
      --icon-color: rgb(var(--arc-font-color));
    }

    .button {
      display: grid;
      align-content: center;
      text-align: center;
      width: 100%;
      min-height: 100%;
      border: none;
      font-family: var(--arc-font-button);
      line-height: inherit;
      text-decoration: none;
      user-select: none;
      white-space: nowrap;
      vertical-align: middle;
      padding: 0;
      cursor: inherit;
      color: var(--icon-color);
      background: none;
      outline: none;
      -webkit-appearance: none;
    }

    #iconWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #icon {
      padding: var(--arc-spacing-small);
      border-radius: 50%;
    }

    #action {
      font-size: var(--arc-font-size-xx-small);
      margin-top: -0.2rem;
    }

    /* Active */
    .button.button--active {
      border-bottom: calc(var(--arc-border-width) * 2) var(--arc-border-style)
        currentColor;
    }

    /* Hover, Focus & Mouse down */
    .button:hover:not(.button--disabled):not(.button--loading) #icon,
    .button:focus-visible:not(.button--disabled):not(.button--loading) #icon {
      background-color: rgba(var(--arc-font-color), 10%);
    }
    .button:active:not(.button--disabled):not(.button--loading) #icon {
      background-color: rgba(var(--arc-font-color), 30%);
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

    .button--loading #icon {
      visibility: hidden;
    }

    #loader {
      position: absolute;
    }

    /* Prevent click events from firing on slots */
    #iconWrapper,
    #icon,
    #action {
      pointer-events: none;
    }
  `,
];
