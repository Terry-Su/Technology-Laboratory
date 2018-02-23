import React, { Component } from "react"
import { render } from "react-dom"

import SimpleButton from "./SimpleButton/index"

class App extends Component {
  render() {
    return <SimpleButton />
  }
}

render( <App />, document.getElementById( "app" ) )
