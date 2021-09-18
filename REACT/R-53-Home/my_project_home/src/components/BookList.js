import Book from "./Book"
import '../css/BookList.css'



const BookList = ({ library }) => {
    return (
        <div className='book-list'>
            {library.map((book,index) => <Book
                key = {index}
                title={book.title}
                author={book.author}
                yearIssue={book.yearIssue}
                genre={book.genre}
                iNumber={book.iNumber}
                cover={book.cover} />)}

        </div>
    )
}

export default BookList