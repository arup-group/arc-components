import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { AccountInfo } from '@azure/msal-browser';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import ArcSSOWC from './ArcSSO.js';
import './arc-sso.js';

export const ArcSSO = createComponent({
  tagName: 'arc-sso',
  elementClass: ArcSSOWC,
  react: React,
  events: {
    onArcAuth: ARC_EVENTS.auth as EventName<CustomEvent<{ authenticated: boolean; account: AccountInfo }>>,
  },
});
