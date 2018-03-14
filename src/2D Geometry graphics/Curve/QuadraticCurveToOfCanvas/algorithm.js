export default function( points ) {
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
