/*
Every ARC component should import these styles.
This will make the components work much better on the page due to properties like box-sizing: border-box.
It also ensures that all components have the proper scrollbar and are hidden when the `hidden` property is set.
*/

import { css } from 'lit';

export default css`
  :host {
    position: relative;
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }

  /* Overwrite the titles */
  h1,
  h2,
  h3,
  h4 {
    font-family: var(--arc-font-headline);
    font-weight: var(--arc-font-weight-normal);
  }

  /* Overwrite the default scrollbar */
  ::-webkit-scrollbar {
    width: var(--arc-scroll-width);
    height: var(--arc-scroll-width);
  }

  ::-webkit-scrollbar-track {
    background-color: var(--arc-background-color);
    border-radius: var(--arc-scroll-width);
    overflow: auto;
  }

  /* Overwrite the white square on the bottom-right */
  ::-webkit-scrollbar-corner {
    background-color: rgb(var(--arc-background-color));
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(var(--arc-grey-060), 1);
    border-radius: var(--arc-scroll-width);
    overflow: auto;
    border: 0.5rem var(--arc-border-style) transparent;
    background-clip: padding-box;
    min-height: 5rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(var(--arc-grey-070), 1);
  }
`;
