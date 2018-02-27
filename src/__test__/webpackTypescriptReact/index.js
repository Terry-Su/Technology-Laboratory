const webpack = require( "webpack" )
const PATH = require( "path" )

const webpackConfig = {
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

runWebpck( webpackConfig )

function runWebpck( webpackConfig ) {
  const compiler = webpack( webpackConfig )

  const watching = compiler.watch(
    {
      /* watchOptions */
    },
    ( err, stats ) => {
      if ( err ) {
        console.error( err )
        return
      }

      console.log(
        stats.toString( {
          chunks: false,
          colors: true
        } )
      )
    }
  )

  return watching
}
