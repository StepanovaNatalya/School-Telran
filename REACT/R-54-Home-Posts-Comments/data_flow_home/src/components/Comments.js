import React from "react";
import Comment from "./Comment";
// import classes from './Comment.module.css'

const Comments = ({comments}) =>{
    return(
       <ul className = 'comment'>
           {
               comments.map(comment =>(
                   <li key = {comment.id}>
                       {<Comment comment = {comment}/>}
                   </li>
               ))
           }
       </ul>)}



export default Comments