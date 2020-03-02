export default function manageTodo(state = {
  todos: [],
}, action) {
  switch(action.type){
    case "ADD_TODO":
      console.log({todos: state.todos.concat(action.payload.todo)})
      return {
        ...state,
        todos: [...state.todos, action.payload.todo]
      }

    default:
      return state
  }
}
