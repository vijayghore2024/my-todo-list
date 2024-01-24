import React from 'react'

const Todo = (props) => {
    return (
        <div className="card col m-1">
            <div className="card-body">
                <h5 className="card-title">{props.todo.title}</h5>
                <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-primary">Complete</a>
                    <a href="#" className="btn btn-danger">Delete</a>
                </div>
            </div>
        </div>
    )
}

export default Todo
