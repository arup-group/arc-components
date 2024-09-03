import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { emit } from '../../internal/event.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import componentStyles from '../../styles/component.styles.js';
import {
  OPERATION_COLORS,
  OperationColor,
} from '../../internal/constants/styleConstants.js';

import '../ph-icon/warning/ph-icon-warning.js';
import '../ph-icon/warning-octagon/ph-icon-warning-octagon.js';
import '../ph-icon/info/ph-icon-info.js';
import '../ph-icon/check-circle/ph-icon-check-circle.js';
import '../ph-icon/x/ph-icon-x.js';

/** Color of the alert */
export type AlertColor = OperationColor;

/** Function to be called when the action button is clicked */
export type Action = () => void;

/** Configuration for the action button */
export interface ActionConfig {
  /** Label for the action button */
  label: string;
  /** Function to be called when the action button is clicked */
  action: Action;
}

/** Configuration for the alert */
export interface AlertConfig {
  /** Title of the alert */
  title: string;
  /** Message of the alert */
  message: string;
  /** Type of the alert */
  type?: 'success' | 'error' | 'warning' | 'info';
  /** Action button configuration */
  action?: ActionConfig;
  /** Secondary action button configuration */
  secondaryAction?: ActionConfig;
  /** Dismiss button visibility - always visible if no actions are provided */
  dismissable?: boolean;
}

/**
 * @ bata component feature (api subject to change)
 * @internal
 * @ssr - True
 */
@customElement(ArcAlert.tag)
export default class ArcAlert extends LitElement {
  /** @internal */
  static tag = 'arc-alert';

  /** @internal */
  static styles = [
    componentStyles,
    css`
      :host {
        --alert-background: rgb(var(--arc-container-color));
        --alert-color: rgb(var(--arc-text-color));
        display: inline-block;
        font-size: var(--arc-font-size-small);
        background: var(--alert-background);
        color: var(--alert-color);
        border-radius: var(--arc-border-radius-medium);
        overflow: hidden;
      }
      div.alert {
        display: grid;
        padding: var(--arc-spacing-medium);
        grid-template-columns: auto 1fr;
        gap: var(--arc-spacing-medium);
        background: var(--alert-background);
        color: var(--alert-color);
        min-width: 300px;
        max-width: 500px;
      }
      div.alert--error {
        --alert-background: rgb(var(--arc-red-020));
        --alert-color: rgb(var(--arc-red-090));
      }
      div.alert--warning {
        --alert-background: rgb(var(--arc-yellow-020));
        --alert-color: rgb(var(--arc-yellow-090));
      }
      div.alert--info {
        --alert-background: rgb(var(--arc-blue-020));
        --alert-color: rgb(var(--arc-blue-090));
      }
      div.alert--success {
        --alert-background: rgb(var(--arc-green-020));
        --alert-color: rgb(var(--arc-green-090));
      }
      div.content {
        display: grid;
        gap: var(--arc-spacing-small);
      }
      span.title {
        font-weight: bold;
      }
      div.actions {
        display: grid;
        grid-auto-flow: column;
        gap: calc(var(--arc-spacing-x-small));
        justify-content: flex-end;
        padding: var(--arc-spacing-medium);
      }
      arc-icon-button {
        position: absolute;
        top: 4px;
        right: 4px;
      }
    `,
  ];

  /** @internal */
  @property({ type: Boolean, reflect: true }) active = false;

  /** @internal */
  @state() public config: AlertConfig;

  /** @internal */
  /** Returns the icon based on the notification type */
  private icon() {
    const { type } = this.config;
    switch (type) {
      case OPERATION_COLORS.error:
        return html`<ph-icon-warning size="x-large" />`;
      case OPERATION_COLORS.warning:
        return html`<ph-icon-warning-octagon size="x-large" />`;
      case OPERATION_COLORS.info:
        return html`<ph-icon-info size="x-large" />`;
      case OPERATION_COLORS.success:
        return html`<ph-icon-check-circle size="x-large" />`;
      default:
        return html`<ph-icon-info size="x-large" />`;
    }
  }

  /** @internal */
  /** Handles the close button click */
  private handleCloseBtnClick() {
    emit(this, ARC_EVENTS.hide);
  }

  protected render() {
    const { title, message, type, dismissable, action, secondaryAction } =
      this.config;
    return html`<div
        class=${classMap({
          alert: true,
          'alert--error': type === OPERATION_COLORS.error,
          'alert--warning': type === OPERATION_COLORS.warning,
          'alert--info': type === OPERATION_COLORS.info,
          'alert--success': type === OPERATION_COLORS.success,
        })}
      >
        ${this.icon()}
        ${dismissable === true ||
        (action === undefined && secondaryAction === undefined)
          ? html`
              <arc-icon-button @click=${this.handleCloseBtnClick}>
                <ph-icon-x slot="icon"></ph-icon-x>
              </arc-icon-button>
            `
          : ''}
        <div class="content">
          <span class="title">${title}</span>
          <span class="message">${message}</span>
        </div>
      </div>

      ${action || secondaryAction
        ? html`
            <div class="actions">
              ${secondaryAction
                ? html`
                    <arc-button
                      @click=${secondaryAction.action}
                      color="secondary"
                      type="outlined"
                    >
                      ${secondaryAction.label}
                    </arc-button>
                  `
                : ''}
              ${action
                ? html`
                    <arc-button
                      @click=${action.action}
                      color="primary"
                      type="outlined"
                    >
                      ${action.label}
                    </arc-button>
                  `
                : ''}
            </div>
          `
        : ''} `;
  }
}
