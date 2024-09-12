import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import type ArcBottombar from './ArcBottombar.js';
import '../container/arc-container.js';
import './arc-bottombar.js';
import '../button/arc-button.js';
import '../icon-button/arc-icon-button.js';
import '../ph-icon/house/ph-icon-house.js';
import '../ph-icon/question/ph-icon-question.js';

export default {
  title: 'Components/ArcBottombar',
  component: 'arc-bottombar',
} as Meta;

export const Default: StoryFn<ArcBottombar> = () =>
  html`<arc-container></arc-container>`;

export const WithButtonsFromNavbar: StoryFn<ArcBottombar> = () =>
  html`<arc-container>
    <arc-navbar slot="nav">
      <arc-button type="tab">Home</arc-button>
      <arc-button type="tab">About</arc-button>
    </arc-navbar>

    <arc-bottombar slot="bottom">
      <arc-icon-button>
        <ph-icon-house slot="icon"></ph-icon-house>
        Home
      </arc-icon-button>
      <arc-icon-button>
        <ph-icon-question slot="icon"></ph-icon-question>
        About
      </arc-icon-button>
    </arc-bottombar>
  </arc-container>`;
