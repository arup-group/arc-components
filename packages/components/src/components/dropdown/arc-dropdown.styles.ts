import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    :host {
      display: inline-block;
    }

    #main,
    #trigger {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    #positioner {
      position: absolute;
      z-index: var(--arc-z-index-dropdown);
    }

    #panel {
      max-height: var(--arc-panel-height);
      min-width: var(--arc-panel-width);
      background-color: rgb(var(--arc-container-color));
      box-shadow: var(--arc-box-shadow);
      overflow: auto;
      overscroll-behavior: none;
      pointer-events: none;
    }

    :host([open]) #panel {
      pointer-events: all;
    }

    #positioner[data-placement^='top'] #panel {
      transform-origin: bottom;
    }

    #positioner[data-placement^='bottom'] #panel {
      transform-origin: top;
    }

    #positioner[data-placement^='left'] #panel {
      transform-origin: right;
    }

    #positioner[data-placement^='right'] #panel {
      transform-origin: left;
    }
  `,
];
