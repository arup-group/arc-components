import { css, html, LitElement } from 'lit';
import componentStyles from '../../styles/component.styles.js';

/**
 * @cssproperty font-size - Set the size of the spinner.
 * @cssproperty --stroke-color - Set the color of the loader.
 * @cssproperty --track-width - Set the thickness of the track.
 */
export default class ArcSpinner extends LitElement {
  static tag = 'arc-spinner';

  static styles = [
    componentStyles,
    css`
      :host {
        --stroke-color: rgb(var(--arc-font-color));
        --track-width: 2px;

        display: inline-flex;
        width: 1em;
        height: 1em;
      }

      .spinner {
        flex: 1 1 auto;
        height: 100%;
        width: 100%;
      }

      .spinner__track,
      .spinner__indicator {
        fill: none;
        stroke-width: var(--track-width);
        r: calc(0.5em - var(--track-width) / 2);
        transform-origin: 50% 50%;
      }

      .spinner__track {
        stroke: rgba(var(--arc-grey-050), 0.3););
        transform-origin: 0 0;
      }

      .spinner__indicator {
        stroke: var(--stroke-color);
        stroke-linecap: round;
        transform-origin: 50% 50%;
        transform: rotate(90deg);
        animation: spin 2.5s linear infinite;
      }

      @keyframes spin {
        0% {
          stroke-dasharray: 0.2em 3em;
          transform: rotate(0deg);
        }

        50% {
          stroke-dasharray: 2.2em 3em;
          transform: rotate(450deg);
        }

        100% {
          stroke-dasharray: 0.2em 3em;
          transform: rotate(1080deg);
        }
      }
    `,
  ];

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
