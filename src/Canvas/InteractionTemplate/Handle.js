import Element from "./Element"
import { cloneDeep } from "lodash"

export default class Handle extends Element {
  fixed = {
    x: 0,
    y: 0
  }

  control = {
    x: 0,
    y: 0
  }

  constructor( props ) {
    super( props )

    this.fixed = props.fixed

    if ( props.control === undefined ) {
      this.control = {
        x: this.fixed.x - 30,
        y: this.fixed.y
      }
    }
  }

  get linePath() {
    const path = new Path2D()
    const { x, y } = this.fixed
    const { x: cx, y: cy } = this.control
    path.moveTo( x, y )
    path.lineTo( cx, cy )
    return path
  }

  get fixedPath() {}

  get controlPath() {
    const path = new Path2D()
    const { x, y } = this.control
    path.arc( x, y, 3, 0, 2 * Math.PI )
    return path
  }

  render() {
    const { ctx } = this.app
    ctx.save()
    ctx.fillStyle = "black"
    ctx.fill( this.controlPath )

    ctx.strokeStyle = "black"
    ctx.stroke( this.linePath )
  }

  contain( point ) {
    return this.app.ctx.isPointInPath( this.controlPath, point.x, point.y )
  }

  updateDrag( event ) {
    const point = this.app.getPoint( event )

    const deltaX = this.dragger.getDeltaXToPrevPoint( point )
    const deltaY = this.dragger.getDeltaYToPrevPoint( point )
    
    const { x, y } = this.control
    
    this.control = {
      x: x + deltaX,
      y: y + deltaY
    }

    this.app.render()
  }
}
