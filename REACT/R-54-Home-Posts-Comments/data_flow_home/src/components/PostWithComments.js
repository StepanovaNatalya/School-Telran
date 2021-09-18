import Comments from "./Comments"


const PostWithComments = ({post, showComment})=>{
    return(
        <div className = 'post-comment'>
            <h3>{post.author}</h3>      
            <p>{post.date}</p>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Comments comments = {post.comments}/>
            {/* <NewComments postId = {post.postId}/> */}
            
            <button onClick= {showComment}>Add comment</button>
        </div>
    )
}

export default PostWithComments