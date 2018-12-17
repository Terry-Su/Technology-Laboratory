import { bindActionCreators, createStore } from "redux"

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


const store = createStore( counter )

const increment = () => ( { type: 'INCREMENT' } )

const boundActionCreators = bindActionCreators( { increment }, store.dispatch )


// increment
console.log( 'state before', store.getState() )
boundActionCreators.increment()
console.log( 'state after', store.getState() )