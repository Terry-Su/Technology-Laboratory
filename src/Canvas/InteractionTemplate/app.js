import {
  drawPoint,
  quadraticBezierCurve
} from "../../__shared__/canvas"
import Handle from "./Handle"
import Interact from "./Interact"

const canvas = document.getElementById( "app" )
const ctx = canvas.getContext( "2d" )

const Point = {
  x: 100,
  y: 300
}

class App {
  handle

  elements = []

  constructor() {
    const interact = new Interact( this )

    this.handle = new Handle( {
      app  : this,
      fixed: Point
    } )
  }

  get canvas() {
    return canvas
  }

  get ctx() {
    return ctx
  }

  get canvasLeft() {
    return canvas.getBoundingClientRect().left
  }

  get canvasTop() {
    return canvas.getBoundingClientRect().top
  }

  getPoint( event ) {
    return {
      x: event.x - this.canvasLeft,
      y: event.y - this.canvasTop
    }
  }

  render() {
    ctx.clearRect( 0, 0, canvas.width, canvas.height )

    ctx.fill( drawPoint( Point ) )

    this.handle.render()
  }

  getMostTopElement( point ) {
    let res
    this.elements.map( getElement )
    return res

    function getElement( element ) {
      if (
        element.contain( {
          x: point.x,
          y: point.y
        } )
      ) {
        res = element
      }
    }
  }
}

const app = new App()

app.render()
