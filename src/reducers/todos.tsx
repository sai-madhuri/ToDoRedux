const initialState = {
    todos : [],
    displayList : true
};

const todos = (state= initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
            ...state,
            todos : state.todos.concat(action.todo)
        }
   
    case 'TOGGLE_STATE' :
        return state.todos.map(todo =>
            todo.id === action.id ? { ...todo, completed: !todo.completed } : todo 
          )
          
    // case 'ALL_TODOS' :
    //     return todos

    // case 'ACTIVE_TODOS' :
    //     return todos.filter(todo => todo.completed)

    // case 'COMPLETED_TODOS' :
    //     return todos.filter(todo => todo.completed)

    //  case 'GET_TODOS' :
    //      return [...state]

     //         {
    //           id : action.id,
    //           text : action.text,
    //           completed : false
    // }
        
  //   AddToDo(action.id,action.text,false)

      default:
        return state
    }
  }
  export default todos