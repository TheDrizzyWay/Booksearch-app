const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: __dirname + 'dist/',
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
  },
  module: {
    rules: [
      {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader']
    },
     {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(png|jpe?g|gif|svg|ico)$/i,
      use: [{
          loader: 'url-loader',
          options: { limit: 8192 }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};
