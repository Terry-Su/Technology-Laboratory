export default class Interact {
  app
  constructor( app ) {
    const self = this
    this.app = app

    app.canvas.removeEventListener( "mousedown", mousedownListener )
    app.canvas.addEventListener( "mousedown", mousedownListener )

    app.canvas.removeEventListener( "mousemove", mousemoveListener )
    app.canvas.addEventListener( "mousemove", mousemoveListener )

    app.canvas.removeEventListener( "mouseup", mouseupListener )
    app.canvas.addEventListener( "mouseup", mouseupListener )

    function mousedownListener( event ) {
      const point = app.getPoint( event )
      const element = app.getMostTopElement( point )

      element && element.dragger.start( point )
    }

    function mousemoveListener( event ) {
      const point = app.getPoint( event )
      self.app.elements.filter( element => element.dragger.enable ).map( element => element.dragger.dragging( point ) )
    }

    function mouseupListener( event ) {
      self.app.elements.map( element => element.dragger.stop() )
      
    }
  }
}