import * as PIXI from "pixi.js"

const catSrc = "http://localhost:3000/Library/Pixi/Experiment/images/cat.png"

let app = new PIXI.Application( {
  width      : 256,
  height     : 256,
  antialias  : true,
  transparent: false,
  resolution : 1
} )
document.body.appendChild( app.view )

PIXI.loader.add( catSrc ).load( setup )

function setup() {
  let cat = new PIXI.Sprite( PIXI.loader.resources[ catSrc ].texture )

	cat.pivot.set( 0, 0 )

  app.stage.addChild( cat )
}
