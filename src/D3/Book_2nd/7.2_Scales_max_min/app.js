import React, { Component } from "react"
import { render } from "react-dom"
import * as d3 from "d3"

class App extends Component {
  componentDidMount() {
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

    console.log(
      d3.max( dataset, data => data[ 0 ] ), // Return 480
      d3.max( dataset, data => data[ 1 ] ) // Return 95
    )
  }
  render() {
    return <div>See dev tool</div>
  }
}

render( <App />, document.getElementById( "app" ) )
