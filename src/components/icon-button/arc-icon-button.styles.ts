import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-flex;
    cursor: pointer;
    --icon-color: rgb(var(--arc-font-color));
  }

  #main {
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

  /* Hover & Focus */
  :host(:not([disabled])) #main:hover #icon,
  :host(:not([disabled])) #main:focus-visible #icon {
    background-color: rgba(var(--arc-font-color), 10%);
  }

  /* Mouse down */
  :host(:not([disabled])) #main:active #icon {
    background-color: rgba(var(--arc-font-color), 30%);
  }

  /* Active */
  :host(:not([disabled])[active]) #main {
    border-bottom: calc(var(--arc-border-width) * 2) var(--arc-border-style) currentColor;
  }

  /* Disabled */
  :host([disabled]) #main {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Loading */
  :host([loading]) #icon {
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
`;
