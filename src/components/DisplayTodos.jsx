import React, { useContext, useState } from 'react'
import Todo from './Todo'
import { TodoContext } from '../TodoContext'

const DisplayTodos = () => {

  const { myTodos, setMyTodos } = useContext(TodoContext);

  return (
    <div className='row row-cols-4 my-4 justify-content-center'>

      {
        myTodos.map(mytodo => <Todo todo={mytodo} />)
      }

    </div>
  )
}

export default DisplayTodos
