
const CounterLikes = ({id, like, dislike, onLikeClickHandler, onDisClickHandler})=>{
   
    return(
        <div className = 'counter-like'>
            <h4>Like: {like}</h4>
            <h4>Dislike: {dislike}</h4>
            <button onClick = {()=>onLikeClickHandler(id)}>LIKE</button>
            <button onClick = {()=>onDisClickHandler(id)}>DISLIKE</button>
        </div>
    )
}

export default CounterLikes;