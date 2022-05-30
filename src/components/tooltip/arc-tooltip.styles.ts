import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    :host {
      --max-width: 20rem;
      --arrow-size: 4px;

      display: contents;
    }

    #target {
      display: contents;
    }

    #positioner {
      position: absolute;
      z-index: var(--arc-z-index-tooltip);
      pointer-events: none;
    }

    #positioner[data-placement^='top'] #tooltip {
      transform-origin: bottom;
    }

    #positioner[data-placement^='bottom'] #tooltip {
      transform-origin: top;
    }

    #positioner[data-placement^='left'] #tooltip {
      transform-origin: right;
    }

    #positioner[data-placement^='right'] #tooltip {
      transform-origin: left;
    }

    #arrow {
      position: absolute;
      background-color: rgb(var(--arc-background-color));
      width: calc(var(--arrow-size) * 2);
      height: calc(var(--arrow-size) * 2);
      transform: rotate(45deg);
      z-index: -1;
    }

    #content {
      max-width: var(--max-width);
      border-radius: var(--arc-border-radius-medium);
      background-color: rgb(var(--arc-background-color));
      padding: 0.25rem var(--arc-spacing-x-small);
    }
  `,
];
