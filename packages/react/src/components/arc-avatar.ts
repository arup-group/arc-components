import { createComponent } from '@lit-labs/react';
import React from 'react';
import ArcAvatarWC from '@arc-web/components/src/components/avatar/ArcAvatar.js';
import '@arc-web/components/src/components/avatar/arc-avatar.js';

export const ArcAvatar = createComponent({
  tagName: 'arc-avatar',
  elementClass: ArcAvatarWC,
  react: React,
});
