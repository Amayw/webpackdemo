const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "王月",
      template: "src/assets/index.html",
    }),
  ],
  output: {
    filename: "index.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
};
