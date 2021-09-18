import Book from "./Book"
import '../css/BookList.css'



const BookList = ({ library}) => {
    return (
        <div className='book-list'>
            {library.map((book) => 
            <Book
                key={book.id}
                book={book}
                 />)}

        </div>
    )
}

export default BookList