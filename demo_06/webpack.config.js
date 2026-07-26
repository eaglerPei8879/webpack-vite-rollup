const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
  plugins: [
    new HtmlWebpackPlugin({
      title: "我是一个6666模板",
      // template: "./src/index.html", //自定义index.html模板时，title属性将失效
    }),
  ],
};
