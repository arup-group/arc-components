import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    :host {
      display: inline-block;
    }

    .chip {
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
      color:rgb(var(--arc-font-color));
      background-color: rgb(var(--arc-color-default));
      border: none;
      height: var(--chip-size);
      border-radius: var(--chip-size);
    }

    .chip span {
      display: inherit;
      align-items: inherit;
    }

    .chip--small {
      --chip-size: var(--arc-input-height-small);
    }

    .chip--medium {
      --chip-size: var(--arc-input-height-medium);
    }

    .chip--large {
      --chip-size: var(--arc-input-height-large);
    }

    .chip--has-avatar {
      padding-left: calc(var(--chip-size) * 0.15);
    }

    .chip--outlined {
      background-color: transparent;
      border: var(--arc-border-width) var(--arc-border-style)
        rgb(var(--arc-color-default));
    }

    .chip--clearable {
      padding-right: 0;
    }

    ::slotted(arc-avatar) {
      --size: calc(var(--chip-size) - 0.5rem);
    }
  `,
];
