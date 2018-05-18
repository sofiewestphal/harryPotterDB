const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },

        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ["style-loader", "css-loader"]
        }

      ]
    }
  };