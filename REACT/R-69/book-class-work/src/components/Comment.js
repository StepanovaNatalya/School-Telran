

const Comment = ({comment})=>{
    return(
        <div className = 'card border-0'>
             <div className= 'card-body'>
                  <h4 className='card-title'>comment by: {comment.name} </h4>
                  <p className= 'card-text'>{comment.text}</p>
                  <p className= 'card-text'>{comment.note}</p>
             </div>
             <hr/>
        </div>
    )
}

export default Comment