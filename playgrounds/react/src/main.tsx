import React from 'react';

import '@arc-web/components/themes/index.css';

import { createRoot } from 'react-dom/client';
import { App } from './app';

createRoot(document.querySelector('app-root')!).render(<App />);
