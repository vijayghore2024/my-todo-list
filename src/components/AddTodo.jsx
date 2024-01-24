import React from 'react'

const AddTodo = () => {
    return (
        <div className="container p-5 border border-2 border-primary rounded-4">
            <div className="row justify-content-center">
                <div className="col-4">
                    <input type="text" className="form-control fs-3 border border-dark" placeholder="Enter your todo here" aria-label="todo" />
                </div>
                <div className="col-2">
                    <button className='btn btn-primary'>Add Todo</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo
