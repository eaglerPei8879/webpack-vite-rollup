const path = require("path");

module.exports = {
  mode: "production", // "production" | "development" | "none"
  // entry: "./src/index.js", // 默认路径是"./src/index.js", string | object | array
  // entry: ["./src/m1.js", "./src/m2.js"],
  entry: {
    test1: "./src/m1.js",
    test2: "./src/m2.js",
  },
  output: {
    filename: "[name]-[id]-[hash]-[fullhash].js", // string
    clean: true, // boolean | object
    path: path.resolve(__dirname, "dist"), // string
  },
};
