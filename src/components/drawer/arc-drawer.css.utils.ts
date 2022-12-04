import { createElement, CreateElement } from '../../internal/story-utils.js';
import { DRAWER_PLACEMENTS } from './constants/DrawerConstants.js';
import { ARC_ICON_BUTTON_DEFAULT_ARGS, ArcIconButton } from '../icon-button/icon-button.css.utils.js';
import { ICON_TYPES } from '../icon/constants/IconConstants.js';

/**
 * ArcDrawer Default Arguments.
 */
export const ARC_DRAWER_DEFAULT_ARGS = {
  open: true,
  contained: true,
  placement: DRAWER_PLACEMENTS.end,
  customLabel: 'Drawer',
};

/**
 * Create ArcDrawer element.
 */
export const ArcDrawer: CreateElement<typeof ARC_DRAWER_DEFAULT_ARGS> = ({
  open,
  contained,
  placement,
  customLabel,
}) => {
  const arcCard = createElement(
    'div',
    {
      'arc-drawer': true,
      'arc-drawer--contained': contained,
      'arc-drawer--placement-top': placement === DRAWER_PLACEMENTS.top,
      'arc-drawer--placement-end': placement === DRAWER_PLACEMENTS.end,
      'arc-drawer--placement-bottom': placement === DRAWER_PLACEMENTS.bottom,
      'arc-drawer--placement-start': placement === DRAWER_PLACEMENTS.start,
      'arc-drawer--is-open': open,
    },
    { style: { value: 'width: 300px;', set: true } }
  );
  const overlay = createElement(
    'div',
    { 'arc-drawer--overlay': true },
    { role: { value: 'presentation', set: true }, tabindex: { value: '-1', set: true } }
  );
  const panel = createElement(
    'div',
    { 'arc-drawer--panel': true },
    {
      role: { value: 'dialog', set: true },
      'aria-modal': { value: 'true', set: true },
      'aira-hidden': { value: open ? 'true' : 'false', set: true },
      'aira-label': { value: customLabel, set: customLabel.length > 0 },
      'aria-labelledby': { value: 'title', set: customLabel.length === 0 },
      tabindex: { value: '0', set: true },
    }
  );
  const header = createElement('header', { 'arc-drawer--header': true });
  const title = createElement('h2', { 'arc-drawer--title': true });
  title.innerHTML = 'Drawer Title';
  const close = ArcIconButton({
    ...ARC_ICON_BUTTON_DEFAULT_ARGS,
    label: '',
    name: ICON_TYPES['close-circle'],
  });
  header.append(title, close);
  const body = createElement('div', { 'arc-drawer--body': true });
  body.innerHTML = 'Drawer Body';
  const footer = createElement('footer', { 'arc-drawer--footer': true });
  footer.innerHTML = 'Drawer Footer';
  panel.append(header, body, footer);
  arcCard.append(overlay, panel);
  return arcCard;
};

export const WrapperWithArcDrawer: CreateElement<typeof ARC_DRAWER_DEFAULT_ARGS> = args => {
  const wrapper = createElement(
    'div',
    {},
    {
      style: {
        value:
          'height: 18rem; position: relative; box-shadow: var(--arc-box-shadow); margin-bottom: var(--arc-spacing-medium);',
        set: true,
      },
    }
  );
  const arcDrawer = ArcDrawer(args);
  wrapper.append(arcDrawer);
  return wrapper;
};
