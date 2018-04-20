import React, { Component } from "react"
import { render } from "react-dom"
import '../style/index'

import ReactComponent from '../components/ReactComponent'

class App extends Component {
	render() {
		return (
			<div>
        <ReactComponent />
      </div>
		)
	}
}

render( <App />, document.getElementById( "app" ) )

