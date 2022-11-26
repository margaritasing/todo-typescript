import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';


const TodoList = () => {

    const { todoState } = useContext(TodoContext);
    const { todos } = todoState;


  return (
    <>
        <ul>
            {todos.map( todo => todo.desc )}
        </ul>
   
    </>
  )
}

export default TodoList