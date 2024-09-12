import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { INPUT_SIZES } from '../../internal/constants/styleConstants.js';
import { CHIP_TYPES } from './constants/ChipConstants.js';
import type ArcChip from './ArcChip.js';
import './arc-chip.js';
import '../avatar/arc-avatar.js';
import { ifDefined } from 'lit/directives/if-defined.js';

export default {
  title: 'Components/ArcChip',
  component: 'arc-chip',
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(INPUT_SIZES),
    },
    type: {
      control: 'select',
      options: Object.values(CHIP_TYPES),
    },
  },
} as Meta;

export const Default: StoryFn<ArcChip> = ({ size, type, clearable }) => html`
  <arc-chip
    size=${ifDefined(size)}
    type=${ifDefined(type)}
    ?clearable=${clearable}
  >
  </arc-chip>
`;

export const WithAvatar: StoryFn<ArcChip> = ({ size, type, clearable }) => html`
  <arc-chip
    size=${ifDefined(size)}
    type=${ifDefined(type)}
    ?clearable=${clearable}
  >
    <arc-avatar slot="avatar" name="User Name"></arc-avatar>
    Chip
  </arc-chip>
`;
