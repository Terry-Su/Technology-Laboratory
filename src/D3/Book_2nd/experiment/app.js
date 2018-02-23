import React, { Component } from "react"
import { render } from "react-dom"
import * as d3 from "d3"

class App extends Component {
  change( { svg, yScale, h } ) {
    const dataset = [
      11,
      12,
      15,
      20,
      18,
      17,
      16,
      18,
      23,
      25,
      5,
      10,
      13,
      19,
      21,
      25,
      22,
      18,
      15,
      13
    ]

    svg
      .selectAll( "rect" )
      .data( dataset )
      .transition()
      .attr( "y", function( d ) {
        return h - yScale( d )
      } )
      .attr( "height", function( d ) {
        return yScale( d )
      } )
      .attr( "fill", function( d ) {
        return "rgb(0, 0, " + Math.round( d * 10 ) + ")"
      } )
  }
  componentDidMount() {
    const w = 600
    const h = 250

    const dataset = [
      5,
      10,
      13,
      19,
      21,
      25,
      22,
      18,
      15,
      13,
      11,
      12,
      15,
      20,
      18,
      17,
      16,
      18,
      23,
      25
    ]

    const xScale = d3
      .scaleBand()
      .domain( d3.range( dataset.length ) )
      .rangeRound( [ 0, w ] )
      .paddingInner( 0.05 )

    const yScale = d3
      .scaleLinear()
      .domain( [ 0, d3.max( dataset ) ] )
      .range( [ 0, h ] )

    const svg = d3
      .select( "#app" )
      .append( "svg" )
      .attr( "width", w )
      .attr( "height", h )

    svg
      .selectAll( "rect" )
      .data( dataset )
      .enter()
      .append( "rect" )
      .attr( "x", function( d, i ) {
        return xScale( i )
      } )
      .attr( "y", function( d ) {
        return h - yScale( d )
      } )
      .attr( "width", xScale.bandwidth() )
      .attr( "height", function( d ) {
        return yScale( d )
      } )
      .attr( "fill", function( d ) {
        return "rgb(0, 0, " + Math.round( d * 10 ) + ")"
      } )

    this.change( {
      svg,
      yScale,
      h
    } )
  }
  render() {
    return <div />
  }
}

render( <App />, document.getElementById( "app" ) )
