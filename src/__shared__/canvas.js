import { isNil } from "lodash"

/**
 * // Canvas origin
 */
export function drawPoint( point ) {
  const path = new Path2D()
  const { x, y } = point
  path.arc( x, y, 2, 0, Math.PI * 2 )
  return path
}

export function renderPoint( point, canvas ) {
  const ctx = canvas.getContext( "2d" )
  const path = new Path2D()
  const { x, y } = point
  path.arc( x, y, 3, 0, Math.PI * 2 )

  ctx.fillStyle = "blue"
  ctx.fill( path )
}

export function renderPoints( points, canvas ) {
  points.map( point => renderPoint( point, canvas ) )
}

/**
 * Function
 */

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

export function bezierCurve( points, deltaT = 0.001 ) {
  if ( points.length <= 1 ) {
    return null
  }

  let path = new Path2D()

  const delta = deltaT < 1 ? deltaT : 1
  let allPoints = []
  const lastPoint = points[ points.length - 1 ]


  allPoints.push( points[ 0 ] )

  for ( let t = delta; t <= 1; t += delta ) {
    const point = bezier( points, t )
    allPoints.push( point )
  }

  allPoints.push( lastPoint )

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

export function getBizerCurveBounds( x0, y0, x1, y1, x2, y2, x3, y3 ) {
  const { pow, sqrt, min, max, abs } = Math

  var tvalues = new Array()
  var bounds = [ new Array(), new Array() ]
  var points = new Array()

  var a, b, c, t, t1, t2, b2ac, sqrtb2ac
  for ( var i = 0; i < 2; ++i ) {
    if ( i == 0 ) {
      b = 6 * x0 - 12 * x1 + 6 * x2
      a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3
      c = 3 * x1 - 3 * x0
    } else {
      b = 6 * y0 - 12 * y1 + 6 * y2
      a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3
      c = 3 * y1 - 3 * y0
    }

    if ( abs( a ) < 1e-12 ) {
      // Numerical robustness
      if ( abs( b ) < 1e-12 ) {
        // Numerical robustness
        continue
      }
      t = -c / b
      if ( 0 < t && t < 1 ) {
        tvalues.push( t )
      }
      continue
    }
    b2ac = b * b - 4 * c * a
    sqrtb2ac = sqrt( b2ac )
    if ( b2ac < 0 ) {
      continue
    }
    t1 = ( -b + sqrtb2ac ) / ( 2 * a )
    if ( 0 < t1 && t1 < 1 ) {
      tvalues.push( t1 )
    }
    t2 = ( -b - sqrtb2ac ) / ( 2 * a )
    if ( 0 < t2 && t2 < 1 ) {
      tvalues.push( t2 )
    }
  }

  var x,
    y,
    j = tvalues.length,
    jlen = j,
    mt
  while ( j-- ) {
    t = tvalues[ j ]
    mt = 1 - t
    x =
      mt * mt * mt * x0 +
      3 * mt * mt * t * x1 +
      3 * mt * t * t * x2 +
      t * t * t * x3
    bounds[ 0 ][ j ] = x

    y =
      mt * mt * mt * y0 +
      3 * mt * mt * t * y1 +
      3 * mt * t * t * y2 +
      t * t * t * y3
    bounds[ 1 ][ j ] = y
    points[ j ] = {
      X: x,
      Y: y
    }
  }

  tvalues[ jlen ] = 0
  tvalues[ jlen + 1 ] = 1
  points[ jlen ] = {
    X: x0,
    Y: y0
  }
  points[ jlen + 1 ] = {
    X: x3,
    Y: y3
  }
  bounds[ 0 ][ jlen ] = x0
  bounds[ 1 ][ jlen ] = y0
  bounds[ 0 ][ jlen + 1 ] = x3
  bounds[ 1 ][ jlen + 1 ] = y3
  tvalues.length = bounds[ 0 ].length = bounds[ 1 ].length = points.length =
    jlen + 2

  return {
    left   : min.apply( null, bounds[ 0 ] ),
    top    : min.apply( null, bounds[ 1 ] ),
    right  : max.apply( null, bounds[ 0 ] ),
    bottom : max.apply( null, bounds[ 1 ] ),
    points : points, // local extremes
    tvalues: tvalues // t values of local extremes
  }
}
