import Dragger from "./Dragger"

export default class Element {
  app
  dragger

  constructor( props ) {
    this.app = props.app

    this.dragger = new Dragger( this.app )

    this.dragger.update = this.updateDrag.bind( this )
    this.dragger.handleStart = this.handleStartDrag.bind( this )
    this.dragger.handleDragging = this.handleDragging.bind( this )
    this.dragger.handleStop = this.handleStopDrag.bind( this )

    this.app.elements.push( this )
  }

  /**
   * // Interaction
   */
  updateDrag( event ) {
    // return this.dragger.update( event )
  }
  handleStartDrag( event ) {}
  handleDragging( event ) {}
  handleStopDrag( event ) {}
}
