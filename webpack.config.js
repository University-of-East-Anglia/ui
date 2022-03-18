const glob = require("glob");
const path = require("path");

module.exports = {
  entry: glob.sync("./src/**/*.tsx").reduce((acc, path) => {
    const entry = path.replace("/index.js", "");
    acc[entry] = path;
    return acc;
  }, {}),

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".js", ".ts", ".tsx", ".scss"],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
