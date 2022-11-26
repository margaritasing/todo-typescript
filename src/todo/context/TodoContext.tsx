import {createContext } from "react"
import { TodoState } from '../interface/interface';

export interface TodoContextProps  {
    todoState: TodoState,
    toggleTodo: ( id: string ) => void;
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps) /* Se le pasa un objeto vacio */
