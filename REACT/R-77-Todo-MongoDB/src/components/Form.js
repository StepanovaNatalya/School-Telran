import React from 'react'
import { useForm } from "react-cool-form"
import Field from "./Field";
import {useDispatch} from 'react-redux'
import { addTodo } from '../store/todoReducer/TodoReducer';


const Form = () => {

    const dispatch = useDispatch()
    const {form, use} = useForm({
        defaultValues: {title: '', completed: false},
        onSubmit: (values, {reset}) => {
            values.id = Date.now()
            dispatch(addTodo(values))
            //addToDoItem(values)
            reset()
        }
    })

    const errors = use("errors")

    return (
        <form ref={form} className="w-50 mx-auto" noValidate>
            <Field
                label="Enter New Item"
                name="title"
                id="title"
                type="text"
                required
                error={errors.title}
            />
        </form>
    )
}

export default Form