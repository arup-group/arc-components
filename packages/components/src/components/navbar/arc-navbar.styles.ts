import { css } from 'lit';
import { mobileBreakpoint } from '../../internal/preferences.js';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    :host {
      height: 3.5rem;
      background-color: rgb(var(--arc-container-color));
      z-index: 1;
      --logo-height: 1.25rem;
      --company-logo-color: rgb(var(--arc-brand-color));
    }

    /* Layout */
    #main,
    #left,
    #logoWrapper,
    #right,
    #tabs {
      display: grid;
      grid-auto-flow: column;
    }

    #main {
      height: inherit;
      width: 100%;
      padding: 0 var(--arc-spacing-medium) 0 var(--arc-spacing-medium);
      box-shadow: var(--arc-box-shadow);
      user-select: none;
    }

    /* Left side */
    #left {
      justify-content: flex-start;
    }

    #logoWrapper {
      align-items: center;
      gap: var(--arc-spacing-small);
      text-decoration: none;
      color: inherit;
    }

    #tool-logo {
      height: var(--logo-height);
      width: auto;
    }

    /* Show the tool-name when there is no tool-logo */
    #tool-name {
      display: flex;
      overflow: hidden;
    }

    #tool-name::slotted(*) {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    /* Hide the tool-name when there is a tool-logo */
    #tool-logo + #tool-name {
      display: none;
    }

    /* Right side */
    #right {
      justify-content: flex-end;
      gap: var(--arc-spacing-medium);
    }

    ::slotted(arc-button) {
      border-left: var(--arc-border-width) var(--arc-border-style)
        rgb(var(--arc-color-default));
      border-right: var(--arc-border-width) var(--arc-border-style)
        rgb(var(--arc-color-default));
    }

    ::slotted(arc-icon-button),
    #dropdown,
    #accessibility {
      margin: 0 var(--arc-spacing-x-small) 0 var(--arc-spacing-x-small);
    }

    #tabSlot,
    #accessibility,
    #notificationHistory {
      display: none;
    }

    #company-logo {
      color: var(--company-logo-color);
      display: flex;
      align-items: center;
    }

    #company-logo > svg {
      height: var(--logo-height);
      width: auto;
    }

    /* Medium devices and up */
    @media (min-width: ${mobileBreakpoint}rem) {
      #tabSlot,
      #tool-logo + #tool-name,
      #accessibility,
      #notificationHistory {
        display: flex;
      }

      ::slotted(arc-sso) {
        border-left: var(--arc-border-width) var(--arc-border-style)
          rgb(var(--arc-color-default));
        border-right: var(--arc-border-width) var(--arc-border-style)
          rgb(var(--arc-color-default));
      }
    }
  `,
];
