import App from '../src/App'
import { StaticRouter, matchPath } from 'react-router-dom'
import routes from '../shared/routes'

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


// app.use( express.static( path.resolve( __dirname, 'build/bundle.js' ) ) )
app.get( '/bundle.js', (req, res) => res.sendFile( path.resolve( __dirname, './build/bundle.js' ) ) )

app.get( '/*', (req, res) => {
  const currentRoute = routes.find( route => matchPath( req.url, route ) ) || {}
  const { customData: data = {} } = currentRoute
  const context = { data: currentRoute.customData }
  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context} >
      <App />
    </StaticRouter>
  )
  const html = fs.readFileSync( path.resolve( __dirname, '../src/index.html' ), { encoding: 'utf8' })
  res.send( 
    html
      .replace( '<div id="root"></div>', `<div id="root">${ appHtml }</div>` )
      .replace( `</body>`,
        `<script>window.__ROUTE_DATA__=${ JSON.stringify( data ) }</script>`
      )
  )
} )



app.listen( 3611 )