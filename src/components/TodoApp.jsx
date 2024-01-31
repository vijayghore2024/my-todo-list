import React, { useContext } from 'react'
import AddTodo from './AddTodo'
import DisplayTodos from './DisplayTodos'
import { TodoContext } from '../TodoContext'

const TodoApp = () => {

  const {mode} = useContext(TodoContext);

  return (
    <div className={`vh-100 container text-${mode? 'dark':'light'}`}>
      <h2 className='text-center my-4'>TodoApp</h2>
      <AddTodo />
      <DisplayTodos />
    </div>
  )
}

export default TodoApp
