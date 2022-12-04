import { createElement, CreateElement } from '../../internal/story-utils.js';

/**
 * ArcImage Default Arguments.
 */
export const ARC_IMAGE_DEFAULT_ARGS = {
  src: 'https://picsum.photos/900',
  alt: 'A random generated background from picsum.photos.',
  width: '200px',
  height: '200px',
};

/**
 * Create ArcImage element.
 */
export const ArcImage: CreateElement<typeof ARC_IMAGE_DEFAULT_ARGS> = ({ src, alt, width, height }) => {
  const arcImage = createElement(
    'div',
    { 'arc-image': true, 'arc-image--has-image': src.length > 0, 'arc-image--loading': false },
    { style: { value: `width: ${width}; height: ${height}`, set: true } }
  );
  const image = createElement(
    'img',
    {},
    { id: { value: 'image', set: true }, src: { value: src, set: true }, alt: { value: alt, set: true } }
  );
  const overlay = createElement('div', { 'arc-image--overlay': true }, { id: { value: 'overlay', set: true } });
  const loader = createElement('div', { 'arc-image--loader': true }, { id: { value: 'loader', set: true } });
  const placeholder = createElement(
    'svg',
    { 'arc-image--placeholder': true },
    {
      id: { value: 'placeholder', set: true },
      width: { value: '100%', set: true },
      height: { value: '100%', set: true },
      viewBox: { value: '0 0 360 172', set: true },
      fill: { value: 'none', set: true },
      xmlns: { value: 'http://www.w3.org/2000/svg', set: true },
    }
  );
  const path = createElement(
    'path',
    {},
    {
      d: { value: 'M182.36 55L216.446 114.04H148.273L182.36 55Z', set: true },
      fill: { value: 'rgb(var(--arc-grey-030))', set: true },
    }
  );
  const circle = createElement(
    'circle',
    {},
    {
      cx: { value: '236', set: true },
      cy: { value: '55', set: true },
      r: { value: '17', set: true },
      fill: { value: 'rgb(var(--arc-grey-030))', set: true },
    }
  );
  const rect = createElement(
    'rect',
    {},
    {
      x: { value: '122', set: true },
      y: { value: '87', set: true },
      width: { value: '27', set: true },
      height: { value: '27', set: true },
      fill: { value: 'rgb(var(--arc-grey-030))', set: true },
    }
  );
  placeholder.append(path, circle, rect);
  overlay.append(loader, placeholder);
  arcImage.append(image, overlay);
  return arcImage;
};
