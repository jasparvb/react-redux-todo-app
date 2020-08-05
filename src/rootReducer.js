const INITIAL_STATE = {todos: []};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [ ...state.todos, { ...action.todo }] };

    case "DELETE_TODO":
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.id)};

    default:
      return state;
  }
}

export default rootReducer;
