import React, { Component } from "react"
import { render } from "react-dom"
import * as d3 from "d3"

/**
 * Not work in current d3 version
 */
class App extends Component {
  constructor( props ) {
    super( props )

    this.container = null
    this.svg = null
  }

  zoomed() {
    console.log( this.container )
    this.container.attr( "transform", d3.event.transform )
  }

  componentDidMount() {
    const w = 500
    const h = 300

    let { svg, container } = this
    const dataset = [ [ 200, 100 ] ]

    const zoom = d3
      .zoom()
      .scaleExtent( [ 0.001, 1000 ] )
      .on( "zoom", this.zoomed )

    this.svg = d3
      .select( "#app" )
      .append( "svg" )
      .attr( "width", w )
      .attr( "height", h )
      .attr( "style", "border: 1px solid #08e" )
      .call( zoom )

    this.container = this.svg.append( "g" )

    const xScale = d3
      .scaleLinear()
      .domain( [ 0, d3.max( dataset, data => data[ 0 ] ) ] )
      .range( [ 0, w ] )

    const yScale = d3
      .scaleLinear()
      .domain( [ 0, d3.max( dataset, data => data[ 1 ] ) ] )
      .range( [ 0, h ] )

    this.container
      .selectAll( "rect" )
      .data( dataset )
      .enter()
      .append( "rect" )
      .attr( "width", data => xScale( data[ 0 ] ) )
      .attr( "height", data => yScale( data[ 1 ] ) )
      .attr( "fill", "#08e" )
  }
  render() {
    return <div />
  }
}

render( <App />, document.getElementById( "app" ) )
