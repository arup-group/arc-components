/* stylelint-disable missing-comma */
import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
    width: auto;
    cursor: pointer;
    --min-width: 0;
  }

  #main {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: var(--min-width);
    min-height: 100%;
    border: none;
    border-radius: var(--arc-border-radius-medium);
    font-family: var(--arc-font-button);
    font-size: inherit;
    letter-spacing: inherit;
    font-weight: var(--arc-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    cursor: inherit;
    color: var(--btn-color);
    background-color: var(--btn-background);
    gap: var(--arc-spacing-small);
    outline: none;
    -webkit-appearance: none;
  }

  /* Tile */
  :host([type='tile']) #main {
    border-radius: 0;
  }

  /* Tab */
  :host([type='tab']) {
    height: 100%;
  }

  :host([type='tab']) #main {
    background: none;
    border-radius: 0;
  }

  /* Tab - Active */
  :host([type='tab']:not([disabled])[active]) #main {
    border-bottom: calc(var(--arc-border-width) * 2) var(--arc-border-style) currentColor;
  }

  /* Pill */
  :host([type='pill'][size='small']) #main {
    border-radius: var(--arc-input-height-small);
  }

  :host([type='pill'][size='medium']) #main {
    border-radius: var(--arc-input-height-medium);
  }

  :host([type='pill'][size='large']) #main {
    border-radius: var(--arc-input-height-large);
  }

  /* Outlined & Pill(Not primary/secondary) */
  :host([type='outlined']) #main,
  :host([type='pill']:not([color='primary']):not([color='secondary'])) #main {
    border: var(--arc-border-width) var(--arc-border-style) currentColor;
    background-color: transparent;
  }

  /* Default - Hover & Focus */
  :host(:not([type='tab']):not([type='outlined']):not([disabled]):not([loading])) #main:hover,
  :host(:not([type='tab']):not([type='outlined']):not([disabled]):not([loading])) #main:focus-visible {
    background-image: linear-gradient(var(--arc-hover-dark) 0 0);
  }

  /* Tab, Outlined & Pill(Not primary/secondary) - Hover & Focus */
  :host([type='tab']:not([disabled]):not([loading])) #main:hover,
  :host([type='outlined']:not([disabled]):not([loading])) #main:hover,
  :host([type='pill']:not([color='primary']):not([color='secondary']):not([disabled]):not([loading])) #main:hover,
  :host([type='tab']:not([disabled]):not([loading])) #main:focus-visible,
  :host([type='outlined']:not([disabled]):not([loading])) #main:focus-visible,
  :host([type='pill']:not([color='primary']):not([color='secondary']):not([disabled]):not([loading]))
    #main:focus-visible {
    background-color: currentColor;
    background-image: linear-gradient(var(--arc-hover-lighter) 0 0);
  }

  /* Default - Mouse down */
  :host(:not([type='tab']):not([type='outlined']):not([disabled]):not([loading])) #main:active {
    background-image: linear-gradient(var(--arc-hover-darker) 0 0);
  }

  /* Tab, Outlined & Pill (Not primary) - Mouse down */
  :host([type='tab']:not([disabled]):not([loading])) #main:active,
  :host([type='outlined']:not([disabled]):not([loading])) #main:active,
  :host([type='pill']:not([color='primary']):not([color='secondary']):not([disabled]):not([loading])) #main:active {
    background-image: linear-gradient(var(--arc-hover-light) 0 0);
  }

  /* Focus outline (same for all button states) */
  :host(:not([disabled]):not([loading])) #main:focus-visible {
    box-shadow: var(--arc-box-shadow-focus) var(--focus-color);
  }

  /* Disabled */
  :host([disabled]) #main {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Loading */
  :host([loading]) #prefix,
  :host([loading]) #label,
  :host([loading]) #suffix {
    visibility: hidden;
  }

  #loader {
    position: absolute;
  }

  /* Prevent click events from firing when a user clicks on a slot */
  slot {
    pointer-events: none;
  }
`;
