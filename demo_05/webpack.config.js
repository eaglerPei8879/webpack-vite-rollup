const path = require("path");

module.exports = {
  mode: "production", // "production" | "development" | "none"
  output: {
    filename: "[name].js", // string
    clean: true, // boolean | object
    path: path.resolve(__dirname, "dist"), // string
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|jpg|gif)$/, type: "asset/resource" },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
