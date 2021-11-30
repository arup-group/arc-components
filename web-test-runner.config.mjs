import { esbuildPlugin } from '@web/dev-server-esbuild';
const filteredLogs = ['Running in dev mode', 'lit-html is in dev mode'];

export default /** @type {import('@web/test-runner').TestRunnerConfig} */ ({
  /** Test files to run */
  files: 'src/**/*.test.ts',
  plugins: [esbuildPlugin({ ts: true })],

  /** Resolve bare module imports */
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },

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
