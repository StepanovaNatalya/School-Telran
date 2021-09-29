import { useState } from "react"
import { ADD_TODO } from "../store/actionsType"
import { connect } from "react-redux"
import * as Actions from './../../store/todo/ActionCreator'

const Header = ({addTodo})=>{
    const [input, setInput] = useState('')

    const onChangeHandler = ({target})=>{
        setInput(target.value)
    }
    return(
        <>
        <input type = 'text'
               value = {input}
               onChange = {onChangeHandler}/>
               <button onClick = {()=>addTodo(input)}>Add todo</button>
               </>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        addTodo: (text)=> dispatch({type: ADD_TODO, payload:{text}})
    }
}

export default connect(null, mapDispatchToProps)(Header)