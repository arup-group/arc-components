import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type ArcNavbar from './ArcNavbar.js';
import './arc-navbar.js';
import '../button/arc-button.js';

export default {
  title: 'Components/ArcNavbar',
  component: 'arc-navbar',
} as Meta;

export const Default: StoryFn<ArcNavbar> = ({ home, logo, notificationHistory }) => html`
  <arc-container>
    <arc-navbar
      slot="nav"
      home=${ifDefined(home || undefined)}
      logo=${ifDefined(logo || undefined)}
      ?notificationHistory="${notificationHistory}"
    ></arc-navbar>
 </arc-container>
`;
