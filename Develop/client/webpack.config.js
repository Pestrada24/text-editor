const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');


const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  // other webpack configurations...

  plugins: [
    // other plugins...

    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};


module.exports = {
  // other webpack configurations...

  module: {
    rules: [
      // CSS loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Babel loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};


module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
