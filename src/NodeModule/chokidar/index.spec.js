const PATH = require( "path" )
const chokidar = require( "chokidar" )

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

const fileBeingWatchedPath = PATH.resolve( __dirname, "./fileBeingWatched.txt" )
const folderBeingWatchedPath = PATH.resolve(
  __dirname,
  "./folderBeingWatched.txt"
)

describe( `Chokidar`, function() {
  beforeEach( done => {
    // chokidar
    //   .watch( fileBeingWatchedPath )
      // .on( "add", path => console.log( `File ${path} has been added` ) )
      // .on( "change", path => console.log( `File ${path} has been changed` ) )
      // .on( "unlink", path => console.log( `File ${path} has been removed` ) )

    chokidar
      .watch( `${ folderBeingWatchedPath }/**` )
      .on( "add", path => console.log( `File ${path} has been added` ) )
      .on( "change", path => console.log( `File ${path} has been changed` ) )
      .on( "unlink", path => console.log( `File ${path} has been removed` ) )
      .on( "addDir", path => console.log( `Directory ${path} has been added` ) )
      .on( "unlinkDir", path =>
        console.log( `Directory ${path} has been removed` )
      )
      .on( "error", error => console.log( `Watcher error: ${error}` ) )
      .on( "ready", () =>
        console.log( "Initial scan complete. Ready for changes" )
      )
      .on( "raw", ( event, path, details ) => {
        console.log( "Raw event info:", event, path, details )
      } )

    // done()
  } )

  it( `Test`, function( done ) {
    // expect().toBe()
    // done()
  } )
} )
