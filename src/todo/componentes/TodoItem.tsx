import { useContext } from "react"
import { Todo } from "../interface/interface"
import { TodoContext } from '../context/TodoContext';


interface props {
    todo: Todo
}

export const TodoItem = ({todo}: props) => {

const { toggleTodo } = useContext(TodoContext)

const handleDbClick = () => {
  toggleTodo( todo.id )
}


  return (
    <div>
        <li style={{
          cursor:'pointer',
          textDecoration:todo.completed ? 'line-through': ''
        }}
        onDoubleClick={handleDbClick}>
            {todo.desc}
        </li>
        
    </div>
  )
}
