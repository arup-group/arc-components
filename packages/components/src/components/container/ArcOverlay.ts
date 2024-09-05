import { html, css, LitElement, isServer } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type {
  ActionCallback,
  AlertConfiguration,
} from './constants/ContainerConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import componentStyles from '../../styles/component.styles.js';
import type ArcAlert from './ArcAlert.js';

import '../icon-button/arc-icon-button.js';
import '../ph-icon/arrow-left/ph-icon-arrow-left.js';
import '../ph-icon/arrow-right/ph-icon-arrow-right.js';
import './ArcAlert.js';

/**
 * @ bata component feature (api subject to change)
 * @internal
 * @ssr - True
 */
@customElement(ArcOverlay.tag)
export default class ArcOverlay extends LitElement {
  /** @internal */
  static tag = 'arc-overlay';

  /** @internal */
  static styles = [
    componentStyles,
    css`
      :host {
        display: grid;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(var(--arc-grey-050), 0.5);
        z-index: 1000;
        place-items: center;
      }
      div.alert-controls {
        position: absolute;
        bottom: var(--arc-spacing-large);
        left: 50%;
        transform: translateX(-50%);
        display: grid;
        grid-template-columns: repeat(3, auto);
        align-items: center;
        gap: var(--arc-spacing-small);
      }
      ::slotted(arc-alert) {
        display: none;
      }
      ::slotted(arc-alert[active]) {
        display: block;
      }
    `,
  ];

  /** @internal */
  @state({ hasChanged: () => true }) private activeAlertIndex = 0;

  /** @internal */
  private handleNextAlert(): void {
    const alerts = this.alertElements?.length || 0;
    this.activeAlertIndex = (this.activeAlertIndex + 1) % alerts;
    this.setActiveAlert(this.activeAlertIndex);
  }

  /** @internal */
  private handlePreviousAlert(): void {
    const alerts = this.alertElements?.length || 0;
    this.activeAlertIndex = (this.activeAlertIndex - 1 + alerts) % alerts;
    this.setActiveAlert(this.activeAlertIndex);
  }

  /** @internal */
  private get alertElements(): NodeListOf<ArcAlert> | undefined {
    if (isServer) return undefined;
    return this.querySelectorAll('arc-alert');
  }

  /** @internal */
  private setActiveAlert(index: number) {
    this.activeAlertIndex = index;
    this.alertElements?.forEach((alert, i) => (alert.active = i === index));
  }

  /** Open an alert with the given configuration */
  public openAlert(config: AlertConfiguration): ActionCallback {
    /** create a new alert element */
    const alert = document.createElement('arc-alert') as ArcAlert;
    alert.config = config;

    /** append the alert to the overlay */
    config.assertive === true
      ? this.prepend(alert)
      : this.appendChild(alert);

    /** set the active alert */
    this.setActiveAlert(this.activeAlertIndex);

    /** return a callback to close the alert */
    const closeCallback = () => {
      /** remove the event listener and element */
      alert.removeEventListener(ARC_EVENTS.hide, closeCallback);
      alert.remove();

      /** update the active alert index */
      const alerts = this.alertElements?.length || 0;
      const index = this.activeAlertIndex;
      const newIndex = index - 1 >= 0 ? index - 1 : index + 1 >= alerts ? 0 : index + 1;
      this.setActiveAlert(newIndex);

      /** remove the overlay if there are no more alerts */
      if (this.alertElements?.length === 0) {
        this.remove();
      }
    };

    /** listen for the alert hide event */
    alert.addEventListener(ARC_EVENTS.hide, closeCallback);

    return closeCallback;
  }

  protected render() {
    const alerts = this.alertElements?.length || 0;
    return html`
      <slot></slot>
      <div class="alert-controls">
        ${alerts > 1
          ? html`
              <arc-icon-button @click=${this.handlePreviousAlert}>
                <ph-icon-arrow-left slot="icon" />
              </arc-icon-button>
              <sub>${this.activeAlertIndex + 1} / ${alerts}</sub>
              <arc-icon-button @click=${this.handleNextAlert}>
                <ph-icon-arrow-right slot="icon" />
              </arc-icon-button>
            `
          : ''}
      </div>
    `;
  }
}
