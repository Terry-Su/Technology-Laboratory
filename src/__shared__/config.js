const PATH = require( "path" )
const TsconfigPathsPlugin = require( "tsconfig-paths-webpack-plugin" )
const WS = require( "./webpack" )
const { srcToBuild } = require( "./paths" )

class Config {
  constructor() {
    this.getNodeConfigGeneral = dirname => {
      return {
        enableWebpack: true,
        webpackConfig: Object.assign(
          {
            entry  : WS.entryApp( dirname ),
            output : WS.outputBuild( dirname ),
            plugins: [ WS.pluginCopyToBuild( dirname, [ "index.html" ] ) ]
          },
          WS.react
        )
      }
    }

    this.getNodeConfigTypescriptReact = dirname => {
      return {
        enableWebpack: true,
        webpackConfig: Object.assign(
          {
            entry  : WS.entryApp( dirname ),
            output : WS.outputBuild( dirname ),
            plugins: [
              WS.pluginCopyToBuild(
                dirname,
                [ "index.html" ],
                new TsconfigPathsPlugin( {
                  configFile: `${dirname}/tsconfig.json`
                } )
              )
            ]
          },
          WS.reactTypescript
          // {
          //   // resolve: {
          //   //   extensions: [ ".ts", ".tsx", ".js", ".json" ],
          //   //   plugins   : [
          //   //     new TsconfigPathsPlugin( {
          //   //       configFile: `${dirname}/tsconfig.json`
          //   //     } )
          //   //   ]
          //   // }
          // }
        )
      }
    }

    this.getNodeConfigCopyFile = ( dirname, fileNames ) => {
      const copyPath = fileNames.map( getCopyPath )
      const res = {
        copyPath
      }
      return res

      function getCopyPath( fileName ) {
        const from = PATH.resolve( dirname, `./${fileName}` )
        const to = srcToBuild( from )
        return {
          from,
          to
        }
      }
    }
  }
}

module.exports = new Config()
