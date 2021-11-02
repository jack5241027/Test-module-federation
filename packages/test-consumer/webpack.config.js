const path = require('path')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: {
    main: './src/index.js',
  },

  devServer: {
    port: 8081,
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
      remotes: {
        '@chart': 'canvas@http://localhost:8080/remote.js',
      },
    }),
    new HtmlWebPackPlugin({
      template: './index.html',
    }),
  ],

  resolve: {
    extensions: ['.jsx', '.js'],
  },
}
