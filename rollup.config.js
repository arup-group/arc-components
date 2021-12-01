import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
  input: './out-tsc/src/index.js',
  output: {
    entryFileNames: 'arc.js',
    chunkFileNames: '[hash].js',
    assetFileNames: '[hash][extname]',
    format: 'es',
    dir: 'dist'
  },
  preserveEntrySignatures: false,

  plugins: [
    /** Resolve bare module imports */
    nodeResolve(),
    /** Minify JS */
    terser(),
    /** Compile JS to a lower language target */
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
    copy({
      targets: [
        {
          src: ['out-tsc/src/components', 'out-tsc/src/styles', 'out-tsc/src/utilities', 'out-tsc/src/index.js', 'out-tsc/src/index.d.ts', 'src/themes'],
          dest: 'dist'
        },
        { src: 'src/assets/icons.svg', dest: 'dist/assets' }
      ]
    })
  ]
};
