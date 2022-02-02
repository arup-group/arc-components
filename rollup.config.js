import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import injectProcessEnv from 'rollup-plugin-inject-process-env';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
  input: './out-tsc/arc.js',
  output: {
    entryFileNames: 'arc.js',
    chunkFileNames: '[hash].js',
    assetFileNames: '[hash][extname]',
    format: 'es',
    dir: 'dist'
  },
  preserveEntrySignatures: false,

  plugins: [
    /* Resolve bare module imports */
    nodeResolve(),
    /* Minify JS */
    terser(),
    /* Compile JS to a lower language target */
    babel({
      babelHelpers: 'bundled',
      presets: [
        [
          require.resolve('@babel/preset-env'),
          {
            targets: [
              'last 3 Chrome major versions',
              'last 3 Firefox major versions',
              'last 3 Edge major versions',
              'last 3 Safari major versions'
            ],
            modules: false,
            bugfixes: true
          }
        ]
      ],
      plugins: [
        [
          require.resolve('babel-plugin-template-html-minifier'),
          {
            modules: { lit: ['html', { name: 'css', encapsulation: 'style' }] },
            failOnError: false,
            strictCSS: true,
            htmlMinifier: {
              collapseWhitespace: true,
              conservativeCollapse: true,
              removeComments: true,
              caseSensitive: true,
              minifyCSS: true
            }
          }
        ]
      ]
    }),
    injectProcessEnv({
      NODE_ENV: 'production'
    }),
    copy({
      targets: [
        { src: ['assets', 'themes'], dest: 'dist' },
        { src: ['out-tsc/arc.d.ts', 'out-tsc/components/**/!(*.stories).{js,d.ts}', 'out-tsc/internal', 'out-tsc/styles', 'out-tsc/utilities'], dest: 'dist'}
      ],
      flatten: false
    })
  ]
};
