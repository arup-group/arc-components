import { render } from '@lit-labs/ssr';
import { html } from 'lit';

import '@arc-web/components';

export interface IndexProps {
  name: string;
}

export function* renderIndex({ name }: IndexProps) {
  yield `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>ARC Playground</title>
      <base href="/" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="A playground for the ARC Web Components" />
      <meta name="theme-color" content="#E61E28" />
      <link rel="manifest" href="assets/manifest.json" />
      <link rel="apple-touch-icon" href="assets/icons/favicon_152.ico" />
      <link rel="icon" href="assets/icons/152x152.png" />
      <link rel="icon" type="image/x-icon" href="assets/icons/favicon_96.ico" />
      <link rel="stylesheet" href="dist/packages/components/themes/index.css" />
    <head>
    <body hydration-pending>
      <script>
        if (HTMLTemplateElement.prototype.hasOwnProperty('shadowRoot')) {
          document.body.removeAttribute('hydration-pending');
        }
      </script>
  `;

  yield* render(html`<arc-button color="primary">Hello ${name}</arc-button>`);

  yield `
      <script type="module">
        const hydrateSupport = import('@lit-labs/ssr-client/lit-element-hydrate-support.js');
        if (!HTMLTemplateElement.prototype.hasOwnProperty('shadowRoot')) {
          const { hydrateShadowRoots } = await import('@webcomponents/template-shadowroot/template-shadowroot.js');
          hydrateShadowRoots(document.body);
          document.body.removeAttribute('hydration-pending');
        }
        await hydrateSupport;
        document.body.removeAttribute('hydration-pending');

        // IMPORT ROOT COMPONENTS
        import('./dist/packages/components/src/index.js');
      </script>
    </body>
  </html>
  `;
}
