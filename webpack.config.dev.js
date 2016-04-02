var webpack = require('webpack');

module.exports = {
  entry: './src/client',
  output: {
    path: 'static/dist',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname + '/src'
      }
    ]
  }
}
