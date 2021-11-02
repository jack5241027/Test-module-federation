const path = require('path')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: {
    main: './src/index.js',
  },

  devServer: {
    port: 8080,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  target: 'web',

  plugins: [
    new ModuleFederationPlugin({
      name: 'canvas',
      filename: 'remote.js',
      exposes: {
        './canvas': './src/Header',
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
    new HtmlWebPackPlugin({
      template: './index.html',
      chunks: ['main'],
    }),
  ],

  resolve: {
    extensions: ['.jsx', '.js'],
  },
}
