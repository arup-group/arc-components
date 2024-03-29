import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    :host {
      --size: 25rem;
      display: contents;
    }

    .drawer {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
      z-index: var(--arc-z-index-drawer);
    }

    .drawer--contained {
      position: absolute;
      z-index: initial;
    }

    #overlay {
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(var(--arc-darker-40) 0 0);
      pointer-events: all;
    }

    .drawer--contained #overlay {
      position: absolute;
    }

    #panel {
      position: absolute;
      display: flex;
      flex-direction: column;
      z-index: 2;
      max-width: 100%;
      max-height: 100%;
      background-color: rgb(var(--arc-container-color));
      overflow: auto;
      pointer-events: all;
    }

    #panel:focus {
      outline: none;
    }

    /* Placements */
    .drawer--top #panel {
      top: 0;
      right: auto;
      bottom: auto;
      left: 0;
      width: 100%;
      height: var(--size);
    }

    .drawer--end #panel {
      top: 0;
      right: 0;
      bottom: auto;
      left: auto;
      width: var(--size);
      height: 100%;
    }

    .drawer--bottom #panel {
      top: auto;
      right: auto;
      bottom: 0;
      left: 0;
      width: 100%;
      height: var(--size);
    }

    .drawer--right #panel {
      top: 0;
      right: auto;
      bottom: auto;
      left: 0;
      width: var(--size);
      height: 100%;
    }

    #header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--arc-spacing-small);
      padding-left: var(--arc-spacing-medium);
      user-select: none;
    }

    #header span {
      font-size: var(--arc-font-size-large);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    #body {
      flex: 1 1 auto;
      padding: var(--arc-spacing-medium);
      padding-top: var(--arc-spacing-normal);
      border-top: var(--arc-border-width) var(--arc-border-style)
        rgb(var(--arc-color-default));
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }

    #footer {
      text-align: right;
      padding: var(--arc-spacing-medium);
    }
  `,
];
