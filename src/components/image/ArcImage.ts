import { css, html, LitElement } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { emit } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

import '../spinner/arc-spinner.js';

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

      #image,
      .has-image #overlay,
      .loading #placeholder,
      #loader {
        display: none;
      }

      .has-image #image {
        width: 100%;
        height: 100%;
        display: block;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        object-fit: cover;
      }

      /* Loader and placeholder */
      #overlay {
        width: 100%;
        height: 100%;
        background-color: rgb(var(--arc-grey-020));
      }

      /* Loader */
      .loading #loader {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #loader svg {
        position: absolute;
      }
    `,
  ];

  /** @internal */
  @query('#main') container: HTMLElement;

  /** @internal */
  @query('#image') image: HTMLImageElement;

  /** @internal */
  @query('#triangle') triangle: HTMLElement;

  /** @internal */
  @query('#square') square: HTMLElement;

  /** @internal */
  @query('#circle') circle: HTMLElement;

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
    // this._loading = false;
    this._hasImage = e.type === 'load';
    this._removeObserver();
    if (!this._hasImage) return;

    emit(this, ARC_EVENTS.loaded, {
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

  loadingTemplate() {
    return html`
      <div id="loader">
        <svg width="75" height="65" viewBox="0 0 75 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.8514 0L74.9618 64.2771H0.741001L37.8514 0Z" fill="rgb(var(--arc-grey-030))" />
        </svg>
        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.300519 0.300555H60.9016V60.9016H0.300519V0.300555Z" fill="rgb(var(--arc-grey-030))" />
        </svg>
        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.300519 30.6011C0.300518 13.8666 13.8665 0.300554 30.601 0.300556C47.3356 0.300555 60.9016 13.8666 60.9016 30.6011C60.9016 47.3356 47.3356 60.9016 30.601 60.9016C13.8665 60.9016 0.300518 47.3356 0.300519 30.6011Z"
            fill="rgb(var(--arc-grey-030))"
          />
        </svg>
      </div>
    `;
  }

  placeholderTemplate() {
    return html`
      <svg
        id="placeholder"
        width="100%"
        height="100%"
        viewBox="0 0 360 172"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M182.36 55L216.446 114.04H148.273L182.36 55Z" fill="rgb(var(--arc-grey-030))" />
        <circle cx="236" cy="55" r="17" fill="rgb(var(--arc-grey-030))" />
        <rect x="122" y="87" width="27" height="27" fill="rgb(var(--arc-grey-030))" />
      </svg>
    `;
  }

  render() {
    const styles = {
      width: this.width ? this.handleSize(this.width) : undefined,
      height: this.height ? this.handleSize(this.height) : undefined,
    };

    return html`
      <div id="main" class=${classMap({ 'has-image': this._hasImage })} style=${styleMap(styles)}>
        <img id="image" src="" alt=${this.alt} />
        <div id="overlay" class=${classMap({ loading: this._loading })}>
          ${this.loadingTemplate()} ${this.placeholderTemplate()}
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
