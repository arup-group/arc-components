import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  #chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    font-size: var(--arc-font-size-small);
    white-space: nowrap;
    cursor: default;
    padding: 0 var(--arc-spacing-small);
    gap: var(--arc-spacing-small);
    outline: 0;
    text-decoration: none;
    user-select: none;
    vertical-align: middle;
    background-color: rgb(var(--arc-color-default));
    border: none;
  }

  :host([type='outlined']) #chip {
    background-color: transparent;
    border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
  }

  :host([clearable]) #chip {
    padding-right: 0;
    gap: 0;
  }

  ::slotted(arc-avatar) {
    --size: inherit;
  }
`;
