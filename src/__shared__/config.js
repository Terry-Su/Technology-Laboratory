const WS = require( "./webpack" )
const PATH = require( "path" )
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
