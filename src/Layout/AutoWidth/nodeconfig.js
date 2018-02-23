const { getNodeConfigCopyFile } = require( "../config" )

module.exports = getNodeConfigCopyFile( __dirname, [
  "restrict_left_right.html",
  "restrict_left.html",
  "restrict_right.html"
] )
