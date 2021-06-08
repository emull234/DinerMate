const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|svg|webp|eot|woff|woff2|ttf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
      minify: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      name: 'DinerMate Catalog',
      short_name: 'DinerMate',
      description: 'Free Catalog restaurant for you',
      background_color: '#ff8303',
      theme_color: '#ff8303',
      display: 'standalone',
      orientation: 'portrait',
      crossorigin: null,
      inject: true,
      fingerprints: false,
      start_url: 'index.html',
      icons: [
        {
          src: path.resolve(__dirname, 'src/public/icons/icon-512x512.png'),
          sizes: [120, 152, 167, 180, 1024],
          purpose: 'any maskable',
          ios: true,
          destination: path.join('icons', 'ios'),
        },
        {
          src: path.resolve(__dirname, 'src/public/icons/icon-512x512.png'),
          sizes: [120, 152, 167, 180, 1024],
          purpose: 'any maskable',
          ios: 'startup',
          destination: path.join('icons', 'ios'),
        },
        {
          src: path.resolve(__dirname, 'src/public/icons/icon-512x512.png'),
          sizes: [36, 48, 72, 96, 144, 192, 512],
          purpose: 'any maskable',
          destination: path.join('icons', 'android'),
        },
      ],
    }),
    new ImageminWebpackPlugin(),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://restaurant-api.dicoding.dev/',
          ),
          handler: 'StaleWhileRevalidate',
        },
        {
          urlPattern: new RegExp(
            'https://use.fontawesome.com/',
          ),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'fontawesome',
          },
        },
        {
          urlPattern: new RegExp(
            'https://fonts.googleapis.com/',
          ),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'font',
          },
        },
      ],
      ignoreURLParametersMatching: [/.*/],
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: 'inline-source-map',
};
