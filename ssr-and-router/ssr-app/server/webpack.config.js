const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve( __dirname, '../src/index.js' ),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  module: {
    rules: [
      {
        test: /\.js.*/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-2', 'react']
            }
          }
        ]
      },
    ]
  },

  plugins: [ new CopyPlugin( [ {
    from: path.resolve( __dirname, '../src/index.html' ),
    to: path.resolve( __dirname, 'build/index.html' )
  } ] ) ]
}