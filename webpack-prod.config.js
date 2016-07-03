'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    './browser/index'
  ],
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'bundle.js',
    publicPath: '/public/js/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: true
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react' ]
        },
        include: path.join(__dirname, 'browser')
      }
    ]
  }
}
