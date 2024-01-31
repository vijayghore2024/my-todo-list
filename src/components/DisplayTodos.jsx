import React, { useContext, useState } from 'react'
import Todo from './Todo'
import { TodoContext } from '../TodoContext'

const DisplayTodos = () => {

  const { myTodos, setMyTodos } = useContext(TodoContext);

  return (
    <>
    <h1 className='my-3'>{(myTodos.length == 0) ? 'No Todos to display' : ''}</h1>
    
    <div className='row row-cols-4 my-4 justify-content-center'>

      {myTodos.map(mytodo => <Todo key={mytodo.id} todo={mytodo} />)}

    </div>
    </>
  )
}

export default DisplayTodos
