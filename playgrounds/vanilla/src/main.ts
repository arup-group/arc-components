import '@arc-web/components/themes/index.css';
import '@arc-web/components';

class AppComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<arc-container>
      <arc-navbar slot="nav" logo="assets/arc-red.svg">
        <span slot="name">ARC Playground</span>
      </arc-navbar>

      <section id="playground"></section>
    </arc-container>`;
  }
}

customElements.define('app-root', AppComponent);
