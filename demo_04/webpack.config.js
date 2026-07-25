const path = require("path");

module.exports = {
  mode: "production", // "production" | "development" | "none"
  // output: {
  //   clean: false, // boolean | object
  //   path: path.resolve(__dirname, "dist"), // string
  // },
  module: {
    rules: [
      { use: ["style-loader", "css-loader"], test: /\.css$/ },
      { type: "asset/resource", test: /\.(png|jpg|gif)$/ },
    ],
  },
};
