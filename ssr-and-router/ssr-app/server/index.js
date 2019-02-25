import App from '../src/App'

const path = require('path')
const fs = require('fs')
const React = require('react')
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const ReactDOMServer = require( 'react-dom/server' )

const compiler = webpack( webpackConfig )
const watching = compiler.watch({
  // Example watchOptions
  aggregateTimeout: 300,
  poll: undefined
}, (err, status ) => {
  // Print watch/build result here...
  console.log('watching');
})


const app = express()

app.get( '/', (req, res) => {
  const appHtml = ReactDOMServer.renderToString( <App /> )
  const html = fs.readFileSync( path.resolve( __dirname, '../src/index.html' ), { encoding: 'utf8' })
  res.send( html.replace( '<div id="root"></div>', appHtml ) )
} )

app.use( express.static( path.resolve( __dirname, 'build' ) ) )




app.listen( 3610 )

