const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
    "storybook-addon-sass-postcss",
  ],
  webpackFinal: async (config) => {
    config.resolve.extensions.push(".tsx");
    config.resolve.extensions.push(".ts");
    config.module.rules.push({
      test: /\,css&/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: [require("tailwindcss"), require("autoprefixer")],
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });
    return config;
  },
  babel: async (options) => {
    options.plugins.push("babel-plugin-inline-react-svg");
    return options;
  },
};
