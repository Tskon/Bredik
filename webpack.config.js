const path = require('path');
module.exports = {
  entry: {main: './src/index.js'},
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app/main.js',
    publicPath: path.resolve(__dirname, 'public')
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
      }
    ]
  }
}