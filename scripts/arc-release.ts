#!/usr/bin/env node

import { createProjectGraphAsync, workspaceRoot } from '@nx/devkit';
import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

/**
  * This script is used to version and tag all workspace packages for release.
  *
  * It will:
  * 1. Run `nx release version` on all packages with the `package` tag.
  * 2. Update the peerDependencies of the `react` package to the new version.
  * 3. Run `nx build` on all packages with the `package` tag.
  * 4. Commit all changes.
  * 5. Tag the commit with the new version.
  */
async function arcRelease() {
  const projects = await createProjectGraphAsync().then((graph) => graph.nodes);
  const releaseCommand = spawnSync(
    'npx nx release version --projects=tags:project',
    {
      stdio: ['inherit', 'inherit', 'pipe'],
      shell: true,
      cwd: workspaceRoot,
    },
  );
  if (releaseCommand.status !== 0) {
    console.error(releaseCommand.stderr.toString());
    process.exit(1);
  }
  const reactPackage = Object.values(projects).filter((node) => node.type === 'lib' && node.name.startsWith('react'))[0];
  const reactPackageJson = JSON.parse(readFileSync(`./${reactPackage.data.root}/package.json`, 'utf-8'));
  const newVersion = reactPackageJson['version'];
  reactPackageJson['peerDependencies']['@arc-web/components'] = `${newVersion}`;
  writeFileSync(`./${reactPackage.data.root}/package.json`, JSON.stringify(reactPackageJson, null, 2));
  const buildCommand = spawnSync(
    'npx nx run-many --targets=build,storybook:build --projects=tags:project',
    {
      stdio: 'inherit',
      shell: true,
      cwd: workspaceRoot,
    },
  );
  if (buildCommand.status !== 0) {
    console.error(buildCommand.stderr.toString());
    process.exit(1);
  }
  const gitAddCommand = spawnSync(
    'git add .',
    {
      stdio: 'inherit',
      shell: true,
      cwd: workspaceRoot,
    },
  );
  if (gitAddCommand.status !== 0) {
    console.error(gitAddCommand.stderr.toString());
    process.exit(1);
  }
  const gitCommitCommand = spawnSync(
    `git commit -m "chore(workspace): release ${newVersion}"`,
    {
      stdio: 'inherit',
      shell: true,
      cwd: workspaceRoot,
    },
  );
  if (gitCommitCommand.status !== 0) {
    console.error(gitCommitCommand.stderr.toString());
    process.exit(1);
  }
  const gitTagCommand = spawnSync(
    `git tag ${newVersion}`,
    {
      stdio: 'inherit',
      shell: true,
      cwd: workspaceRoot,
    },
  );
  if (gitTagCommand.status !== 0) {
    console.error(gitTagCommand.stderr.toString());
    process.exit(1);
  }
  process.exit(0);
}

arcRelease().catch((error) => {
  console.error(error);
  process.exit(1);
});
