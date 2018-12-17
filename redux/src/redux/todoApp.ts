const targetState = {
  todos: [
    {
      text     : "Eat food",
      completed: true
    },
    {
      text     : "Exercise",
      completed: false
    }
  ],
  visibilityFilter: "SHOW_COMPLETED"
}

const targetActions = [
  { type: "ADD_TODO", text: "Go to swimming pool" },
  { type: "TOGGLE_TODO", index: 1 },
  { type: "SET_VISIBILITY_FILTER", filter: "SHOW_ALL" }
]


// # reducers
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

function todoApp( state: any = {}, action ) {
  return {
    todos           : todos( state.todos, action ),
    visibilityFilter: visibilityFilter( state.visibilityFilter, action )
  }
}