import React from 'react'
import { TodoProvider } from './context/TodoProvider'

export const Todo = () => {
  return (
    <TodoProvider>
        <h1>Todo: </h1>
        <ul>
            <li>todo 1</li>
            <li>todo 2</li>
            <li>todo 3</li>
        </ul>    
    </TodoProvider>
  )
}
