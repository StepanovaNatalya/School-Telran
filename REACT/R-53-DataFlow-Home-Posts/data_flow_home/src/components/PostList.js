import Post from "./Post";
import '../css/PostList.css'

const PostList = ({posts, onLikeClickHandler, onDisClickHandler})=>{
    return(
        <div className = 'posts-list'>
            {posts.map((post)=>
            <Post
            key = {post.id}
            post = {post}
            onLikeClickHandler = {onLikeClickHandler}
            onDisClickHandler = {onDisClickHandler}
            />)}
        </div>
    )
}

export default PostList