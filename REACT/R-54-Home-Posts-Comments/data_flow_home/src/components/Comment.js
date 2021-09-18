const Comment = ({comment}) =>{
    return(
        <div className = 'comment'>
            <h2>{comment.author}</h2>
            <p>{comment.text}</p>
        </div>
    )
}

export default Comment