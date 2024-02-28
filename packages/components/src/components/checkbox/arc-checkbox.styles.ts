import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import controlStyles from '../../styles/control.styles.js';

export default [
  componentStyles,
  controlStyles,
  css`
    .checkbox {
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
      cursor: pointer;
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
    }

    #icon svg.fill {
      position: absolute;
      transform: scale(0);
    }

    /* Hover, Focus & Mouse down */
    .checkbox:not(.checkbox--disabled) input:hover + #control,
    .checkbox:not(.checkbox--disabled) input:focus-visible + #control {
      background-color: rgba(var(--arc-font-color), 10%);
    }
    .checkbox:not(.checkbox--disabled) input:active + #control {
      background-color: rgba(var(--arc-font-color), 30%);
    }

    /* Disabled */
    .checkbox--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Checked */
    .checkbox--checked #icon {
      color: rgb(var(--arc-color-info));
    }

    .checkbox--checked #icon svg.fill {
      transform: scale(1);
    }
  `,
];
