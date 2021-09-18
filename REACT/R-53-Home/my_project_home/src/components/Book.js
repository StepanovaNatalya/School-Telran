import '../css/Book.css'
import Counter from './CounterF'

export default function Book({cover,title,author,yearIssue,genre}){
    return(
        <div className = 'book'>
            <img src= {cover} alt = {title}/>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>years of issue:{yearIssue}, {genre}</p>
            <Counter />
        </div>
    )
}