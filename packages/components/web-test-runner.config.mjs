import { esbuildPlugin } from '@web/dev-server-esbuild';

const { CI = false } = process.env;

/** @type {import('@web/test-runner').TestRunnerConfig} */
const CONFIG = {
  files: ['packages/components/src/**/*.test.ts'],
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },
  plugins: [esbuildPlugin({ ts: true, target: 'auto' })],
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
          /**
           * Reset styles which cause ResizeOberver loop in tests
           * The issue has not been reproducible in browsers
           **/
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
