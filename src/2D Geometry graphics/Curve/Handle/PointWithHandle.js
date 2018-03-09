import Handle from "./Handle"
import Element from "./Element"

export default class PointWithHandle extends Element {
  handle1
  handle2
  point

  get pointPath() {
    const path = new Path2D()
    const { x, y } = this.point
    path.arc( x, y, 3, 0, 2 * Math.PI )
    return path
  }

  constructor( props ) {
    super( props )

    this.point = props.point

    const { x, y } = this.point

    this.handle1 = new Handle( {
      app    : props.app,
      fixed  : this.point,
      control: {
        x: x - 50,
        y: y
      }
    } )

    this.handle2 = new Handle( {
      app    : props.app,
      fixed  : this.point,
      control: {
        x: x + 50,
        y: y
      }
    } )
  }

  render() {
    const { ctx } = this.app
    ctx.save()
    ctx.fillStyle = "black"
    ctx.fill( this.pointPath )
    ctx.restore()

    this.handle1.render()
    this.handle2.render()
  }

  contain( point ) {
    return this.app.ctx.isPointInPath( this.pointPath, point.x, point.y )
  }
}
