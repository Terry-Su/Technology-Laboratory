import React, { Component } from "react"
import { render } from "react-dom"

class App extends Component {
  onClick = () => {
    console.log( this.div )
  }

  render() {
    return (
      <div onClick={this.onClick}>
        <Div divRef={el => ( this.div = el )} />
      </div>
    )
  }
}

class Div extends Component {
  render() {
    return <div ref={this.props.divRef}>Click to see: i'm div</div>
  }
}

render( <App />, document.getElementById( "app" ) )
