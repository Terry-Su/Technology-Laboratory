const { getNodeConfigGeneral, getNodeConfigCopyFile } = require( "../config" )

module.exports = Object.assign(
  getNodeConfigGeneral( __dirname ),
  getNodeConfigCopyFile( __dirname, [ 'index.html', 'app.js' ] )
)
