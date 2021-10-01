export default function BookFullInfo({book:{title, author, yearIssue, genre, cover}, closeClickHandler}){
    return(
        <div className = 'full-info'>
            <img src= {cover} alt = {title}/>
            <h2>{title}</h2>
            <h5>{author}</h5>
            <p>Genre: {genre}, years of issue:{yearIssue}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nobis officiis temporibus nihil aliquam facere, voluptates commodi quos, placeat pariatur neque minus animi est voluptas nesciunt veritatis? Sunt cumque porro labore officiis velit, in modi. Voluptatum voluptate earum ratione deleniti consequatur praesentium molestiae! Earum molestiae tenetur ea quidem soluta numquam.</p>
            <button onClick = {closeClickHandler}>close</button>
        </div>
    )
}