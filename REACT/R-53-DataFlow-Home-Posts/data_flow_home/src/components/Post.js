import '../css/Post.css';
import CounterLikes from './CounterLikes'

export default function Post({post: {id, title,text,author,date, like, dislike}, onDisClickHandler, onLikeClickHandler}){
    
    return(
        <div className = 'post'>
            <h3>{title}</h3>
            <h4>{text}</h4>
            <h5>{author}, {date}</h5>
            <CounterLikes id = {id}
                          like = {like}
                          dislike = {dislike}
                          onLikeClickHandler = {onLikeClickHandler}
                          onDisClickHandler = {onDisClickHandler}/>
        </div>
    )
}