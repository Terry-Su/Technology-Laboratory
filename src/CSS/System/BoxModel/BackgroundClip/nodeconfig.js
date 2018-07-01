
const { getNodeConfigCopyFile } = require( "../config" )

module.exports = Object.assign(
  getNodeConfigCopyFile( __dirname, [ 'index.html', 'app.js', 'ff-logo.png' ] )
)
