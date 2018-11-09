const PATH = require( 'path' )


module.exports = function myExample ( {
  root
} ) {
  return {
    name: 'my-example', // this name will show up in warnings and errors
    // resolveId ( importee ) {
    //   if ( importee === 'virtual-module' ) {
    //     return importee // this signals that rollup should not ask other plugins or check the file system to find this id
    //   }
    //   return null // other ids should be handled as usually
    // },

    // load ( id ) {
    //   if ( id === 'virtual-module' ) {
    //     return 'export default "This is virtual!"' // the source code for "virtual-module"
    //   }
    //   return null // other ids should be handled as usually
    // },

    transform( source, id ) {
      const name =  root == null ? PATH.basename( id ) : PATH.relative( root, id )
      return `
// ${ name }
${ source }
`
    },

    renderChunk( code, { modules, exports, imports, fileName, isEntry }, outOptions ) {
      return code
    }
  }
}