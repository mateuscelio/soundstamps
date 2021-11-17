const path = require("path");

module.exports = {
    mode: 'production',
    entry: {
        background: "./src/background/background.js",
        popup: "./src/popup/main.js",
        content: "./src/content/content.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]/index.js"
    }
};