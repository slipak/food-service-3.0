const path = require('path');

module.exports = {
  entry: path.resolve(__dirname + '/src/index.js'),

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/dist'),
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname + '/src'),
    port: 3000
  }
};