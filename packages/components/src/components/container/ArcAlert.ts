import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import {
  AlertConfiguration,
  OPERATIONS,
} from './constants/ContainerConstants.js';
import { emit } from '../../internal/event.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { THEME_COLORS } from '../../internal/constants/styleConstants.js';
import { BUTTON_TYPES } from '../button/constants/ButtonConstants.js';
import componentStyles from '../../styles/component.styles.js';

import '../ph-icon/warning/ph-icon-warning.js';
import '../ph-icon/warning-octagon/ph-icon-warning-octagon.js';
import '../ph-icon/info/ph-icon-info.js';
import '../ph-icon/check-circle/ph-icon-check-circle.js';

/**
 * @bata
 * @internal component should only be created by an `ArcOverlay` component
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
        --alert-background: rgb(var(--arc-background-color));
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
        width: 100%;
        min-width: 255px;
        max-width: 500px;
      }
      div.alert--error {
        --alert-background: rgb(var(--arc-background-color-error));
        --alert-color: rgb(var(--arc-color-error));
      }
      div.alert--warning {
        --alert-background: rgb(var(--arc-background-color-warning));
        --alert-color: rgb(var(--arc-color-warning));
      }
      div.alert--info {
        --alert-background: rgb(var(--arc-background-color-info));
        --alert-color: rgb(var(--arc-color-info));
      }
      div.alert--success {
        --alert-background: rgb(var(--arc-background-color-success));
        --alert-color: rgb(var(--arc-color-success));
      }
      div.content {
        display: grid;
        gap: var(--arc-spacing-x-small);
      }
      span.title {
        font-weight: bold;
      }
      span.message {
        display: block;
        max-height: 230px;
        overflow: scroll;
      }
      div.actions {
        display: grid;
        grid-auto-flow: column;
        gap: calc(var(--arc-spacing-x-small));
        justify-content: flex-end;
        padding: var(--arc-spacing-small);
      }
    `,
  ];

  /** @internal */
  @property({ type: Boolean, reflect: true }) active = false;

  /** @internal */
  @state() public config: AlertConfiguration;

  /** @internal */
  /** Returns the icon based on the notification type */
  private icon() {
    const { type } = this.config;
    switch (type) {
      case OPERATIONS.error:
        return html`<ph-icon-warning size="x-large" />`;
      case OPERATIONS.warning:
        return html`<ph-icon-warning-octagon size="x-large" />`;
      case OPERATIONS.info:
        return html`<ph-icon-info size="x-large" />`;
      case OPERATIONS.success:
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
    const { title, message, type, action, secondaryAction } = this.config;

    return html`<div
        class=${classMap({
          alert: true,
          'alert--error': type === OPERATIONS.error,
          'alert--warning': type === OPERATIONS.warning,
          'alert--info': type === OPERATIONS.info,
          'alert--success': type === OPERATIONS.success,
        })}
      >
        ${this.icon()}

        <div class="content">
          <span class="title">${title}</span>
          <span class="message">${message}</span>
        </div>
      </div>

      <div class="actions">
        ${action === undefined && secondaryAction === undefined
          ? html`
              <arc-button
                type=${BUTTON_TYPES.outlined}
                color=${type && type !== OPERATIONS.default
                  ? type
                  : THEME_COLORS.primary}
                @click=${this.handleCloseBtnClick}
                >Close</arc-button
              >
            `
          : ''}
        ${secondaryAction
          ? html`
              <arc-button
                @click=${secondaryAction.callback}
                color=${THEME_COLORS.secondary}
                type=${BUTTON_TYPES.outlined}
              >
                ${secondaryAction.label}
              </arc-button>
            `
          : ''}
        ${action
          ? html`
              <arc-button
                @click=${action.callback}
                color=${type && type !== OPERATIONS.default
                  ? type
                  : THEME_COLORS.primary}
                type=${BUTTON_TYPES.outlined}
              >
                ${action.label}
              </arc-button>
            `
          : ''}
      </div>`;
  }
}
