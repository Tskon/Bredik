//basic vars
const webpack = require('webpack');
const path = require('path');

//plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  //basic path to project
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: ['./app/app.js', './app/scss/main.scss'],
    admin: ['./admin/admin-app.js', './admin/scss/admin-main.scss']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: "../"
  },
  // source-map for correct log links
  devtool: 'source-map',
  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"},
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //       fallback: "style-loader",
      //       use: [
      //         {
      //           loader: 'css-loader',
      //           options: {sourceMap: true, minimize: true}
      //         },
      //         {
      //           loader: 'postcss-loader',
      //           options: {sourceMap: true}
      //         },
      //         {
      //           loader: 'sass-loader',
      //           options: {sourceMap: true}
      //         }
      //       ]
      //     }
      //   )
      // }
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("../css/[name].css")
  ]
};