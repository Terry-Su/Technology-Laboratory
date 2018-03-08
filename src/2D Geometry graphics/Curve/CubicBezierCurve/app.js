import cubicBezier from "./cubicBezier"
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

const P3 = {
  x: 700,
  y: 100
}

let t = 0
window.requestAnimationFrame( draw )

ctx.moveTo( P0.x, P0.y )

function draw() {
  const path = connectPoints( [ P0, P1, P2, P3 ] )
  ctx.stroke( path )

  const P = cubicBezier( P0, P1, P2, P3, t )

  ctx.lineTo( P.x, P.y )

  ctx.stroke()

  t += 0.01

  if ( t > 1 ) {
    t = 0
    return
  }

  window.requestAnimationFrame( draw )
}
