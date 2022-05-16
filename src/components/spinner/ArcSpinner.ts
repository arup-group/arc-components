import { html, LitElement } from 'lit';
import styles from './arc-spinner.styles.js';

/**
 * @cssproperty --stroke-color - Set the color of the loader.
 * @cssproperty --track-width - Set the thickness of the track.
 */
export default class ArcSpinner extends LitElement {
  static tag = 'arc-spinner';

  static styles = styles;

  render() {
    return html`
      <svg class="spinner" aria-busy="true" aria-live="polite">
        <circle class="spinner__track" cx="0.5em" cy="0.5em" r="0" />
        <circle class="spinner__indicator" cx="0.5em" cy="0.5em" r="0" />
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-spinner': ArcSpinner;
  }
}
