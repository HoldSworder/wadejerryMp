
"use strict";
const path = require("path");
 
function resolve(dir) {
  return path.join(__dirname, dir);
}
 
const name = "WadeJerry";
 
module.exports = {
  lintOnSave: process.env.NODE_ENV === "development",
  // 路径别名
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "static": path.join(__dirname, 'static'),
        "~": __dirname,
        "@": resolve("src"),
        'style': resolve('style'),
        "api": resolve("src/api"),
        "components": resolve("src/components"),
        "assets": resolve("src/assets"),
        "common": resolve("src/common"),
        "pages": resolve("src/pages"),
        "store": resolve("src/store")
      },
    },
  },
}