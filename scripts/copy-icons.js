/* This script copies the ARC icons */
/* eslint-disable no-console */
import commandLineArgs from 'command-line-args';
import fs from 'fs';
import mkdirp from 'mkdirp';
import path from 'path';

const { outdir } = commandLineArgs({ name: 'outdir', type: String });
const assetDir = './src/assets';
const assetOutDir = path.join(outdir, 'assets');

console.log('Copying icons');

mkdirp.sync(assetOutDir);

try {
  fs.copyFile(`${assetDir}/icons.svg`, `${assetOutDir}/icons.svg`, (err) => {
    if (err) throw err;
    console.log('Successfully copied the icons');
  });
} catch (err) {
  console.error(err);
}
