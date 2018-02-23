import React, { Component } from "react"
import { render } from "react-dom"
import * as d3 from "d3"

import "./style.css"

class App extends Component {
	componentDidMount() {
		var data = [4, 8, 15, 16, 23, 42]

		d3
			.select(".chart")
			.selectAll("div")
			.data(data)
			.enter()
			.append("div")
			.style("width", data => data * 10 + "px")
			.text(data => data)
	}
	render() {
		return (
			<div>
				<div className="chart" />
			</div>
		)
	}
}

render(<App />, document.getElementById("app"))
