import { css, html, LitElement } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { emit } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

import '../spinner/arc-spinner.js';

import { imageFallback } from './image-fallback.js';

/**
 * @event arc-event-name - A description of the event.
 */
export default class ArcImage extends LitElement {
  static tag = 'arc-image';

  static styles = [
    componentStyles,
    css`
      #main {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #image {
        display: none;
      }

      #overlay {
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(var(--arc-grey-020));
      }

      .has-image #image {
        display: block;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        object-fit: cover;
      }

      .has-image #overlay {
        display: none;
      }
    `,
  ];

  /** @internal */
  @query('#main') container: HTMLElement;

  /** @internal */
  @query('#image') image: HTMLImageElement;

  /** @internal - Reference to the intersection observer. */
  private _intersectionObserver: IntersectionObserver;

  /** @internal - Options that define certain aspects of the observer’s behavior. */
  private _observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: [0, 1],
  };

  /** @internal - Used to set a timeout on loading the image. */
  private _loadTimer: number | null = null;

  /** @internal - Loading state of the image. */
  @state() private _loading: boolean = false;

  /** @internal - Is a valid image loaded?. */
  @state() private _hasImage: boolean = false;

  /** Set the path to the image. */
  @property({ type: String }) src: string;

  /** Set the alternate text for the image. */
  @property({ type: String }) alt: string;

  /** Set the delay in ms before loading the image. */
  @property({
    type: Number,
    reflect: true,
    converter: (attrValue: string | null) => {
      if (!attrValue) return;
      return parseInt(attrValue, 10) || 1000;
    },
  })
  delay: number = 1000;

  /** Set the width of the image. */
  @property({ type: String }) width: string;

  /** Set the height of the image. */
  @property({ type: String }) height: string;

  @watch('src', { waitUntilFirstUpdate: true })
  handleSrcChange() {
    this._attachObserver();
  }

  firstUpdated() {
    this._attachObserver();
  }

  private _attachObserver() {
    this._removeObserver();
    this._intersectionObserver = new IntersectionObserver(this.handleIntersection.bind(this), this._observerOptions);
    this._intersectionObserver.observe(this.container);
  }

  private _removeObserver() {
    if (!this._intersectionObserver) return;
    this._intersectionObserver.disconnect();
  }

  /* Callback that gets fired whenever the first or last pixel of the container is intersecting the root element */
  handleIntersection(entries: any[]) {
    entries.forEach(({ intersectionRatio }) => {
      if (intersectionRatio === 0) {
        if (this._loadTimer) {
          clearTimeout(this._loadTimer);
          this._loadTimer = null;
        }
      } else if (intersectionRatio === 1) {
        this._loadTimer = window.setTimeout(this.loadImage.bind(this), this.delay);
      }
    });
  }

  loadImage() {
    if (!this.src) return;
    this._loading = true;
    this.image.src = this.src;
    this.image.onload = this.imageResponse.bind(this);
    this.image.onerror = this.imageResponse.bind(this);
  }

  imageResponse(e: any) {
    const { type } = e;
    this._loading = false;
    this._hasImage = type === 'load';
    this._removeObserver();

    emit(this, this._hasImage ? ARC_EVENTS.loaded : ARC_EVENTS.error, {
      detail: e,
    });
  }

  handleSize(size: string) {
    if (size.endsWith('px') || size.endsWith('%')) {
      return size;
    } else {
      return `${size}px`;
    }
  }

  render() {
    const styles = {
      height: this.height ? this.handleSize(this.height) : undefined,
      width: this.width ? this.handleSize(this.width) : undefined,
    };

    return html`
      <div id="main" class=${classMap({ 'has-image': this._hasImage })} style=${styleMap(styles)}>
        <img
          id="image"
          src=""
          alt=${this.alt}
          width=${ifDefined(this.width || undefined)}
          height=${ifDefined(this.height || undefined)}
        />
        <div id="overlay">
          ${this._loading ? html`<arc-spinner style="font-size: 2rem;"></arc-spinner>` : imageFallback}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-image': ArcImage;
  }
}
