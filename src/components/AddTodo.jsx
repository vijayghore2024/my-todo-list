import React, { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext'

const AddTodo = () => {

    const { myTodos, setMyTodos } = useContext(TodoContext);

    const [userInpTodo, setUserInpTodo] = useState('')

    const addTodo = () => {
        // add todo in arry
        let todo = {
            // id: myTodos.length + 1,
            id: (myTodos.length === 0 )? 1: myTodos[myTodos.length - 1].id + 1,
            title: userInpTodo,
            status: false
        }
        setMyTodos([...myTodos, todo])
        setUserInpTodo('');
    }

    return (
        <div className="container p-5 border border-2 border-primary rounded-4">
            <div className="row justify-content-center">
                <div className="col-4">
                    <input type="text" className="form-control fs-4 border border-dark" placeholder="Enter your todo here" aria-label="todo" onChange={(e) => setUserInpTodo(e.target.value)} value={userInpTodo} />
                </div>
                <div className="col-2">
                    <button className='btn btn-primary btn-lg' onClick={addTodo}>Add Todo</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo
