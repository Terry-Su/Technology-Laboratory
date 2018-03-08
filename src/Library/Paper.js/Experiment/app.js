import paper from "paper"
const { Path, Tool } = paper

paper.setup( "app" )

var path
function onMouseDown( event ) {
  path = new Path()
  path.strokeColor = "black"
  path.add( event.point )
}

var tool1 = new Tool()
tool1.onMouseDown = onMouseDown

tool1.onMouseDrag = function( event ) {
  path.add( event.point )
}

var tool2 = new Tool()
tool2.minDistance = 20
tool2.onMouseDown = onMouseDown

tool2.onMouseDrag = function( event ) {
  // Use the arcTo command to draw cloudy lines
  path.arcTo( event.point )
}
