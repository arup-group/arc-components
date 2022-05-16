import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    --size: 25rem;
    display: contents;
  }

  #main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: var(--arc-z-index-drawer);
  }

  /* Contained */
  :host([contained]) #main {
    position: absolute;
    z-index: initial;
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

  /* Top */
  :host([placement='top']) #panel {
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
    width: 100%;
    height: var(--size);
  }

  /* End */
  :host([placement='end']) #panel {
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
    width: var(--size);
    height: 100%;
  }

  /* Bottom */
  :host([placement='bottom']) #panel {
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--size);
  }

  /* Start */
  :host([placement='start']) #panel {
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
    border-top: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  #footer {
    text-align: right;
    padding: var(--arc-spacing-medium);
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

  :host([contained]) #overlay {
    position: absolute;
  }
`;
