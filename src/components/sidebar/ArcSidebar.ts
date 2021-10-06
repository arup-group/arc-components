import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { componentStyles } from '../styles/component.styles.js';

import '../icon/arc-icon.js';

export class ArcSidebar extends LitElement {
  static tag = 'arc-sidebar';

  static styles = [
    componentStyles,
    css`
      :host {
        --gap-distance: var(--arc-spacing-normal);
      }

      :host([open]) {
        width: clamp(15rem, 30%, var(--arc-sidebar-width));
      }

      /* Open sidebar */
      #sidebar {
        height: 100%;
        display: grid;
      }

      #sidebar.gap {
        gap: var(--gap-distance);
      }

      #toggleClose {
        position: absolute;
        top: var(--arc-spacing-medium);
        right: var(--arc-spacing-medium);
      }

      #toggleClose:hover {
        cursor: pointer;
      }

      /* Closed sidebar */
      #toggleOpen {
        width: 1.5rem;
        height: 3rem;
        --btn-color: rgb(var(--arc-font-color));
        --btn-background: rgb(var(--arc-container-color));
      }

      /* Background */
      ::slotted(*),
      #toggleOpen {
        background: rgb(var(--arc-container-color));
      }
    `
  ]

  @property({ type: Boolean, reflect: true })
  open: boolean = true;

  @query('#sidebar')
  sidebar!: HTMLElement;

  _handleSlots = (e: any) => {
    const childNodes = e.target.assignedElements({flatten: true});

    if (childNodes.length > 1) {
      this.sidebar.classList.add('gap')
    }
  }

  _setState = () => {
    this.open = !this.open;
  }

  render() {
    return html`
      ${this.open ? html`
        <div id='sidebar'>
          <div id='toggleClose'>
            <arc-icon name='arrow-left' @click=${this._setState}></arc-icon>
          </div>
          <slot @slotchange=${this._handleSlots}></slot>
        </div>
      ` : html`
        <arc-button id='toggleOpen' type='tile' @click=${this._setState}>
          <arc-icon name='arrow-right'></arc-icon>
        </arc-button>
      `}
    `
  }
}
