import { cloneDeep } from "lodash"

class Dragger  {
	app
	enable
  prevPoint
  
  constructor( app ) {
    this.app = app
  }

	updatePrevPoint( point ) {
		this.prevPoint = cloneDeep( point )
	}
	update( event ) {}
	start( event ) {
		const point = this.app.getPoint( event )

		this.enable = true

		this.updatePrevPoint( point )

		this.handleStart && this.handleStart( event )
	}
	dragging( event ) {
		const point = this.app.getPoint( event )

		this.update( event )

		this.updatePrevPoint( point )

		this.handleDragging && this.handleDragging( event )
	}
	stop( event ) {
		this.enable = false
		this.handleStop && this.handleStop( event )
	}
	handleStart( event ) {}
	handleDragging( event ) {}
	handleStop( event ) {}

	getDeltaPointToPrevPoint( point ) {
		const { x, y } = point
		const { x: prevX, y: prevY } = this.prevPoint

		const deltaPoint = {
			x: x - prevX,
			y: y - prevY
		}
		return deltaPoint
	}
	getDeltaXToPrevPoint( point ) {
		const deltaPoint = this.getDeltaPointToPrevPoint( point )
		return deltaPoint.x
	}
	getDeltaYToPrevPoint( point ) {
		const deltaPoint = this.getDeltaPointToPrevPoint( point )
		return deltaPoint.y
	}
}

export default Dragger
