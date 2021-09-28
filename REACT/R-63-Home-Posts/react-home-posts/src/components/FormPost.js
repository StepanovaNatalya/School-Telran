import { useState} from 'react'
import * as Actions from './../store/actionsType'
import { connect } from "react-redux"

const FormPost = ({addPost})=>{
    const [inputTitle, setInputTitle] = useState('')
    const [inputText, setInputText] = useState('')
    const [inputName, setInputName] = useState('')

    const onChangeHandler = ({target})=>{
        setInputTitle(target.value)
        setInputText(target.value)
        setInputName(target.value)
    }

    return(
        <>
          <input type = 'text'
                  value = {inputTitle}
                  onChange = {onChangeHandler}/><br/>
           <input type = 'text'
                  value = {inputText}
                  onChange = {onChangeHandler}/><br/>
           <input type = 'text'
                  value = {inputName}
                  onChange = {onChangeHandler}/><br/>
           <button onClick = {()=>addPost(inputTitle,inputText,inputName)}>Add post</button>        
        </>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        addPost: (post)=> dispatch({type: Actions.ADD_TITLE, payload:{post}}),
        addPost: (post)=> dispatch({type: Actions.ADD_TEXT, payload:{post}}),
        addPost: (post)=> dispatch({type: Actions.ADD_NAME, payload:{post}})
    }
}

export default connect(null, mapDispatchToProps)(FormPost)