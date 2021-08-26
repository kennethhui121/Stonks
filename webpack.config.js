const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
        test: /\.s[ac]ss$/i, 
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      }]
  },
  devServer: {
    static: {
    directory: path.join(__dirname, '/public')
    },
  },

}
