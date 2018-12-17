import { createStore } from "redux"

const INCREMENT = { type: 'INCREMENT' }

function count( state = 0, action ) {
  switch( action.type ) {
      case 'INCREMENT':
          return state + 1
      default: 
        return state
  }
}

// dispatch
// 此处开始引入redux
const store = createStore( count )
console.log( store )
console.log( store.getState() )  // 0
store.dispatch( INCREMENT )
console.log( store.getState() ) // 1