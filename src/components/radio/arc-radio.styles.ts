import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';
import controlStyles from '../../styles/control.styles.js';

export default css`
  ${componentStyles}
  ${controlStyles}

  .radio {
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
  .radio:not(.radio--disabled) input:hover + #control,
  .radio:not(.radio--disabled) input:focus-visible + #control {
    background-color: rgba(var(--arc-font-color), 10%);
  }
  .radio:not(.radio--disabled) input:active + #control {
    background-color: rgba(var(--arc-font-color), 30%);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Checked */
  .radio--checked #icon {
    color: rgb(var(--arc-color-info));
  }

  .radio--checked #icon svg.fill {
    transform: scale(1);
  }
`;
