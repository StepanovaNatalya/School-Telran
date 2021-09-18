import '../css/Post.css';
import { PostContext } from './Main';

export default function Post({post}){
    
    return(
        <PostContext.Consumer>{
            cnt =>{
                return(
        <div className = 'post' onClick = {()=>cnt.changeCurrentPost(post.postId)}>
            <h3>{post.author}</h3>
            <h4>{post.date}</h4>
            <h2>{post.title}</h2>
            <p>{post.shortDesc}</p>
            <p>Comments: {post.comments}</p>
        </div>)}}
        </PostContext.Consumer>
    )
}