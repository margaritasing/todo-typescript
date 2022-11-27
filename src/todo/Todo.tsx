import { Title } from './componentes/Title'
import TodoList from './componentes/TodoList'
import { TodoProvider } from './context/TodoProvider'

export const Todo = () => {
  return (
    <TodoProvider>
        <Title/>
        <TodoList/>       
    </TodoProvider>
  )
}
