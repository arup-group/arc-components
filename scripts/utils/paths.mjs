import { promisify } from 'util';
import { resolve } from 'path';
import fs from 'fs';

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

/**
 * Get File Paths.
 *
 * Recursively get all file paths in a directory.
 *
 * @param {string} dir - The directory to search.
 * @returns {Promise<string[]>} - The file paths in the directory.
 */
export async function getFilePaths(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(
    subdirs.map(async (subdir) => {
      const res = resolve(dir, subdir);
      return (await stat(res)).isDirectory() ? getFilePaths(res) : res;
    })
  );
  return files.reduce((a, f) => a.concat(f), []);
}
