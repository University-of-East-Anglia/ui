const path = require("path");

module.exports = {
  entry: {
    index: ["./src/components/index.ts"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    chunkFilename: "chunks/[id].js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
