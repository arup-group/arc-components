module.exports = {
  stories: ['../out-tsc/**/**/*.stories.js'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  staticDirs: ['../assets'],
  framework: "@storybook/web-components"
}
