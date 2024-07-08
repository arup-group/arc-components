import { esbuildPlugin } from '@web/dev-server-esbuild';

/** @type {import('@web/test-runner').TestRunnerConfig} */
const CONFIG = {
  files: ['packages/components/src/**/*.test.ts'],
  concurrentBrowsers: 1,
  concurrency: 1,
  staticLogging: true,
  coverage: true,
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },
  plugins: [esbuildPlugin({ ts: true, target: 'auto' })],
  browserLogs: true,
  filterBrowserLogs(log) {
    for (const arg of log.args) {
      return !['Lit is in dev mode'].some((filteredLog) =>
        arg?.includes(filteredLog),
      );
    }
    return true;
  },
  testRunnerHtml: (testFramework) =>
    `<html>
      <head>
        <link rel="stylesheet" href="./packages/components/themes/index.css">
        <style>
           html, body {
            height: 100px !important;
           }
        </style>
      </head>
      <body>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>`,
};

export default CONFIG;
