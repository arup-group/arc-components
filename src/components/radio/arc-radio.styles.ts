import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';
import controlStyles from '../../styles/control.styles.js';

export default css`
  ${componentStyles}
  ${controlStyles}

  #main {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    cursor: pointer;
  }

  #control {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    position: relative;
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
  }

  #icon {
    position: relative;
    display: flex;
  }

  #icon svg {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentcolor;
    flex-shrink: 0;
    font-size: var(--arc-font-size-x-large);
    transform: scale(1);
  }

  #icon svg.fill {
    position: absolute;
    transform: scale(0);
  }

  #label {
    line-height: var(--arc-font-size-x-large);
    user-select: none;
  }

  /* Checked */
  :host([checked]) #icon {
    color: rgb(var(--arc-color-info));
  }

  :host([checked]) #icon svg.fill {
    transform: scale(1);
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
