import React from "react";



const ToDoItemsButtons = () => {

    const clickCompletedHandle = event => {
        event.preventDefault()
    }
    const clickDeleteHandle = event => {
        event.preventDefault()
    }
    return (
        <div>
            <button
                onClick={clickCompletedHandle}
                className="btn btn-outline-primary btn-sm mx-2">
                <i className="bi bi-check2-square"></i> Check
            </button>

            <button
                onClick={clickDeleteHandle}
                className="btn btn-outline-danger btn-sm">
                <i className="bi bi-trash"></i> Delete
            </button>
        </div>
    )
}

export default ToDoItemsButtons