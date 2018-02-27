const PATH = require( "path" )

module.exports = {
  entry : PATH.resolve( __dirname, "./app.tsx" ),
  output: {
    path    : PATH.resolve( __dirname, "./build" ),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test   : /\.ts.*?$/,
        use    : "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  // resolve: {
  //   extensions: [ ".tsx", ".ts", ".js" ]
  // }
}
