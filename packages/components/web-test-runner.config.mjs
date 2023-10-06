import { esbuildPlugin } from '@web/dev-server-esbuild';
import { playwrightLauncher } from '@web/test-runner-playwright';

const filteredLogs = ['Lit is in dev mode'];

/** @type {import('@web/test-runner').TestRunnerConfig} */
const CONFIG = {
  files: ['packages/components/src/**/*.test.ts'],
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    playwrightLauncher({ product: 'firefox' }),
    // playwrightLauncher({ product: 'webkit' }),
  ],
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },
  plugins: [esbuildPlugin({ ts: true, target: 'auto' })],
  filterBrowserLogs(log) {
    for (const arg of log.args) {
      return !filteredLogs.some((filteredLog) => arg.includes(filteredLog));
    }
    return true;
  },
};

export default CONFIG;
