import React, { Component } from "react"
import { render } from "react-dom"
import * as d3 from "d3"

class App extends Component {
  componentDidMount() {
    const circle = d3.selectAll( "circle" )
    circle.style( "fill", "steelblue" )

    circle.data( [ 32, 57, 112 ] )

    circle.attr( "r", data => Math.sqrt( data ) )
    circle.attr( "cx", ( data, index ) => index * 100 + 30 )
  }
  render() {
    return (
      <svg width="720" height="120">
        <circle cx="40" cy="60" r="10" />
        <circle cx="80" cy="60" r="10" />
        <circle cx="120" cy="60" r="10" />
      </svg>
    )
  }
}

render( <App />, document.getElementById( "app" ) )
