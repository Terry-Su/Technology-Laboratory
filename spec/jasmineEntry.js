const PATH = require( 'path' )
const Jasmine = require( 'jasmine' )
const jasmineInstance = new Jasmine()

jasmineInstance.loadConfigFile( PATH.resolve( __dirname, './jasmine.js' ) )
jasmineInstance.configureDefaultReporter( {
    showColors: true
} )
jasmineInstance.execute()
