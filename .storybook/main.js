/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../_site/**/*.stories.mdx",
    "../_site/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx|html)",
  ],
  staticDirs: ["../_site/assets", "../_site/style"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
};
export default config;
