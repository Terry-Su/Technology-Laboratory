const PATH = require( 'path' )


module.exports = function addFilePathAnnotation ( {
  root
} ) {
  return {
    name: 'my-example', // this name will show up in warnings and errors
    transform( source, id ) {
      const name =  root == null ? PATH.basename( id ) : PATH.relative( root, id )
      return `// ${ name }
${ source }`
    },
  }
}