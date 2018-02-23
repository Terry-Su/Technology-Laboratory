import React, { Component } from "react"
import { render } from "react-dom"
import * as d3 from "d3"

class App extends Component {
  componentDidMount() {
    const svg = d3.select( "svg" )

    const data = [ 10, 20 ]
    // const data = [10, 20, 30, 40, 50]

    const circle = svg.selectAll( "circle" )

    circle
      .data( data )
      .enter()
      .append( "circle" )
      .attr( "cx", data => data )
      .attr( "cy", 25 )
      .attr( "r", 5 )

    circle.exit().remove()
  }
  render() {
    return (
      <div>
        <svg width="720" height="120">
          <circle cx="40" cy="60" r="10" />
          <circle cx="80" cy="60" r="10" />
          <circle cx="120" cy="60" r="10" />
        </svg>
      </div>
    )
  }
}

render( <App />, document.getElementById( "app" ) )
