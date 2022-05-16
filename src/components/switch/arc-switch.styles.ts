import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';
import controlStyles from '../../styles/control.styles.js';

export default css`
  ${componentStyles}
  ${controlStyles}

  :host {
    --height: var(--arc-font-size-x-large);
    --width: calc(var(--height) * 2);
    --thumb-size: calc(var(--arc-font-size-x-large) - 4px);
  }

  #main {
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
  }

  #control {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    position: absolute;
    box-sizing: border-box;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    cursor: inherit;
    user-select: none;
    appearance: none;
    text-decoration: none;
    padding: var(--arc-spacing-small);
    border-radius: 50%;
    transform: translateX(calc((var(--width) - var(--height)) / -2));
  }

  #thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: rgb(var(--arc-grey-000));
    border-radius: 50%;
  }

  #label {
    line-height: var(--arc-font-size-x-large);
    user-select: none;
  }

  /* Checked */
  :host([checked]) #base {
    background-color: rgb(var(--arc-color-info));
  }

  :host([checked]) #control {
    transform: translateX(calc((var(--width) - var(--height)) / 2));
  }

  /* Hover & Focus */
  :host(:not([disabled])) input:hover + #control,
  :host(:not([disabled])) input:focus-visible + #control {
    background-color: rgba(var(--arc-font-color), 10%);
  }

  /* Mouse down */
  :host(:not([disabled])) input:active + #control {
    background-color: rgba(var(--arc-font-color), 30%);
  }

  /* Disabled */
  :host([disabled]) #main {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
