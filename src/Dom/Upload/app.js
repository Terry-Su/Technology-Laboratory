import React, { Component } from "react"
import { render } from "react-dom"

class App extends Component {
  onUploadInputChange = event => {
    const reader = new FileReader()
    const onReaderLoad = event => {
      const dataStr = event.target.result

      console.log( "File text:", dataStr )
    }

    reader.onload = onReaderLoad
    reader.readAsText( event.target.files[ 0 ] )
  }
  render() {
    return (
      <div>
        <input type="file" onChange={this.onUploadInputChange} />
      </div>
    )
  }
}

render( <App />, document.getElementById( "app" ) )
