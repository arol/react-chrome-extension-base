const path = require('path')
const ChromeExtensionReloader = require('webpack-chrome-extension-reloader')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATH_SOURCE = path.join(__dirname, './src')
const PATH_DIST = path.join(__dirname, './dist')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  watch: true,
  entry: {
    popup: path.join(PATH_SOURCE, './popup.js'),
    background: path.join(PATH_SOURCE, './background.js'),
    content: path.join(PATH_SOURCE, './content.js'),
  },
  output: {
    path: PATH_DIST,
    filename: '[name].js',
  },
  plugins: [
    // new ChromeExtensionReloader({
    //   port: 9090,
    //   reloadPage: true,
    //   entries: {
    //     popup: 'popup',
    //     background: 'background',
    //   },
    // }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/manifest.json',
          transform: function (content, path) {
            return Buffer.from(
              JSON.stringify({
                description: process.env.npm_package_description,
                version: process.env.npm_package_version,
                ...JSON.parse(content.toString()),
              })
            )
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'popup.html'),
      filename: 'popup.html',
      chunks: ['popup'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  debug: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },
}
