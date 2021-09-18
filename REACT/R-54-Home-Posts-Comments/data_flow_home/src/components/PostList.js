import Post from "./Post";
import '../css/PostList.css'

const PostList = ({posts})=>{
    return(
        <div className = 'posts-list'>
            {posts.map((post)=>
            <Post
            key = {post.postId}
            post = {post}
            />)}
        </div>
    )
}

export default PostList