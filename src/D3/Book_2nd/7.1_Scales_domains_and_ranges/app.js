import React, { Component } from "react"
import { render } from "react-dom"
import * as d3 from "d3"


class App extends Component {
  componentDidMount() {
    const scale = d3.scaleLinear()

    scale.domain( [ 100, 500 ] ).range( [ 10, 350 ] )

    console.log( scale( 100 ), scale( 300 ), scale( 500 ) )
  }
  render() {
    return <div>See dev tool</div>
  }
}

render( <App />, document.getElementById( "app" ) )
