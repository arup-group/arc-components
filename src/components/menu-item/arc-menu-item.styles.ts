import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    text-align: left;
    padding: var(--arc-spacing-small) var(--arc-spacing-medium);
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  #prefix,
  #label,
  #suffix {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
  }

  #prefix ::slotted(*) {
    margin-right: var(--arc-spacing-x-small);
  }

  #label {
    flex: 1 1 auto;
    max-width: 30ch;
    overflow: hidden;
  }

  #label * {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis ' ...';
  }

  #suffix ::slotted(*) {
    margin-left: var(--arc-spacing-x-small);
  }

  /* Hover & Focus */
  :host(:focus) {
    outline: none;
  }

  .menu-item:hover:not(.menu--item--disabled),
  .menu-item:focus-visible:not(.menu--item--disabled) {
    background-color: currentColor;
    background-image: linear-gradient(var(--arc-hover-lighter) 0 0);
  }

  /* Disabled */
  .menu-item--disabled {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }
`;
