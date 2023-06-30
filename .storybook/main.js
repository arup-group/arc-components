module.exports = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/web-components',
  stories: ['../out-tsc/**/*.stories.js', '../src/**/*.stories.mdx'],
  staticDirs: ['../assets'],
  previewHead: head => `
    ${head}
    <script type="module" data-arc="static/media"></script>
    <style>
        #root, #root-inner { height: 100%; }
        .sb-show-main.sb-main-padded { padding: 0; }
        .code-block {
          background-color: rgb(var(--arc-background-color));
          padding: 5px;
          border-radius: 5px;
        }
    </style>
  `,
};
