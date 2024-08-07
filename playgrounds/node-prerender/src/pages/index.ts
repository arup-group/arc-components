import { render } from '@lit-labs/ssr';
import { html } from 'lit';
import fs from 'fs';

import '@arc-web/components';

export function* renderIndex() {
  const index = fs.readFileSync(
    'dist/packages/components/themes/index.css',
    'utf8',
  );

  yield `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>ARC Playground</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="A playground for the ARC Web Components" />
      <meta name="theme-color" content="#E61E28" />
      <link rel="manifest" href="assets/manifest.json" />
      <link rel="apple-touch-icon" href="assets/icons/favicon_152.ico" />
      <link rel="icon" href="assets/icons/152x152.png" />
      <link rel="icon" type="image/x-icon" href="assets/icons/favicon_96.ico" />
      <style>
        ${index}
      </style>
    <head>
  `;

  yield* render(html`<arc-container></arc-container>`);

  yield `
    </body>
  </html>
  `;
}
