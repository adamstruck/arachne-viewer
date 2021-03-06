const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/viewer.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist/static'),
    filename: 'viewer.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {loader:'babel-loader'},
        ],
      },
      {
       test: /\.css$/,
       use: [
         {loader: 'style-loader'},
         {loader: 'css-loader'}
       ],
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  }
};
