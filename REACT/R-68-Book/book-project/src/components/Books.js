import {connect} from 'react-redux'
import Book from "./Book"

const Books = ({books, currentBook}) =>{
    return(
        <div>
            <h1>All books</h1>
            <div>
                {books.map(book=>
                    <Book key={book.id} book={book} currentBook = {currentBook}/>
                    )}
            </div>
        </div>
    )
}

const mapStateToProps =({BookReducer})=>{
        return{
            books: BookReducer.books,
            currentBook: BookReducer.currentBook
        }
}

/* const mapDispatchToProps=dispatch=>{
       return{

       }
} */

export default connect(mapStateToProps, null)(Books)