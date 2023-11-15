import { RenderResultReadable } from '@lit-labs/ssr/lib/render-result-readable.js';
import { renderIndex } from './pages/index.js';
import fs from 'fs';

const index = new RenderResultReadable(renderIndex());
fs.mkdirSync('./dist/playgrounds/node-prerender/dist');
index.pipe(
  fs.createWriteStream('./dist/playgrounds/node-prerender/dist/index.html'),
);
index.on('end', () => console.log('Prerendered index.html'));
