import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';
import controlStyles from '../../styles/control.styles.js';

export default [
  componentStyles,
  controlStyles,
  css`
    :host {
      --height: var(--arc-font-size-x-large);
      --width: calc(var(--height) * 2);
      --thumb-size: calc(var(--arc-font-size-x-large) - 4px);
    }

    .switch {
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
      cursor: pointer;
      gap: var(--arc-spacing-x-small);
    }

    #base {
      flex: 0 0 auto;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--width);
      height: var(--height);
      background-color: rgb(var(--arc-grey-060));
      border-radius: var(--height);
      transition: background-color 0.2s linear;
    }

    #control {
      position: absolute;
      transform: translateX(calc((var(--width) - var(--height)) / -2));
      transition: transform 0.2s ease-in-out;
    }

    #thumb {
      width: var(--thumb-size);
      height: var(--thumb-size);
      background-color: rgb(var(--arc-grey-000));
      border-radius: 50%;
    }

    /* Hover, Focus & Mouse down */
    .switch:not(.switch--disabled) input:hover + #control,
    .switch:not(.switch--disabled) input:focus-visible + #control {
      background-color: rgba(var(--arc-font-color), 10%);
    }
    .switch:not(.switch--disabled) input:active + #control {
      background-color: rgba(var(--arc-font-color), 30%);
    }

    /* Disabled */
    .switch--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Checked */
    .switch--checked #base {
      background-color: rgb(var(--arc-color-info));
    }

    .switch--checked #control {
      transform: translateX(calc((var(--width) - var(--height)) / 2));
    }
  `,
];
