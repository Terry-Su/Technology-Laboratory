import { isNil } from "lodash"

export function connectPoints( points ) {
  let path = new Path2D()

  points.map( connect )

  return path

  function connect( point, index, points ) {
    const { length } = points

    if ( index === 0 ) {
      path.moveTo( point.x, point.y )
    }
    if ( index !== 0 ) {
      path.lineTo( point.x, point.y )
    }
  }
}

export function bezier( points, t ) {
  // Calculating points
  let calculating = points
  let PFinal

  iterate()

  return PFinal

  function iterate() {
    const { length } = calculating
    if ( length > 1 ) {
      const newCalculating = []
      for ( let i = 0; i < length - 1; i++ ) {
        const A = calculating[ i ]
        const B = calculating[ i + 1 ]
        const P = getPointOnLine( A, B, t )

        newCalculating.push( P )
      }

      calculating = newCalculating
      iterate()
      return
    }

    if ( length === 1 ) {
      PFinal = calculating[ 0 ]
    }
  }

  function getPointOnLine( Point1, Point2, t ) {
    const Point = {
      x: Point1.x + t * ( Point2.x - Point1.x ),
      y: Point1.y + t * ( Point2.y - Point1.y )
    }
    return Point
  }
}

export function bezierCurve( points, deltaT= 0.001 ) {
  if ( points.length <= 1 ) {
    return null
  }

  let path = new Path2D()

  const delta = deltaT < 1 ? deltaT : 1
  let allPoints = []

  allPoints.push( points[ 0 ] )

  for ( let t = delta; t <= 1; t += delta ) {
    const point = bezier( points, t )
    allPoints.push( point )
  }

  path = connectPoints( allPoints )
  return path
}

export function quadraticBezierCurve( points ) {
  const path = new Path2D()
  const first = points[ 0 ]

  path.moveTo( first.x, first.y )

  const { length } = points

  for ( let i = 1; i < length - 2; i++ ) {
    const P1 = points[ i ]
    const P2 = points[ i + 1 ]

    // Controll point
    const C = P1
    const P = {
      x: ( P1.x + P2.x ) / 2,
      y: ( P1.y + P2.y ) / 2
    }

    path.quadraticCurveTo( C.x, C.y, P.x, P.y )

    path.moveTo( P.x, P.y )
  }

  const P1 = points[ length - 2 ]
  const P2 = points[ length - 1 ]
  path.quadraticCurveTo( P1.x, P1.y, P2.x, P2.y )

  return path
}

export function drawPoint( point ) {
  const path = new Path2D()
  const { x, y } = point
  path.arc( x, y, 2, 0, Math.PI * 2 )
  return path
}
