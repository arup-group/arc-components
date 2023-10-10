import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import type { AccountInfo } from '@azure/msal-browser';
import { ARC_EVENTS } from '@arc-web/components/src/internal/constants/eventConstants.js';
import ArcSSOWC from '@arc-web/components/src/components/sso/ArcSSO.js';
import '@arc-web/components/src/components/sso/arc-sso.js';

export const ArcSSO = createComponent({
  tagName: 'arc-sso',
  elementClass: ArcSSOWC,
  react: React,
  events: {
    onArcAuth: ARC_EVENTS.auth as EventName<
      CustomEvent<{ authenticated: boolean; account: AccountInfo }>
    >,
  },
});
