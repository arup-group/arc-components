module.exports = {
  stories: [
    '../out-tsc/**/*.stories.js',
    '../src/**/*.stories.mdx'
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  staticDirs: ['../assets'],
  framework: "@storybook/web-components",
  previewHead: (head) => (`
    ${head}
    <script type="module" data-arc="static/media"></script>
    <style>
        #root, #root-inner { height: 100%; }
        .sb-show-main.sb-main-padded { padding: 0; }
        #content { padding: var(--arc-spacing-small) }
        #content code {
          background-color: rgb(var(--arc-background-color));
          padding: 5px;
          border-radius: 5px;
        }
    </style>
  `)
}
