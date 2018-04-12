

 var canvas = document.getElementById( 'canvas' )
 var ctx = canvas.getContext( '2d' )
 

 var canvas2 = document.createElement( 'canvas' )
 canvas2.width = 150
 canvas2.height = 150
 var ctx2 = canvas2.getContext( '2d' )
 

 ctx2.beginPath()
 ctx2.strokeStyle = 'red'
 ctx2.lineWidth = 4
 ctx2.moveTo( 10,10 )
 ctx2.lineTo( 10,30 )
 ctx2.lineTo( 30,30 )
 ctx2.lineTo( 40,70 )
 ctx2.quadraticCurveTo( 72,43,22,12 )
 ctx2.quadraticCurveTo( 12,43,12,102 )
 ctx2.stroke()
 


// ctx.beginPath()
// ctx.strokeStyle = 'red'
// ctx.lineWidth = 4
// ctx.moveTo( 10,10 )
// ctx.lineTo( 10,30 )
// ctx.lineTo( 30,30 )
// ctx.lineTo( 40,70 )
// ctx.quadraticCurveTo( 72,43,22,12 )
// ctx.quadraticCurveTo( 12,43,12,102 )
// ctx.stroke()

ctx.drawImage( canvas2, 0, 0 )