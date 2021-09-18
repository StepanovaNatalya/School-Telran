import { useState, useContext } from "react"
import { PostContext } from "./Main"

const getClearComment = () =>{
    return{
        name: '',
        text: '',
        note: 0
    }
}

const NewComment = ({postId})=>{
    const context = useContext(PostContext)
    const [comment, setComment] = useState(getClearComment())

    const onChangeHandler = event =>{
        setComment ((comment)=>{
            return {...comment, [event.target.name]:event.target.value}
        })
    }

    const onClickHandler = ()=>{
        if(comment.name.trim() === '' || comment.text ==) 
    }
}