import devkit from '@nx/devkit';
import { getFilePaths } from './utils/paths.mjs';
import { isCI } from './utils/is-ci.mjs';
import { parseArgs } from 'node:util';

/**
 * Ensure script is not run on CI.
 */
if (isCI()) {
  console.log('Cannot run this script on CI.');
  process.exit(1);
}

/**
 * Ensure script is run from workspace root.
 */
if (process.cwd() !== devkit.workspaceRoot) {
  console.log('Must run this script from workspace root.');
  process.exit(1);
}

/**
 * Get the version from the command line arguments.
 */
const VERSION = parseArgs({
  strict: true,
  options: { version: { type: 'string' } },
}).values.version;

/**
 * Ensure version is provided.
 */
if (!VERSION) {
  console.log('Must provide a version.');
  process.exit(1);
}

/**
 * Ensure version is valid.
 */
if (!/^\d+\.\d+\.\d+$/.test(VERSION) || !['major', 'minor', 'patch'].includes(VERSION)) {
  console.log('Must provide a valid version.');
  process.exit(1);
}

/**
 * Get the files to update.
 */

const filesPaths = await getFilePaths(`${devkit.workspaceRoot}/packages`);
const packageJsonPaths = filesPaths.filter((filePath) => filePath.endsWith('package.json') && !filePath.includes('node_modules'));
const packageJsons = packageJsonPaths.map(async (packageJsonPath) => {
  const packageJson = await rad
  return { packageJsonPath, packageJson };
});
