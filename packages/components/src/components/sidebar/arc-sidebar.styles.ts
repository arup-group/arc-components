import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    :host {
      --gap-distance: var(--arc-spacing-normal);
      --sidebar-width: clamp(15rem, 30%, 23rem);
      transform: translateX(-1.5rem);
      transition: width 0.5s ease 0s;
      width: 0;
    }

    :host([open]) {
      transform: translateX(0);
      width: var(--sidebar-width);
      overflow: auto;
    }

    /* Open sidebar */
    #main,
    #content {
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    #content ::slotted(*) {
      flex: 1 1 100%;
    }

    #content.gap {
      gap: var(--gap-distance);
    }

    #toggleOpen::part(icon) {
      padding: var(--arc-spacing-normal) 0.25rem var(--arc-spacing-normal)
        0.25rem;
      border-radius: 0;
    }

    /* Background */
    ::slotted(*),
    #header,
    #toggleOpen {
      background-color: rgb(var(--arc-container-color));
    }
  `,
];
