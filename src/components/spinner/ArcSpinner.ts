import { html, LitElement } from 'lit';
// @ts-ignore
import styles from './arc-spinner.styles.css.js';

/**
 * @cssproperty --stroke-color - Set the color of the loader.
 * @cssproperty --track-width - Set the thickness of the track.
 */
export default class ArcSpinner extends LitElement {
  /** @internal */
  static tag = 'arc-spinner';

  static styles = styles;

  protected render() {
    return html`
      <svg id="main" aria-busy="true" aria-live="polite" class="arc-spinner">
        <circle id="track" cx="0.5em" cy="0.5em" r="0" class="arc-spinner--track" />
        <circle id="indicator" cx="0.5em" cy="0.5em" r="0" class="arc-spinner--indicator" />
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-spinner': ArcSpinner;
  }
}
