import { esbuildPlugin } from '@web/dev-server-esbuild';
import { playwrightLauncher } from '@web/test-runner-playwright';

const { CI = false } = process.env;

/** @type {import('@web/test-runner').TestRunnerConfig} */
const CONFIG = {
  files: ['packages/components/src/**/*.test.ts'],
  browsers: [
    'chromium',
    'firefox',
    // 'webkit'
  ].map((product) =>
    playwrightLauncher({
      product,
      concurrency: CI ? 1 : 5,
    }),
  ),
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },
  plugins: [esbuildPlugin({ ts: true, target: 'auto' })],
  filterBrowserLogs(log) {
    for (const arg of log.args) {
      return !['Lit is in dev mode'].some((filteredLog) =>
        arg.includes(filteredLog),
      );
    }
    return true;
  },
};

export default CONFIG;
