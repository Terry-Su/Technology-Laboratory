import bezier from "./bezier"
import { connectPoints } from "../../../__shared__/canvas"

const canvas = document.getElementById( "app" )
const ctx = canvas.getContext( "2d" )

const P0 = {
  x: 0,
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

let t = 0
window.requestAnimationFrame( draw )

const points = randomPoints( 4 )


function draw() {
  const path = connectPoints( points )
  ctx.stroke( path )

  // const P = bezier( [ P0, P1, P2 ], t )
  const P = bezier( points, t )

  ctx.lineTo( P.x, P.y )

  ctx.stroke()

  t += 0.01

  if ( t > 1 ) {
    t = 0
    return
  }

  window.requestAnimationFrame( draw )
}

function randomPoints( n ) {
  const maxX = 600
  const maxY = 600

  let points = []

  Array.apply( 0, new Array( n ) ).map( pushPoint )

  return points

  function pushPoint() {
    const point = {
      x: Math.random() * maxX,
      y: Math.random() * maxY
    }
    points.push( point )
  }
}
