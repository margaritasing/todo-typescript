import { Todo } from "../interface/interface"

interface props {
    todo: Todo
}

export const TodoItem = ({todo}: props) => {

    const handleDbClick = () => {
        
    }


  return (
    <div>
        <li onDoubleClick={handleDbClick}>
            {todo.desc}
        </li>
        
    </div>
  )
}
