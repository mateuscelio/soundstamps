const path = require("path");
const WebExtPlugin = require("web-ext-plugin");

module.exports = {
  mode: "production",
  entry: {
    background: "./src/background/background.js",
    content: "./src/content/content.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  plugins: [new WebExtPlugin({ sourceDir: path.resolve(__dirname) })],
};
