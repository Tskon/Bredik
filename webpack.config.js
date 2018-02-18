//basic vars
const webpack = require('webpack');
const path = require('path');

//plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

var isProduction = (process.env.NODE_ENV === 'production');

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
  devtool: (isProduction) ? '' : 'inline-source-map',
  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"},

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {sourceMap: true}
            },
            {
              loader: 'postcss-loader',
              options: {sourceMap: true}
            },
            {
              loader: 'sass-loader',
              options: {sourceMap: true}
            }
          ],
          fallback: "style-loader",
        })
      },

      // images
      {
        test: /\.(png|gif|jpe?g)$/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            },
          },
          'img-loader'
        ]
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("../css/[name].css"),
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin(
      [{from: './img', to: '../img'}, {from:'./index.html', to: '../'}],
      {ignore: [{glob: 'svg/*'}]}
    )
  ]
};
console.log('isProduction', isProduction);
console.log('nodeenv', process.env.NODE_ENV);
if (isProduction) {
  module.exports.plugins.push(
    new UglifyJSPlugin({sourceMap: true})
  );
  module.exports.plugins.push(
    new ImageminPlugin({
      test: /\.(png|jpe?g|dif|svg)$/i
    })
  );
  module.exports.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize:true
    })
  );
}


// {
//   test: /\.scss$/,
//   use: [{
//     loader: 'style-loader', // inject CSS to page
//   }, {
//     loader: 'css-loader', // translates CSS into CommonJS modules
//   }, {
//     loader: 'postcss-loader', // Run post css actions
//     options: {
//       plugins: function () { // post css plugins, can be exported to postcss.config.js
//         return [
//           require('precss'),
//           require('autoprefixer')
//         ];
//       }
//     }
//   }, {
//     loader: 'sass-loader' // compiles Sass to CSS
//   }]
// }