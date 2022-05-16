import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
    width: auto;
  }

  #main {
    display: grid;
    overflow: hidden;
    background-color: rgb(var(--arc-container-color));
    box-shadow: var(--arc-box-shadow);
  }

  #header,
  #body,
  #footer {
    padding: var(--arc-spacing-normal);
  }

  #image {
    overflow: hidden;
  }

  /* Hide elements when they are not slotted or when the card is collapsed */
  #main:not(.card--has-header) #header,
  #main:not(.card--has-image) #image,
  #main:not(.card--has-body) #body,
  #main:not(.card--has-footer) #footer {
    display: none;
  }

  #header ::slotted(*),
  #footer ::slotted(*) {
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    gap: var(--arc-spacing-small);
  }

  #header ::slotted(*) {
    justify-content: space-between;
  }

  #footer ::slotted(*) {
    justify-content: end;
  }
`;
