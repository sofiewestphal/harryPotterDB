const path = require('path');
var webpack = require('webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
    entry: './src/index.js',
    
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public'
    },

    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000,
        historyApiFallback: true
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
        },

        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.(png|jpg|gif)$/,
          exclude: /node_modules/,
          use: {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              limit: 2500
            }
          }
        },
      ]
    },

    plugins: [
          new ImageminPlugin({test: /\.(png|jpg|gif)$/})
      ]
  };