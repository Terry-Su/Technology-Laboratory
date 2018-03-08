export default function ( P0, P1, P2, P3, t ) {
  const A = getPointOnLine( P0, P1, t )
  const B = getPointOnLine( P1, P2, t )
  const C = getPointOnLine( P2, P3, t )
  
  // Point on AB
  const D = getPointOnLine( A, B, t )
  const F = getPointOnLine( B, C, t )

  // Point on DB

  const PFinal = getPointOnLine( D, F, t )

  return PFinal

  function getPointOnLine( Point1, Point2, t ) {
    const Point = {
      x: Point1.x + t * ( Point2.x - Point1.x ),
      y: Point1.y + t * ( Point2.y - Point1.y )
    }
    return Point
  }
}
