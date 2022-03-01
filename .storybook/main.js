module.exports = {
  "stories": [
    "../out-tsc/**/*.stories.mdx",
    "../out-tsc/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/web-components"
}
