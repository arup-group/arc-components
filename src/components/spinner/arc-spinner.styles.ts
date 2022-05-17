import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    --stroke-color: rgb(var(--arc-font-color));
    --track-width: 2px;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  #main {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  #track,
  #indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    transform-origin: 50% 50%;
  }

  #track {
    stroke: rgba(var(--arc-grey-050), 0.3););
    transform-origin: 0 0;
  }

  #indicator {
    stroke: var(--stroke-color);
    stroke-linecap: round;
    transform-origin: 50% 50%;
    transform: rotate(90deg);
    animation: spin 2.5s linear infinite;
  }

  @keyframes spin {
    0% {
      stroke-dasharray: 0.2em 3em;
      transform: rotate(0deg);
    }

    50% {
      stroke-dasharray: 2.2em 3em;
      transform: rotate(450deg);
    }

    100% {
      stroke-dasharray: 0.2em 3em;
      transform: rotate(1080deg);
    }
  }
`;
