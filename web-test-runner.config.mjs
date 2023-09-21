import { esbuildPlugin } from '@web/dev-server-esbuild';
import { fromRollup } from '@web/dev-server-rollup';
import { playwrightLauncher } from '@web/test-runner-playwright';
import rollupReplace from '@rollup/plugin-replace';

const filteredLogs = ['Running in dev mode', 'lit-html is in dev mode'];
const replace = fromRollup(rollupReplace);

export default /** @type {import('@web/test-runner').TestRunnerConfig} */ ({
  /** Test files to run */
  files: 'src/**/*.test.ts',

  /** Browsers to run tests on */
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    // playwrightLauncher({ product: 'webkit' }),
    // playwrightLauncher({ product: 'firefox' }),
  ],

  /** Resolve bare module imports */
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },
  plugins: [
    esbuildPlugin({ ts: true }),
    replace({
      'process.env.NODE_ENV': '"development"',
    })
  ],

  /** Filter out lit dev mode logs */
  filterBrowserLogs(log) {
    for (const arg of log.args) {
      if (typeof arg === 'string' && filteredLogs.some(l => arg.includes(l))) {
        return false;
      }
    }
    return true;
  },
});
