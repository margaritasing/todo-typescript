import { Todo, TodoState } from '../interface/interface';

type TodoAction = 
    | { type: 'addTodo', payload: Todo} 
    | { type: 'toogleTodo', payload: { id:string }} 


export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {


    switch (action.type) {
        case 'addTodo':
            return {
                ...state,  
                todos:[...state.todos, action.payload]
            }
            
    
        default:
            return state;
    }
  
}
