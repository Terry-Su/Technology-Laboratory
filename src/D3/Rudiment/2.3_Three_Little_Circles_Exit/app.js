import React, { Component } from "react"
import { render } from "react-dom"
import * as d3 from "d3"

class App extends Component {
  componentDidMount() {
    const svg = d3.select( "svg" )
    const circle = svg.selectAll( "circle" ).data( [ 32, 57 ] )

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
