import { hello } from ".."
// import '../redux/basic'
// import '../redux/combineReducersExample'
import '../redux/composeExample'
// import '../redux/applyMiddlewareExample'
// import '../redux/bindActionCreatorsExample'

// describe( "Test", () => {
//   it( "Unit", () => {
//     // hello()
//   } )
// } )
describe( "long asynchronous specs", function() {
  var originalTimeout
  beforeEach( function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000
  } )

  it( "takes a long time", function( done ) {
    setTimeout( function() {
      done()
    }, 9000 )
  } )

  afterEach( function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
  } )
} )
