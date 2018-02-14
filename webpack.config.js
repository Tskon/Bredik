//basic vars
const webpack = require('webpack');
const path = require('path');

//plugins
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: ['./src/app/app.js', './src/app/scss/main.scss'],
    admin: ['./src/admin/admin-app.js', './src/admin/scss/admin-main.scss']
  },
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"},
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: 'css-loader',
                options: {sourceMap: true, minimize: true}
              },
              {
                loader: 'postcss-loader',
                options: {sourceMap: true}
              },
              {
                loader: 'sass-loader',
                options: {sourceMap: true}
              }
            ]
          }
        )
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("../css/[name].css")
  ]
};