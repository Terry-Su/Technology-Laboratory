import React, { Component } from "react"
import { render } from "react-dom"
import * as d3 from "d3"


/**
 * Not work in current d3 version 
 */
class App extends Component {
  componentDidMount() {
    const w = 500
    const h = 300

    const dataset = [ [ 200, 100 ] ]

    const svg = d3
      .select( "body" )
      .append( "svg" )
      .attr( "width", w )
      .attr( "height", h )

    const xScale = d3
      .scaleLinear()
      .domain( [ 0, d3.max( dataset, data => data[ 0 ] ) ] )
      .range( [ 0, w ] )

    const yScale = d3
      .scaleLinear()
      .domain( [ 0, d3.max( dataset, data => data[ 1 ] ) ] )
      .range( [ 0, h ] )

    svg
      .selectAll( "rect" )
      .data( dataset )
      .enter()
      .append( "rect" )
      .attr( "width", data => xScale( data[ 0 ] ) )
      .attr( "height", data => yScale( data[ 1 ] ) )
      .attr( "fill", "#08e" )
  }
  render() {
    return <div></div>
  }
}

render( <App />, document.getElementById( "app" ) )
