import { css } from 'lit';

export const iconStyles = css`
  /* --------------------------------

  General

  -------------------------------- */
  :root {
    --icon-color-primary: inherit;
    --icon-color-secondary: currentColor;
  }

  .icon {
    display: inline-block;
    color: var(--icon-color-primary); /* icon primary color */
    height: 1em;
    width: 1em;
    line-height: 1;
    flex-shrink: 0;
    max-width: initial;
  }

  .icon use {
    /* icon secondary color */
    fill: var(--icon-color-secondary);
    stroke: var(--icon-color-secondary);
  }

  /* --------------------------------

  Themes

  -------------------------------- */

  .icon-theme-1 {
    --icon-color-primary: #212121;
    --icon-color-secondary: inherit;
  }

  /* --------------------------------

  Sizes

  -------------------------------- */
  :root {
    --icon-sm: 0.8em;
    --icon-lg: 1.2em;
  }

  /* relative units */
  .icon-sm {
    font-size: var(--icon-sm);
  }

  .icon-lg {
    font-size: var(--icon-lg);
  }

  /* absolute units */
  .icon-16 {
    font-size: 16px;
  }

  .icon-32 {
    font-size: 32px;
  }

  /* --------------------------------

  Stroke

  -------------------------------- */

  .stroke-1 {
    stroke-width: 1px;
  }

  .stroke-2 {
    stroke-width: 2px;
  }

  .stroke-3 {
    stroke-width: 3px;
  }

  .stroke-4 {
    stroke-width: 4px;
  }

  /* --------------------------------

  Caps/Corners

  -------------------------------- */

  .icon use {
    --icon-stroke-linecap-butt: butt;
    stroke-miterlimit: 10;
    stroke-linecap: square;
    stroke-linejoin: miter;
  }

  .stroke-round use {
    --icon-stroke-linecap-butt: round;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* --------------------------------

  Transformations/Animations

  -------------------------------- */

  .icon-rotate-90 {
    transform: rotate(90deg);
  }

  .icon-rotate-180 {
    transform: rotate(180deg);
  }

  .icon-rotate-270 {
    transform: rotate(270deg);
  }

  .icon-flip-y {
    transform: scaleY(-1);
  }

  .icon-flip-x {
    transform: scaleX(-1);
  }

  .icon-is-spinning {
    animation: icon-spin 1s infinite linear;
  }

  @keyframes icon-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
