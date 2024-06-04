import { build } from '@docusaurus/core/lib';
import { ExecutorContext } from '@nrwl/devkit';
import * as path from 'path';
import { join } from 'path';

interface Schema {
  outputPath: string;
}

export default async function* runExecutor(
  options: Schema,
  context: ExecutorContext
) {
  const projectRoot = path.join(
    context.root,
    context.workspace!.projects[context.projectName ?? ''].root
  );

  try {
    await build(projectRoot, {
      bundleAnalyzer: true,
      outDir: join(context.root, options.outputPath),
      minify: true,
      open: false,
    });

    yield {
      success: true,
    };
  } catch (err) {
    console.error(err);
    yield {
      success: false,
    };
  }
}
