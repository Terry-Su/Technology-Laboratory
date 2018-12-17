import { createStore, applyMiddleware } from "redux"

function counter( state = 0, action ) {
  switch ( action.type ) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    default:
      return state
  }
}

function logMiddleWare1( { getState } ) {
  return next => action => {
    console.log( "will dispatch1", action )

    const returnValue = next( action )

    console.log( "state after dispatch1", getState() )

    return returnValue
  }
}

function logMiddleWare2( { getState } ) {
  return next => action => {
    console.log( "will dispatch2", action )

    const returnValue = next( action )

    console.log( "state after dispatch2", getState() )

    return returnValue
  }
}

let store = createStore( counter, 0,applyMiddleware( logMiddleWare1, logMiddleWare2 ) )

// store.subscribe( () => console.log( store.getState() ) )

store.dispatch( { type: "INCREMENT" } )
// store.dispatch( { type: "INCREMENT" } )
// store.dispatch( { type: "DECREMENT" } )
