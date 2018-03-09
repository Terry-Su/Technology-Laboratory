import {
  connectPoints,
  drawPoint,
  quadraticBezierCurve,
  bezierCurve
} from "../../../__shared__/canvas"
import PointWithHandle from "./PointWithHandle"
import Interact from "./Interact"

const canvas = document.getElementById( "app" )
const ctx = canvas.getContext( "2d" )

const P0 = {
  x: 100,
  y: 300
}

const P1 = {
  x: 200,
  y: 100
}

const P2 = {
  x: 600,
  y: 500
}

const P3 = {
  x: 700,
  y: 100
}

class App {
  A
  B
  C
  D

  elements= []

  get pointsWithHandle() {
    return [
      this.A,
      this.B,
      this.C,
      this.D,
    ]
  }

  constructor() {
    const A = new PointWithHandle( {
      app  : this,
      point: {
        x: P0.x,
        y: P0.y
      }
    } )

    const B = new PointWithHandle( {
      app  : this,
      point: {
        x: P1.x,
        y: P1.y
      }
    } )

    const C = new PointWithHandle( {
      app  : this,
      point: {
        x: P2.x,
        y: P2.y
      }
    } )

    const D = new PointWithHandle( {
      app  : this,
      point: {
        x: P3.x,
        y: P3.y
      }
    } )

    this.A = A
    this.B = B
    this.C = C
    this.D = D

    const interact = new Interact( this )
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
    const points = [ P0, P1, P2, P3 ]

    ctx.clearRect( 0, 0, canvas.width, canvas.height )
    
    ctx.strokeStyle = "#aaa"
    ctx.stroke( connectPoints( points ) )


    this.pointsWithHandle.map( element => element.render() )


    ctx.stroke( bezierCurve( [ P0, this.B.handle1.control, P1 ] ) )

    ctx.stroke( bezierCurve( [ P1, this.B.handle2.control, this.C.handle1.control, P2 ] ) )
    ctx.stroke( bezierCurve( [ P2, this.C.handle2.control, this.D.handle1.control, P3 ] ) )

  }

  getMostTopElement( point ) {
    let res
		this.elements.map( getElement )
		return res

		function getElement( element ) {
			if ( element.contain( {
        x: point.x,
        y: point.y
      } ) ) {
				res = element
			}
		}
  }
}

const app = new App()

app.render()
