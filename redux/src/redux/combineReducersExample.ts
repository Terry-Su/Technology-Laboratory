import { combineReducers } from "redux"

function visibilityFilter( state = "SHOW_ALL", action ) {
  switch ( action.type ) {
    case "SET_VISIBILITY_FILTER":
      return action.filter
    default:
      return state
  }
}

function todos( state = [], action ) {
  switch ( action.type ) {
    case "ADD_TODO":
      return state.concat( { text: action.text, completed: false } )
    case 'TOOGLE_TODO':
      return state.map( ( todo, index ) => index === action.index ? { ...todo, completed: !todo.completed } : todo )
    default:
      return state
  }
}

const todoApp = combineReducers( { todos, visibilityFilter } )