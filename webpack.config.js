var webpack = require("webpack");
var path = require("path");

var DIST = path.resolve(__dirname, "dist");

var config = {
  entry: [
    path.resolve(__dirname, "src/index.js"),
    path.resolve(__dirname, "src/app/index.html")
  ],
  output: {
    path: DIST,
    filename: "static/js/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: "file-loader?name=[name].[ext]"
        }
      }
    ]
  },
  devServer: {
      port: 8000,
      contentBase: DIST
  }
};

module.exports = config;