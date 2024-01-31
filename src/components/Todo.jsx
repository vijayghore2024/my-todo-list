import React, { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext';

const Todo = (props) => {

    const {myTodos, setMyTodos} = useContext(TodoContext);
    const [localStatus, setLocalStatus] = useState(props.todo.status);

    const changeStatus = () => {

        if(localStatus === true){
            if(window.confirm("Do you really want to mark todo as incomplete?")){
                setLocalStatus(!localStatus)
            }
        }else{
            setLocalStatus(!localStatus)
        }

        let tasks = myTodos;
        let index = tasks.findIndex(task => task.id === props.todo.id)
        tasks[index].status = localStatus;
        setMyTodos([...tasks]);
    }

    const deleteTodo = () => {
        const newTodos = myTodos.filter(task => task.id !== props.todo.id)
        setMyTodos([...newTodos]);
    }

    return (
        <div className={`bg-success card col m-1 border border-2 bg-${localStatus? `success`: `danger`}`}>
            <div className="card-body">
                <h5 className="card-title">{props.todo.title}</h5>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={changeStatus}> {localStatus? '❌': '✅'}   </button>
                    <button className="btn btn-warning" onClick={deleteTodo}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Todo
