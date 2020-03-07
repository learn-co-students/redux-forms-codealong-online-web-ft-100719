export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      console.log("reducer received this action:", action);
      console.log("Here is your new list of Todos:", state.todos)
      return {
        ...state,
        todos:[ ...state.todos, action.payload.text]
      }
      
    default:
      return state;
  }
  
}
