import { start } from '@docusaurus/core/lib';
import { ExecutorContext } from '@nrwl/devkit';
import * as path from 'path';

interface Scheme {}

export default async function* runExecutor(
  options: Scheme,
  context: ExecutorContext
) {
  const projectRoot = path.join(
    context.root,
    context.workspace!.projects[context.projectName ?? ''].root
  );
  const port = options.port.toString();

  await start(projectRoot, {
    port: '4200',
    open: false,
  });

  yield {
    baseUrl: `http://localhost:${port}`,
    success: true,
  };

  // This Promise intentionally never resolves, leaving the process running
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  await new Promise<{ success: boolean }>(() => {});
}
