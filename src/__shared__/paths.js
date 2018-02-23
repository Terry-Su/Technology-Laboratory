const PATH = require( "path" )
const { srcToBuild } = require( '../../../MP/path' )

class Paths {
  constructor() {
    this.buildPath = PATH.resolve( __dirname, "../../build" )

    this.srcPath = PATH.resolve( __dirname, "../../src" )

    /**
     * Transform page path in src to simular path in build
     */
    this.srcToBuild = pagePath => {
      const res = srcToBuild( pagePath, this.srcPath, this.buildPath )
      return res
    }
  }
}

module.exports = new Paths()
