import { createElement, CreateElement } from '../../internal/story-utils.js';
import { ARC_BUTTON_DEFAULT_ARGS, ArcButton } from '../button/arc-button.css.utils.js';
import { ARC_IMAGE_DEFAULT_ARGS, ArcImage } from '../image/arc-image.css.utils.js';

/**
 * ArcCard Default Arguments.
 */
export const ARC_CARD_DEFAULT_ARGS = {};

/**
 * Create ArcCard element.
 */
export const ArcCard: CreateElement<typeof ARC_CARD_DEFAULT_ARGS> = () => {
  const arcCard = createElement(
    'div',
    {
      'arc-card': true,
      'arc-card--has-header': true,
      'arc-card--has-image': true,
      'arc-card--has-body': true,
      'arc-card--has-footer': true,
    },
    { style: { value: 'width: 300px;', set: true } }
  );
  const header = createElement('header', {
    'arc-card--header': true,
  });
  const heading = createElement('strong');
  heading.innerHTML = 'Header';
  header.append(heading);
  const content = createElement('div', {
    'arc-card--content': true,
  });
  const image = createElement('div', {
    'arc-card--image': true,
  });
  const arcImage = ArcImage({ ...ARC_IMAGE_DEFAULT_ARGS, width: '100%', height: 'auto' });
  image.append(arcImage);
  const body = createElement('div', {
    'arc-card--body': true,
  });
  body.innerHTML = 'This is a basic card with a header, an image and a footer.';
  const footer = createElement('footer', {
    'arc-card--footer': true,
  });
  const action = ArcButton({ ...ARC_BUTTON_DEFAULT_ARGS });
  action.innerHTML = 'Action';
  footer.append(action);
  content.append(image, body, footer);
  arcCard.append(header, content);
  return arcCard;
};
