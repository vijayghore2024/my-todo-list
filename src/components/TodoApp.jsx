import React from 'react'
import AddTodo from './AddTodo'
import DisplayTodos from './DisplayTodos'

const TodoApp = () => {
  return (
    <div className='container'>
      <h2 className='text-center'>TodoApp</h2>
      <AddTodo />
      <DisplayTodos />
    </div>
  )
}

export default TodoApp
