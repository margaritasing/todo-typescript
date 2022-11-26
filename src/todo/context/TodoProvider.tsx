import { TodoContext } from "./TodoContext"
import { TodoState } from '../interface/interface';
import { useReducer } from "react";
import { todoReducer } from './todoReducer';


const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos:[
        {
            id:'1',
            desc:'Recolectar las piedras del infinito',
            completed: false
        },
        {
            id:'2',
            desc:'Prueba- ejemplo',
            completed: false
        }
    ],
    completed: 0,
    pending: 2
}

interface props {
    children: JSX.Element | JSX.Element[]
}


export const TodoProvider = ({children}: props) => {

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)


  return (
    <TodoContext.Provider value={{ todoState }}>
        { children }
    </TodoContext.Provider>
  )
}
