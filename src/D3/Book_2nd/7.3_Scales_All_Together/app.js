import React, { Component } from "react"
import { render } from "react-dom"
import * as d3 from "d3"

class App extends Component {
  componentDidMount() {
    const w = 300
    const h = 100

    const dataset = [
      [ 5, 20 ],
      [ 480, 90 ],
      [ 250, 50 ],
      [ 100, 33 ],
      [ 330, 95 ],
      [ 410, 12 ],
      [ 475, 44 ],
      [ 25, 67 ],
      [ 85, 21 ],
      [ 220, 88 ]
    ]

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
      .selectAll( "circle" )
      .data( dataset )
      .enter()
      .append( "circle" )
      .attr( "cx", data => xScale( data[ 0 ] ) )
      .attr( "cy", data => yScale( data[ 1 ] ) )
      .attr( "r", 5 )
  }
  render() {
    return <div></div>
  }
}

render( <App />, document.getElementById( "app" ) )
