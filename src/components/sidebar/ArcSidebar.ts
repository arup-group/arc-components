import { css, html, LitElement } from 'lit';
import { query } from 'lit/decorators.js';
import { componentStyles } from '../styles/component.styles.js';

export class ArcSidebar extends LitElement {
  static tag = 'arc-sidebar';

  static styles = [
    componentStyles,
    css`
      :host {
        --gap-distance: var(--arc-spacing-normal);
        width: clamp(15rem, 30%, var(--arc-sidebar-width))
      }

      /* Layout */
      #main {
        height: 100%;
        width: 100%;
        display: grid;
      }

      #main.gap {
        gap: var(--gap-distance);
      }

      ::slotted(*) {
        background: rgb(var(--arc-container-color));
      }
    `
  ]

  @query('#main')
  main!: HTMLElement;

  handleSlots = (e: any) => {
    const childNodes = e.target.assignedElements({flatten: true});

    if (childNodes.length > 1) {
      this.main.classList.add('gap')
    }
  }

  render() {
    return html`
      <main id='main'>
        <slot @slotchange=${this.handleSlots}></slot>
      </main>
    `
  }
}
