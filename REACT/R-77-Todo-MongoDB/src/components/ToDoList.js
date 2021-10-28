import React, {useEffect} from 'react'
import ToDoItem from "./ToDoItem";
import { useSelector } from 'react-redux';
import { todoSelector } from '../store/todoReducer/TodoReducer';

const ToDoList = () => {

    const todos = useSelector(todoSelector)

    return (
        <ul className="list-group">
            {todos.map(t=> {
                return (<ToDoItem key={t.id} todo={t}/>)
            })}
        </ul>
    )
}


export default ToDoList