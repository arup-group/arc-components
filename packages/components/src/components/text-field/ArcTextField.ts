import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../spinner/arc-spinner'; // Ensure you have an arc-spinner component for the loading state
import styles from './arc-textfield.styles';


export default class ArcTextField extends LitElement {
  /** @internal */
  static tag = 'arc-textfield';

  static styles = styles;

  @property({ type: String, reflect: true }) value = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) loading = false;
  @property({ type: String }) defaultValue = '';

  protected render() {
    return html`
      <div class=${classMap({ 'loading-container': this.loading })}>
        <input
          type="text"
          .value=${this.value}
          @input=${this.handleInput}
          ?disabled=${this.disabled}
          placeholder=${this.defaultValue}
        />
        ${this.loading ? html`<arc-spinner></arc-spinner>` : null}
      </div>
    `;
  }

  private handleInput(event: InputEvent) {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.dispatchEvent(
      new CustomEvent('input-change', { detail: { value: this.value } }),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-textfield': ArcTextField;
  }
}
