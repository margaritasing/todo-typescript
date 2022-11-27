/* import { useContext } from "react"
import { TodoContext } from '../context/TodoContext'; */
import { Todo } from "../interface/interface"
import { useTodos } from '../hooks/useTodos';


interface props {
    todo: Todo
}

export const TodoItem = ({todo}: props) => {

  const { toggleTodo } = useTodos();

/* const { toggleTodo } = useContext(TodoContext) */
/* 
const handleDbClick = () => {
  toggleTodo( todo.id )
} */


  return (
    <div>
        <li style={{
          cursor:'pointer',
          textDecoration:todo.completed ? 'line-through': ''
        }}
        onDoubleClick={() => toggleTodo(todo.id)}>
            {todo.desc}
        </li>
        
    </div>
  )
}
