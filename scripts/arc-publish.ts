#!/usr/bin/env node

import { createProjectGraphAsync, workspaceRoot } from '@nx/devkit';
import { statSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';

/**
  * This script is used to publish all workspace packages to npm.
  *
  * It will:
  * 1. Ensure that the script is being run from GitHub Actions CI.
  * 2. Ensure dist paths exist for all packages with the `package` tag.
  * 2. Run `npm publish` on all packages with the `package` tag.
  */
async function arcPublish() {
  const CI = process.env['CI'];
  if (!CI) {
    console.error('This script should only be run from GitHub Actions CI.');
    process.exit(1);
  }
  const projects = await createProjectGraphAsync().then((graph) => graph.nodes);
  const packages = Object.values(projects).filter((node) => node.type === 'lib' && node.data.tags?.includes('package'));
  for (const pkg of packages) {
    const distPath = join(workspaceRoot, pkg.data.targets?.build?.options?.outputPath ?? `dist/packages/${pkg.name}`);
    const distExists = statSync(distPath, { throwIfNoEntry: false })?.isDirectory();
    if (!distExists) {
      console.error(`Dist path does not exist for ${pkg.name}.`);
      process.exit(1);
    }
    const publishCommand = spawnSync(
      'npm publish --access public',
      {
        stdio: ['inherit', 'inherit', 'pipe'],
        shell: true,
        cwd: distPath,
        env: { ...process.env },
      },
    );
    if (publishCommand.status !== 0) {
      console.error(`Failed to publish ${pkg.name} to npm.`);
      console.error(publishCommand.stderr.toString());
      process.exit(1);
    }
  }
}

arcPublish();
