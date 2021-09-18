export default function BookFullInfo({book:{ title, author, yearIssue, genre, cover}, closeClickHandler}){
    return(
        <div className = 'full-info'>
            <img src= {cover} alt = {title}/>
            <h2>{title}</h2>
            <p>{yearIssue}{genre}</p>
            <h5>{author}</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus corrupti nulla harum pariatur modi eveniet nostrum repellat nihil quam culpa tempora maiores obcaecati, nisi ducimus perferendis deleniti. Eius ex eum facilis dicta molestiae ratione sunt quaerat est earum itaque enim dolores cum harum beatae ducimus, praesentium repellat a, incidunt provident.</p>
            <button onClick = {closeClickHandler}>close</button>
        </div>
    )
}