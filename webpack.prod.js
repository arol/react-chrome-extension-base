const path = require('path')

const PATH_SOURCE = path.join(__dirname, './src')
const PATH_DIST = path.join(__dirname, './dist')

module.exports = {
  mode: 'development',
  entry: [path.join(PATH_SOURCE, './index.js')],
  output: {
    path: PATH_DIST,
    filename: 'js/[name].[hash].js',
  },
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
