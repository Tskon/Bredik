const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    styles: './src/scss/main.scss'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app/[name].js',
    publicPath: 'public'
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"]
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /'.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [require('autoprefixer')({
                  'browsers': ['> 1%', 'last 2 versions']
                })],
              }
            },
            {
              loader: "sass-loader"
            }
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            //you can specify a publicPath here. By default it use publicPath in webpackOptions.output // publicPath: ''
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name]Bundle.css",
    }),
    new CopyWebpackPlugin([{ from: './src/index.php', to: 'index.php' }], {})
  ],
  stats: {
    colors: true,
    chunks: true
  }
}