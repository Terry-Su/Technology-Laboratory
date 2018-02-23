import React, { Component } from "react"
import { createStyleSheet } from "./createStyleSheet"

import styles from "./style"

const sheet = createStyleSheet( styles )
const { classes } = sheet

export default class SimpleButton extends Component {
  onClick() {
    sheet.getRule( "button" ).prop( "width", 500 )
  }
  render() {
    return (
      <div className={classes.button} onClick={this.onClick}>
        Simple Button
      </div>
    )
  }
}
