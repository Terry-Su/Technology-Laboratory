import { connectPoints } from "../../../__shared__/canvas"
import algorithm from "./algorithm"

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
  x: 800,
  y: 100
}

// const points = randomPoints( 4 )
const points = [ P0, P1, P2, P3 ]

const path = algorithm( points )




ctx.strokeStyle = "grey"
ctx.stroke( connectPoints( points ) )


ctx.strokeStyle = "black"
ctx.stroke( path )

function randomPoints( n ) {
  const maxX = 500
  const maxY = 500

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
