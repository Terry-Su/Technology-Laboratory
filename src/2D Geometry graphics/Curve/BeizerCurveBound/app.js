import {
  bezierCurve,
  renderPoints,
  getBizerCurveBounds
} from "../../../__shared__/canvas"

const canvas = document.getElementById( "app" )
const ctx = canvas.getContext( "2d" )

const P0 = {
  x: 50,
  y: 600
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
  x: 50,
  y: 500
}

const points = [ P0, P1, P2, P3 ]

renderPoints( points, canvas )

const path2d = bezierCurve( points )

ctx.stroke( path2d )


console.log( getBizerCurveBounds( P0.x, P0.y, P1.x, P1.y, P2.x, P2.y, P3.x, P3.y ) )
