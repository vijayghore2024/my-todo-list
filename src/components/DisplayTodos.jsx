import React, { useState } from 'react'
import Todo from './Todo'

const DisplayTodos = () => {

  const [myTodos, setMyTodos] = useState([
    {
      id: 1,
      title: "Goto Market"
    },
    {
      id: 2,
      title: "Buy Some Books"
    },
    {
      id: 3,
      title: "Prepare for interview"
    },
    {
      id: 4,
      title: "Todo 4"
    },
    {
      id: 5,
      title: "Todo 5"
    },
   

  ])



  return (
    <div className='row row-cols-4 my-4 justify-content-center'>

      {
        myTodos.map(mytodo => <Todo todo={mytodo} />)
      }
      
    </div>
  )
}

export default DisplayTodos
