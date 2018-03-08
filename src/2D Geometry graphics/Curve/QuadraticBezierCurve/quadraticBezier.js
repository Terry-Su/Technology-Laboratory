export default function( P0, P1, P2, t ) {
  const A = {
    x: P0.x + t * ( P1.x - P0.x ),
    y: P0.y + t * ( P1.y - P0.y )
  }

  const B = {
    x: P1.x + t * ( P2.x - P1.x ),
    y: P1.y + t * ( P2.y - P1.y )
  }

  const PFinal = {
    x: A.x + t * ( B.x - A.x ),
    y: A.y + t * ( B.y - A.y )
  }

  return PFinal
}
