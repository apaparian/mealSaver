const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { env } = require('process');

module.exports = {
  mode: env.NODE_ENV,
  entry: { src: './client/index.js' },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: [ path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'server') ],
      use: [{
        loader: 'babel-loader',
        options: { presets: ['@babel/env', '@babel/react'] }
      }],
    },
    {
      test: /\.css/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html',
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/build',
    },
    proxy:  { '/api' : 'http://localhost:3000' },
    // port: 3000,
  },
};